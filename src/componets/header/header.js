import React, { useState } from "react";
import "./header.css";
import LogoIcon from "../../assets/icons/logo-icon.svg";
import { HiMenu } from "react-icons/hi";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <header>
      <div class="header-wrapper">
        <nav className="navbar">
          <img src={LogoIcon} alt="logo-icon" className="logoImg" />
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <ul class="nav-list">
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
          <div className="nav-icon" onClick={handleClick}>
            <button className="btn-menu">
              <HiMenu />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
