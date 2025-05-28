import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="flex flex-col p-10 gap-20">
      <ProjectsCard
        heading="volunteers club web app"
        imageSrc="/projectsImages/volunteers.jpg"
      />
      <ProjectsCard
        heading="wdcc x sesa hackathon website"
        imageSrc="/projectsImages/hackathon.jpg"
      />
      <ProjectsCard />
    </div>
  );
};

export default Projects;
