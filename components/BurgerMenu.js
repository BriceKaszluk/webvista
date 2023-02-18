import { Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import cross from "../public/assets/cross.webp";
import BackgroundLayer from "./ModalComponents/BackgroundLayer";
import FadeIn from "./ModalComponents/FadeIn";
import SlideOverLayer from "./ModalComponents/SlideOverLayer";
import { twMerge } from "tailwind-merge";
import ModalForContact from "./ModalForContact";
import SocialLink from "./SocialLink";
import linkedinIcon from "../public/assets/linkedin.webp";

function ModalForQuote({ className }) {
  const [showModal, setShowModal] = useState(false);

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex justify-end items-end sm:hidden">
      <div className="mx-auto flex max-w-md justify-start">
        <div
          className={twMerge(
            "HAMBURGER-ICON space-y-2 text-xl text-gray-800 hover:text-gray-800 cursor-pointer",
            className
          )}
          onClick={() => setShowModal(!showModal)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      </div>
      <Transition.Root show={showModal}>
        <BackgroundLayer />
        <SlideOverLayer>
          <Image
            src={cross}
            className="cursor-pointer text-white"
            alt="Cross icon"
            width={32}
            height={32}
            onClick={() => {
              setShowModal(false);
            }}
          />
          <nav className="flex justify-center mt-11 h-screen/2">
            <div className="flex flex-col justify-between w-8/12 ">
              <div className="flex flex-col items-center justify-between h-screen/3 w-full space-x-4">
                  <button
                    onClick={() => {
                      setShowModal(!showModal);
                      scrollToElement("about");
                    }}
                  >
                    <div className="text-3xl font-bold text-gray-200 text-shadow">
                      À propos
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(!showModal);
                      scrollToElement("projects");
                    }}
                  >
                    <div className="text-3xl font-bold text-gray-200 text-shadow">
                      Projets
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(!showModal);
                      scrollToElement("services");
                    }}
                  >
                    <div className="text-3xl font-bold text-gray-200 text-shadow">
                      Services
                    </div>
                  </button>
                  <ModalForContact className="text-3xl font-bold text-gray-200 text-shadow" />
                  <SocialLink
                    image={linkedinIcon}
                    link="https://www.linkedin.com/in/bricekaszluk?original_referer="
                    className="rounded-md bg-white"
                  />
              </div>
            </div>
          </nav>
        </SlideOverLayer>
      </Transition.Root>
    </div>
  );
}

export default ModalForQuote;
