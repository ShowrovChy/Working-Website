import React, { useEffect, useState } from "react";
import { AddToDb, getDb } from "../../localStorage/localStorage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const AddProductToCart = (product) => {
    product.quantity = 1;
    const newCart = [...cart, product];
    setCart(newCart);
    AddToDb(product.key);
  };
  useEffect(() => {
    if (products.length) {
      const savedDb = getDb();
      const addedProduct = [];
      for (const productId in savedDb) {
        const foundPd = products.find((pd) => pd.key === productId);
        const quantity = savedDb[productId];
        foundPd.quantity = quantity;
        addedProduct.push(foundPd);
      }
      setCart(addedProduct);
    }
  }, [products]);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.key}
            AddProductToCart={AddProductToCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
