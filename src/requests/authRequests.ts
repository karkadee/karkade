import axios from "axios";
import { SetStateAction } from "react";
import { Dispatch } from "redux";
import { setNotification } from "../redux/slices/notificationSlice";
import { loaded, login, logout, setToken, setUserInfo, User } from "../redux/slices/userSlice";
import valid from "../utils/valid";
import { ACCESS_TOKEN_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, USER_BASE, USER_INFO_ROUTE } from "./apiRoutes";

const register = async (name: string, email: string, password: string, phoneNumber: string, dispatch: any, navigation: any, loading: boolean, setLoading: React.Dispatch<SetStateAction<boolean>>) => {
    if(loading){
        return;
    }
    
    setLoading(true);

    const invalid = valid(name, email, password);
    if(invalid){
        setLoading(false);
        return dispatch(setNotification({type: "error", message: invalid}));
    }

    const data = {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber
    }

    await axios.post(REGISTER_ROUTE, data)
        .then(async (res) => {
            const rf_token = res.data.refresh_token;
            await localStorage.saveItem("rf_token", rf_token);

            console.log(rf_token)

            await getAccessToken(dispatch);
        }).catch(async (err) => {
            setLoading(false);
            const error: string = err?.response?.data?.err;
            if(!error){
                return dispatch(setNotification({type: "error", message: "Something went wrong"}));
            }

            if(error === "Invalid Authentication"){
                return await logoutUser(dispatch);
            }

            return dispatch(setNotification({type: "error", message: error}));
        })
}

const loginUser = async (email: string, password: string, dispatch: any, loading: boolean, setLoading: React.Dispatch<SetStateAction<boolean>>) => {
    if(loading || !email || !password){
        return;
    }
    
    setLoading(true);

    const data = {
        email: email,
        password: password
    }

    axios.post(LOGIN_ROUTE, data)
        .then(async (res) => {
            const rf_token = res.data.refresh_token;
            await localStorage.saveItem("rf_token", rf_token);

            await getAccessToken(dispatch);
        }).catch(async (err) => {
            setLoading(false);
            const error: string = err?.response?.data?.err;
            if(!error){
                return dispatch(setNotification({type: "error", message: "Something went wrong"}));
            }

            if(error === "Invalid Authentication"){
                return await logoutUser(dispatch);
            }

            return dispatch(setNotification({type: "error", message: error}));
        })
}

const getAccessToken = async (dispatch: Dispatch) => {
    const rf_token = localStorage.getItem("rf_token");
    console.log(rf_token)

    if(!rf_token){
        return dispatch(logout());
    }

    const headers = {
        headers: {
            Authorization: rf_token
        }
    }

    await axios.get(ACCESS_TOKEN_ROUTE, headers)
        .then(async (res) => {
            dispatch(setToken(res.data.access_token));
            dispatch(setUserInfo(res.data.user));
            dispatch(login());
        }).catch(async (err) => {
            dispatch(loaded());
            dispatch(logout());
        });
}

const getAllUsers = async (dispatch: Dispatch) => {
    await axios.get(USER_BASE)
        .catch(async (err) => {
            const error: string = err?.response?.data?.err;
            if(!error){
                return dispatch(setNotification({type: "error", message: "Something went wrong"}));
            }

            if(error === "Invalid Authentication"){
                return await logoutUser(dispatch);
            }

            return dispatch(setNotification({type: "error", message: error}));
        })
}

const updateProfile = async (name: string, username: string, phoneNumber: string, bio: string, token: string, userInfo: User | null, updating: boolean, dispatch: Dispatch, setUpdated: any, setUpdating: any) => {
    try{
        if(updating){
            return;
        }

        setUpdating(true);

        if(!userInfo){
            setUpdating(false);
            return dispatch(setNotification({type: "error", message: "Something went wrong"}));
        }
        
        if(username.length > 25){
            setUpdating(false);
            return dispatch(setNotification({type: "error", message: "Username can't be that long"}));
        }
    
        if(bio.length > 120){
            setUpdating(false);
            return dispatch(setNotification({type: "error", message: "Bio can't be that long"}));
        }
    
        let headers = {
            headers: {
                Authorization: token
            }
        }
    
        let newUserInfo: User = {
            name: name,
            email: userInfo.email,
            role: userInfo.role,
            password: userInfo.password,
            _id: userInfo._id,
            phoneNumber: userInfo.phoneNumber, 
            cart: userInfo.cart
        };
    
        let data = {};
    
        if(phoneNumber && phoneNumber !== userInfo.phoneNumber){
            Object.assign(data, {
                phoneNumber: phoneNumber
            });
    
            newUserInfo.phoneNumber = phoneNumber;
        }
    
        await axios.put(USER_INFO_ROUTE, data, headers)
            .then(async (res) => {
                dispatch(setNotification({type: "succecss", message: "Updated"}));
                dispatch(setUserInfo(newUserInfo));
                setUpdating(false);
                setUpdated(true);
            }).catch(async (err) => {
                setUpdating(false);
                const error: string = err?.response?.data?.err;
                if(!error){
                    return dispatch(setNotification({type: "error", message: "Something went wrong"}));
                }
    
                if(error === "Invalid Authentication"){
                    return await logoutUser(dispatch);
                }
    
                return dispatch(setNotification({type: "error", message: error}));
            })
    }catch(err){
        return dispatch(setNotification({type: "error", message: err}));
    }
}

const logoutUser = async (dispatch: Dispatch) => {
    dispatch(logout());
}

export {
    register,
    loginUser,
    getAccessToken,
    getAllUsers,
    updateProfile,
    logoutUser
}