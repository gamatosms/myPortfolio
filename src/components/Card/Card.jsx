import React from "react";
import "./card.css";
import { MdArrowForwardIos } from "/node_modules/react-icons/md";

export default function Card({ picture, project, stacks, link }) {
  return (
    <div className="card">
      <img src={picture} alt="Project Image" />
      <div className="cardDescription">
        <div>
          <h1>{project}</h1>
          <span>{stacks}</span>
        </div>
        <a href={link} target="_blank">
          <MdArrowForwardIos size="35" color="#ddd" />
        </a>
      </div>
    </div>
  );
}
