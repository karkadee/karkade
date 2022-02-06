import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-white mt-20 flex flex-col md:flex-row items-center md:items-start justify-center py-4 px-0 md:px-10 lg:px-20">
            <div className="md:mr-10 mb-4 pl-4 sm:pl-0 w-full sm:w-80 md:w-auto">
                <strong className="">MŪSU KOMPĀNIJA</strong>

                <button>
                    <Link href="/">
                        <p className="">Par mums</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Mūsu veikali</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Privātuma politika</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Lietošanas noteikumi un nosacījumi</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Juridisks paziņojums</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Kontakti</p>
                    </Link>
                </button>
            </div>

            <div className="md:mx-10 mb-4 pl-4 sm:pl-0 w-full sm:w-80 md:w-auto">
                <strong className="">JŪSU PROFILS</strong>

                <button>
                    <Link href="/">
                        <p className="">Personīgā informācija</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Pasūtījumi</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Kredīta izraksti</p>
                    </Link>
                </button>
            </div>

            <div className="md:ml-10 mb-4 pl-4 sm:pl-0 w-full sm:w-80 md:w-auto">
                <strong className="">VEIKALA INFORMĀCIJA</strong>

                <button>
                    <Link href="/">
                        <p className="">Karkadē</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">SIA "Karkadē"</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Tērbatas iela 19/21, Rīga, LV-1010</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Reg.nr.50103327811</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">Telefona nr.: +37126621676</p>
                    </Link>
                </button>

                <button>
                    <Link href="/">
                        <p className="">E-pasts: <a href="mailto: karkade@karkade.lv">karkade@karkade.lv</a></p>
                    </Link>
                </button>
            </div>
        </footer>
    );
}

export default Footer;
