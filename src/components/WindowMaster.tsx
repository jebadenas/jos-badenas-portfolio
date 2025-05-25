// WindowMaster.tsx
"use client";
import React, { useState } from "react";
import Window from "./Window";
import AboutMe from "./AboutMe";
import MainWindow from "./MainWindow";
import Contact from "./Contact";

const WindowMaster = () => {
  const [topZIndex, setTopZIndex] = useState(1); // the next z-index to assign (increments)
  const [zIndices, setZIndices] = useState<{ [key: string]: number }>({
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
  });

  const bringToFront = (id: string) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setZIndices((prev) => ({ ...prev, [id]: nextZ }));
  };
  const [openWindows, setOpenWindows] = useState<{ [key: string]: boolean }>({
    about: false,
    journal: false,
    projects: false,
    contact: false,
  });

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => ({ ...prev, [id]: false }));
  };

  const openWindow = (id: string) => {
    setOpenWindows((prev) => ({ ...prev, [id]: true }));
    bringToFront(id);
  };

  return (
    <>
      <MainWindow
        onButtonClick={(label: string) =>
          openWindow(label.toLowerCase().replace(" ", ""))
        }
      />
      <div className="relative">
        {openWindows.about && (
          <Window
            name="about me"
            zIndex={zIndices["0"]}
            onFocus={() => bringToFront("0")}
            onClose={() => closeWindow("about")}
            initialPosition={{ top: 100, left: 100 }}
          >
            <AboutMe />
          </Window>
        )}
        {openWindows.journal && (
          <Window
            name="journal"
            zIndex={zIndices["1"]}
            onFocus={() => bringToFront("1")}
            onClose={() => closeWindow("journal")}
            initialPosition={{ top: 200, left: 200 }}
          />
        )}
        {openWindows.projects && (
          <Window
            name="projects"
            zIndex={zIndices["2"]}
            onFocus={() => bringToFront("2")}
            onClose={() => closeWindow("projects")}
            initialPosition={{ top: 150, left: 500 }}
          />
        )}
        {openWindows.contact && (
          <Window
            name="contact"
            zIndex={zIndices["3"]}
            onFocus={() => bringToFront("3")}
            onClose={() => closeWindow("contact")}
            initialPosition={{ top: 250, left: 200 }}
          >
            <Contact />
          </Window>
        )}
      </div>
    </>
  );
};

export default WindowMaster;
