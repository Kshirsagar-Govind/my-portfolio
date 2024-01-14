import React, { useState } from "react";
import "../index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Git from "../Assets/WorkSS/git.png";
import Linkedin from "../Assets/WorkSS/linkedin.png";
import Medium from "../Assets/WorkSS/medium.png";
import { useEffect } from "react";
import SectionTitle from "../Helpers/SectionHeader";

function MyWork() {
  const [showWork, _setShowWork] = useState();
  const [curr_index, _setCurr_index] = useState(0);
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

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <div className="MyWorkPage mt-10">
      <SectionTitle title={'Personal Projects'} />

      <div className="hidden md:block">

        <div className="make-it-centered mt-6">
          <div className="work-section flex flex-wrap gap-10">
            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Resume Builder</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-resume-builder"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  Lots of time we try to make our resume more interesting but end
                  up just thinking about design, and lasltly we drop our creative
                  ideas and keep it very simple way. But if you want to have some
                  unique design for your resume please take look at my Resume
                  Builder.
                </p>
              </span>
            </div>

            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >eCommerce Website</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-ecom"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  To learn and practice advance functionalities in MERN stack, I
                  have created this ecommerce website, where user can see
                  different electronics product and can do various things on the
                  website related to product.
                </p>
              </span>
            </div>

            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Form Creater</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-forms"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>

                <p>
                  Created a form generater. Here you can design forms with different types of inputs and also edit them after saving.
                </p>
              </span>
            </div>

            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Note It Down</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-note-it-down"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  We have lot's of things to note in everyday, so simple
                  application I made in react where we can add notes, expense,
                  save password and can add tasks.
                </p>
              </span>
            </div>
            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Make Note</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-make-note"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  Most of the time, I work on some ideas and get into some
                  important issues or solutions but I need to note all this things
                  somewhere, and that's what my project is - Make Not. This is
                  similar to Note It Down project to the some extent.
                </p>
              </span>

            </div>
          </div>
        </div>
      </div>


      <div className="sm:block md:hidden">
        <div className="make-it-centered mt-6">
          <div className="work-section flex flex-col items-center align-middle gap-10">
            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Resume Builder</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-resume-builder"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  Lots of time we try to make our resume more interesting but end
                  up just thinking about design, and lasltly we drop our creative
                  ideas and keep it very simple way. But if you want to have some
                  unique design for your resume please take look at my Resume
                  Builder.
                </p>
              </span>
            </div>

            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >eCommerce Website</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-ecom"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  To learn and practice advance functionalities in MERN stack, I
                  have created this ecommerce website, where user can see
                  different electronics product and can do various things on the
                  website related to product.
                </p>
              </span>
            </div>

            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Form Creater</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-forms"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>

                <p>
                  Created a form generater. Here you can design forms with different types of inputs and also edit them after saving.
                </p>
              </span>
            </div>

            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Note It Down</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-note-it-down"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  We have lot's of things to note in everyday, so simple
                  application I made in react where we can add notes, expense,
                  save password and can add tasks.
                </p>
              </span>
            </div>
            <div
              className="work-card-container border-2 hover:border-secondary border-gray-400 rounded-lg w-[450px] py-4 px-5"
              data-aos-once="true"
              data-aos="fade-up"
            >
              <span>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl" >Make Note</h1>
                  <div className="p-2 transition-all text-center text-secondary hover:text-pure text-lg hover:bg-secondary show-work rounded-md w-fit">
                    <span>
                      <a
                        href="/project-make-note"
                      >
                        View
                      </a>
                    </span>
                  </div>
                </div>
                <p>
                  Most of the time, I work on some ideas and get into some
                  important issues or solutions but I need to note all this things
                  somewhere, and that's what my project is - Make Not. This is
                  similar to Note It Down project to the some extent.
                </p>
              </span>

            </div>
          </div>
        </div>
      </div>





    </div>
  );
}

export default MyWork;
