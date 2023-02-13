import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./projects.css";
function Projects() {
  const data = ProjectData;
  return (
   
      <div className="projects">
        <Separator />
        <label className="section-title">Projects</label>
     <AnimationOnScroll animateIn="animate__fadeInRight">
        <div>
          {data.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
    </AnimationOnScroll>
      </div>

  );
}

export default Projects;
