import React from "react";
import "./work-card.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img alt="" src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <h2 className="company-name text-lg text-indigo-700">
          {" "}
          <i class="fi-rr-laptop option-icon">
            {item.company} -({item.designation})
          </i>
        </h2>
        <div className="work-dates text-indigo-700">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
