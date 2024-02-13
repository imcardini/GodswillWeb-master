import React from "react";
import Skills from '../../component/Skills'
import Info from "../../component/Info";
import Stats from "../../component/Stats";
import CV from "../../assets/peterGodswill-Cv.pdf";
import { resume } from "../../data";
import "./about.css";
import ResumeItem from "../../component/ResumeItem";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <main className="section containe">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>

            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download CV{" "}
              <span className="button__icon">
                <BsFillArrowUpRightCircleFill />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="seperator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My unique Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      {/* <div className="seperator"></div>

      <div className="resume">
      <h3 className="section__subtitle subtitle__center text__align">
        Experience & Education{" "}
      </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </div> */}

  
    </main>
  );
};

export default About;
