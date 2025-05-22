"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type CloudProps = {
  clouds?: { src: string; alt: string }[];
  leftToRight?: boolean;
};

const defaultClouds = [
  { src: "/cloud1.svg", alt: "Cloud 1" },
  { src: "/cloud2.svg", alt: "Cloud 2" },
];

const CloudRow = ({
  clouds = defaultClouds,
  leftToRight = false,
}: CloudProps) => {
  const duplicatedSlides = [...clouds, ...clouds];

  const animationDirection = leftToRight ? ["-50%", "0%"] : ["0%", "-50%"]; //this dictates direction of clouds

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-30"
        animate={{
          x: animationDirection,
        }}
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
        style={{ width: "200%" }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ width: `${100 / clouds.length}%` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CloudRow;
