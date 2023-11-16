import Navbar from "@/src/components/Navbar/Navbar";
import "../public/styles/global.css";
import type { AppProps } from "next/app";
import Footer from "@/src/components/landing/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
      <Component {...pageProps} />
    <Footer />
    </>
  )
}
