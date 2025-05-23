"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import useSound from "use-sound";

type Props = {
  imageSrc: string;
  label: string;
  onClick: () => void;
};

const MainWindowButtons = ({ imageSrc, label, onClick }: Props) => {
  const [play] = useSound("/sounds/pop.mp3");

  return (
    <div className="flex flex-col items-center justify-center w-[100px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          play();
          onClick();
        }}
      >
        <Image
          src={imageSrc}
          alt={label}
          width={100}
          height={100}
          className="object-contain"
        ></Image>
        <p className="text-xl text-[#4C3535] font-main">{label}</p>
      </motion.button>
    </div>
  );
};

export default MainWindowButtons;
