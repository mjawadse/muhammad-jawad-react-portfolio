import React from "react";
import Reveal from "./Reveal.jsx";

export default function About({ content }) {
  return (
    <section className="about ink-section" id="about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <Reveal className="section-meta light-meta">
          <span>01</span><p>Profile</p>
        </Reveal>
        <Reveal className="about-heading" delay={80}>
          <p className="micro-label micro-light">{content.eyebrow}</p>
          <h2 id="about-title">{content.headline}</h2>
        </Reveal>
        <Reveal className="about-copy" delay={140}>
          <p>{content.body}</p>
          <blockquote>{content.takeaway}</blockquote>
        </Reveal>
        <div className="principles" aria-label="Working principles">
          {[
            "Understand the problem",
            "Engineer the right control",
            "Make adoption practical"
          ].map((principle, index) => (
            <Reveal key={principle} className="principle" delay={index * 70}>
              <span>0{index + 1}</span><p>{principle}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

