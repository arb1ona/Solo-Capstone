import React, { Component } from "react";
import { Container, Row, Col, Button, Form, CardImg } from "react-bootstrap";
import { FacebookLoginButton, LinkedInLoginButton } from "react-social-login-buttons";
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';
import "./Register.css"

export default class signin extends Component {

    render() {
        return (
            <Container className="container-fluid" style={{ maxWidth: "100%", background: "#067DA6", margin: "auto" }}>
                <Row>
                    < Col lg={{ span: 6, offset: 3 }} className="text-center">
                        <img
                            className="img-fluid"
                            src={linkedin}
                            style={{ maxHeight: "45px", marginTop: "1rem", color: "white" }}
                            alt=""
                        />
                    </Col>
                    <div className="mt-3">
                        <h3 style={{ color: "white", textAlign: "center", margin: "0 20rem 1.5rem" }}>Make the most of your professional life</h3>
                    </div>
                </Row >


                <Row className="mt-3">
                    <Col md={{ span: 4, offset: 4 }} className="text-center" style={{ backgroundColor: "#EDF0F3" }}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}>Name</Form.Label>
                                    <Form.Control type="Name" required placeholder="Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}>Surname</Form.Label>
                                    <Form.Control type="Surname" required placeholder="Surname" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridBio1">
                                <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}>Bio</Form.Label>
                                <Form.Control placeholder="Curious" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} required controlId="formGridTitle">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}>Title</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridArea">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}>Area</Form.Label>
                                    <Form.Control as="select" required defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} required controlId="formGridUsername">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}>Username</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="mb-3 mt-0">
                                <Form.Group>
                                    <Form.File
                                        style={{ margin: "0 0 0 0.35rem" }}
                                        required
                                        name="file"
                                        label=""
                                        id="validationFormik107"
                                        feedbackTooltip></Form.File>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className="mt-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}></Form.Label>
                                    <Form.Control type="email" required placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label style={{ fontSize: "14px", float: "left", margin: "0 0 0px" }}></Form.Label>
                                    <Form.Control type="password" required placeholder="Password" />
                                </Form.Group>
                            </Form.Row>
                        </Form>



                        <LinkedInLoginButton className="mt-3" style={{ height: "2.5rem" }}><span style={{ color: "white", fontSize: "18px", fontWeight: "400" }}>Agree & Join</span></LinkedInLoginButton>
                        <div>OR</div>
                        <FacebookLoginButton className="mt-2" style={{ height: "2.5rem" }}><span style={{ color: "white", fontSize: "18px", fontWeight: "400" }}> Continue with Facebook</span></FacebookLoginButton>

                        <div className="mt-4" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }}>
                            <p className="mt-3" style={{ fontWeight: "350" }}>
                                Already in LinkedIn?<Link to={"/signin"} className="button secondary text-center" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }} >Sign In.</Link>
                            </p>
                        </div>


                    </Col>
                </Row>

                <Row className="mt-5">
                </Row >
            </Container >
        );
    }
}
