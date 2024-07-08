import React from "react";
import "./Offers.css";
import offers_img from "../Assets/offers_img.png";
import offers_img2 from "../Assets/offers_img2.png";
import offers_img3 from "../Assets/offers_img3.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={offers_img} alt="" />
        <img src={offers_img2} alt="" />
        <img src={offers_img3} alt="" />
      </div>
    </div>
  );
};

export default Offers;
