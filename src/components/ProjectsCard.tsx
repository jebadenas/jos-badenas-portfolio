"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ProjectsCard = () => {
  return (
    <div className="flex flex-row gap-10 max-w-[850px]">
      <Image
        src="/projectsImages/default.jpg"
        alt="painted flower vase"
        width={280}
        height={190}
        className="rounded"
      ></Image>
      <div className="flex flex-col gap-4">
        <h2 className="font-main text-3xl">project name</h2>
        <div>
          <p>
            this is the headline for the project, i am running out of things to
            say hehe xd
          </p>
          <p>
            this will have more things about the project but people wont be
            bothered reading (will include technologies and role i used and
            whatnot)
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="flex border w-[100px] cursor-pointer text-sm justify-center"
          >
            <a href="">link</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
