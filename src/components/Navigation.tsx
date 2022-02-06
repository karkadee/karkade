import Link from "next/link";
import React, { useEffect, useState } from "react";
import productCategories from "../tests/productCategories";

function Navigation() {
    const [showCats, setShowCats] = useState(true);

    const transitionNavBar = () => {
        if(window.scrollY > 300){
            setShowCats(false);
        }else{
            setShowCats(true);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    const search = (e: any) => {
        e.preventDefault();
    }

    return (
        <nav className="w-full fixed top-0 left-0 z-10">
            <div className="w-full flex flex-col ss:flex-row items-center justify-between px-2 lg:px-20 py-3 bg-white">
                <div className="mb-2 ss:mb-0 mr-2 lg:mr-0">
                    <button className="outline-green-600 p-1">
                        <Link href="/">
                            <h1>Karkadē</h1>
                        </Link>
                    </button>
                </div>

                <form className="hidden sm:flex h-8 flex-1 max-w-[400px] rounded-md">
                    <input 
                        className="rounded-l-md hidden sm:block w-full h-full outline-green-600"
                        placeholder="meklēt"
                    />

                    <button 
                        className="outline-green-600 p-1 h-full w-20 flex items-center justify-center bg-green-600 rounded-r-md"
                        onClick={(e) => search(e)}
                    >
                        <img 
                            className="w-5"
                            src="/svg/search.svg" 
                            alt="search" 
                        />
                    </button>
                </form>
                

                <div className="justify-between flex items-center ss:justify-start ml-2 lg:ml-0">
                    <button className="mr-1 sm:mr-4 outline-green-600 p-1">
                        <Link href="/">
                            <p className="font-bold">Sākums</p>
                        </Link>
                    </button>

                    <button className="outline-green-600 p-1 sm:hidden">
                        <Link href="/search">
                            <div className="flex mr-1">
                                <img 
                                    className="w-5"
                                    src="/svg/search.svg" 
                                    alt="search" 
                                />

                                <p className="font-bold">Meklēt</p>
                            </div>
                        </Link>
                    </button>

                    <button className="outline-green-600 p-1">
                        <Link href="/cart">
                            <div className="flex">
                                <img 
                                    className="w-5 hidden sm:block"
                                    src="/svg/cart.svg" 
                                    alt="shopping cart" 
                                />
                                
                                <p className="font-bold block sm:block">Grozs</p>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>

            <div className={`hidden md:flex w-full flex-col ss:flex-row items-center justify-center px-2 sm:px-10 py-1 bg-white transition-opacity duration-300 ${showCats ? "opacity-1" : "opacity-0"}`}>
                {
                    productCategories.map((cat, i) => {
                        return (
                            <button 
                                key={i}
                                className={`outline-green-600 p-1 ${productCategories.length - 1 === i ? "" : "mr-4"}`}
                            >
                                <p className="font-bold hover:text-green-700 transition-colors duration-150">{cat.text}</p>
                            </button>
                        )
                    })
                }
            </div>
        </nav>
    );
}

export default Navigation;
