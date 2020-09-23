import React from "react";
import { Link } from "react-router-dom";
import products from "../../exercise-2/mockups/data.json";
const ProductList = () => (
  <div className="page">
    <h1>All Products</h1>

    {Object.values(products).map(({ id, name }) => (
      <div>
        <Link to={`/products/${id}`} key={id}>
          {name}
        </Link>
      </div>
    ))}
  </div>
);

export default ProductList;
