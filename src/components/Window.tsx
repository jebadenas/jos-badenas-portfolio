// Window.tsx
"use client";
import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";
import useSound from "use-sound";

type WindowProps = {
  name: string;
  children?: ReactNode;
  zIndex?: number;
  onFocus?: () => void;
  onClose?: () => void;
  initialPosition?: { top: number; left: number };
};

const Window = ({
  name = "Window",
  children,
  zIndex = 1,
  onFocus,
  onClose,
  initialPosition,
}: WindowProps) => {
  const dragControls = useDragControls();
  const [play] = useSound("/sounds/good.mp3");

  useEffect(() => {
    onFocus?.(); // Automatically bring to front when mounted
  }, []);

  return (
    <motion.div
      dragControls={dragControls}
      dragListener={false}
      dragTransition={{ power: 0 }}
      drag
      style={{
        zIndex,
        position: "absolute",
        top: initialPosition?.top ?? 100,
        left: initialPosition?.left ?? 100,
      }} // make it absolutely positioned
      className="inline-flex flex-col border-4 border-[#0055EA] rounded-t-lg bg-white shadow-md text-black"
      onPointerDown={onFocus}
    >
      <div
        className="bg-[#0055EA] p-1 flex flex-row justify-between items-center"
        onPointerDown={(e) => {
          dragControls.start(e);
          onFocus?.();
        }}
      >
        <p className="text-white font-main">{name}</p>
        <button
          className="bg-[#DF4A24] text-white py-1 px-2 rounded-md cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
            play();
          }}
        >
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
          />
        </div>
      )}
    </motion.div>
  );
};

export default Window;
