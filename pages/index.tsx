import Head from "next/head"
import Footer from "../src/components/Footer";
import HomeContainer from "../src/components/HomeContainer";
import Navigation from "../src/components/Navigation";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Karkadē | Populārākais ziedu salons Rīgā ar vairāk nekā 10 gadu pieredzi</title>
        <meta name="description" content="Karkadē Populārākais puķu veikals Rīgā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <HomeContainer />

      <Footer />
    </div>
  )
}
