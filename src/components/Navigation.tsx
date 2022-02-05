import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between px-2 sm:px-6 py-2">
        <div className="md:w-40 lg:w-60 mr-2 sm:mr-4 md:mr-8">
            <button className="outline-green-600 p-1">
                <Link href="/">
                    <h1>Karkadē</h1>
                </Link>
            </button>
        </div>

        <input 
            className="hidden sm:block h-8 flex-1 outline-green-600"
            placeholder="meklēt"
        />

        <div className="ml-2 sm:ml-4 md:ml-8 md:w-40 lg:w-60 flex items-center justify-start">
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
                    <p className="font-bold hidden sm:block">Grozs</p>
                </Link>

                <Link href="/cart">
                    <img 
                        className="w-6 block sm:hidden"
                        src="/svg/cart.svg" 
                        alt="shopping cart" 
                    />
                </Link>
            </button>
        </div>
    </nav>
  );
}

export default Navigation;
