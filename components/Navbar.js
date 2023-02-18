import ModalForContact from "./ModalForContact";
import SocialLink from "./SocialLink";
import linkedinIcon from "../public/assets/linkedin.webp";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-20 px-4 py-2 h-20 flex items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-8/12 m-auto">
        <div
          onClick={() => {
            scrollToElement("hero");
          }}
          className="text-gray-800 text-4xl font-bold cursor-pointer"
        >
          WebVista
        </div>
        <div className="flex space-x-4 hidden sm:flex sm:items-end">
          <button
            onClick={() => {
              scrollToElement("about");
            }}
          >
            <div className="text-xl text-gray-800 hover:text-gray-800">
              À propos
            </div>
          </button>
          <button
            onClick={() => {
              scrollToElement("projects");
            }}
          >
            <div className="text-xl text-gray-800 hover:text-gray-800">
              Projets
            </div>
          </button>
          <button
            onClick={() => {
              scrollToElement("services");
            }}
          >
            <div className="text-xl text-gray-800 hover:text-gray-800">
              Services
            </div>
          </button>
          <ModalForContact />
          <SocialLink image={linkedinIcon} link="https://www.linkedin.com/in/bricekaszluk?original_referer=" />
        </div>
        <div className="sm:hidden">
        <BurgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
