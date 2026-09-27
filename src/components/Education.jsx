import React from "react";
import Reveal from "./Reveal.jsx";

export default function Education({ education, credentials }) {
  return (
    <section className="education" id="education" aria-labelledby="education-title">
      <div className="shell education-grid">
        <Reveal className="education-heading">
          <p className="section-kicker"><span>05</span> Education & credentials</p>
          <h2 id="education-title">Engineering foundation.<br />Security depth.</h2>
        </Reveal>
        <div className="education-list">
          {education.map((item, index) => (
            <Reveal as="article" className="education-row" key={item.qualification} delay={index * 80}>
              <span>0{index + 1}</span>
              <div><p>{item.period}</p><h3>{item.qualification}</h3><strong>{item.institution}</strong><small>{item.detail}</small></div>
            </Reveal>
          ))}
        </div>
        <Reveal className="credential-panel">
          <div className="credential-title"><h3>Professional learning</h3><span>Current status</span></div>
          {credentials.map((credential) => (
            <div className="credential" key={credential.name}>
              <strong>{credential.name}</strong>
              <span className={credential.status === "Completed" ? "completed" : "progress"}>{credential.status}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

