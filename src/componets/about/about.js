import React from 'react'
import Logoicons from './logoicons'
import Choice from './choice'
import Traffic from './traffic'
import Ways from './ways'
import Create from './create'
import Invest from './invest'
import Online from './online'
import Searcher from './searcher'
import Footer from '../footer/footer'
import './about.css';

function About() {
  return (
    <div class="background2">
       <div class="about">
           <Logoicons/>
           <Choice/>
           <Traffic/>
           <Ways/>
           <Create/>
           <Invest/>
           <Online/>
           <Searcher/>
           <Footer/>
       </div>
    </div>    
  );
}
export default About;
