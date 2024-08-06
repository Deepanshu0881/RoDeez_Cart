import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import {currency } from "../../App";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log("Clicked size:", size); 
  };

  const renderSizes = () => {
    let sizes = [];

    if (product.category === "laptop") {
      sizes = ['14" i3-1215U 8GB', '14" i5-1235U 16GB', '15" 1334U 16GB'];
    } else if (product.category === "mobile") {
      sizes = ["12GB + 256GB", "12GB + 128GB", "12GB + 512GB"];
    } else if (product.category === "television") {
      sizes = ["33 inches", "55 inches", "65 inches"];
    }

    return sizes.map((size, index) => (
      <div
        key={index}
        className={selectedSize === size ? "clicked" : ""}
        onClick={() => handleSizeClick(size)}
      >
        {size}
      </div>
    ));
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {currency}
            {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {currency}
            {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>{product.category === 'laptop' ? 'Style Name' : 'Size'}</h1>
          <div className="productdisplay-right-sizes">{renderSizes()}</div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Electronics, Accessories
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
