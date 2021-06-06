import React from "react";
import { Card } from "react-bootstrap";

export default function CardComponent(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.page} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{""}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
