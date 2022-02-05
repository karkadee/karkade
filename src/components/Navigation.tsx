import Link from "next/link";
import React, { useEffect, useState } from "react";
import productCategories from "../tests/productCategories";

function Navigation() {
    const [showCats, setShowCats] = useState(true);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShowCats(true);
        }else{
            setShowCats(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    console.log(showCats)
    
    return (
        <nav className="bg-white w-full">
            <div className="w-full flex flex-col ss:flex-row items-center justify-between px-2 sm:px-6 py-3">
                <div className="md:w-40 lg:w-60 mr-0 ss:mr-2 sm:mr-4 md:mr-8 mb-2 ss:mb-0">
                    <button className="outline-green-600 p-1">
                        <Link href="/">
                            <h1>Karkadē</h1>
                        </Link>
                    </button>
                </div>

                <div className="hidden sm:flex h-8 flex-1 rounded-md">
                    <input 
                        className="rounded-l-md hidden sm:block w-full h-full outline-green-600"
                        placeholder="meklēt"
                    />

                    <button className="outline-green-600 p-1 h-full w-20 flex items-center justify-center bg-green-600 rounded-r-md">
                        <img 
                            className="w-5"
                            src="/svg/search.svg" 
                            alt="search" 
                        />
                    </button>
                </div>
                

                <div className="justify-between ml-0 ss:ml-2 sm:ml-4 md:ml-8 w-full ss:w-52 sm:w-40 lg:w-60 flex items-center ss:justify-start">
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

            <div 
                className="hidden md:flex w-full flex-col ss:flex-row items-center justify-center px-2 sm:px-10 py-1"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
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
