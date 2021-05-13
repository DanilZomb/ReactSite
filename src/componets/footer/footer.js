import React from "react";
import Google from "../../assets/img/google.png";
import Twitter from "../../assets/img/twitter.png";
import Facebook from "../../assets/img/facebook.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-header-wrapper">
          <h2 className="footer-title">ARShakir</h2>
          <div className="icons-wrapper">
            <ul className="icons-list">
              <li className="icons-item">
                <a href="#">
                  <img src={Google} alt="google"/>
                </a>
              </li>
              <li className="icons-item">
                <a href="#">
                  <img src={Twitter} alt="twitter" />
                </a>
              </li>
              <li className="icons-item">
                <a href="#">
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pages-wrapper-list">
          <ul className="pages-list">
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-title-item">First</h3>
                </li>
                <li>
                  <p className="footer-subtitle-item" tabindex="0">First page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Second page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Third page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Fourth page</p>
                </li>
              </ul>
            </li>
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-title-item">Second</h3>
                </li>
                <li>
                  <p className="footer-subtitle-item" tabindex="0">First page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Second page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Third page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Fourth page</p>
                </li>
              </ul>
            </li>
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-title-item">Third</h3>
                </li>
                <li>
                  <p className="footer-subtitle-item" tabindex="0">First page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Second page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Third page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Fourth page</p>
                </li>
              </ul>
            </li>
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-title-item">Foutrh</h3>
                </li>
                <li>
                  <p className="footer-subtitle-item" tabindex="0">First page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Second page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Third page</p>
                </li>
                <li>
                  <p className="footer-subtitle-item2" tabindex="0">Fourth page</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer-wrapper-list">
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="link-color">© Copyrights 2021</a>
            </li>
            <li className="footer-item">
              <a href="#" className="link-color">Privacy policy</a>
            </li>
            <li class="footer-item">
              <a href="#" className="link-color">Terms of service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
