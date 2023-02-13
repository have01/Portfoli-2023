import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header animate__animated animate__fadeInDown">
        <div className="logo text-indigo-500">Developer</div>
        <div className="menu">
          <div className="web-menu">
            <Web />
          </div>
          <div className="mobile-menu  ">
            <div onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <i class="fi-rr-cross-circle"></i>
              ) : (
                <i class="fi-rr-apps menu-icon"></i>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Header;
