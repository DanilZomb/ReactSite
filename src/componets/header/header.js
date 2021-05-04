import React from "react";
import LogoImg from "../../assets/img/Logo.png";
import Reasons from "../about/components/reasons";
import Logoicons from "../about/components/logoicons";
import Choice from "../about/components/choice";
import "./header.css";

function Header() {
  return (
    <>
      <div class="top">
        <div class="header">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a href="#">
                <img src={LogoImg} alt="logo" class="logoImg" />
              </a>
              <button
                class="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="header-menu">
                  <ul class="header-menu-list me-auto mb-2 mb-lg-0">
                    <li class="header-menu-item">
                      <a href="#" class="a1">
                        About
                      </a>
                    </li>
                    <li class="header-menu-item">
                      <a href="#" class="a2">
                        Gallery
                      </a>
                    </li>
                    <li class="header-menu-item">
                      <a href="#" class="a3">
                        Pricing
                      </a>
                    </li>
                    <li class="header-menu-item">
                      <a href="#" class="a4">
                        FAQ
                      </a>
                    </li>
                    <li class="header-menu-item">
                      <a href="#" class="a5">
                        Benefits
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="sign-btns">
                  <ul class="sign-btns-list">
                    <li class="sign-btns-item">
                      <button class="sign-in">Sign in</button>
                    </li>
                    <li class="sign-btns-item">
                      <button class="sign-up">Sign up</button>
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
    </>
  );
}

export default Header;
