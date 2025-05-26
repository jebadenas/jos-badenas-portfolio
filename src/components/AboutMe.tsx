import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-row p-6 gap-[20px] border-b border-[#D9D9D9]">
        <div className="relative rounded-full overflow-hidden w-[150px] aspect-square">
          <Image
            src="/photoWithGaben.jpg"
            alt="Jos Badenas and Gabe Newell"
            fill
            className="object-cover"
          ></Image>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h2 className="font-main text-4xl">jos badenas</h2>
          <div>
            <p>software engineer based in auckland, nz 🇳🇿</p>
            <p>cs and finance student at the university of auckland.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-[10px]">
        <p>{`kia ora! i'm jos`}</p>
        <p>
          {`that's me in the picture on the left next to Gabe Newell (co-founder
          of Steam and Valve)`}
        </p>
        <div>
          <p>i am currently:</p>
          <ul className="list-disc pl-[25px]">
            <li>
              an undergraduate student studying computer science and finance
            </li>
            <li>daydreaming of my future software engineering job</li>
            <li>trying to finish my todo list for the day</li>
          </ul>
        </div>
        <div>
          <p>for fun, i:</p>
          <ul className="list-disc pl-[25px]">
            <li>
              play guitar, learning one by one, songs from my favourite movies
            </li>
            <li>progressively overloading 🏋️‍♂️</li>
            <li>{`go on long walks on the beach (not a joke)`}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
