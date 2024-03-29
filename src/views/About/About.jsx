import React from "react";
import "./about.css";
import devImg from "../../assets/avatarMe.png";
import resume from "../../assets/GabrielResume.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about" id="about">
      <h3 className="pageTitle">About</h3>
      <main>
        <section>
          <Fade left>
            <h1>
              Hi, I'm <span>Gabriel</span>. <br />
              Nice to meet you.
            </h1>
            <h3>I'm a software developer based in Brazil 🌍</h3>
            <p>
              Since 2019, I've been turning code into solutions. <br />
              When I'm not coding you will find me gaming, reading, or enjoying
              a beautiful sunset.
            </p>
            <button className="btn-download">
              <a href={resume} download="GabrielResume">
                Download CV
              </a>
              <AiOutlineCloudDownload
                size="30px"
                style={{ marginLeft: "5px" }}
              />
            </button>
          </Fade>
        </section>
        <div className="img-safe">
          <Fade right>
            <div className="img-background">
              <img className="img-dev" src={devImg} alt="Image" />
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
}
