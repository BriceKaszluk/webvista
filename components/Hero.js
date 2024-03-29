import ModalForQuote from './ModalForQuote';

function Hero() {
  return (
    <div id="hero" className="flex flex-col justify-center items-center h-screen bg-main bg-cover w-screen text-center border-b border-gray-200">
      <h1 className="text-4xl font-bold mb-4 text-gray-200">Révélez votre image professionnelle en ligne</h1>
      <h2 className="text-lg font-medium mb-8 text-gray-200">Contactez-moi pour un service personnalisé, rapide et efficace.</h2>
      <ModalForQuote title="CRÉER MON SITE WEB" className="mx-auto" />
    </div>
  );
}

export default Hero;
