import React from "react";
const ProductDetail = ({ name, id, price, quantity, desc }) => (
  <div className="page">
    <h1>Product Details:</h1>
    <p>Name: {name}</p>
    <p>Id: {id}</p>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    <p>Desc: {desc}</p>
    <p>URL: {`/products/${id}`}</p>
  </div>
);
export default ProductDetail;
