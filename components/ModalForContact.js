import { Transition } from "@headlessui/react";
import { useState } from "react";
import ButtonCta from "./ButtonCta";
import Image from "next/image";
import cross from "../public/assets/cross.webp";
import { FaCheck } from "react-icons/fa";
import BackgroundLayer from "./ModalComponents/BackgroundLayer";
import FadeIn from "./ModalComponents/FadeIn";
import SlideOverLayer from "./ModalComponents/SlideOverLayer";
import { twMerge } from "tailwind-merge";

function ModalForQuote({ className }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState(""); // Message d'erreur pour le champ Nom et Prénom
  const [emailError, setEmailError] = useState(""); // Message d'erreur pour le champ Adresse e-mail
  const [messageError, setMessageError] = useState(""); // Message d'erreur pour le champ Message

  const validateForm = () => {
    let isValid = true;

    if (!fullName) {
      setFullNameError("Veuillez saisir votre nom et prénom");
      isValid = false;
    }

    if (!email) {
      setEmailError("Veuillez saisir votre adresse e-mail");
      isValid = false;
    }

    if (!message) {
      setMessageError("Veuillez saisir votre message");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Valider le formulaire
    const isFormValid = validateForm();

    // Si le formulaire est valide, envoyer les données
    if (isFormValid) {
      setLoading(true);
      const formData = {
        fullName: fullName,
        email: email,
        message: message,
      };

      // Appeler la fonction pour envoyer les données
      fetch("/api/contactMessage", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setLoading(false);
          setFullName("");
          setEmail("");
          setMessage("");
        } else {
          console.log("Response failed");
          setLoading(false);
        }
      });
    }
  };

  return (
    <div className="flex justify-end items-end">
      <div className="mx-auto flex max-w-md justify-start">
        <div
          className={twMerge(
            "text-xl text-gray-800 hover:text-gray-700 cursor-pointer",
            className
          )}
          onClick={() => setShow(!show)}
        >
          Contact
        </div>
      </div>
      <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <Image
            src={cross}
            className="cursor-pointer text-white"
            alt="Cross icon"
            width={32}
            height={32}
            onClick={() => {
              setShow(false);
              setSubmitted(false);
            }}
          />
          <h2 className="text-3xl text-gray-200 font-bold mb-6 mt-11 text-left">
            Contact
          </h2>
          <p className="text-lg text-gray-200 text-left">
            N'hésitez pas à me contacter pour toute demande d'information. Je
            vous répondrai dans les plus brefs délais.
          </p>
          <div className="space-y-4">
            <form className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
              <FadeIn delay="delay-[300ms]">
                <div className="text-left">
                  <label
                    htmlFor="full-name"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Nom et prénom<span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setFullNameError("");
                    }}
                    value={fullName}
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                    required
                  ></input>
                  {fullNameError && (
                    <p className="text-red-500 text-sm mt-1">{fullNameError}</p>
                  )}
                </div>
              </FadeIn>
              <FadeIn delay="delay-[350ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Adresse e-mail<span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                    required
                  ></input>
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>
              </FadeIn>
              <FadeIn delay="delay-[650ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="message"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                    rows="4"
                  ></textarea>
                  {messageError && (
                    <p className="text-red-500 text-sm mt-1">{messageError}</p>
                  )}
                </div>
              </FadeIn>

              <div className="text-center"></div>
            </form>
          </div>
          <div className="my-6">
            {submitted ? (
              <div className="flex items-center justify-center">
                <FaCheck className="text-green-500 animate-pulse mr-2" />
                <p className="text-gray-200">
                  Votre demande a été envoyé avec succès !
                </p>
              </div>
            ) : (
              <FadeIn delay="delay-[700ms]">
                <div className="mr-auto w-fit">
                  <ButtonCta loading={loading} onClick={(e) => handleSubmit(e)}>
                    Envoyer
                  </ButtonCta>
                </div>
              </FadeIn>
            )}
          </div>
        </SlideOverLayer>
      </Transition.Root>
    </div>
  );
}

export default ModalForQuote;
