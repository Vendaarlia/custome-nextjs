import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '700', '900']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${roboto.style.fontFamily};
    }
    `}
    </style>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
