import React, { useEffect, useRef } from "react";
import Typing from "react-typing-effect";

function Hero() {
  const listRef = useRef(null);

  useEffect(() => {
    animateListItems();
  }, []);

  const animateListItems = () => {
    if (!listRef.current) return;

    const listItems = listRef.current.querySelectorAll(".fadeUp");
    let index = 0;

    const animateNext = () => {
      if (index < listItems.length) {
        listItems[index].classList.add("hero-animation");
        index++;
        setTimeout(animateNext, 100);
      }
    };

    animateNext();
  };

  return (
    <section className="section-hero" id="hero">
      <div className="hero">
        <div className="hero-text-box" ref={listRef}>
          <p className="hero-paragraph fadeUp">Hey, my name is</p>

          <h1 className="heading-primary fadeUp">Gabriel Santos</h1>

          <span className="hero-typing fadeUp">
            I build things with{" "}
            <Typing
              text={[
                "ReactJS",
                "NodeJS",
                "MongoDB",
                "MySQL",
                "JavaScript",
                "TypeScript",
                "Java",
                "Python",
              ]}
              speed={200}
              eraseSpeed={100}
              eraseDelay={2500}
              typingDelay={500}
            />
          </span>

          {/* NEW DESCRIPTION */}
          <p className="hero-description fadeUp">
            I'm a computer scientist with experience in freelance projects across
            frontend, backend, and databases — building AI-powered systems,
            automated data extraction, secure payments, and other end-to-end
            solutions.
          </p>

          <div className="buttons-hero fadeUp">
            <a
              className="button button--full margin-right-sm"
              href="https://www.linkedin.com/in/jogabriel-santos/"
              target="_blank"
              rel="noreferrer"
            >
              Visit my LinkedIn
            </a>

            <a
              className="button button--outline"
              href="https://github.com/JoGabriel-Santos"
              target="_blank"
              rel="noreferrer"
            >
              See my Github
            </a>
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="container-links" id="socials">
        <ul className="links-list">
          {/* WHATSAPP */}
          <li className="socials-icon">
            <a
              href="https://wa.me/5598970219541"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp</title>
                <path
                  d="
                    M17.472 14.382
                    c-.297-.149-1.758-.867-2.03-.967
                    -.273-.099-.472-.148-.67.149
                    -.198.297-.768.966-.94 1.164
                    -.173.198-.347.223-.644.075
                    -.297-.149-1.255-.463-2.39-1.475
                    -.883-.788-1.48-1.761-1.653-2.059
                    -.173-.297-.018-.458.13-.606
                    .134-.133.298-.347.446-.521
                    .149-.174.198-.298.298-.497
                    .099-.198.05-.372-.025-.521
                    -.075-.149-.669-1.612-.916-2.207
                    -.242-.579-.487-.5-.669-.51
                    -.173-.008-.372-.01-.571-.01
                    -.198 0-.52.074-.792.372
                    -.272.297-1.04 1.016-1.04 2.479
                    0 1.462 1.065 2.875 1.213 3.074
                    .149.198 2.096 3.2 5.077 4.487
                    .709.306 1.262.489 1.694.626
                    .712.227 1.36.195 1.872.118
                    .571-.085 1.758-.719 2.006-1.413
                    .248-.694.248-1.289.173-1.413
                    -.074-.124-.272-.198-.57-.347
                    z
                    M12.004 2.003
                    c-5.52 0-9.994 4.474-9.994 9.994
                    0 1.762.468 3.47 1.357 4.977
                    L2 22l5.14-1.35
                    a9.93 9.93 0 004.86 1.24h.004
                    c5.52 0 9.994-4.474 9.994-9.994
                    0-2.67-1.04-5.18-2.93-7.07
                    a9.93 9.93 0 00-7.07-2.93
                    z
                  "
                />
              </svg>
            </a>
          </li>

          {/* GITHUB */}
          <li className="socials-icon">
            <a
              href="https://github.com/JoGabriel-Santos"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="
                    M12 .297
                    a12 12 0 00-3.797 23.4
                    c.6.111.82-.258.82-.577v-2.234
                    c-3.338.726-4.033-1.416-4.033-1.416
                    -.546-1.387-1.333-1.756-1.333-1.756
                    -1.089-.745.083-.73.083-.73
                    1.205.085 1.84 1.237 1.84 1.237
                    1.07 1.834 2.809 1.304 3.495.997
                    .108-.775.418-1.305.762-1.604
                    -2.665-.304-5.466-1.334-5.466-5.931
                    0-1.31.469-2.381 1.236-3.221
                    -.124-.303-.536-1.524.117-3.176
                    0 0 1.008-.322 3.3 1.23
                    a11.48 11.48 0 016 0
                    c2.291-1.552 3.297-1.23 3.297-1.23
                    .655 1.653.243 2.874.12 3.176
                    a4.54 4.54 0 011.235 3.221
                    c0 4.609-2.803 5.625-5.475 5.922
                    .429.37.823 1.102.823 2.222v3.293
                    c0 .322.218.694.825.576
                    A12 12 0 0012 .297
                    z
                  "
                />
              </svg>
            </a>
          </li>

          {/* LINKEDIN */}
          <li className="socials-icon">
            <a
              href="https://www.linkedin.com/in/jogabriel-santos/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path
                  d="
                    M20.447 20.452H17.21v-5.569
                    c0-1.328-.027-3.039-1.852-3.039
                    -1.853 0-2.136 1.445-2.136 2.939
                    v5.669h-3.236V9h3.107v1.561h.045
                    c.434-.82 1.494-1.688 3.073-1.688
                    3.289 0 3.895 2.165 3.895 4.979v6.6
                    z
                    M5.337 7.433a1.88 1.88 0 110-3.76
                    1.88 1.88 0 010 3.76
                    z
                    M6.794 20.452H3.88V9h2.914v11.452
                    z
                    M22.225 0H1.771C.792 0 0 .774 0 1.729
                    v20.542C0 23.226.792 24 1.771 24h20.451
                    C23.2 24 24 23.226 24 22.271V1.729
                    C24 .774 23.2 0 22.222 0
                    z
                  "
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* EMAIL */}
      <div className="container-email" id="socials">
        <div className="socials-email">
          <a className="main-navigation-link"
             href="mailto: coder.gabrielsantos@gmail.com">

            <p className="email">coder.gabrielsantos@gmail.com</p>
          </a>
        </div>
      </div>

      {/* ARROW — moved lower */}
      <div className="arrow-down" style={{ marginTop: "5.5rem" }}>
        <a href="#about">
          <ion-icon name="chevron-down-outline"/>
        </a>
      </div>
    </section>
  );
}

export default Hero;
