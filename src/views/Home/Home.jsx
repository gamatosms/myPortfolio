import React from "react";
import "./home.css";
import { TbArrowBigUpLines } from "/node_modules/react-icons/tb";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "/node_modules/react-icons/ai";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  return (
    <div className="home" id="home">
      <h3 className="pageTitle">Home</h3>
      <main className="mainDiv">
        <div className="secondDiv">
          <Bounce top>
            <h1 className="mainTitle">Gabriel Matos</h1>
          </Bounce>
          <Bounce bottom>
            <p>Full-Stack Developer</p>
            <div className="iconDiv">
              <a
                className="linkIcon"
                href="https://www.linkedin.com/in/gabrielmms/"
                target="_blank"
              >
                <AiFillLinkedin size="40px" />
              </a>
              <a
                className="gitIcon"
                href="https://github.com/gamatosms"
                target="_blank"
              >
                <AiFillGithub size="40px" />
              </a>
              <a
                className="instaIcon"
                href="https://instagram.com/gabrielmatosms"
                target="_blank"
              >
                <AiOutlineInstagram size="40px" />
              </a>
            </div>
          </Bounce>
        </div>
      </main>
      <a href="#about">
        <TbArrowBigUpLines className="downIcon" size="20px" />
      </a>
    </div>
  );
}
