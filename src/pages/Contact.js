import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel"; // Import FloatingLabel

import { useState } from "react";
import Card from "react-bootstrap/Card";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const contact = {
            name,
            email,
            phone,
        };
        const response = await fetch(
            "https://react-ecommerce-ef74d-default-rtdb.firebaseio.com/contact.json",
            {
                method: "POST",
                body: JSON.stringify(contact),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        console.log(data);
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <Card style={{ width: "50rem" }} className="shadow-lg mx-auto mt-3">
            <Card.Title className="mx-auto mt-3 text-center">
                CONTACT US
            </Card.Title>
            <Form className=" mx-auto mt-3" onSubmit={handleFormSubmit}>
                <FloatingLabel controlId="name" label="Name">
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    className=" mx-auto mt-3"
                    controlId="email"
                    label="Email"
                >
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    className="mx-auto mt-3"
                    controlId="phone"
                    label="Phone"
                >
                    <Form.Control
                        type="tel"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </FloatingLabel>

                <Button
                    className=" mx-auto mt-3 mb-3"
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default Contact;
