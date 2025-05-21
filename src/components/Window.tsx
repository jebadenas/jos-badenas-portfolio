"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { motion, useDragControls } from "motion/react";

type WindowProps = {
  name: string;
  children?: ReactNode;
};

const Window = ({ name = "Window", children }: WindowProps) => {
  const dragControls = useDragControls();

  return (
    <motion.div
      dragControls={dragControls}
      dragListener={false}
      dragTransition={{ power: 0 }}
      drag
      className="inline-flex flex-col border-4 border-[#0055EA] rounded-t-lg bg-white"
    >
      <div
        className="bg-[#0055EA] p-1 flex flex-row justify-between items-center"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <p className="text-white font-main">{name}</p>
        <button className="bg-[#DF4A24] text-white py-1 px-2 rounded-md">
          X
        </button>
      </div>
      {children ?? (
        <div className="flex flex-col justify-center items-center gap-10 p-5">
          OH NO!!!!!!! i am currently working on this part of the website please
          come back at a later time!!!!
          <Image
            src={"/tralalelo.webp"}
            width={300}
            height={300}
            alt={"shark in nike shoes on the beach"}
          ></Image>
        </div>
      )}
    </motion.div>
  );
};

export default Window;
