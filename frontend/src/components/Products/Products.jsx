import React from "react";
import productData from "../Assets/data";
import Item from "../Item/Item";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  return (
    <div className="main-products">
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-items">
        {productData.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
