import React from "react";
import Grafic from "../../../assets/img/Grafic.png";
import "./traffic.css";

function Traffic() {
  return(
    <section className="traffic">
      <div className="traffic-container">
        <h2 className="heading-traffic">
          Increase your business <span class="text-color">traffic</span>
        </h2>
        <p className="p-traffic">
          We are committed to processing the information in order to 
          contact you and talk about your project.
        </p>
        <button className="traffic-btn">Learn more</button>
      </div>
      <img src={Grafic} alt="grafic" className="graficImg" />
    </section>
  );
}
export default Traffic;
