import React from "react";
import MainWindowButtons from "./MainWindowButtons";

const buttons = [
  {
    imageSrc: "icons/personIcon.svg",
    label: "about",
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

const MainWindow = ({
  onButtonClick,
}: {
  onButtonClick: (label: string) => void;
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex flex-col border-4 border-[#0055EA] text-white rounded-t-lg">
      <div className="bg-[#0055EA] p-1">home</div>

      <div className="flex flex-col items-center py-[100px] px-[110px] gap-[20px] bg-white">
        <div className="flex flex-col items-center justify-content">
          <p className="text-black text-7xl xl:text-8xl font-myFont mb-[-20px]">
            hi! i&apos;m jos
          </p>
          <h2 className="text-[#4C3535] text-xl  lg:text-2xl font-main text-center">
            cs student, future software engineer
          </h2>
        </div>

        <div className="flex flex-row gap-[30px] w-full">
          {buttons.map((btn) => (
            <MainWindowButtons
              key={btn.label}
              imageSrc={btn.imageSrc}
              label={btn.label}
              onClick={() => onButtonClick(btn.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
