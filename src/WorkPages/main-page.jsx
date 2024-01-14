import React, { Component, useState, useEffect } from "react";
import GetInTouch from "../Pages/GetInTOuchPage";
import HeroPage from "../Pages/HeroPage";
import MySelf from "../Pages/MySelfPage";
import MySkills from "../Pages/MySkillsPage";
import MyWork from "../Pages/MyWorkPage";
import NoteItDownPage from "./note-it-down-page";
import Illustration from "../Assets/coder.gif";
import ExperiencePage from "../Pages/ExperiencePage";
import Aos from "aos";
import "aos/dist/aos.css";
import '../index.css'
import Git from "../Assets/WorkSS/git.png";
import Linkedin from "../Assets/WorkSS/linkedin.png";
import Medium from "../Assets/WorkSS/medium.png";
function MainPage() {
  const [menu, set_menu] = useState(true);
  const [shadow, set_shadow] = useState(true);
  const [y, setY] = useState(window.scrollY);

  useEffect(
    () => {
      Aos.init({ duration: 2000 });
      window.addEventListener("scroll", e => handleNavigation(e));

      return () => {
        // return a cleanup function to unregister our function since its gonna run multiple times
        window.removeEventListener("scroll", e => handleNavigation(e));
      };
    },
    [y]
  );
  const handleNavigation = () => {
    set_shadow(false);
  };
  const ShowMenu = () => {
    // if (menu) {
    //   document.getElementById("mobile-navbar-section").style.transform =
    //     "scaleY(100%)";
    //   document.getElementById("mobile-navbar-section-menu").style.display =
    //     "block";
    // } else {
    //   document.getElementById("mobile-navbar-section").style.transform =
    //     "scaleY(0%)";
    //   document.getElementById("mobile-navbar-section-menu").style.display =
    //     "none";
    // }
    set_menu(!menu);
  };

  const newTabLink = (valu) => {
    const linkedin_url = "https://www.linkedin.com/in/govind-kshirsagar";
    const git_url = "https://github.com/Kshirsagar-Govind";
    const medium_url = "https://medium.com/@kshirsagar.govind";
    const resume_url =
      "https://drive.google.com/file/d/1c1ujUMWOxfJf1_Dbqq1qGohonEzuegLQ/view?usp=sharing";
    const url =
      valu == 1
        ? resume_url
        : valu == 2
          ? git_url
          : valu == 3
            ? medium_url
            : valu == 4
              ? linkedin_url
              : resume_url;
    window.open(url, "_blank");
  };


  return (
    <div className="w-full">
      {/* <HeroPage /> */}
      <div className="h-screen flex flex-col justify-center ">
        <div className="z-50 shadow-md w-full fixed top-0 h-fit">
          <div className="hidden md:block">
            <div className=" bg-pure navbar-section flex flex-row justify-between px-4 py-3 items-center">
              <div className="brand">
                <h3 className="text-4xl text-primary">
                  portfol<span className="text-secondary" >io</span>
                </h3>
              </div>
              <div className="menus py-4 px-4">
                <ul className="flex gap-8 text-lg text-primary">
                  <li className="transition-all hover:text-secondary font-semibold">
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="#home"
                    >
                      Home
                    </a>
                  </li>

                  <li className="transition-all hover:text-secondary font-semibold">
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="#skills"
                    >
                      Skill
                    </a>
                  </li>

                  <li className="transition-all hover:text-secondary font-semibold">
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="#experience"
                    >
                      Experience
                    </a>
                  </li>

                  <li className="transition-all hover:text-secondary font-semibold">
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="#about"
                    >
                      About
                    </a>
                  </li>

                  <li className="transition-all hover:text-secondary font-semibold">
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="bg-secondary p-1 px-3 rounded-md text-pure font-semibold">
                    <button style={{ cursor: "pointer" }} onClick={() => newTabLink(1)}>
                      RESUME
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:block md:hidden">
          <div className="transition-all fixed z-50 mobile-navbar-section top-0 w-full h-fit px-4 pb-4 bg-pure opacity-95">
            <div className="brand flex justify-between pt-5">
              <h3 className="pl-3 mb-3 text-2xl">
                portfol<span className="text-secondary font-semibold">io</span>
              </h3>
              <div
                className={menu ? "transition-all scale-x-50" : "transition-all scale-x-100"}
                onClick={() => ShowMenu()}
              >
                <div className="bg-black w-8 h-1" />
                <div className="bg-black w-8 my-1 h-1" />
                <div className="bg-black w-8 h-1" />
              </div>
            </div>
            <div id="mobile-navbar-section" className={menu ? "menus pl-3 w-full" : "hidden"}>
              <ul id="mobile-navbar-section-menu " />
              <ul className="flex flex-col gap-4 ">
                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#home"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#skills"
                  >
                    Skill
                  </a>
                </li>

                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>


                <li>
                  <button style={{ cursor: "pointer" }} onClick={() => newTabLink(1)}>
                    RESUME
                  </button>
                </li>


              </ul>
            </div>

          </div>
        </div>
        <div className="hidden md:block">

          <div
            id="home"
            className="hero-section flex items-center justify-around"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="title-part">
              <h4 className="text-2xl text-primary">

                I am{" "}
                <span style={{ fontWeight: "500", textTransform: "uppercase" }}>
                  {" "}
                  Govind Kshirsagar
                </span>

              </h4>
              <h1 className="text-7xl text-primary">
                UI/UX <span className="text-secondary">DESIGN</span>ER
                <br />
                FULL STACK <span className="text-secondary">DEVELOP</span>ER
              </h1>
              {/* <button
                className="text-2xl text-primary"
                onClick={() => {
                  window.open("mailto:govindkshgk@gmail.com?subject=&body=");
                }}
              >
                Lets, talk
              </button> */}
              <span className="flex gap-3 py-4">
                <img className="cursor-pointer hover:translate-y-2 transition-all" onClick={() => newTabLink(2)} src={Git} width={30} alt="img" />
                {/* <img onClick={() => newTabLink(3)} src={Medium} alt="img" /> */}
                <img className="cursor-pointer hover:translate-y-2 transition-all" onClick={() => newTabLink(4)} src={Linkedin} width={30} alt="img" />
              </span>
            </div>
            <div className="illustration-part">
              <img src={Illustration} alt="" />
            </div>
          </div>
        </div>

        <div className="sm:block md:hidden">
          <div
            id="home"
            className="hero-section flex items-center justify-center align-middle flex-col mt-10"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="title-part w- text-center">
              <h4 className="text-md">
                I am{" "}
                <span style={{ fontWeight: "500", textTransform: "uppercase" }}>
                  {" "}
                  Govind Kshirsagar
                </span>,
              </h4>
              <h1 className="text-3xl">
                UI/UX <span className="text-secondary">DESIGN</span>ER
                <br />
                FULL STACK <span className="text-secondary">DEVELOP</span>ER
              </h1>
              <div className="social-section">
                <div className="socials-logo">
                  <img onClick={() => newTabLink(2)} src={Git} alt="img" />
                  {/* <img onClick={() => newTabLink(3)} src={Medium} alt="img" /> */}
                  <img onClick={() => newTabLink(4)} src={Linkedin} alt="img" />
                </div>
                <div className="hr-line" />
                <div className="resume-btn">
                  <button style={{ cursor: "pointer" }} onClick={() => newTabLink(1)}>
                    RESUME
                  </button>
                </div>
              </div>
              <button
                className="text-lg"
                onClick={() => {
                  window.open("mailto:govindkshgk@gmail.com?subject=&body=");
                }}
              >
                Hi
              </button>
            </div>
            <div className="illustration-part">
              <img src={Illustration} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="px-12 bg-pure">
        <MySkills />

      </div>
      <div id="experience p-4" className="px-12 bg-pure">
        <ExperiencePage />

        <MyWork />
      </div>
      {/*
      <div id="about">
        <MySelf />
      </div>
      <div id="contact">
        <GetInTouch />
      </div> */}
    </div>
  );
}

export default MainPage;
