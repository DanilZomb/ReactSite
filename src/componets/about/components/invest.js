import React from "react";
import "./invest.css";
import BusinessPrice from "../../../assets/img/business-price.png";

function Invest() {
  return (
    <section className="invest">
      <div className="invest-wrapper">
        <h2 className="invest-title">
          Invest property for better <span class="text-color">business</span>
        </h2>
        <p className="invest-desc">
          We are committed to processing the information in order to contact you
          and talk about your project. We are committed to processing the
          information.
        </p>
        <button className="invest-btn">Learn more</button>
      </div>
      <div className="invest-img-wrapper">
        <img src={BusinessPrice} alt="business-price" className="investImg" />
      </div>
    </section>
  );
}
export default Invest;
