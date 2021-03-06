import Head from "next/head"
import Footer from "../src/components/Footer";
import Navigation from "../src/components/Navigation";

export default function Cart() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Karkadē | Grozs</title>
        <meta name="description" content="Karkadē Populārākais puķu veikals Rīgā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Footer />
    </div>
  )
}
