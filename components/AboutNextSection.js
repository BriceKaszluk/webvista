import Image from "next/image";
import nextPicture from "../public/assets/what-next.webp";

function AboutNextSection() {
  return (
    <div className="w-full bg-section py-11">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 md:h-screen/2">
        <div className="lg:w-1/2 w-10/12 flex items-center justify-center md:mr-16">
          <Image
            className="rounded-full shadow-sm shadow-white"
            src={nextPicture}
            alt="Picture representing Next.js"
            width={450}
            height={450}
          />
        </div>
        <div className="mt-11 md:mt-0 lg:w-1/2 lg:pr-16  flex flex-col justify-evenly md:justify-between items-center md:items-start h-5/6">
          <h2 className="text-3xl font-bold text-gray-200 text-shadow mb-5">
            Un site web durable et évolutif grâce à Next.js
          </h2>
          <div>
            <p className="text-lg text-gray-200">
              Next.js offre une
              <b> plateforme scalable </b> pour votre site web vitrine,
              permettant une
              <b> évolution </b> en douceur de vos fonctionnalités au fil du
              temps, sans compromettre la <b> performance </b>.
              <br />
              <br />
              Next.js est un framework gratuit et open source s'appuyant sur la
              bibliothèque JavaScript React et sur la technologie Node.js.{" "}
              <br />
              <br />
              La bibliothèque React a notamment été utilisée pour créer des
              sites comme Airbnb, Facebook, Instagram ou encore Netflix.
            </p>
          </div>
          <a className="mt-11 md:mt-8 md:mb-0 bg-blue-500 hover:bg-blue-600 text-gray-200 font-bold py-2 px-4 rounded w-fit" href="https://kinsta.com/fr/base-de-connaissances/next-js/#questce-que-nextjs-" target="_blank">EN APPRENDRE PLUS</a>
        </div>
      </div>
    </div>
  );
}

export default AboutNextSection;
