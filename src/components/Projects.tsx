import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="flex flex-col p-10 gap-20">
      <ProjectsCard
        heading="volunteers club web app"
        imageSrc="/projectsImages/volunteers.jpg"
        imageAlt="screenshot of the volunteers club web app"
        description1="Developed a website and admin dashboard for event and member management using React, Express, Node.js, and Firebase."
        description2="Collaborated with a team of developers to build a website and admin dashboard for the University of Auckland Volunteers Club, which has over 2,000 members. "
        linkSrc="https://github.com/UoaWDCC/volunteers"
        linkName="github repo"
      />
      <ProjectsCard
        heading="wdcc x sesa hackathon website"
        imageSrc="/projectsImages/hackathon.jpg"
        imageAlt="screenshot of the wdcc x sesa hackathon website"
        description1="developed a promotional website using Next.js and TypeScript."
        description2="the Software Engineering Students Association (SESA) and the Web Development & Consulting Club (WDCC) hackathon is the largest tertiary hackathon in new zealand. the site was designed to showcase event details, encourage sign-ups, and highlight sponsor partnerships."
        linkSrc="https://github.com/sesauoa/wdccxsesahackathon.com"
        linkName="github repo"
      />
      <ProjectsCard
        heading="portfolio website"
        imageSrc="/projectsImages/default.jpg"
        imageAlt="screenshot of my portfolio website"
        description1="developed a personal website using Next.js and TypeScript."
        description2="my personal website was made for me to put everything about me into one place. i post blogs about my unviersity life and projects i've worked on"
        linkSrc="https://www.josbadenas.com/"
        linkName="ur already here!"
      />
    </div>
  );
};

export default Projects;
