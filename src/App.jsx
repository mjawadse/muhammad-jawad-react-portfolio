import React from "react";
import data from "./content/site.json";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Experience from "./components/Experience.jsx";
import Work from "./components/Work.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Header identity={data.identity} links={data.links} />
      <main id="main-content">
        <Hero identity={data.identity} links={data.links} stats={data.stats} />
        <About content={data.about} />
        <Expertise items={data.expertise} />
        <Experience items={data.experience} />
        <Work projects={data.projects} />
        <Education education={data.education} credentials={data.credentials} />
        <Contact content={data.contact} links={data.links} name={data.identity.name} />
      </main>
    </>
  );
}

