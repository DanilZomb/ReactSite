import React from "react";
import CreateCircle from "../../../assets/img/create-circle.svg";
import "./create.css";

function Create() {
  return (
    <section className="create">
      <h2 className="heading-create">
        Create your <span class="text-color">next project</span> with startup
        framework
      </h2>
      <button className="btn-getStart">Get started</button>
      <img src={CreateCircle} alt="create-circle" className="circleImg" />
    </section>
  );
}
export default Create;
