import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-end items-center">
      <ul className="flex flex-row gap-[20px] p-[10px]">
        <li>
          <a
            href="https://github.com/jebadenas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"icons/gitHub.svg"}
              alt={"github icon"}
              width={50}
              height={50}
            ></Image>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/josbadenas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"icons/linkedIn.svg"}
              alt={"linkedIn icon"}
              width={50}
              height={50}
            ></Image>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
