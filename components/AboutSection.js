import Image from "next/image";
import myPicture from "../public/assets/brice-photo.webp";
import SocialLink from "./SocialLink";
import linkedinIcon from "../public/assets/linkedin.webp";

function AboutSection() {
  return (
    <div id="about" className="w-full bg-section py-11">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 md:h-screen/2">
        <div className="lg:w-1/2 lg:pr-16 h-2/3 flex flex-col justify-center items-center md:items-start h-5/6">
          <div className="flex justify-center items-end md:items-center mb-8  md:mb-11 md:mt-0 mb-5 md:mb-0 mr-auto">
            <h2 className="  text-3xl font-bold text-gray-200 text-shadow ">
              Qui se cache derrière l'écran ?
            </h2>
            <SocialLink
              image={linkedinIcon}
              link="https://www.linkedin.com/in/bricekaszluk?original_referer="
              className="bg-white rounded-md ml-8 w-11 h-11 mr-11"
            />
          </div>
          <div className="lg:w-1/2 w-2/3 mb-8 md:mb-0 flex items-center justify-center md:hidden">
            <Image
              className="rounded-lg shadow-sm shadow-white md:h-full shadow-sm"
              src={myPicture}
              alt="Picture of the author"
              width={240}
              height={240}
            />
          </div>
          <div>
            <p className="text-lg text-gray-200">
              Je suis un développeur web passionné et expérimenté, spécialisé en{" "}
              <b> React </b> et
              <b> Next.js </b>. J'ai une solide compréhension des technologies
              les plus avancées pour concevoir des sites web
              <b> modernes et performants </b>.
              <br />
              <br />
              Mon objectif est de vous aider à
              <b id="i46zgh"> créer votre image ligne </b> en vous accompagnant
              à chaque étape du processus de développement. Je suis motivé par
              mon désir de voir mes clients
              <b> satisfaits de leur site web </b>. Je travaille en étroite
              collaboration avec vous pour comprendre vos besoins et vos
              attentes, afin de respecter au mieux l'image que vous avez de
              votre projet. <br />
              <br />
              Si vous cherchez un développeur <b>fiable </b> et
              <b> compétent </b> pour faire de votre site web une réalité,
              n'hésitez pas à me contacter. Je suis convaincu que je peux vous
              aider à atteindre vos objectifs en ligne avec un site web de
              qualité supérieure.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center hidden md:flex">
          <Image
            className="rounded-lg shadow-sm shadow-white"
            src={myPicture}
            alt="Picture of the author"
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
