import React from "react";
import GraficTraffic from "../../../assets/img/grafic-traffic.png";
import "./traffic.css";

function Traffic() {
  return(
    <section className="traffic">
      <div className="traffic-wrapper">
        <h2 className="traffic-title">
          Increase your business <span class="text-color">traffic</span>
        </h2>
        <p className="traffic-text">
          We are committed to processing the information in order to 
          contact you and talk about your project.
        </p>
        <button className="traffic-btn">Learn more</button>
      </div>
      <img src={GraficTraffic} alt="grafic-traffic" className="graficImg" />
    </section>
  );
}
export default Traffic;
