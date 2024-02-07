import React from "react";
import "./Info.css";
import { infoStudentIcon, infoFileIcon, infoAngleIcon } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={infoStudentIcon} />
            <div className="amount">23,000</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={infoFileIcon} />
            <div className="amount">23,000</div>
            <div className="type">Students</div>
          </div>
        </div>
        <img src={infoAngleIcon} className="bg-element-2" />
      </div>
    </section>
  );
};

export default Info;
