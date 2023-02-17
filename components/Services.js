import { FaCheck } from "react-icons/fa";
import ModalForQuote from "./ModalForQuote";
import working from "../public/assets/working.jpg";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="bg-section py-11 px-4 w-full md:h-screen border-t border-gray-200 md:flex md:items-center md:items-center">
      <div className="md:flex md:justify-center md:items-center md:items-center">
        <div className="md:w-2/4 md:flex md:justify-center md:items-center">
          <Image
            className="rounded-full shadow-sm shadow-white md:h-full shadow-lg"
            src={working}
            alt="working on desktop"
            width={800}
            height={800}
          />
        </div>
        <div className="container mx-auto md:ml-16 md:mr-0 flex flex-col items-center md:items-start md:w-2/4">
          <h2 className="text-3xl text-gray-200 font-bold mb-6 mt-11 md:mt-0 text-left">
            Créons votre site web vitrine ensemble
          </h2>
          <p className="text-lg text-gray-200 mb-6 text-left">
            Je vous propose un site vitrine professionnel et efficace, conçus
            pour vous aider à vous faire connaître en ligne. Mon service
            comprend :
          </p>
          <ul className="text-gray-200 text-lg mb-6 text-left">
            <li className="flex items-center mb-2">
              <FaCheck className="mr-2 text-green-500 w-10 h-10" />
              <p className="w-5/6">
                Un site web vitrine sur mesure à un tarif abordable,
                généralement compris entre 500€ et 2000.
              </p>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="mr-2 text-green-500 w-10 h-10" />
              <p className="w-5/6">
                {" "}
                Un site web vitrine de 1 à 5 pages, conçu sur mesure pour
                répondre à vos besoins.
              </p>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="mr-2 text-green-500 w-10 h-10" />
              <p className="w-5/6">
                <strong>Hébergement gratuit.</strong>
              </p>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="mr-2 text-green-500 w-10 h-10" />
              <p className="w-5/6">
                <strong>Certificat SSL gratuit</strong>, pour assurer la
                sécurité de votre site.
              </p>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="mr-2 text-green-500 w-10 h-10" />
              <p className="w-5/6">
                Un design responsive et moderne, qui s'adapte à tous les écrans.
              </p>
            </li>
          </ul>
          <ModalForQuote title="Contactez-moi pour un devis personnalisé" />
        </div>
      </div>
    </section>
  );
};

export default Services;
