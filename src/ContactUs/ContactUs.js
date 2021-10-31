
import './ContactUs.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        
        <Container className="mb-5 pb-5" >
            <h2 className="mt-5 text-center">Contact Us</h2>
            <div className="mb-5 mx-auto"></div>
            <Container>
                <Row lg={3} md={2} xs={1} className=" g-5 text-center">

                    <Col className="border-style">
                        <h1> <i className="fas fa-map-marked-alt text-success"></i></h1>
                        <h5>TourBee Travels</h5>
                        <h6>3rd Floor, Taneem Square. 158/E, Kemal Ataturk Avenue Banani, Dhaka 1213</h6>

                    </Col>

                    <Col className=" border-style">
                        <h1><i className="fas fa-phone-alt text-success"></i></h1>
                        <h6>Phone Number</h6>
                        <h6>+88 58050442-3</h6>
                        <h6>Mobile Number</h6>
                        <h6>+8801944480902</h6>

                    </Col>

                    <Col className="">

                        <h1> <i className="fas fa-envelope text-success"></i></h1>
                        <h5>Questions?</h5>
                        <h6>tourbee@gmail.com</h6>

                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ContactUs;