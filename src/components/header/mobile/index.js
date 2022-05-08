import React from "react";
import Footer from "../../footer";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi fi-rr-edit option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fi fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#conatct">
            <i class="fi fi-rr-following option-icon"></i>Conatct
          </a>
        </div>
        <div className="sidebar-footer">
          <p>
            it's not a bug <br></br>
            it's a feature
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
