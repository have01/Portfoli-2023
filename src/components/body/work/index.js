import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Expériences</label>
      <AnimationOnScroll animateIn="animate__slideInRight">
        <div className="work-list">
          {data.map((item) => {
            return <WorkCard item={item} />;
          })}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Work;
