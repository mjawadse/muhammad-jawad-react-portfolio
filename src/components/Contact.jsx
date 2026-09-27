import React from "react";
import Reveal from "./Reveal.jsx";

export default function Contact({ content, links, name }) {
  return (
    <section className="contact ink-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <Reveal className="contact-copy">
          <p className="micro-label micro-light">{content.eyebrow}</p>
          <h2 id="contact-title">{content.headline}</h2>
          <p>{content.body}</p>
          <a className="email-link" href={`mailto:${links.email}`}>{links.email} <span>↗</span></a>
          <div className="social-links">
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={links.cv} target="_blank" rel="noreferrer">Download CV ↓</a>
          </div>
        </Reveal>
        <Reveal as="form" className="contact-form" delay={110} name="portfolio-contact" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="company-website">
          <input type="hidden" name="form-name" value="portfolio-contact" />
          <p className="honeypot"><label>Leave empty<input name="company-website" tabIndex="-1" autoComplete="off" /></label></p>
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          </div>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button type="submit">Send message <span>→</span></button>
        </Reveal>
      </div>
      <footer className="shell footer">
        <p>© {new Date().getFullYear()} {name}</p>
        <p>Software Engineering · ServiceNow · Cybersecurity</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}

