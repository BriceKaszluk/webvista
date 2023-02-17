import Image from "next/image";

function Card({ img, alt, children }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full text-center shadow-sm shadow-white">
        <figure>
        <Image
            className="mx-auto"
            src={img}
            alt={alt}
            width={48}
            height={48}
          />
        </figure>
        {children}
      </div>
    </div>
  );
}

export default Card;
