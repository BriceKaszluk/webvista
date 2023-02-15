import { Transition } from "@headlessui/react";
import { Fragment, useId, useState } from "react";
import ButtonCta from "./ButtonCta";
import Image from "next/image";
import cross from "../assets/cross.png";

function Modal() {
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
      setProjectDescriptionError("Veuillez saisir une description détaillée du projet");
      isValid = false;
    }
  
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Valider le formulaire
    const isFormValid = validateForm();
  
    // Si le formulaire est valide, envoyer les données
    if (isFormValid) {
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
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setFullName("");
          setEmail("");
          setPhone("");
          setProjectType("");
          setProjectBudget("");
          setProjectDeadline("");
          setProjectDescription("");
          setAdditionalInfo("");
        }
      })
    }
  }
  

  return (
    <div>
      <div className="mx-auto my-16 flex max-w-md justify-start">
        <ButtonCta onClick={() => setShow(!show)}>Register</ButtonCta>
      </div>
      <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <Image
            src={cross}
            className="cursor-pointer text-white"
            alt="Picture of the author"
            width={32}
            height={32}
            onClick={() => setShow(false)}
          />
          <h2 className="text-3xl text-gray-200 font-bold mb-6 mt-11 text-left">
            Travaillons ensemble sur votre projet web
          </h2>
          <p className="text-lg text-gray-200 mb-6 text-left">
            Saisissez l'opportunité d'avoir un site exceptionnel conçu par un
            développeur passionné et déterminé à atteindre votre satisfaction.
          </p>
          <div className="space-y-4">
            <form className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay="delay-[300ms]">
                <div className="">
                  <label
                    htmlFor="full-name"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Nom et prénom*
                  </label>
                  <input
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
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
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Adresse e-mail*
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
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
                <div className="">
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
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                  ></input>
                </div>
              </FadeIn>
              <FadeIn delay="delay-[450ms]">
                {" "}
                <div className="">
                  <label
                    htmlFor="project-type"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Type de projet*
                  </label>
                  <select
                    onChange={(e) => {
                      setProjectType(e.target.value);
                    }}
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
                <div className="">
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
                    type="text"
                    id="project-budget"
                    name="project-budget"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                  ></input>
                </div>
              </FadeIn>
              <FadeIn delay="delay-[550ms]">
                {" "}
                <div className="">
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
                    type="text"
                    id="project-deadline"
                    name="project-deadline"
                    className="w-full px-4 py-2 leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:shadow-outline-gray"
                  ></input>
                </div>
              </FadeIn>
              <FadeIn delay="delay-[600ms]">
                {" "}
                <div className="">
                  <label
                    htmlFor="project-description"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Description du projet*
                  </label>
                  <textarea
                    onChange={(e) => {
                      setProjectDescription(e.target.value);
                    }}
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
                <div className="">
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
            <FadeIn delay="delay-[700ms]">
              <div className="flex justify-end md:block">
                <ButtonCta onClick={(e) => handleSubmit(e)}>
                  Envoyer ma demande
                </ButtonCta>
              </div>
            </FadeIn>
          </div>
        </SlideOverLayer>
      </Transition.Root>
    </div>
  );
}

const BackgroundLayer = () => (
  <Transition.Child
    enter="transition-opacity ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 opacity-75" />
  </Transition.Child>
);

const SlideOverLayer = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <div className="fixed inset-0 overflow-hidden z-30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-2xl">
            <div className="flex h-full flex-col overflow-y-scroll bg-modal py-6 shadow-xl">
              <div className="px-4 sm:px-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);

const FadeIn = ({ delay, children }) => (
  <Transition.Child
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-6"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
);

export default Modal;
