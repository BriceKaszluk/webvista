import ModalForContact from "./ModalForContact";

function Footer() {
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <footer className="bg-interSection py-11 w-full border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-6/12 mb-4">
            <h3 className="text-xl font-bold text-gray-100 mb-4">À propos</h3>
            <p className="text-gray-400 leading-loose">
              Je suis un développeur freelance spécialisé dans la création de
              sites web sur mesure pour répondre aux besoins spécifiques de
              chaque client. Je travaille avec passion et dévouement pour vous
              offrir des solutions créatives et innovantes pour votre présence
              en ligne.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:flex md:flex-col md:items-center">
            <div>
              {" "}
              <h3 className="text-xl font-bold text-gray-100 mb-4">Liens</h3>
              <ul className="list-none leading-loose">
                <li>
                  <button
                    onClick={() => {
                      scrollToElement("about");
                    }}
                  >
                    <div className="text-gray-400 hover:text-gray-100">
                      À propos
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToElement("projects");
                    }}
                  >
                    <div className="text-gray-400 hover:text-gray-100">
                      Projets
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToElement("services");
                    }}
                  >
                    <div className="text-gray-400 hover:text-gray-100">
                      Services
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <ModalForContact className="border border-gray-400 rounded-md text-gray-100 px-4 py-2 transition duration-500 ease-in-out hover:bg-blue-500  hover:text-white focus:outline-none" />
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-gray-400 text-center">
          © 2022 - WebVista - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
