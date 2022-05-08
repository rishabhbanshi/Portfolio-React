import React from "react";
import Separator from "../../common/separator";
import "./contact.css";
import SocialContact from "../../common/social-contact";
import resume from "../../../assets/resume.pdf";
import { downloadnotify } from "../../../helper";
import { ToastContainer } from "react-toastify";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Wanna Get in touch ? </p>
          <SocialContact />
        </div>
        <div
          className="download"
          onClick={() => {
            downloadnotify();
          }}
        >
          <a download href={resume}>
            <i class="fi fi-rr-download"></i> Download Resume
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
