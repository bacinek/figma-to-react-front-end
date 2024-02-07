import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {" "}
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>
        <ul>
          <li>
            <a href="#">Course Details</a>
          </li>
          <li>
            <a href="#topics">About</a>
          </li>
          <li>
            <a href="#info">Blog</a>
          </li>
          <li>
            <a href="#blog">Course Details</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <div onClick={() => setIsActive(true)} className="menu-icon ">
          <img src={menuIcon} />
        </div>
      </nav>
      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src={closeIcon} />
        </div>

        <ul className="menu-items">
          <li>
            <a onClick={() => setIsActive(false)} href="#">
              Course Details
            </a>
          </li>
          <li>
            <a onClick={() => setIsActive(false)} href="#topics">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setIsActive(false)} href="#info">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setIsActive(false)} href="#testimonials">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
