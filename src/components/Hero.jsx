import React from "react";
import Reveal from "./Reveal.jsx";
import OrbitVisual from "./OrbitVisual.jsx";

export default function Hero({ identity, links, stats }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-frame" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="shell hero-grid">
        <Reveal className="hero-copy">
          <p className="micro-label">Software engineering meets secure enterprise workflows</p>
          <h1 id="hero-title"><span>Muhammad</span><span>Jawad</span></h1>
          <p className="hero-role">{identity.headline}</p>
          <p className="hero-intro">{identity.intro}</p>
          <p className="location"><i aria-hidden="true" />{identity.location}</p>
          <div className="hero-actions">
            <a className="button button-blue" href="#work">Explore my work <span>→</span></a>
            <a className="button button-outline" href={links.cv} target="_blank" rel="noreferrer">Download CV <span>↓</span></a>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={140}><OrbitVisual /></Reveal>
      </div>
      <div className="shell stat-grid" aria-label="Career highlights">
        {stats.map((stat, index) => (
          <div className="stat" key={stat.label}>
            <span>0{index + 1}</span><strong>{stat.value}</strong><small>{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

