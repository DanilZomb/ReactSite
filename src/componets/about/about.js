import React from "react";
import Traffic from "./components/traffic";
import Ways from "./components/ways";
import Create from "./components/create";
import Invest from "./components/invest";
import Online from "./components/online";
import Searcher from "./components/searcher";
import "./about.css";

function About() {
  return (
      <div class="about">
        <Traffic />
        <Ways />
        <Create />
        <Invest />
        <Online />
        <Searcher />
      </div>
  );
}
export default About;
