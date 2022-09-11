import React from "react";
import './card.css'
import { BiLinkExternal } from 'react-icons/Bi'


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imgPath} alt="" />
            <section className="cardInfo">
                <span>{props.stacks}</span>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <a href={props.link} target="_blank"><BiLinkExternal size="30px" color="white" /></a>
            </section>
        </div>
    )
}