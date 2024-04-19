"use client"
import Head from 'next/head';
import '../styles/globals.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react';


// Register plugins
gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header/> */}
      <Head>
        <title>Bit a bit</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
