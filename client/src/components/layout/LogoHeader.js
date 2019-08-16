//component logoheader.js
import React from "react";
//Create link for /about
import { Link } from "react-router-dom";
//react-bootstrap applications
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function LogoHeader() {
    return (
        <Container>
            <div className="pagehctr">
                    <div className="logohead">
                        <Row>
                            <Col xs={1} ></Col>
                            <Col xs={3} >
                                <Link to="/about">
                                    <h1 className="crs_font  dblue">CRS</h1>
                                </Link>
                            </Col>
                            <Col xs={7} >
                                <span className="green">Consumer Registration for Services</span>
                                <br />
                                <span className="green">Free Confidential Help with Housing</span>
                            </Col>
                            <Col xs={1} ></Col>
                        </Row>
                    </div>
                </div>
        </Container>
    );
}

export default LogoHeader;