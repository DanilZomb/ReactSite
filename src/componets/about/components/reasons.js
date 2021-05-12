import React from "react";
import VideoPlayer from "../../../assets/img/video-player.png";
import Human from "../../../assets/img/human.svg";
import "./reasons.css";

function Reasons() {
  return (
    <section className="top">
      <div className="reasons">
          <div className="reasons-inf-container">
            <h2 className="heading">
              Many reasons to get up and start to get back in the
              business
            </h2>
            <p className="reasons-p">
              The harder you work for something, the greater you’ll feel
              when you achieve it.
            </p>
            <div className="info-btns">
              <button className="lern-more-btn">Learn more</button>
              <button className="demo-btn">Demo</button>
            </div>
            <div className="video-container">
              <a href ="#">
              <img src={VideoPlayer} alt="video-player" className="videoImg" width ="140px" height="80px"/>
              </a>
              <div className="video-texts-container">
                <div className="video-text-container1">
                  <p className="reasons-p2">
                    The harder you work for something, the greater
                    you’ll feel when you achieve it.
                  </p>
                </div>
                <div className="video-text-container2">
                  <p className="reasons-p3">Watch preview</p>
                </div>
              </div>
            </div>
          </div>
        <img src={Human} alt="human" className="humanImg" width="51%" />
      </div>
    </section>
  );
}

export default Reasons;
