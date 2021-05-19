import React from "react";
import "./logoicons.css";
import MarkIcon from "../../../assets/icons/mark-icon.svg";
import MarkIcon2 from "../../../assets/icons/mark-icon2.svg";
import MarkIcon3 from "../../../assets/icons/mark-icon3.svg";
import MarkIcon4 from "../../../assets/icons/mark-icon4.svg";
import MarkIcon5 from "../../../assets/icons/mark-icon5.svg";
import MarkIcon6 from "../../../assets/icons/mark-icon6.svg";

function Logoicons() {
    return (
        <selector>
            <ul className="brandicons-wrapper-list">
                <li className="brandicons-item">
                    <a href="/#">
                        <img src={MarkIcon} alt="icon"/>
                    </a>
                </li>
                <li className="brandicons-item">
                    <a href="/#">
                        <img src={MarkIcon2} alt="icon"/>
                    </a>
                </li>
                <li className="brandicons-item">
                    <a href="/#">
                        <img src={MarkIcon3} alt="icon"/>
                    </a>
                </li>
                <li className="brandicons-item">
                    <a href="/#">
                        <img src={MarkIcon4} alt="icon"/>
                    </a>
                </li>
                <li className="brandicons-item">
                    <a href="/#">
                        <img src={MarkIcon5} alt="icon"/>
                    </a>
                </li>
                <li className="brandicons-item">
                    <a href="/#">
                        <img src={MarkIcon6} alt="icon"/>
                    </a>
                </li>
            </ul>
        </selector>
    );
}

export default Logoicons;
