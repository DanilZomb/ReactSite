import React from "react";
import "./header.css";
import LogoIcon from "../../assets/icons/logo-icon.svg";

function Header() {
  return (
    <header>
      <div class="header-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <img src={LogoIcon} alt="logo-icon" className="logoImg" />
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
                  <a class="nav-link" href="/#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Faq
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
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
    </header>
  );
}

export default Header;
