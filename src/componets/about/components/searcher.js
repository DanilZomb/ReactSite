import React from "react";
import "./searcher.css";

function Searcher() {
  return (
    <section className="searcher">
      <div className="searcher-container">
        <h2 className="heading-searcher">There are many reasons to get down</h2>
        <p className="p-searcher">
          There are many reasons to get
          down and start to get depressed about your situation.
        </p>
        <form className="formInput">
          <input type="text" placeholder="Your Email" className="searcher-input" />
          <button className="searcher-btn">Send</button>
        </form>
        <p className="p2-searcher">No spam. Only releases, updates and discounts</p>
      </div>
    </section>
  );
}
export default Searcher;
