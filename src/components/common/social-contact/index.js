import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  copynotify,
  downloadnotify,
  redirectnotify,
  Toastnotify,
} from "../../../helper";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <div className="social-icon-div">
            <img
              src={item.icon}
              alt="Loading"
              className="social-icon"
              onClick={(e) => {
                if (item.platform === "email") {
                  copynotify();
                  navigator.clipboard.writeText(item.link);
                } else {
                  redirectnotify();
                  setTimeout(() => {
                    window.open(item.link, "_blank").focus();
                  }, 2000);
                }
                <ToastContainer />;
              }}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default SocialContact;
