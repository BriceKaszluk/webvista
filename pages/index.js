import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShowCaseBenefitsSection from "../components/ShowCaseBenefitsSection";
import NextJsBenefitsSection from "../components/NextJsBenefitsSection";
import AboutSection from "../components/AboutSection";
import AboutNextSection from "../components/AboutNextSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import SiteTypes from "../components/SiteTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Création de sites web évolutifs et référencés
        </title>
        <meta
          name="image"
          property="og:image"
          content="https://www.webvista.fr/assets/og-image.webp"
          key="index"
        />
        <meta property="og:image:width" content="1650" />
        <meta property="og:image:height" content="798" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webvista.fr/" />
        <meta
          property="og:description"
          content="Faites confiance à un développeur freelance expérimenté pour créer un site web professionnel qui répond à vos besoins. Contactez-moi dès maintenant."
        />
        <meta property="og:site_name" content="WebVista" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <ShowCaseBenefitsSection />
        <SiteTypes />
        <AboutNextSection />
        <NextJsBenefitsSection />
        <AboutSection />

        <Services />
        <Footer />
      </main>
    </>
  );
}
