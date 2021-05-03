import React from 'react'
import Grafic from './img/Grafic.png'
import './traffic.css';

function Traffic() {
  return (
    <div class="traffic">
            <div class="traffic-container">
                <h2 class="heading-traffic">Increase your <br /> business <span class="text-color">traffic</span>
                </h2>
                <p class="p-traffic">We are committed to processing the information in order to <br />
                    contact
                    you and
                    talk
                    about your
                    project.
                </p>
                <button class="traffic-btn">Learn more</button>
            </div>
            <img src={Grafic} alr="grafic" class="graficImg"/>
        </div>
  );
}
export default Traffic;