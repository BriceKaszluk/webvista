import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="canonical" href="https://webvista.fr/" key="index" />
      <meta charSet="UTF-8" id="iq5ty" key="index" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="index" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta
        name="description"
        content="Faites confiance à un développeur freelance expérimenté pour créer un site web professionnel qui répond à vos besoins. Contactez-moi dès maintenant."
        key="index"
      />
      <meta name="brand" content="WebVista" />
      <meta
        name="keywords"
        content="création de site web, développeur freelance, site vitrine, site professionnel, développement web"
        key="index"
      />
      <meta name="robots" content="index, follow" key="index" />
      <meta
        name="image"
        property="og:image"
        content="https://www.webvista.fr/assets/og-image.webp"
        key="index"
      />
      <meta property="og:image:width" content="1650" />
      <meta property="og:image:height" content="798" />
      <meta property="og:title" content="Le titre de ma page" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://webvista.fr/" />
      <meta
        property="og:description"
        content="Faites confiance à un développeur freelance expérimenté pour créer un site web professionnel qui répond à vos besoins. Contactez-moi dès maintenant."
      />
      <meta property="og:site_name" content="WebVista" />

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
