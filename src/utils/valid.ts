const valid = (name: string, email: string, password: string) => {
    if(!name || !email || !password)
        return "Please fill in all fields."

    if(name.length > 50){
        return "Your name can't be that long."
    }

    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(name)){
        return "Name can't contain special characters";
    }

    if(!validateEmail(email)){
        return "Invalid email."
    }

    if(password.length < 6){
        return "Password must be at least 6 characters."
    }

    return null;
}

const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid;

export {
    validateEmail,
};