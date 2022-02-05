import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2">
        <div className="w-60 mr-8">
            <button className="outline-green-600 p-1">
                <Link href="/">
                    <h1>Karkadē</h1>
                </Link>
            </button>
        </div>

        <input 
            className="h-8 flex-1 outline-green-600"
            placeholder="meklēt"
        />

        <div className="ml-8 w-60 flex items-center justify-start">
            <button className="mr-4 outline-green-600 p-1">
                <Link href="/">
                    <p className="font-bold">Sākums</p>
                </Link>
            </button>

            <button className="outline-green-600 p-1">
                <Link href="/cart">
                    <p className="font-bold">Grozs</p>
                </Link>
            </button>
        </div>
    </nav>
  );
}

export default Navigation;
