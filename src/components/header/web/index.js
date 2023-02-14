import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
    </div>
    <div className="web-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
    <div className="web-option">
        <a href="https://drive.google.com/file/d/1Gq_aifsuvshagHSYijA5d58YmCdnGCEI/view?usp=sharing">
      <i class="fi fi-rr-document-signed"></i>Resmue
        </a>
    </div>
  </div>;
}

export default Web;
