import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/components/Layout";

import "./styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Conun</title>
        <meta name="description" content="Conun Foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
