import React from "react";
import FindInformation from "../../../assets/img/find-information.png";
import "./online.css";

function Online() {
  return (
    <section className="online">
      <img src={FindInformation} alt="find-informtion" className="onlineImg" />
      <div className="online-wrapper">
        <h2 className="online-title">Help Finding Information Online</h2>
        <p className="online-desc">
          Fully customizable and neatly organized components
          <br />
          will help you work faster without limiting creative freedom.
        </p>
          <ul className="online-list">
            <li className="online-item icn1">
              <h3 className="online-title-item" tabindex="0">
                Feature One
              </h3>
              <p className="online-desc-item">
                Fully customizable and neatly organized components will help you
                work faster
              </p>
            </li>
            <li className="online-item icn2">
              <h3 className="online-title-item" tabindex="0">
                Feature Two
              </h3>
              <p className="online-desc-item">
                Fully customizable and neatly organized components will help you
                work faster
              </p>
            </li>
          </ul>
        </div>
    </section>
  );
}
export default Online;
