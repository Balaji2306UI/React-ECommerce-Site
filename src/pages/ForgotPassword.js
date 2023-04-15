import React, { useRef, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Row } from "react-bootstrap";

import AuthContext from "../components/store/auth-context";

function ForgotPassword() {
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const changePasswordHandler = (event) => {
        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAHOyRinTiKDLDani_389jFJ6WSITor6NA",
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
            // assumption: Always succeeds!
        });
    };
    return (
        <Card style={{ width: "26rem" }} className="mx-auto">
            <Card.Body>
                <Card.Title className="text-center mb-4">
                    New Password
                </Card.Title>
                <Form className="p-4" onSubmit={changePasswordHandler}>
                    <FloatingLabel label="Password" className="mb-4">
                        <Form.Control
                            type="password"
                            placeholder="New Password"
                            ref={newPasswordInputRef}
                        />
                    </FloatingLabel>
                    <Row className="px-2 mb-3">
                        <Button type="submit">Change Password</Button>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ForgotPassword;
