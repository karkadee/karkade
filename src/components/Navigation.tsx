import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">
        <button>
            <Link href="/">
                <h1>Karkadē</h1>
            </Link>
        </button>

        <input 
            className="navigation__input"
        />

        <div className="navigation__links">
            <button>
                <Link href="/">
                    <p>Sākums</p>
                </Link>
            </button>

            <button>
                <Link href="/cart">
                    <p>Grozs</p>
                </Link>
            </button>
        </div>
    </nav>
  );
}

export default Navigation;
