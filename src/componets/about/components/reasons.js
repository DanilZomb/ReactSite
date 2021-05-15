import React from "react";
import VideoPlayer from "../../../assets/img/video-player.png";
import Human from "../../../assets/img/human.svg";
import "./reasons.css";

function Reasons() {
  return (
      <section className="reasons">
          <div className="reasons-inform-wrapper">
            <h2 className="reason-title">
              Many reasons to get up and start to get back in the
              business
            </h2>
            <p className="reasons-subtitle">
              The harder you work for something, the greater you’ll feel
              when you achieve it.
            </p>
            <div className="reasons-buttons-wrapper">
              <button className="learnmore-btn">Learn more</button>
              <button className="demo-btn">Demo</button>
            </div>
            <div className="reasons-video-wrapper">
              <a href ="#">
              <img src={VideoPlayer} alt="video-player" className="videoImg" width ="140px" height="80px"/>
              </a>
              <div className="reasons-video-text-wrapper">
                  <p className="reasons-video-text">
                    The harder you work for something, the greater
                    you’ll feel when you achieve it.
                  </p>
                  <a className="reasons-video-text2">Watch preview</a>
              </div>
            </div>
          </div>
        <img src={Human} alt="human" className="humanImg"  width="590" height="580"/>
    </section>
  );
}

export default Reasons;
