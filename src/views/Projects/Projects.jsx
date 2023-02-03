import React from "react";
import "./projects.css";
import { BiLinkExternal } from "/node_modules/react-icons/bi";
import panela from "../../assets/panela.png";
import todo from "../../assets/todo.png";
import stopsort from "../../assets/stopsort.png";
import detect from "../../assets/detect.png";
import { Panel, PanelGroup } from "rsuite";
import Card from "../../components/Card/Card";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h3 className="pageTitle">Projects</h3>
      <main>
        <Fade bottom>
          <Card
            picture={detect}
            project="Libras Detection"
            stacks="React • TensorFlow • MongoDB"
            link="https://github.com/gaamatoss/LibrasDetection"
          />
          <Card
            picture={panela}
            project="Panela Aberta"
            stacks="Wordpress"
            link="https://panelaaberta.unifesp.br/"
          />
          <Card
            picture={stopsort}
            project="Stop Sort"
            stacks="HTML • CSS • Bootstrap"
            link="https://stopsort-gaamatoss.vercel.app/"
          />
          <Card
            picture={todo}
            project="Just a To-Do"
            stacks="HTML • CSS • Tailwind"
            link="https://justtodo-gaamatoss.vercel.app/"
          />
        </Fade>
      </main>
    </div>
  );
}
