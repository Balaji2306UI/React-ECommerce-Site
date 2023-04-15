import React, { useState, useRef, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../components/store/auth-context";

function Login() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [showSignUp, setShowSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function toggleSignUp() {
        setShowSignUp((prevState) => !prevState);
        console.log(showSignUp);
    }
    function formSubmitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);
        let url;
        if (showSignUp) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHOyRinTiKDLDani_389jFJ6WSITor6NA";
        } else {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHOyRinTiKDLDani_389jFJ6WSITor6NA";
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication failed!";
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            if(!showSignUp) {
                authCtx.login(data.idToken);
            }
            
        }).catch(error => alert(error.message));
    }
    return (
        <Card style={{ width: "26rem" }} className="mx-auto">
            <Card.Body>
                <Card.Title className="text-center mb-4">
                    {showSignUp ? "Signup" : "Login"}
                </Card.Title>
                <Form className="p-4" onSubmit={formSubmitHandler}>
                    <FloatingLabel label="Email" className="mb-4">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            ref={emailInputRef}
                        />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-4">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            ref={passwordInputRef}
                        />
                    </FloatingLabel>
                    {!showSignUp && (
                        <Row className="mb-4">
                            <Col>
                                <Form.Check label="Remember me" />
                            </Col>
                            <Col>
                                <Link to="/newPassword">forgot password?</Link>
                            </Col>
                        </Row>
                    )}
                    <Row className="px-2 mb-3">
                        <Button type="submit">
                            {!isLoading ? "Submit" : "Sending Request..."}
                        </Button>
                    </Row>
                    {!showSignUp && (
                        <p className="text-center">
                            Don't have an account?{" "}
                            <Link onClick={() => toggleSignUp()}>Signup</Link>
                        </p>
                    )}
                    {showSignUp && (
                        <p className="text-center">
                            Already have an account?{" "}
                            <Link onClick={() => toggleSignUp()}>Login</Link>
                        </p>
                    )}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;
