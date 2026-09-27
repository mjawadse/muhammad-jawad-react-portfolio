import React from "react";
import Reveal from "./Reveal.jsx";

export default function Experience({ items }) {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <div className="section-heading split-heading">
          <Reveal>
            <p className="section-kicker"><span>03</span> Experience</p>
            <h2 id="experience-title">Building dependable systems.</h2>
          </Reveal>
          <Reveal as="p" className="heading-copy" delay={100}>
            Genuine technical work presented without exposing confidential client detail.
          </Reveal>
        </div>
        <div className="experience-list">
          {items.map((item, index) => (
            <Reveal as="article" className="experience-row" key={`${item.company}-${item.role}`} delay={index * 90}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-meta"><span>{item.period}</span><p>{item.company}</p></div>
              <div className="experience-body">
                <h3>{item.role}</h3><p className="experience-summary">{item.summary}</p>
                <ul>{item.points.map((point) => <li key={point}>↳ {point}</li>)}</ul>
                <div className="inline-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

