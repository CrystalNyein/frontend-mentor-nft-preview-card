import React from "react";
import "./Card.css";
import View from "../assets/images/icon-view.svg";
import Ethereum from "../assets/images/icon-ethereum.svg";
import Clock from "../assets/images/icon-clock.svg";
import Avatar from "../assets/images/image-avatar.png";

const Card = () => {
  return (
    <div className="Card" role="group">
      <div className="card-img">
        <div className="card-img-overlay active">
          <img src={View} alt="" />
        </div>
      </div>
      <div className="card-text">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <div className="card-action">
        <div className="card-amt">
          <img src={Ethereum} alt="" />
          <p>&nbsp; 0.041 ETH</p>
        </div>
        <div className="card-time">
          <img src={Clock} alt="" />
          <p> &nbsp;3 days left</p>
        </div>
      </div>

      <hr></hr>
      <div className="card-profile">
        <img src={Avatar} alt="" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
