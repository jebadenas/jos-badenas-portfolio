import AboutMe from "@/components/AboutMe";
import React from "react";
import { dmSansFont, myFont } from "@/fonts";

const page = () => {
  return (
    <div
      className={`relative min-h-screen ${dmSansFont.variable} ${myFont.variable}`}
    >
      <AboutMe />
    </div>
  );
};

export default page;
