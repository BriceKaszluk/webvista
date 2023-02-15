import Card from "./Card";
import InterSection from "./InterSection";

const NextJsBenefitsSection = () => {
  return (
    <div className="w-full bg-interSection md:h-screen/2 flex items-center justify-evenly flex-col py-11">
      <h2 className="text-3xl font-bold text-gray-200 text-shadow text-center mb-11">Comment Next.js peut vous aider à gagner du temps et de l'argent  ?</h2>
          <InterSection>
      <Card img="https://cdn-icons-png.flaticon.com/128/1531/1531130.png">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Performances
        </h3>
        <p className="text-gray-600">
        Next.js utilise la technologie du rendu côté serveur pour améliorer les performances de votre site web, ce qui entraîne une meilleure expérience utilisateur et une augmentation du temps passé sur le site.
        </p>
      </Card>
      <Card img="https://cdn-icons-png.flaticon.com/128/8187/8187898.png">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Évolution
        </h3>
        <p className="text-gray-600">
        Une architecture modulaire qui permet d' ajouter des fonctionnalités à mesure que vos besoins évoluent, ce qui peut vous faire gagner du temps et de l'argent à long terme. 
        </p>
      </Card>
      <Card img="https://cdn-icons-png.flaticon.com/128/1199/1199429.png">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Référencement
        </h3>
        <p className="text-gray-600">
        Next.js est conçu pour offrir un référencement optimal , ce qui peut aider votre site web à être plus facilement trouvé par les moteurs de recherche et à attirer plus de trafic organique.
        </p>
      </Card>
    </InterSection>
    </div>
  );
};

export default NextJsBenefitsSection;
