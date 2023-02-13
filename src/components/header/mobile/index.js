import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="animate__animated  animate__fadeInRight text-decoration-color: #f8fafc mobile w-full h-full transition ease-in-out delay-150 bg-blue-500 flex items-center justify-center ">
      <div className="mobile-option transition ease-in-out delay-150 flex items-center justify-center text-decoration-color: #f8fafc">
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="mobile-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Mobile;
