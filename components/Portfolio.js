import Image from "next/image";
import climatApp from "../assets/climatApp.png";
import weneedlove from "../assets/weneedlove.png";

const projects = [
  {
    title: "ClimatApp",
    description:
      "Une application pour aider les gens à calculer leur empreinte carbone, en posant une série de questions sur leurs habitudes, pour ensuite proposer un abonnement qui leur permettra de financer des actions dans d'autres associations ayant un impact sur le climat. Les utilisateurs pourront ainsi compenser leur empreinte carbone et agir en faveur de la planète.",
    image: climatApp,
    caracteristics: [
      "Gestion de l'authentification des utilisateurs",
      "Calcul de l'empreinte carbone des utilisateurs en fonction de leurs habitudes",
      "Abonnement mensuel pour financer des actions en faveur du climat dans d'autres associations",
      "Don mensuel via Stripe",
      "Compensation de l'empreinte carbone et action en faveur de la planète",
      "Proposition d'actions pour agir en faveur de la planète",
    ],
    tehcno: [
      "React/Next.js pour la partie front-end de l'application",
      "Tailwind CSS",
      "Supabase pour le back-end et le traitement des données",
      "Stripe pour la gestion des paiements en ligne",
    ],
  },
  {
    title: "WeNeedLove",
    description:
    "Une application qui permet à ses utilisateurs de se soutenir en partageant une histoire pour laquelle ils ont besoin de soutien. Les histoires partagées sont consultables de manière aléatoire par les autres utilisateurs qui peuvent laisser un seul et unique commentaire afin d'envoyer un message de soutien. Les commentaires peuvent être réagis avec 6 émoticônes différentes et sont répertoriés dans la piggy bank où l'utilisateur peut consulter le nombre total de réactions reçues sur ses commentaires.",
    image: weneedlove,
    caracteristics: [
      "Gestion de l'authentification des utilisateurs",
    "Partage d'histoires personnelles pour recevoir du soutien",
    "Consultation aléatoire des histoires partagées par les autres utilisateurs",
    "Laisser un seul et unique commentaire pour envoyer un message gentil",
    "Réactions possibles avec 6 émoticônes différentes",
    "Consultation de la piggy bank pour voir le nombre total de réactions reçues sur ses commentaires"
    ],
    tehcno: [
    "React/Next.js pour la partie front-end de l'application",
    "Tailwind CSS pour le design",
    "Supabase pour le back-end et le traitement des données",
    ],
    },
];

const Portfolio = () => {
  return (
    <section id="projects" className="bg-gray-100 py-11 px-4 w-full bg-interSection">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-left md:text-center mb-8 text-gray-200">Exemples de projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-fit mb-4 z-10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={608}
                  height={320}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-800 text-base mb-2">{project.description}</p>
              <p className="text-gray-800 text-base mb-2 font-bold">Caractéristiques:</p>
              <ul className="list-disc ml-6 mb-2 text-gray-800">
                {project.caracteristics.map((caracteristic, index) => (
                  <li key={index}>{caracteristic}</li>
                ))}
              </ul>
              <p className="text-gray-800 text-base mb-2 font-bold">
                Technologies utilisées:
              </p>
              <ul className="list-disc ml-6 text-gray-800">
                {project.tehcno.map((tehcnologie, index) => (
                  <li key={index}>{tehcnologie}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
