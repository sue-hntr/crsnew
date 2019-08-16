//component navbuttons.js
import React from "react";
//Create link for navbuttons
import { Link } from "react-router-dom";
//react-bootstrap applications
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function NavButtons() {
    return (
        <Container>
                
                <div className="logohead">
                    <Row>
                        <Col xs={1} ></Col>
                        <Col xs={2} >
                            <Link to="/appointmentmake">
                                <img src="images/Appt.png" alt="text"/>
                            </Link>
                            <br />
                            <span className="btnlabel">
                                Appointments
                            </span>
                        </Col>
                        <Col xs={1} ></Col>
                        <Col xs={2} >
                            <Link to="/idforms">
                                <img src="images/Forms.png" alt="text" />
                            </Link>
                            <br />
                            <span className="btnlabel">
                                &nbsp;&nbsp;ID/Forms
                            </span>
                        </Col>
                        <Col xs={1} ></Col>
                        <Col xs={2} >
                            <Link to="/staff">
                                <img src="images/Counselor.png" alt="text"/>
                            </Link>
                            <br />
                            <span className="btnlabel">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff
                            </span>
                        </Col>
                        <Col xs={1} ></Col>
                        <Col xs={2} >
                            <Link to="/">
                                <img src="images/Login.png" alt="text"/>
                            </Link>
                            <br />
                            <span className="btnlabel">
                                CRS Home
                            </span>
                        </Col>
                    </Row>
                </div>
            
        </Container>
    );
}

export default NavButtons;
