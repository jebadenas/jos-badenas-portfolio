import Window from "@/components/Window";
import React from "react";
import { dmSansFont, myFont } from "@/fonts";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <div
      className={`relative min-h-screen ${dmSansFont.variable} ${myFont.variable}`}
    >
      <Window name="projects">
        <Projects />
      </Window>
    </div>
  );
};

export default page;
