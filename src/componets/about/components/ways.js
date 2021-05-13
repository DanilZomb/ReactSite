import React from "react";
import "./ways.css";

function Ways() {
  return (
    <section className="ways">
      <h2 className="ways-title">
        3 Simple Ways To <span className="text-color">Save</span> A Bunch Of 
        <span className="text-color">Money</span> When Buying A New Computer
      </h2>
      <p className="ways-desc">
          Fully customizable and neatly organized components
          will help you work faster without limiting creative freedom.
        </p>
      <div className="ways-wrapper">
          <ul className="ways-list">
            <li className="ways-item">
              <h3 className="way-title-item">100+</h3>
              <p className="way-desc-item">
                5 Reasons To Purchase 
                Desktop Computers
              </p>
            </li>
            <li className="ways-item">
              <h3 className="way-title-item">43,000+</h3>
              <p className="way-desc-item2">
                3 Simple Ways To Save A Bunch Of Money When Buying A New
                Computer
              </p>
            </li>
            <li className="ways-item">
              <h3 className="way-title-item">30+</h3>
              <p className="way-desc-item">
                A Discount Toner Cartridge  Is Better Than Ever And You
                Will Save 50 Or More
              </p>
            </li>
          </ul>
        </div>
      </section>
  );
}
export default Ways;
