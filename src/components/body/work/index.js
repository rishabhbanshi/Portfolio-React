import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import WorkCard from "./work-card";
import { WorkData } from "../../../data/work";

function Work() {
  const workData = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {workData.map((item) => {
          return <WorkCard work={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
