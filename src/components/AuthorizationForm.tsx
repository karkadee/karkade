import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AuthorizationForm: React.FC = () => {
    const router = useRouter();

    const [type] = useState(router.pathname);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authorize = (e: any) => {
        e.preventDefault();
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
