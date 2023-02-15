import Card from "./Card";
import InterSection from "./InterSection";

const ShowCaseBenefitsSection = () => {
  return (
    <div className="w-full bg-interSection md:h-screen/2 flex items-center justify-evenly flex-col py-11">
      <h2 className="text-3xl font-bold text-gray-200 text-shadow text-center mb-11">Pourquoi avoir un site web vitrine ?</h2>
          <InterSection>
      <Card img="https://cdn-icons-png.flaticon.com/128/3477/3477839.png">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Opportunités de vente supplémentaires
        </h3>
        <p className="text-gray-600">
          Votre site web vitrine peut être utilisé pour vendre vos produits ou
          services en ligne, ce qui vous donne accès à de nouvelles opportunités
          de vente.
        </p>
      </Card>
      <Card img="https://cdn-icons-png.flaticon.com/128/2115/2115248.png">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Visibilité<br></br> en ligne
        </h3>
        <p className="text-gray-600">
          Avoir un site web vitrine vous permet de vous faire connaître auprès
          de nouveaux clients potentiels et d'augmenter votre visibilité.
        </p>
      </Card>
      <Card img="https://cdn-icons-png.flaticon.com/128/1168/1168577.png">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Meilleure gestion de votre image de marque
        </h3>
        <p className="text-gray-600">
          En contrôlant ce que les autres voient sur votre site web vitrine,
          vous pouvez renforcer votre image globale et influencer la façon dont
          ils perçoivent votre marque.
        </p>
      </Card>
    </InterSection>
    </div>
  );
};

export default ShowCaseBenefitsSection;
