import Head from "next/head"
import Footer from "../../src/components/Footer";
import Navigation from "../../src/components/Navigation";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Karkadē | Register</title>
        <meta name="description" content="Karkadē Populārākais puķu veikals Rīgā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Footer />
    </div>
  )
}
