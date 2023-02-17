function Card({ img, children }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full text-center shadow-sm shadow-white">
        <figure>
          <img
            decoding="async"
            loading="lazy"
            src={img}
            alt="icon benefits"
            width="48"
            height="48"
            className="mx-auto"
          />
        </figure>
        {children}
      </div>
    </div>
  );
}

export default Card;
