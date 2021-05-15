import React from "react";
import "./header.css";
import Reasons from "../about/components/reasons";
import Logoicons from "../about/components/logoicons";
import Choice from "../about/components/choice";
import LogoIcon from "../../assets/icons/logo-icon.svg";

function Header() {
  return (
    <header>
      <div className="background1">
        <div class="header-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={LogoIcon} alt="logo-icon" className="logoImg" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Faq
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Benefits
                  </a>
                </li>
              </ul>

              <ul class="navbar-nav navbar-btn-list">
                <li class="navbar-btn-item">
                  <button type="button" class="sign-in-btn">
                    Sign in
                  </button>
                </li>
                <li class="navbar-btn-item">
                  <button type="button" class="sign-up-btn">
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        <Reasons />
      </div>
      <div className="background2">
        <Logoicons />
        <Choice />
      </div>
    </header>
  );
}

export default Header;
