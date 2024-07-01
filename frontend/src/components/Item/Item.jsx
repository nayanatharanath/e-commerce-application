import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productData from "../Assets/data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Item(props) {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((i) => (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src={props.image} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Item;
