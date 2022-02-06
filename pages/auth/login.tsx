import Head from "next/head"
import Footer from "../../src/components/Footer";
import Navigation from "../../src/components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karkadē | Login</title>
        <meta name="description" content="Karkadē Populārākais puķu veikals Rīgā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Footer />
    </div>
  )
}
