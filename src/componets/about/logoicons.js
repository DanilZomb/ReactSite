import React from 'react'
import './logoicons.css';
import Frame from './img/Frame.svg'
import Frame2 from './img/Frame2.svg'
import Frame3 from './img/Frame3.svg'
import Frame4 from './img/Frame4.svg'
import Frame5 from './img/Frame5.svg'
import Frame6 from './img/Frame6.svg'

function Logoicons() {
  return (
    <div class="container-logos-icons">
    <ul class="container-logos-list">
        <li class="container-logos-item"><a href="#"><img src={Frame} alt="icon"/></a>
        </li>
        <li class="container-logos-item"><a href="#"><img src={Frame2} alt="icon"/></a>
        </li>
        <li class="container-logos-item"><a href="#"><img src={Frame3} alt="icon"/></a>
        </li>
        <li class="container-logos-item"><a href="#"><img src={Frame4} alt="icon"/></a>
        </li>
        <li class="container-logos-item"><a href="#"><img src={Frame5} alt="icon"/></a>
        </li>
        <li class="container-logos-item"><a href="#"><img src={Frame6} alt="icon"/></a>
        </li>
    </ul>
</div>
  );
}

export default Logoicons;