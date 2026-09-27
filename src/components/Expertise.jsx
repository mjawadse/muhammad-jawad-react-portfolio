import React from "react";
import Reveal from "./Reveal.jsx";

export default function Expertise({ items }) {
  return (
    <section className="expertise" id="expertise" aria-labelledby="expertise-title">
      <div className="shell">
        <div className="section-heading split-heading">
          <Reveal>
            <p className="section-kicker"><span>02</span> Expertise</p>
            <h2 id="expertise-title">A broad toolkit.<br />One connected story.</h2>
          </Reveal>
          <Reveal as="p" className="heading-copy" delay={100}>
            I work where enterprise platforms, modern software and cybersecurity overlap.
          </Reveal>
        </div>
        <div className="expertise-grid">
          {items.map((item, index) => (
            <Reveal as="article" className="expertise-card" key={item.title} delay={index * 90}>
              <div className="card-index"><span>{item.number}</span><small>{item.kicker}</small></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="tag-list" aria-label={`${item.title} skills`}>
                {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              <div className="card-corner" aria-hidden="true">↗</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

