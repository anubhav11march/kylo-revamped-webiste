import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "../public/assets/css/fontawesome-all.min.css"
import "../public/assets/css/modal.css"
import "../public/assets/css/mobile-menu.css"
import "../public/assets/css/default.css"
import "../public/assets/css/style.css"

import Script from "next/script";
import Head from "next/head";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-RBE32FWFR0"></Script> */}

      <GoogleAnalytics measurementId="G-Y9CXFEN66V"/>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="test content desc" />
        <meta name="author" content="Kylo Apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
