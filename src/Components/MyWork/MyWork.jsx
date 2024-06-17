// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork-container">
      <div className="mywork">
        <div className="mywork-title">
          <h1>Currently Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-content">
          <div className="mywork-images">
            {mywork_data.map((work, index) => {
              return <img key={index} src={work.w_img} alt={`Work ${index}`} />;
            })}
          </div>
          <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="Show More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
