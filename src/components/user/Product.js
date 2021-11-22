import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Product = (props) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <Card
        style={{ width: "19rem", marginBottom: "20px", textAlign: "center" }}
      >
        <Card.Img
          style={{ height: "200px" }}
          variant="top"
          src={props.product.image}
        />

        <Card.Body>
          <Card.Title>{props.product.product}</Card.Title>

          <Card.Text style={{ height: "60px" }}>
            {props.product.specification.length > 85
              ? props.product.specification.slice(0, 85) + "..."
              : props.product.specification}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <span style={{ fontWeight: "bold" }}> Price </span> : &#8377;
            {props.product.price},{" "}
            <span style={{ fontWeight: "bold" }}>Discount</span> :{" "}
            {props.product.discount}
          </ListGroupItem>

          {props.product.offers ? (
            <ListGroupItem>{props.product.offers}</ListGroupItem>
          ) : (
            <ListGroupItem>No Offer Available</ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          <Card.Text>
            {props.product.review ? (
              <span>
                <span style={{ fontWeight: "bold" }}> Reviews</span> :{" "}
                {props.product.review}{" "}
              </span>
            ) : (
              <span>
                <span style={{ fontWeight: "bold" }}> Reviews</span> : 0{" "}
              </span>
            )}
            {props.product.rating ? (
              <span>
                <span style={{ fontWeight: "bold" }}>Rating</span> :{" "}
                {props.product.rating}
              </span>
            ) : (
              <span>
                <span style={{ fontWeight: "bold" }}>Rating</span> : N/A
              </span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
