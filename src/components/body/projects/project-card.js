import React from "react";
import "./project-card.css";
import WOW from "wowjs";
import { AnimationOnScroll } from "react-animation-on-scroll";
function ProjectCard({ project }) {
  return (
    <AnimationOnScroll animateIn="animate__fadeInRight">
      <div className="project-card ">
        <div className="project-info">
          <label className="project-title">{project.title}</label>
          <div className="project-links">
            {project.demo && (
              <a className="project-link" href={project.demo}>
                <div className="link-button">
                  <i class="fi-rr-globe"></i>Demo
                </div>
              </a>
            )}
            {project.github && (
              <a className="project-link" href={project.github}>
                <div className="link-button wow bo">
                  <i class="devicon-github-original colored"></i>Github
                </div>
              </a>
            )}
          </div>
          <p>{project.about}</p>
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        </div>
        <img src={project.image} className="project-photo" />
      </div>
    </AnimationOnScroll>
  );
}

export default ProjectCard;