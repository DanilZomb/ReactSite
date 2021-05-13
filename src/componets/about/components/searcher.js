import React from "react";
import "./searcher.css";

function Searcher() {
  return (
    <section className="searcher">
      <div className="searcher-wrapper">
        <h2 className="searcher-title">There are many reasons to get down</h2>
        <p className="searcher-desc">
          There are many reasons to get
          down and start to get depressed about your situation.
        </p>
        <form className="formInput">
          <input type="text" placeholder="Your Email" className="searcher-input" />
          <button type="button" className="searcher-btn">Send</button>
        </form>
        <p className="searcher-desc2">No spam. Only releases, updates and discounts</p>
      </div>
    </section>
  );
}
export default Searcher;
