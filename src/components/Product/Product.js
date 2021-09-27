import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, stock, img } = props.product;
  const CartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="card">
      <div className="image-part">
        <img src={img} alt="" />
      </div>
      <div className="desc">
        <h2 className="product-name">Products : {name}</h2>
        <p>
          <small>By {seller}</small>
        </p>
        <p>Price : {price}</p>
        <p>
          {" "}
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.AddProductToCart(props.product)}
          className="btn-regular"
        >
          {CartIcon} Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
