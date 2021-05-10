import React from "react";
import LogoImg from "../../assets/img/Logo.png";
import Reasons from "../about/components/reasons";
import Logoicons from "../about/components/logoicons";
import Choice from "../about/components/choice";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="top">
        <div className="header">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a href="#">
                <img src={LogoImg} alt="logo" className="logoImg" />
              </a>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="header-menu">
                  <ul className="header-menu-list me-auto mb-2 mb-lg-0">
                    <li className="header-menu-item">
                      <a href="#" class="a1">
                        About
                      </a>
                    </li>
                    <li className="header-menu-item">
                      <a href="#" class="a2">
                        Gallery
                      </a>
                    </li>
                    <li className="header-menu-item">
                      <a href="#" class="a3">
                        Pricing
                      </a>
                    </li>
                    <li className="header-menu-item">
                      <a href="#" class="a4">
                        FAQ
                      </a>
                    </li>
                    <li className="header-menu-item">
                      <a href="#" class="a5">
                        Benefits
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sign-btns">
                  <ul className="sign-btns-list">
                    <li className="sign-btns-item">
                      <button className="sign-in">Sign in</button>
                    </li>
                    <li className="sign-btns-item">
                      <button className="sign-up">Sign up</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Reasons />
      <div className="background2">
        <Logoicons />
        <Choice />
      </div>
    </header>
  );
}

export default Header;
