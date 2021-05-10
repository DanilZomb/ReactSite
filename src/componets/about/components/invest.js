import React from 'react'
import Price from '../../../assets/img/Price.png'
import './invest.css';

function Invest() {
  return (
    <main className="invest">
      <section className="invest-container">
        <h2 className="heading-invest">Invest property for better <span class="text-color">business</span>
        </h2>
        <p className="invest-p"> We are committed to processing the information in order to 
            contact
            you and
            talk about your
            project. We are
            committed to processing the information.</p>
        <button className="invest-btn">Learn more</button>
      </section>
      <section className="invest-img-container">
      <img src={Price} alt="price" className="investImg" />
      </section>
    </main>
  );
}
export default Invest;