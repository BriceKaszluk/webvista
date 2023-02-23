import Image from "next/image";
import nextPicture from "../public/assets/what-next.webp";

function AboutNextSection() {
  return (
    <div className="w-full bg-section py-11">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 md:h-fit">
        <div className="lg:w-1/2 w-10/12 flex items-center justify-center md:mr-16">
          <Image
            className="rounded-full shadow-sm shadow-white"
            src={nextPicture}
            alt="Picture representing Next.js"
            width={450}
            height={450}
          />
        </div>
        <div className="mt-11 md:mt-0 lg:w-1/2   flex flex-col justify-evenly md:justify-between items-center md:items-start h-5/6">
          <h2 className="text-3xl font-bold text-gray-200 text-shadow mb-5">
            Un site web durable et évolutif grâce à Next.js
          </h2>
          <div>
            <p className="text-lg text-gray-200">
              Next.js est une plateforme qui permet de créer des sites web en
              fournissant{" "}
              <span className="font-bold">un outil gratuit et open source</span>{" "}
              basé sur la bibliothèque JavaScript React et la technologie
              Node.js. React a été utilisé pour créer des sites tels que{" "}
              <span className="font-bold">Facebook</span>,{" "}
              <span className="font-bold">Instagram</span> ou{" "}
              <span className="font-bold">Netflix</span>, ce qui garantit sa{" "}
              <span className="font-bold">qualité</span> et sa{" "}
              <span className="font-bold">fiabilité</span>.
              <br />
              <br />
              L'un des avantages de Next.js est sa{" "}
              <span className="font-bold">scalabilité</span>, ce qui signifie
              qu'il peut{" "}
              <span className="font-bold">
                évoluer en fonction des besoins de votre site web au fil du
                temps sans compromettre ses performances
              </span>
              . En outre, Next.js offre une grande flexibilité et une variété de
              fonctionnalités pour rendre votre{" "}
              <span className="font-bold">
                site web unique et attrayant pour vos visiteurs
              </span>
              .
              <br />
              <br />
              Si vous cherchez à créer un site web vitrine de qualité
              professionnelle, Next.js est une solution puissante et facile à
              utiliser qui vous permettra d'
              <span className="font-bold">
                atteindre vos objectifs rapidement et efficacement
              </span>
              .
            </p>
          </div>
          <a
            className="mt-11 md:mt-8 md:mb-4 bg-blue-500 hover:bg-blue-600 text-gray-200 font-bold py-2 px-4 rounded w-fit"
            href="https://kinsta.com/fr/base-de-connaissances/next-js/#questce-que-nextjs-"
            target="_blank"
          >
            EN APPRENDRE PLUS
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutNextSection;
