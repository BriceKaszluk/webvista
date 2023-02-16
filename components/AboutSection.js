import Image from "next/image";
import myPicture from "../assets/brice-photo.png";

function AboutSection() {
  return (
    <div id="about" className="w-full bg-section border-t border-b border-gray-200 py-11">
      <div className="max-w-7xl mx-auto md:mt-16 flex flex-col lg:flex-row items-center justify-center px-4 md:h-screen">
        <div className="lg:w-1/2 lg:pr-16 h-2/3 flex flex-col justify-center items-center md:items-start h-5/6">
          <div className="lg:w-1/2 w-2/3 md:mb-0 flex items-center justify-center md:hidden">
            <Image
              className="rounded-full shadow-sm shadow-white md:h-full shadow-lg"
              src={myPicture}
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <h2 className="mt-11 md:mb-11 md:mt-0 text-3xl font-bold text-gray-200 text-shadow mb-5 md:mb-0 mr-auto">
          Qui se cache derrière l'écran ?
          </h2>

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
            className="rounded-full shadow-sm shadow-white"
            src={myPicture}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
