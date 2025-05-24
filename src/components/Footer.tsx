"use client";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-[#0055EA] fixed bottom-0 w-full text-white">
      <motion.button
        whileHover={{ backgroundColor: "#C4DA97" }}
        transition={{ duration: 0.2 }}
        className="bg-[#B8D380] bold italic text-white text-2xl px-6 py-2 rounded-r-2xl font-main font-bold"
      >
        jos badenas
      </motion.button>
    </div>
  );
};

export default Footer;
