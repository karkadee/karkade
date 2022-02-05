import { AppProps } from "next/app"
import "../src/styles/globals.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App