import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AuthorizationForm: React.FC = () => {
    const router = useRouter();

    const [type] = useState(router.pathname);

    return (
        <div className="flex items-center justify-center w-full p-0 h-full">
            <form className="w-11/12 max-w-[320px] bg-white flex flex-col items-center rounded-lg py-4 px-4">
                <h2 className="mb-4">{type === "/auth/login" ? "Ieiet" : "Reģistrēties"}</h2>

                {
                    type === "/auth/register" && (
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-1">Vārds</label>

                            <input 
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

                <div className="flex flex-row w-full justify-between">
                    <button 
                        className="outline-green-600 py-1 px-6 rounded-md bg-green-600 text-white hover:bg-green-700"
                        type="submit"
                    >{type === "/auth/login" ? "Ieiet" : "Reģistrēties"}</button>

                    <div className="flex items-center">
                        <p>{type === "/auth/login" ? "Nav konta?" : "Jau ir konts?"}</p>

                        <button>
                            <Link href={type === "/auth/login" ? "/auth/register" : "/auth/login"}>
                                <p>{type === "/auth/login" ? "Reģistrējies" : "Ielogojies"}</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AuthorizationForm;
