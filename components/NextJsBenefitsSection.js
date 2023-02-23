import Card from "./Card";
import InterSection from "./InterSection";
import nextIcon1 from "../public/assets/nextjs-benefits-1.webp";
import nextIcon2 from "../public/assets/nextjs-benefits-2.webp";
import nextIcon3 from "../public/assets/nextjs-benefits-3.webp";

const NextJsBenefitsSection = () => {
  return (
    <div className="w-full bg-interSection md:h-screen/2 flex items-center justify-evenly flex-col py-11 border-b border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-200 text-shadow text-center mb-11">Comment Next.js peut vous aider à gagner du temps et de l'argent  ?</h2>
          <InterSection>
      <Card img={nextIcon1} alt="a speedometer">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Performances
        </h3>
        <p className="text-gray-800">
        Next.js utilise la technologie du rendu côté serveur pour améliorer les performances de votre site web, ce qui entraîne une <span className="font-bold">meilleure expérience utilisateur</span>  et une <span className="font-bold">augmentation du temps passé sur le site</span>.
        </p>
      </Card>
      <Card img={nextIcon2} alt="three arrows pointing up">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Évolution
        </h3>
        <p className="text-gray-800">
        Une architecture modulaire qui permet d' <span className="font-bold">ajouter des fonctionnalités à mesure que vos besoins évoluent</span>, ce qui peut vous faire gagner du temps et de l'argent à long terme. 
        </p>
      </Card>
      <Card img={nextIcon3} alt="magnifying glass with google logo">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Référencement
        </h3>
        <p className="text-gray-800">
        Next.js est conçu pour offrir un <span className="font-bold">référencement optimal</span>, ce qui peut aider votre site web à être plus facilement trouvé par les moteurs de recherche et à <span className="font-bold">attirer plus de trafic</span>.
        </p>
      </Card>
    </InterSection>
    </div>
  );
};

export default NextJsBenefitsSection;
