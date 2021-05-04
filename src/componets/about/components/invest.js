import React from 'react'
import Price from '../../../assets/img/Price.png'
import './invest.css';

function Invest() {
  return (
    <div class="invest">
      <div class="invest-container">
        <h2 class="heading-invest">Invest property for <br /> better <span class="text-color">business</span>
        </h2>
        <p class="invest-p"> We are committed to processing the information in order to <br />
            contact
            you and
            talk about your
            project. We are
            committed to <br /> processing the information.</p>
        <button class="invest-btn">Learn more</button>
      </div>
      <div class="invest-img-container">
      <img src={Price} alt="price" class="investImg" />
      </div>
    </div>
  );
}
export default Invest;