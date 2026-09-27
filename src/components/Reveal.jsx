import React from "react";
import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", className = "", children, delay = 0, ...props }) {
  const reveal = useReveal();
  return (
    <Tag
      ref={reveal.ref}
      className={`${reveal.className} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

