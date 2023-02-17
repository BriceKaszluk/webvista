import { Transition } from "@headlessui/react";
import { useState } from "react";
import ButtonCta from "./ButtonCta";
import Image from "next/image";
import cross from "../public/assets/cross.webp";
import { FaCheck } from "react-icons/fa";
import BackgroundLayer from "./ModalComponents/BackgroundLayer";
import FadeIn from "./ModalComponents/FadeIn";
import SlideOverLayer from "./ModalComponents/SlideOverLayer";

function ModalForQuote({ title }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [fullNameError, setFullNameError] = useState(""); // Message d'erreur pour le champ Nom et Prénom
  const [emailError, setEmailError] = useState(""); // Message d'erreur pour le champ Adresse e-mail
  const [projectTypeError, setProjectTypeError] = useState(""); // Message d'erreur pour le champ Type de projet
  const [projectDescriptionError, setProjectDescriptionError] = useState(""); // Message d'erreur pour le champ Description détaillée du projet

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

    if (!projectType) {
      setProjectTypeError("Veuillez sélectionner le type de projet");
      isValid = false;
    }

    if (!projectDescription) {
      setProjectDescriptionError(
        "Veuillez saisir une description détaillée du projet"
      );
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
        phone: phone,
        projectType: projectType,
        projectBudget: projectBudget,
        projectDeadline: projectDeadline,
        projectDescription: projectDescription,
        additionalInfo: additionalInfo,
      };

      // Appeler la fonction pour envoyer les données
      fetch("/api/contact", {
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
          setPhone("");
          setProjectType("");
          setProjectBudget("");
          setProjectDeadline("");
          setProjectDescription("");
          setAdditionalInfo("");
        } else {
          console.log("Response failed");
          setLoading(false);
        }
      });
    }
  };

  return (
    <div>
      <div className="mx-auto flex max-w-md justify-start">
        <ButtonCta onClick={() => setShow(!show)}>{title}</ButtonCta>
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
            Travaillons ensemble sur votre projet web
          </h2>
          <p className="text-lg text-gray-200 mb-6 text-left">
            Remplissez le formulaire ci-dessous, je vous recontacterai rapidement pour discuter de votre projet.
          </p>
          <div className="space-y-4">
            <form className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <FadeIn delay="delay-[400ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="phone"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Numéro de téléphone
                  </label>
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                  ></input>
                </div>
              </FadeIn>
              <FadeIn delay="delay-[450ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="project-type"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Type de projet<span className="text-red-500">*</span>
                  </label>
                  <select
                    onChange={(e) => {
                      setProjectType(e.target.value);
                      setProjectTypeError("");
                    }}
                    value={projectType}
                    id="project-type"
                    name="project-type"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                    required
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="Site vitrine">Site vitrine</option>
                    <option value="Site e-commerce">Site e-commerce</option>
                    <option value="Application web">Application web</option>
                    <option value="Autre">Autre</option>
                  </select>
                  {projectTypeError && (
                    <p className="text-red-500 text-sm mt-1">
                      {projectTypeError}
                    </p>
                  )}
                </div>
              </FadeIn>
              <FadeIn delay="delay-[500ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="project-budget"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Budget prévu pour le projet
                  </label>
                  <input
                    onChange={(e) => {
                      setProjectBudget(e.target.value);
                    }}
                    value={projectBudget}
                    type="text"
                    id="project-budget"
                    name="project-budget"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                  ></input>
                </div>
              </FadeIn>
              <FadeIn delay="delay-[550ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="project-deadline"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Délai souhaité pour la livraison du site
                  </label>
                  <input
                    onChange={(e) => {
                      setProjectDeadline(e.target.value);
                    }}
                    value={projectDeadline}
                    type="text"
                    id="project-deadline"
                    name="project-deadline"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                  ></input>
                </div>
              </FadeIn>
              <FadeIn delay="delay-[600ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="project-description"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Description du projet<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    onChange={(e) => {
                      setProjectDescription(e.target.value);
                      setProjectDescriptionError("");
                    }}
                    value={projectDescription}
                    id="project-description"
                    name="project-description"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                    rows="6"
                    required
                  ></textarea>
                  {projectDescriptionError && (
                    <p className="text-red-500 text-sm mt-1">
                      {projectDescriptionError}
                    </p>
                  )}
                </div>
              </FadeIn>
              <FadeIn delay="delay-[650ms]">
                {" "}
                <div className="text-left">
                  <label
                    htmlFor="additional-info"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Tout autre renseignement supplémentaire ou question
                  </label>
                  <textarea
                    onChange={(e) => {
                      setAdditionalInfo(e.target.value);
                    }}
                    value={additionalInfo}
                    id="additional-info"
                    name="additional-info"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                    rows="4"
                  ></textarea>
                </div>
              </FadeIn>

              <div className="text-center"></div>
            </form>
          </div>
          <div className="my-6">
            {submitted ? (
              <div className="flex items-center justify-center">
                <FaCheck className="text-green-500 animate-pulse mr-2" />
                <p className="text-gray-200">Votre demande a été envoyé avec succès !</p>
              </div>
            ) : (
              <FadeIn delay="delay-[700ms]">
                <div className="mr-auto w-fit">
                  <ButtonCta loading={loading} onClick={(e) => handleSubmit(e)}>
                    Envoyer ma demande
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
