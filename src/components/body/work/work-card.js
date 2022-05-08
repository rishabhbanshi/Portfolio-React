import React from "react";
import "./work-card.css";
function WorkCard({ work }) {
  return (
    <div className="work-card">
      <img src={work.companyLogo} alt="404 Company" className="work-logo" />
      <div className="work-info">
        <label className="company-name">{work.company}</label>
        <div className="work-desc">
          <p>{work.designation}</p>
        </div>
        <div className="work-date">
          <label>{work.dateJoining}</label>-<label>{work.dateEnd}</label>
        </div>
        <div className="work-desc">
          <ul>
            {work.work.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
