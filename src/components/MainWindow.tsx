import React from "react";
import MainWindowButtons from "./MainWindowButtons";

const buttons = [
  {
    imageSrc: "icons/personIcon.svg",
    label: "about me",
  },
  {
    imageSrc: "icons/journalIcon.svg",
    label: "journal",
  },
  {
    imageSrc: "icons/folderIcon.svg",
    label: "projects",
  },
  {
    imageSrc: "icons/emailIcon.svg",
    label: "contact",
  },
];

const MainWindow = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex flex-col border-4 border-blue-700 text-white rounded-t-lg">
      <div className="bg-blue-700 p-1">home</div>

      <div className="flex flex-col items-center py-[100px] px-[130px] gap-[30px]">
        <p className="text-black text-9xl ">I&apos;m Jos</p>
        <h2 className="text-black text-3xl">
          cs student, aspiring software engineer
        </h2>

        <div className="flex flex-row gap-[30px]">
          {buttons.map((btn) => (
            <MainWindowButtons
              key={btn.label}
              imageSrc={btn.imageSrc}
              label={btn.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
