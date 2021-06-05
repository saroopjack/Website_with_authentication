import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function FormPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "saroop" && pass === "jack") {
      history.push("/nav");
    } else alert("wrong credentials");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={user}
              type="Username"
              placeholder="Enter username"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={pass}
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </Container>
    </div>
  );
}
