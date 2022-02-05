import Aos from "aos";
import { AppProps } from "next/app"
import { useEffect } from "react";
import "../src/styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return <Component {...pageProps} />
}

export default App