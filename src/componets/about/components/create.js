import React from "react";
import Circle from "../../../assets/img/Circle.png";
import "./create.css";

function Create() {
  return (
    <main className="create">
      <h2 className="heading-create">
        Create your <span class="text-color">next project</span> with startup
        framework
      </h2>
      <div className="create-container">
        <button className="btn-getStart">Get started</button>
      </div>
      <img src={Circle} alt="circle" className="circleImg" />
    </main>
  );
}
export default Create;
