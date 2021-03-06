import Head from "next/head";
import Image from "next/image";
import Navbar from "/components/Navbar";
import Main from "/components/Main";
import About from "/components/About"
import Roadmap from "/components/Roadmap";
import Contact from "/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HORUS FINANCE</title>
        <meta name="description" content="Landing Page of Horus Finance, Co-Chain EVM DEX & Launchpad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Roadmap />
      <Contact />
    </div>
  );
}
