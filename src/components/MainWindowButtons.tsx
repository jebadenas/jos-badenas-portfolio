import React from "react";
import Image from "next/image";

type Props = {
  imageSrc: string;
  label: string;
};

const MainWindowButtons = ({ imageSrc, label }: Props) => (
  <div>
    <button>
      <Image
        src={imageSrc}
        alt={label}
        width={100}
        height={100}
        className="object-contain"
      ></Image>
      <p className="text-xl text-black">{label}</p>
    </button>
  </div>
);

export default MainWindowButtons;
