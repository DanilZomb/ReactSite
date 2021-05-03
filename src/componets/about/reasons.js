import React from 'react'
import VideoPicture from './img/Picture.png'
import Human from './img/Human.png'
import './reasons.css';

function Reasons() {
  return (
    <div class="top">
      <div class="reasons">
        <div class="reasons-container">
            <div class="reasons-inf-container">
                <h2 class="heading">Many reasons to get up <br /> and start to get back in <br /> the business
                </h2>
                <p class="reasons-p">The harder you work for something, the greater you’ll <br /> feel when you
                    achieve
                    it.</p>
                <div class="info-btns">
                    <button class="lern-more-btn">Learn more</button>
                    <button class="demo-btn">Demo</button>
                </div>
                <div class="video-container">
                    <img src={VideoPicture} alt="video" class="videoImg"/>
                    <div class="video-texts-container">
                        <div class="video-text-container1">
                            <p class="reasons-p2">The harder you work for something, the greater <br />
                                you’ll feel when
                                you achieve it.</p>
                        </div>
                        <div class="video-text-container2">
                            <p class="reasons-p3">Watch preview</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={Human} alt="human" class="humanImg"/>
    </div>
</div>

    );
}

export default Reasons;