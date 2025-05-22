// WindowMaster.tsx
"use client";
import React, { useRef, useState } from "react";
import Window from "./Window";
import AboutMe from "./AboutMe";
import MainWindow from "./MainWindow";

const WindowMaster = () => {
  const [topZIndex, setTopZIndex] = useState(1); // the next z-index to assign (increments)
  const [zIndices, setZIndices] = useState<{ [key: string]: number }>({
    "0": 1,
    "1": 0,
    "2": 0,
    "3": 0,
  });

  const bringToFront = (id: string) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setZIndices((prev) => ({ ...prev, [id]: nextZ }));
  };

  return (
    <div className="relative">
      <Window
        name="about me"
        zIndex={zIndices["0"]}
        onFocus={() => bringToFront("0")}
      >
        <AboutMe />
      </Window>
      <Window
        name="journal"
        zIndex={zIndices["1"]}
        onFocus={() => bringToFront("1")}
      />
      <Window
        name="projects"
        zIndex={zIndices["2"]}
        onFocus={() => bringToFront("2")}
      />
      <Window
        name="contact"
        zIndex={zIndices["3"]}
        onFocus={() => bringToFront("3")}
      />
    </div>
  );
};

export default WindowMaster;
