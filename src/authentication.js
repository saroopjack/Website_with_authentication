import React from "react";
import FormPage from "./form";
import { Container, Row, Col } from "react-bootstrap";

export default function Authentications() {
  return (
    <div className="App">
      <div>
        <h1>Authentication Portal</h1>
      </div>
      <br />
      <br />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <FormPage />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
