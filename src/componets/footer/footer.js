import React from "react";
import Google from "../../assets/img/Google.png";
import Twitter from "../../assets/img/Twitter.png";
import Facebook from "../../assets/img/Facebook.png";
import "./footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-header-container">
        <div class="footer-header-container2">
          <h2 class="heading-footer">ARShakir</h2>
          <div class="icons-container">
            <ul class="icons-list">
              <li class="icons-item">
                <a href="#">
                  <img src={Google} alt="icon"/>
                </a>
              </li>
              <li class="icons-item">
                <a href="#">
                  <img src={Twitter} alt="icon" />
                </a>
              </li>
              <li class="icons-item">
                <a href="#">
                  <img src={Facebook} alt="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pages-container-list">
          <ul class="pages-list">
            <li class="pages-item">
              <ul>
                <li>
                  <h3 class="footer-header-item-list">First</h3>
                </li>
                <li>
                  <p class="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
            <li class="pages-item">
              <ul>
                <li>
                  <h3 class="footer-header-item-list">Second</h3>
                </li>
                <li>
                  <p class="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
            <li class="pages-item">
              <ul>
                <li>
                  <h3 class="footer-header-item-list">Third</h3>
                </li>
                <li>
                  <p class="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
            <li class="pages-item">
              <ul>
                <li>
                  <h3 class="footer-header-item-list">Foutrh</h3>
                </li>
                <li>
                  <p class="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p class="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footer-container-list">
          <ul class="footer-list">
            <li class="footer-item">
              <a href="#" class="link-color">© Copyrights 2021</a>
            </li>
            <li class="footer-item">
              <a href="#" class="link-color">Privacy policy</a>
            </li>
            <li class="footer-item">
              <a href="#" class="link-color">Terms of service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
