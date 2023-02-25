import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    hotjar.initialize(3383799, 6)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
