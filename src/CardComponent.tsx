import React from "react";
import "./CardComponent.css";
import profilePic from "./images/profilePic.svg";
import image1 from "./images/mainImg.svg";
import logo from "./images/logo.svg";
import hour from "./images/hour.svg";

export default function CardComponent() {
  return (
    <div id="CardMain">
      <img id="mainImg" src={image1} alt="" />
      <h2 id="header">Equilibrium #3429</h2>
      <p id="mainText">Our Equilibrium collection promotes balance and calm.</p>
      <div id="priceLine">
        <div className="priceTag">
          <img src={logo} alt="logo" />
          <p id="price">0.041 ETH</p>
        </div>
        <div className="priceTag">
          <img src={hour} alt="logo" />
          <p>3 days left</p>
        </div>
      </div>
      <div id="line"></div>
      <div id="creatorContainer">
        <img src={profilePic} alt="profile" />
        <p>Creation of</p>
        <p id="creatorTag">Jules Wyvern</p>
      </div>
    </div>
  );
}
