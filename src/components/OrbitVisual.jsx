import React from "react";

export default function OrbitVisual() {
  return (
    <div className="orbit-stage" aria-hidden="true">
      <div className="orbit-glow" />
      <div className="orbit orbit-one"><i /><i /></div>
      <div className="orbit orbit-two"><i /><i /></div>
      <div className="orbit orbit-three"><i /></div>
      {/* <div className="orbit-core">
        <span>MJ</span>
        <small>CAREER OS</small>
      </div> */}
      <div className="orbit-core profile-core">
  <img src="/profile-photo.jfif" alt="Muhammad Jawad" />
</div>
      <div className="signal signal-one"><i />SOFTWARE</div>
      <div className="signal signal-two"><i />SERVICENOW</div>
      <div className="signal signal-three"><i />SECURITY</div>
      <div className="data-card data-card-one">
        <span>01 / PLATFORM</span>
        <strong>WORKFLOWS ACTIVE</strong>
        <i />
      </div>
      <div className="data-card data-card-two">
        <span>02 / DEFENCE</span>
        <strong>SECURITY-AWARE</strong>
        <i />
      </div>
      <div className="coordinate">55.8642° N · 4.2518° W</div>
    </div>
  );
}

