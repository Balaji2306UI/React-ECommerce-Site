import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CartContext from "./components/store/cart-context";

const Products = () => {
    const cartCtx = useContext(CartContext);
    
    return (
        <Container className="text-center">
            <Row
                xs={1}
                md={2}
                lg={3}
                className="justify-content-center g-5 p-5"
            >
                {cartCtx.cartItems.map((product, index) => {
                    let halfStar =
                        (product.rating * 10) % 10 > 0 ? true : false;
                    let starsCount = Math.floor(product.rating);
                    let rating = (
                        <div>
                            {new Array(starsCount).fill(0).map(() => (
                                <i className="fa-solid fa-star text-warning"></i>
                            ))}

                            {halfStar && (
                                <i className="fa-solid fa-star-half text-warning"></i>
                            )}
                        </div>
                    );

                    return (
                        <Col key={index}>
                            <h5 className="pt-3 pb-3">{product.title}</h5>
                            <Card
                                className="mx-auto"
                                style={{ width: "18rem" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={product.imageUrl}
                                />
                                <Card.Body>
                                    <Card.Text className="row">
                                        <div className="col-md-6 d-flex justify-content-start">
                                            Rs.{product.price}
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-end">
                                            {rating}
                                        </div>
                                    </Card.Text>
                                    <div className="row">
                                        <Button onClick={() => cartCtx.addItem(product.id)}>ADD TO CART</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Products;
