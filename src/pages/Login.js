import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);
    function toggleSignUp() {
        setShowSignUp(prevState => !prevState)
    }
    return (
        <Card style={{ width: "26rem" }} className="mx-auto">
            <Card.Body>
                <Card.Title className="text-center mb-4">
                    {showSignUp ? "Signup" : "Login"}
                </Card.Title>
                <Form className="p-4">
                    <FloatingLabel label="Email" className="mb-4">
                        <Form.Control type="email" placeholder="Enter email" />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-4">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    {!showSignUp && (
                        <Row className="mb-4">
                            <Col>
                                <Form.Check label="Remember me" />
                            </Col>
                            <Col>
                                <a href="/" to="/home">
                                    forgot password?
                                </a>
                            </Col>
                        </Row>
                    )}
                    <Row className="px-2 mb-3">
                        <Button>Submit</Button>
                    </Row>
                    {!showSignUp && (
                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link onClick={() => toggleSignUp()}>
                            Signup
                        </Link>
                    </p>
                    )}
                    {showSignUp && (
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link onClick={() => toggleSignUp()}>
                            Login
                        </Link>
                    </p>
                    )}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;
