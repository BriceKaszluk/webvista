import React from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const SocialLink = ({ image, link, className }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <Image
              className={twMerge(
                "w-8 h-8 mx-2",
                className
              )}
          src={image}
          alt="Social link icon"
          width={32}
          height={32}
        />
      </div>
    </Link>
  );
};

export default SocialLink;
