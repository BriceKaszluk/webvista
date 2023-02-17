import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShowCaseBenefitsSection from "../components/ShowCaseBenefitsSection";
import NextJsBenefitsSection from "../components/NextJsBenefitsSection";
import AboutSection from "../components/AboutSection";
import AboutNextSection from "../components/AboutNextSection";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="image"
          property="og:image"
          content="https://www.webvista.fr/assets/og-image.png"
          key="index"
        />
        <meta property="og:image:width" content="1650" />
        <meta property="og:image:height" content="798" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <ShowCaseBenefitsSection />
        <AboutSection />
        <Portfolio />
        <AboutNextSection />
        <NextJsBenefitsSection />
        <Services />
        <Footer />
      </main>
    </>
  );
}
