import React from "react";
import Google from "../../assets/img/Google.png";
import Twitter from "../../assets/img/Twitter.png";
import Facebook from "../../assets/img/Facebook.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header-container">
        <div className="footer-header-container2">
          <h2 className="heading-footer">ARShakir</h2>
          <div className="icons-container">
            <ul className="icons-list">
              <li className="icons-item">
                <a href="#">
                  <img src={Google} alt="icon"/>
                </a>
              </li>
              <li className="icons-item">
                <a href="#">
                  <img src={Twitter} alt="icon" />
                </a>
              </li>
              <li className="icons-item">
                <a href="#">
                  <img src={Facebook} alt="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pages-container-list">
          <ul className="pages-list">
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-header-item-list">First</h3>
                </li>
                <li>
                  <p className="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-header-item-list">Second</h3>
                </li>
                <li>
                  <p className="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-header-item-list">Third</h3>
                </li>
                <li>
                  <p className="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
            <li className="pages-item">
              <ul>
                <li>
                  <h3 className="footer-header-item-list">Foutrh</h3>
                </li>
                <li>
                  <p className="footer-p-item-list">First page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Second page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Third page</p>
                </li>
                <li>
                  <p className="footer-p-item-list2">Fourth page</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer-container-list">
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
