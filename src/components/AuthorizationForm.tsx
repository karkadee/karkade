import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, register } from "../requests/authRequests";

const AuthorizationForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [type] = useState(router.pathname);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const authorize = (e: any) => {
        e.preventDefault();

        if(type === "/auth/register"){
            register(name, email, password, phoneNumber, dispatch, router, loading, setLoading);
        }else if(type === "/auth/login"){
            loginUser(name, password, dispatch, loading, setLoading);
        }
    }   

    return (
        <div className="flex items-center justify-center w-full p-0 h-full">
            <form className="w-11/12 max-w-[350px] bg-white flex flex-col items-center rounded-lg py-4 px-4">
                <h2 className="mb-4">{type === "/auth/login" ? "Ieiet" : "Reģistrēties"}</h2>

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Vārds</label>

                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-8"                        
                                type="text" 
                                placeholder="vārds"
                                name="name" 
                                id="name" 
                            />
                        </div>
                    )
                }

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">Epasts</label>

                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-8"                        
                        type="email" 
                        placeholder="epasts"
                        name="email" 
                        id="email" 
                    />
                </div>

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Telefona numurs</label>

                            <input 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="h-8"                        
                                type="text" 
                                placeholder="numurs"
                                name="phone" 
                                id="phone" 
                            />
                        </div>
                    )
                }

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">Parole</label>

                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-8"                        
                        type="password" 
                        placeholder="parole"
                        name="password" 
                        id="password" 
                    />
                </div>

                <div className="flex flex-row w-full justify-between">
                    <button 
                        onClick={(e) => authorize(e)}
                        className="outline-green-600 py-1 px-6 rounded-md bg-green-600 text-white hover:bg-green-700"
                        type="submit"
                    >{type === "/auth/login" ? "Ieiet" : "Reģistrēties"}</button>

                    <div className="flex items-center">
                        <p>{type === "/auth/login" ? "Nav konta?" : "Jau ir konts?"}</p>

                        <button>
                            <Link href={type === "/auth/login" ? "/auth/register" : "/auth/login"}>
                                <p className="text-green-600">{type === "/auth/login" ? "Reģistrējies" : "Ielogojies"}</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AuthorizationForm;
