import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";
import Typewriter from "typewriter-effect";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <Typewriter
          options={{
            strings: ["Welcome to My Portfolio", "Have a Great Day"],
            autoStart: true,
            loop: true,
            pauseFor: 2500,
          }}
        />
        ;
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i class="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
