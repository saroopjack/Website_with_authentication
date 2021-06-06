import React from "react";
import Navbars from "./navbars";
import CardComponent from "./components/cardcomponent";
import { Container, Row, Col } from "react-bootstrap";

export default function Animals() {
  return (
    <div>
      <Navbars />
      <Container >
        <Row>
          <Col>
            <CardComponent page="https://picsum.photos/286/180" />
          </Col>
          <Col>
            <CardComponent page="https://picsum.photos/286/180" />
          </Col>
          <Col>
            <CardComponent page="https://picsum.photos/286/180" />
          </Col>
          <Col>
            <CardComponent page="https://picsum.photos/286/180" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}