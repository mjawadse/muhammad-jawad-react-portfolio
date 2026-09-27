import React from "react";

export default function ProjectVisual({ number, tone }) {
  return (
    <div className={`project-visual tone-${tone}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit-a"><i /><i /><i /></div>
      <div className="visual-orbit visual-orbit-b"><i /><i /></div>
      <span className="visual-code">CASE / {number}</span>
      <strong>MJ</strong>
    </div>
  );
}

