import { useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import SiteTypeDetails from "./SiteTypeDetails";
import showcasePicture from "../public/assets/site-type-vitrine.webp";
import eCommercePicture from "../public/assets/site-type-commerce.webp";
import otherPicture from "../public/assets/site-type-autre.webp";

const SiteTypes = () => {
  const tabs = [
    {
      id: "vitrine",
      label: "Site vitrine",
      description:
        "Un site vitrine est un site web qui présente votre entreprise, vos produits ou vos services.",
      image:
      showcasePicture,
      alt: "hand holding a tablet with a website on it",
      price: "à partir de 500€",
      time: "2 à 5 semaines",
      features: [
        "de 1 à 5 pages",
        "design personnalisé",
        "formulaire de contact",
        "galerie d'images",
        "s'adapte aux différents écrans (mobile, tablette, pc).",
      ],
    },
    {
      id: "vente-en-ligne",
      label: "Site de vente en ligne",
      description:
        "Un site de vente en ligne est une plateforme qui vous permet de commercialiser vos produits ou services sur Internet.",
      image:
      eCommercePicture,
      alt: "screens of a website with a creditcard between them",
      price: "à partir de 2000€",
      time: "4 à 8 semaines",
      features: [
        "design personnalisé",
        "système de panier",
        "paiement en ligne",
        "gestion des commandes",
        "s'adapte aux différents écrans (mobile, tablette, pc).",
      ],
    },
    {
      id: "autre",
      label: "Autre type de site",
      description:
        "Je suis également capable de créer d'autres types de sites web comme des blogs, des portfolios, etc. La seule limite est votre imagination!",
      image:
      otherPicture,
      alt: "screen of a website with post-it notes on it",
      price: "à partir de 800€",
      time: "3 à 5 semaines",
      features: ["Selon vos besoins."],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleSetActiveTab = (id) => {
    setTimeout(() => {
      setActiveTab(id);
    }, 400);
  };

  return (
    <section id="projects" className="pt-11 md:py-11 bg-gray-100 bg-section w-full flex flex-col justify-center items-center">
      <div className="max-w-7xl md:w-full mx-auto sm:px-6 lg:px-8 h-fit">
        <h2 className="text-3xl font-bold text-gray-200 text-shadow text-center md:text-left mb-11">
          Le site que je peux créer pour vous :
        </h2>
        <div className="mt-6">
          <div className="border-b border-gray-200">
            <div className="-mb-px flex md:space-x-8 space-x-4 justify-center md:justify-start" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleSetActiveTab(tab.id)}
                  className={cn(
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                    {
                      "border-amber-400 text-amber-400": activeTab === tab.id,
                      "border-transparent text-gray-200 hover:text-amber-300 hover:border-amber-300":
                        activeTab !== tab.id,
                    }
                  )}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: tab.id === activeTab ? 1 : 0, x: tab.id === activeTab ? 0 : 50 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {tab.id === activeTab ? <SiteTypeDetails activeTabData={tab} /> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteTypes;
