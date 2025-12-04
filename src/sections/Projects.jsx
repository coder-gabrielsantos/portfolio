import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

function Projects() {

  const [isVisible, setIsVisible] = useState(false);
  const [alreadyShowed, setAlreadyShowed] = useState(false);

  const [firstProjectVisible, setFirstProjectVisible] = useState(false);
  const [secondProjectVisible, setSecondProjectVisible] = useState(false);
  const [firstProjectAlreadyShowed, setFirstProjectAlreadyShowed] = useState(false);
  const [secondProjectAlreadyShowed, setSecondProjectAlreadyShowed] = useState(false);

  return (
    <VisibilitySensor partialVisibility={0.8} onChange={!alreadyShowed && setIsVisible}>
      <section
        className={`section-project ${isVisible ? "section-animation" : "opacity-0"}`} id="projects"
        onAnimationEnd={() => {
          setIsVisible(true);
          setAlreadyShowed(true);
        }}>

        <div className="container center-text">
          <span className="subheading">
            Projects
          </span>

          <h2 className="heading-secondary">
            Some things I’ve built
          </h2>
        </div>

        <ul className="project-list">

          <VisibilitySensor partialVisibility={1} onChange={!firstProjectAlreadyShowed && setFirstProjectVisible}>
            <li
              className={`project ${firstProjectVisible ? "left-right-animation" : "opacity-0"}`}
              onAnimationEnd={() => {
                setFirstProjectVisible(true);
                setFirstProjectAlreadyShowed(true);
              }}>

              <div className="container grid grid--center-v grid-projects grid-projects-text-first">
                <div className="step-text-box">
                  <p className="step-number">01</p>

                  <a href="https://github.com/coder-gabrielsantos/sigecon-client" target="_blank" rel="noreferrer">
                    <h3 className="heading-tertiary step-tittle">
                      Sigecon
                    </h3>
                  </a>

                  <p className="step-description">
                    Developed SIGECON, a cloud platform that automates municipal contract and service-order management,
                    replacing manual Excel workflows. Includes automated data extraction from uploaded documents,
                    fast service-order generation, and features such as contract tracking, balance control, reporting, and user authentication.
                  </p>

                  <div className="technology-used">
                    <i className="bi bi-filetype-jsx"></i>
                    <i className="bi bi-filetype-css"></i>
                  </div>
                </div>

                <a href="https://github.com/coder-gabrielsantos/sigecon-client" target="_blank" rel="noreferrer">
                  <div className="step-image-box step-image-box-text-first">
                    <img className="step-image" src={require('../util/projects/sigecon.png')} alt=""/>
                  </div>
                </a>
              </div>
            </li>
          </VisibilitySensor>

          <VisibilitySensor partialVisibility={1} onChange={!secondProjectAlreadyShowed && setSecondProjectVisible}>
            <li
              className={`project ${secondProjectVisible ? "right-left-animation" : "opacity-0"}`}
              onAnimationEnd={() => {
                setSecondProjectVisible(true);
                setSecondProjectAlreadyShowed(true);
              }}>

              <div className="container grid grid--center-v grid-projects-padding grid-projects-image-first">
                <a className="grid-projects-img"
                   href="https://github.com/coder-gabrielsantos/nursia-client"
                   target="_blank" rel="noreferrer">

                  <div className="step-image-box step-image-box-image-first">
                    <img className="step-image" src={require('../util/projects/nursia.png')} alt=""/>
                  </div>
                </a>

                <div className="step-text-box">
                  <p className="step-number">02</p>

                  <a href="https://github.com/coder-gabrielsantos/nursia-client" target="_blank" rel="noreferrer">
                    <h3 className="heading-tertiary step-tittle">
                      Nursia
                    </h3>
                  </a>

                  <p className="step-description">
                    Developed a platform that digitizes handwritten nursing records using the OpenAI API,
                    automatically generating centralized and securely managed digital files.
                  </p>

                  <div className="technology-used">
                    <i className="bi bi-filetype-jsx"></i>
                    <i className="bi bi-filetype-css"></i>
                  </div>
                </div>
              </div>
            </li>
          </VisibilitySensor>
        </ul>
      </section>
    </VisibilitySensor>
  );
}

export default Projects;
