import React from "react";
import productData from "../Assets/data";
import Item from "../Item/Item";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

const Products = () => {
  return (
    <div className="popular-products">
      <h1>Top Selling Products</h1>
      <hr />
      <div className="popular-items">
        <Container>
          <Row>
            {productData.map((product, i) => (
              <Col key={i} xs={1} md={6} lg={3}>
                <Item {...product} key={i} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
