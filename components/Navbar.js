import ModalForContact from "./ModalForContact";
import SocialLink from "./SocialLink";
import linkedinIcon from "../public/assets/linkedin.png";

function Navbar() {
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-20 px-4 py-2 h-20 flex items-center justify-between">
      <div className="flex items-center justify-between w-8/12 m-auto">
        <div
          onClick={() => {
            scrollToElement("hero");
          }}
          className="text-stone-900 text-4xl font-bold cursor-pointer"
        >
          WebVista
        </div>
        <div className="flex space-x-4 hidden sm:flex sm:items-end">
          <button
            onClick={() => {
              scrollToElement("about");
            }}
          >
            <div className="text-xl text-stone-900 hover:text-stone-700">
              À propos
            </div>
          </button>
          <button
            onClick={() => {
              scrollToElement("projects");
            }}
          >
            <div className="text-xl text-stone-900 hover:text-stone-700">
              Projets
            </div>
          </button>
          <button
            onClick={() => {
              scrollToElement("services");
            }}
          >
            <div className="text-xl text-stone-900 hover:text-stone-700">
              Services
            </div>
          </button>
          <ModalForContact />
          <SocialLink image={linkedinIcon} link="https://www.linkedin.com/in/bricekaszluk?original_referer=" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
