import React, { useEffect } from "react";
import "../index.css";
import CSSLogo from "../Assets/CSS_logo.png";
import HTMLLogo from "../Assets/HTML_logo.png";
import NextJS_logo from "../Assets/nextjs_logo.png";
import JavaLogo from "../Assets/Java_log.png";
import JSLogo from "../Assets/Javascript_logo.png";
import MongoLogo from "../Assets/MongoDB_logo.png";
import SQLLogo from "../Assets/MySQL_logo.png";
import NodeLogo from "../Assets/node_js_logo.png";
import ReactLogo from "../Assets/React_logo.png";
import ReduxLogo from "../Assets/Redux_logo.png";
import SocketLogo from "../Assets/socket_logo.png";
import CPPLogo from "../Assets/c++_icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../Helpers/SectionHeader";
function MySkills() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div id="skills" className="MySkillsPage">
      <div className="">
        <SectionTitle title={'My Skills'} />
      </div>
      <div className="skill-section" data-aos="fade-up" data-aos-once="true">
        <div className="skill-1-wrapper flex flex-wrap justify-between text-white items-center py-4 w-full">
          <div className="skill-1-wrapper bg-secondary w-[300px] flex justify-around items-center py-4 px-4 rounded-2xl mb-2">
            <div className="w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center">
              <img src={JSLogo} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div className="text-pure text-3xl pr-6">
              <h1>Javascript</h1>
              {/* <p>details</p> */}
            </div>
          </div>
          <div className="skill-1-wrapper bg-secondary w-[300px] flex justify-around items-center py-4 px-4 rounded-2xl mb-2">
            <div className="w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center">
              <img src={ReactLogo} alt="" />
            </div>
            <div className="text-pure text-3xl pr-6">
              <h1>React JS</h1>
              {/* <p>details</p> */}
            </div>
          </div>

          <div className="skill-1-wrapper bg-secondary w-[300px] flex justify-around items-center py-4 px-4 rounded-2xl mb-2">
            <div className="w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center">
              <img src={NodeLogo} alt="" />
            </div>
            <div className="text-pure text-3xl pr-6">
              <h1>Node JS</h1>
              {/* <p>details</p> */}
            </div>
          </div>

          <div className="skill-1-wrapper bg-secondary w-[300px] flex justify-around items-center py-4 px-4 rounded-2xl mb-2">
            <div className="w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center">
              <img src={MongoLogo} width="50" alt="" />
            </div>
            <div className="text-pure text-3xl pr-6">
              <h1>Mongo DB</h1>
              {/* <p>details</p> */}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="skills-part-1 flex flex-wrap">
            {Skills2.map(item => {
              return (<div className="skill-2-wrapper flex flex-row align-middle h-[100px] border-b-2 border-primary hover:border-secondary">
                <span className="flex align-middle items-center">
                  <div className="w-[70px] h-[70px] flex flex-row justify-around items-center">
                    <img src={item.img} className="w-10" alt="" />
                  </div>
                  <div className="ml-2 text-primary">
                    <h1 className="text-3xl">{item.text}</h1>
                  </div>
                </span>
              </div>)
            }
            )}
          </div>
        </div>
        {/* <div className="sm:block md:hidden">
          <div className="skills-part-1 flex flex-col align-middle items-center bg-red-300">




            <div className="skill-2-wrapper flex flex-row align-middle h-[100px] border-b-2 border-primary hover:border-secondary">
              <span className="flex align-middle items-center">
                <div className="w-[40px] h-40ppx] flex flex-row justify-around items-center">
                  <img src={HTMLLogo} className="w-10" alt="" />
                </div>
                <div className="ml-2 text-primary">
                  <h1 className="text-2xl">HTML</h1>
                </div>
              </span>
            </div>
            <div className="skill-2-wrapper flex flex-row align-middle h-[100px] border-b-2 border-primary hover:border-secondary">
              <span className="flex align-middle items-center">
                <div className="w-[40px] h-40ppx] flex flex-row justify-around items-center">
                  <img src={HTMLLogo} className="w-10" alt="" />
                </div>
                <div className="ml-2 text-primary">
                  <h1 className="text-2xl">HTML</h1>
                </div>
              </span>
            </div>


          </div>
        </div> */}
        <div className="" />
      </div>
    </div>
  );
}

export default MySkills;
const Skills2 = [
  {
    img: HTMLLogo,
    text: "HTML",
    class: "s-2-line",
  },

  {
    img: CSSLogo,
    text: "CSS",
    class: "s-2-line",
  },
  {
    img: NextJS_logo,
    text: "Next JS",
    class: "s-2-line",
  },

  {
    img: ReduxLogo,
    text: "React Redux",
    class: "s-2-line",
  },

  {
    img: SocketLogo,
    text: "Socket.io",
    class: "s-2-line",
  },

  {
    img: SQLLogo,
    text: "SQL",
    class: "s-2-line",
  },

  {
    img: JavaLogo,
    text: "JAVA",
    class: "s-2-line",
  },

  {
    img: CPPLogo,
    text: "C++",
    class: "s-2-line",
  },

];
