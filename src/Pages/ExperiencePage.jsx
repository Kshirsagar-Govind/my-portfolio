import React, { Component, useEffect, useState } from "react";
import "../index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../Helpers/SectionHeader";

function ExperiencePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="MyWorkPage px-2">
          
      <SectionTitle title={"Work Experience"}/>
      <div className="exp-section" data-aos="fade-in" data-aos-once="true">
        <h3>⦾ medtigo, Pune (WFH)</h3>
        <h4>Dec 2022 - Present</h4>
        <p>
          I am working here as a MERN stack Developer. <br />
          <br />
          My work includes:<br />
          <u style={{ textDecoration: "none" }}>
            <li>Maintaining The web application and websites.</li>
            <li>Creating reusable or efficient React components.</li>
            <li>Creating Complex APIs and DB Model Designing.</li>
          </u>
        </p>
      </div>
      <br />
      <br />
      <div className="exp-section" data-aos="fade-in" data-aos-once="true">
        <h3>⦾ HACK-X Security, Pune</h3>
        <h4>May 2021 - November 2022</h4>
        <p>
          I worked there as a Software Developer. <br /> I had the
          responsibilities of developing and designing the websites and web
          applications. Specifically, we were using MERN stack for the
          development. <br /> <br />
          My work includes:<br />
          <u style={{ textDecoration: "none" }}>
            <li>Deploying websites and web apps to AWS.</li>
            <li>Maintaining The web applicatio and websites.</li>
            <li>Creating reusable or efficient React components.</li>
            <li>Designing better UX/UI designs.</li>
          </u>
        </p>
      </div>
     
    </div>
  );
}

export default ExperiencePage;
