import Head from "next/head"
import Navigation from "../src/components/Navigation";

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Karkadē | Grozs</title>
        <meta name="description" content="Karkadē Populārākais puķu veikals Rīgā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
    </div>
  )
}
