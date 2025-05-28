"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type ProjectsCardProps = {
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  description1?: string;
  description2?: string;
  linkName?: string;
  linkSrc?: string;
};

const ProjectsCard = ({
  heading = "project name",
  imageSrc = "/projectsImages/default.jpg",
  imageAlt = "painted flower vase",
  description1 = "this is the headline for the project, i am running out of things to say hehe xd",
  description2 = "this will have more things about the project but people wont be bothered reading (will include technologies and role i used and whatnot)",
  linkName,
  linkSrc,
}: ProjectsCardProps) => {
  return (
    <div className="flex flex-row gap-10 max-w-[850px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={280}
        height={190}
        className="rounded"
      ></Image>
      <div className="flex flex-col gap-4">
        <h2 className="font-main text-3xl">{heading}</h2>
        <div>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        <div className="flex flex-row justify-center">
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="flex border w-[100px] cursor-pointer text-sm justify-center"
          >
            {linkName ? <a href={linkSrc}>{linkName}</a> : <p>link</p>}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
