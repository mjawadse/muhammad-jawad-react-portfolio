import React from "react";
import Reveal from "./Reveal.jsx";
import ProjectVisual from "./ProjectVisual.jsx";

export default function Work({ projects }) {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="work-network" aria-hidden="true" />
      <div className="shell">
        <div className="work-heading">
          <Reveal>
            <p className="section-kicker section-kicker-light"><span>04</span> Selected work</p>
            <h2 id="work-title">Engineering made practical.</h2>
          </Reveal>
          <Reveal as="p" delay={100}>Projects that connect software, enterprise platforms and security thinking.</Reveal>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal as="article" className={`project-card project-${index + 1}`} key={project.title} delay={(index % 2) * 100}>
              <div className="project-topline"><span>CASE / {project.number}</span><small>{project.type}</small></div>
              <ProjectVisual number={project.number} tone={project.tone} />
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <details>
                <summary>View technical contribution <span>+</span></summary>
                <ul>{project.points.map((point) => <li key={point}>↳ {point}</li>)}</ul>
              </details>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

