import Card from "./Card";
import InterSection from "./InterSection";
import showcaseIcon1 from "../public/assets/showcase-benefits-1.webp";
import showcaseIcon2 from "../public/assets/showcase-benefits-2.webp";
import showcaseIcon3 from "../public/assets/showcase-benefits-3.webp";

const ShowCaseBenefitsSection = () => {
  return (
    <div className="w-full bg-interSection md:h-screen/2 flex items-center justify-evenly flex-col py-11 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-gray-200 text-shadow text-center md:text-left mb-11">Pourquoi avoir un site web vitrine ?</h2>
          <InterSection>
      <Card img={showcaseIcon1} alt="heaps of coins">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Opportunités de vente supplémentaires
        </h3>
        <p className="text-gray-800">
          Votre site web vitrine peut être utilisé pour <span className="font-bold">vendre vos produits ou
          services en ligne</span>, ce qui vous donne accès à de nouvelles opportunités
          de vente.
        </p>
      </Card>
      <Card img={showcaseIcon2} alt="an eye">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Visibilité<br></br> en ligne
        </h3>
        <p className="text-gray-800">
          Avoir un site web vitrine vous permet de vous faire connaître auprès
          de <span className="font-bold">nouveaux clients potentiels</span> et d'<span className="font-bold">augmenter votre visibilité</span>.
        </p>
      </Card>
      <Card img={showcaseIcon3} alt="a validated green shield">
        {" "}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Meilleure gestion de votre image de marque
        </h3>
        <p className="text-gray-800">
          En contrôlant ce que les autres voient sur votre site web vitrine,
          vous pouvez <span className="font-bold">renforcer votre image globale</span> et influencer la façon dont
          ils perçoivent votre marque.
        </p>
      </Card>
    </InterSection>
    </div>
  );
};

export default ShowCaseBenefitsSection;
