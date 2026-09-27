import React, { useEffect, useState } from "react";

const nav = [
  ["Work", "#work"],
  ["Expertise", "#expertise"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Education", "#education"]
];

export default function Header({ identity, links }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="site-header">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="shell nav-shell">
        <a className="brand" href="#top" aria-label={`${identity.name}, home`}>
          <strong>{identity.name}</strong><i aria-hidden="true" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
          <b>{open ? "Close" : "Menu"}</b>
        </button>
        <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-social" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="nav-cv" href={links.cv} target="_blank" rel="noreferrer">CV ↓</a>
        </nav>
      </div>
    </header>
  );
}

