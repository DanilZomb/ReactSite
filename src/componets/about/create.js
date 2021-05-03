import React from 'react'
import Circle from './img/Circle.png'
import './create.css';

function Create() {
  return (
    <div class="create">
            <h2 class="heading-create">Create your <span class="text-color">next project</span> with startup
                <br />framework
            </h2>
            <div class="create-container">
                <button class="btn-getStart">Get started</button>
            </div>
            <img src={Circle} alt="circle" class="circleImg" />
        </div>
 
  );
}
export default Create;