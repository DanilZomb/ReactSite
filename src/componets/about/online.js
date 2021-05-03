import React from 'react'
import FindInformation from './img/findInformation.png'
import './online.css';


function Online() {
  return (
    <div class="online">
    <img src={FindInformation} alt="informtion" class="onlineImg" />
    <div class="online-container">
        <div class="online-text-container">
        <h2 class="heading-online">Help Finding Information Online</h2>
        <p class="p-online">Fully customizable and neatly organized components<br />will help you
            work
            faster
            without limiting
            creative
            freedom.</p>
            </div>
        <div class="online-container-list">
            <ul class="online-list">
                <li class="online-item icn1">
                    <h3 class="online-heading-item">Feature One</h3>
                    <p class="online-p-item">Fully customizable and neatly<br />organized components
                        will<br />help you work faster
                    </p>
                </li>
                <li class="online-item icn2">
                    <h3 class="online-heading-item">Feature Two</h3>
                    <p class="online-p-item">Fully customizable and neatly<br />organized components
                        will<br />help you work faster
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>

  );
}
export default Online;