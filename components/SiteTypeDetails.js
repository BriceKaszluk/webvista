import Image from "next/image";
import ModalForQuote from './ModalForQuote';

const SiteTypeDetails = ({ activeTabData }) => {

  return (
    <div
      className="mt-6 mb-11 bg-white rounded-lg shadow-sm p-6 h-full text-center shadow-white 
      "
    >
      <div className="relative flex flex-col items-center md:flex-row md:justify-center">
        <div
          className="rounded-t-lg w-full md:w-4/12  rounded-lg shadow-sm"
        >
          <Image src={activeTabData.image} width={380} height={235} alt={activeTabData.alt} className="shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 bg-white p-6 rounded-b-lg md:rounded-none text-gray-800 text-left">
          <div
            className="text-3xl font-medium mb-4"
          >
            {activeTabData.label}
          </div>
          <p
            className="text-lg leading-6 mb-4"
          >
            {activeTabData.description}
          </p>
          <div className="mt-4">
            <p className="text-base leading-6 font-medium text-gray-800 mb-2">
              <span className="font-bold">Temps de développement:</span>{" "}
              {activeTabData.time}
            </p>
            <p className="text-base leading-6 font-medium text-gray-800 mb-2">
              <span className="font-bold">Fonctionnalités:</span>{" "}
              {activeTabData.features.join(", ")}
            </p>
          </div>
          <ModalForQuote title="CRÉER MON SITE WEB" className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default SiteTypeDetails;

