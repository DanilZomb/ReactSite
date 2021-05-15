import React from "react";
import CreateCircle from "../../../assets/img/create-circle.svg";
import "./create.css";

function Create() {
  return (
    <section className="create">
      <h2 className="create-title">
        Create your <span class="text-color">next project</span> with startup
        framework
      </h2>
      <button className="getStart-btn">Get started</button>
      <img src={CreateCircle} alt="create-circle" className="circleImg" width="1203" height="492"/>
    </section>
  );
}
export default Create;
