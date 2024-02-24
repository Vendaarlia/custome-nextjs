import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '700']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${quicksand.style.fontFamily};
    }
    `}
    </style>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
