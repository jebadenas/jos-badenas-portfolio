import React from "react";
import MainWindow from "./MainWindow";
import Window from "./Window";
import AboutMe from "./AboutMe";

const WindowMaster = () => {
  return (
    <div>
      {/* <MainWindow /> */}
      <Window name="test">
        <AboutMe />
      </Window>
      <Window name="test" />
      <Window name="test" />
      <Window name="test" />
    </div>
  );
};

export default WindowMaster;
