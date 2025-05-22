import React from "react";
import CloudRow from "./CloudRow";
import Image from "next/image";

const clouds1 = [
  { src: "cloud2.svg", alt: "Cloud B" },
  { src: "cloud1.svg", alt: "Cloud A" },
];

const clouds2 = [
  { src: "cloud1.svg", alt: "Cloud A" },
  { src: "cloud3.svg", alt: "Cloud B" },
];

const Background = () => {
  return (
    <div className="flex flex-col h-screen absolute inset-0 pointer-events-none">
      <div className="flex flex-col flex-grow gap-30">
        <CloudRow clouds={clouds1} leftToRight={false} />
        <CloudRow clouds={clouds2} leftToRight={true} />
      </div>

      <div className="w-full h-[380px] relative">
        <Image
          src="greenHill.svg"
          alt="green hill"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Background;
