import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className="container">
      <Row className="flex-column align-items-center">
        <Col lg={6} sm={10}>
          <p
            className="btn btn-lg border-dark p-4 m-5"
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? " PRESS TO SIGN UP" : "PRESS TO LOG IN"}
          </p>
        </Col>
        <Col lg={6} sm={10}>
          {showLogin ? (
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
