import React, { useState } from "react";
import "./Topics.css";
import {
  frequenciesImg,
  dawImg,
  vocalsImg,
  mixingImg,
  mixingConsoleImg,
  masteringImg,
  learnImg,
  heroImg,
  learnAngleIcon,
  infoAngleIcon,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequenciesImg);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequenciesImg)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(dawImg)}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsImg)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixingImg)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsoleImg)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(masteringImg)}>
              Mastering
            </li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} />
          </div>
        </div>
        <img src={learnAngleIcon} className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
