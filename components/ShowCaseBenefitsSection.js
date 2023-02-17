import Card from "./Card";
import InterSection from "./InterSection";
import showcaseIcon1 from "../public/assets/showcase-benefits-1.webp";
import showcaseIcon2 from "../public/assets/showcase-benefits-2.webp";
import showcaseIcon3 from "../public/assets/showcase-benefits-3.webp";

const ShowCaseBenefitsSection = () => {
  return (
    <div className="w-full bg-interSection md:h-screen/2 flex items-center justify-evenly flex-col py-11">
      <h2 className="text-3xl font-bold text-gray-200 text-shadow text-center mb-11">Pourquoi avoir un site web vitrine ?</h2>
          <InterSection>
      <Card img={showcaseIcon1}>
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
      <Card img={showcaseIcon2}>
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Visibilité<br></br> en ligne
        </h3>
        <p className="text-gray-600">
          Avoir un site web vitrine vous permet de vous faire connaître auprès
          de nouveaux clients potentiels et d'augmenter votre visibilité.
        </p>
      </Card>
      <Card img={showcaseIcon3}>
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
