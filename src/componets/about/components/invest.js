import React from "react";
import Price from "../../../assets/img/Price.png";
import "./invest.css";

function Invest() {
  return (
    <section className="invest">
      <div className="invest-container">
        <h2 className="heading-invest">
          Invest property for better <span class="text-color">business</span>
        </h2>
        <p className="invest-p">
          We are committed to processing the information in order to contact you
          and talk about your project. We are committed to processing the
          information.
        </p>
        <button className="invest-btn">Learn more</button>
      </div>
      <div className="invest-img-container">
        <img src={Price} alt="price" className="investImg" />
      </div>
    </section>
  );
}
export default Invest;
