import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "../public/assets/css/fontawesome-all.min.css"
import "../public/assets/css/modal.css"
import "../public/assets/css/mobile-menu.css"
import "../public/assets/css/default.css"
import "../public/assets/css/style.css"

import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RBE32FWFR0"></Script>
      <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-RBE32FWFR0');
      </Script>
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
