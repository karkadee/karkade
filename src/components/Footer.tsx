import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-white mt-20 flex flex-col md:flex-row items-center md:items-start justify-center py-4 px-0 md:px-10 lg:px-20">
            <div className="md:mr-10 mb-4 pl-4 sm:pl-0 w-full sm:w-80 md:w-auto flex flex-col items-start">
                <strong>MŪSU KOMPĀNIJA</strong>

                <button>
                    <Link href="/about-us">
                        <p className="text-left">Par mums</p>
                    </Link>
                </button>

                <button>
                    <Link href="/shops">
                        <p className="text-left">Mūsu veikali</p>
                    </Link>
                </button>

                <button>
                    <Link href="/privacy-policy">
                        <p className="text-left">Privātuma politika</p>
                    </Link>
                </button>

                <button>
                    <Link href="/terms-of-use">
                        <p className="text-left">Lietošanas noteikumi un nosacījumi</p>
                    </Link>
                </button>

                <button>
                    <Link href="/legal-notice">
                        <p className="text-left">Juridisks paziņojums</p>
                    </Link>
                </button>

                <button>
                    <Link href="/contacts">
                        <p className="text-left">Kontakti</p>
                    </Link>
                </button>
            </div>

            <div className="md:mx-10 mb-4 pl-4 sm:pl-0 w-full sm:w-80 md:w-auto flex flex-col items-start">
                <strong>JŪSU PROFILS</strong>

                <button>
                    <Link href="/profile">
                        <p className="text-left">Personīgā informācija</p>
                    </Link>
                </button>

                <button>
                    <Link href="/orders">
                        <p className="text-left">Pasūtījumi</p>
                    </Link>
                </button>

                <button>
                    <Link href="/credit-slips">
                        <p className="text-left">Kredīta izraksti</p>
                    </Link>
                </button>
            </div>

            <div className="md:ml-10 mb-4 pl-4 sm:pl-0 w-full sm:w-80 md:w-auto flex flex-col items-start">
                <strong>VEIKALA INFORMĀCIJA</strong>

                <p className="text-left">Karkadē</p>

                <p className="text-left">SIA {`"Karkadē"`}</p>

                <p className="text-left">Tērbatas iela 19/21, Rīga, LV-1010</p>

                <p className="text-left">Reg.nr.50103327811</p>

                <p className="text-left">Telefona nr.: +37126621676</p>

                <p className="text-left">E-pasts: <a href="mailto: karkade@karkade.lv">karkade@karkade.lv</a></p>
            </div>
        </footer>
    );
}

export default Footer;
