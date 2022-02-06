import { useRouter } from "next/router";
import React, { useState } from "react";

const AuthorizationForm: React.FC = () => {
    const router = useRouter();

    const [type] = useState(router.pathname);

    return (
        <div className="h-full flex items-center justify-center w-full">
            <form className="w-80 bg-white flex flex-col items-center rounded-md py-4 px-4">
                <h2 className="mb-4">{type === "/auth/login" ? "Ieiet" : "Reģistrēties"}</h2>

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">Epasts</label>

                    <input 
                        className="h-8"                        
                        type="text" 
                        placeholder="epasts"
                        name="email" 
                        id="email" 
                    />
                </div>

                <div className="flex flex-col w-full mb-4">
                    <label className="mb-1">Parole</label>

                    <input 
                        className="h-8"                        
                        type="text" 
                        placeholder="parole"
                        name="password" 
                        id="password" 
                    />
                </div>

                <button 
                    type="submit"
                >{type === "/auth/login" ? "Ieiet" : "Reģistrēties"}</button>
            </form>
        </div>
    );
}

export default AuthorizationForm;
