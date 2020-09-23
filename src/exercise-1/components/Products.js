import React from "react";
import { Route, Switch } from "react-router-dom";
import products from "../../exercise-2/mockups/data.json";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
const Products = () => (
  <div className="page">
    <Switch>
      <Route exact path="/products">
        <ProductList />
      </Route>
      {/* {Object.values(products).map(({ id, name }) => (
        <Link to={`/products/${id}`}>{name}</Link>
      ))} */}
      {Object.values(products).map((product) => (
        <Route key={product.id} path={`/products/${product.id}`}>
          <ProductDetail {...product} />
        </Route>
      ))}
    </Switch>
  </div>
);

export default Products;
