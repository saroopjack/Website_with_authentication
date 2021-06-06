import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function FormPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userCheck, setuUerCheck] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setuUerCheck("Please enter the username");
      // return;
    }
    if (!pass) {
      setPassCheck("Please enter the password");
    }
    if (user && user !== "saroop") {
      setuUerCheck("Enter the right usename");
    }
    if (pass && pass !== "jack") {
      setPassCheck("Enter the right password");
    }
    if (user === "saroop" && pass === "jack") {
      history.push("/nav");
    }
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
                setuUerCheck("");
              }}
            />
            <span className="spanerror">{userCheck}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={pass}
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPass(e.target.value);
                setPassCheck("");
              }}
            />
            <span className="spanerror">{passCheck}</span>
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
