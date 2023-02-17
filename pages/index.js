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
        <title>
          Création de sites web évolutifs pour les particuliers et les
          entreprises
        </title>
        <link rel="canonical" href="https://webvista.fr/" key="index" />
        <meta charSet="UTF-8" id="iq5ty" key="index" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="index" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
</meta>
        <meta
          name="description"
          content="Faites confiance à un développeur freelance expérimenté pour créer un site web professionnel qui répond à vos besoins. Contactez-moi dès maintenant."
          key="index"
        />
        <meta
          name="keywords"
          content="création de site web, développeur freelance, site vitrine, site professionnel, développement web"
          key="index"
        />
        <meta name="robots" content="index, follow" key="index" />
        <meta
          property="og:image"
          content="../assets/og-image.png"
          key="index"
        />
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
