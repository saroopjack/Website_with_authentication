import { Container,Row, Col } from "react-bootstrap";
import "./App.css";
import FormPage from "./form";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Authentication Portal</h1>
      </div>
      <br/>
      <br/>
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

export default App;
