import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark w-100 ">
            <Container className="pb-3">
                {/* Footer is devided into three columns */}
                <Row xs={1} md={3} className="g-4">
                    <Col className="text-white">
                        <ul>
                            <li><h5>ADDRESS</h5></li>
                        </ul>
                        <ul>
                            <li><h6>TourBee Travels</h6></li>
                            <li><h6>3rd Floor, Taneem Square</h6></li>
                            <li><h6>158/E, Kemal Ataturk Avenue</h6></li>
                            <li><h6> Banani, Dhaka 1213</h6></li>
                        </ul>
                    </Col>

                    <Col>
                        <div className="text-center text-white mb-3 ">
                            <h5>FOLLOW US</h5>
                            <div>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-pinterest"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                        <Container className="text-center">
                            <strong className="text-white pe-2">Partners</strong>
                            <img className="footer-img" src="https://i.ibb.co/z774LMy/e-cab.png" alt=""></img>
                            <img  className="footer-img" src="https://i.ibb.co/N9rRHGz/basis.png" alt=""></img>
                           
                        </Container>
                    </Col>

                    <Col className="text-end text-white">
                        <h5>CONTACT US</h5>
                        <h6  className="phone-num-color "><i className="fas fa-phone-alt"></i>+88 58050442-3</h6>
                        <h6 className="phone-num-color "><i className="fas fa-phone-alt"></i>+8801944480902</h6>
                        
                        <h6><i className="far fa-envelope me-2"></i>info@tourbee.com</h6>
                        <h6><i className="far fa-envelope me-2"></i>tourbee@gmail.com</h6>
                    </Col>
                </Row>
            </Container>
            <p className="text-center  mb-0 copyright-bg text-secondary py-1">©Copyright 2017-2021 | TourBee Travels</p>
        </div>

            
        </div>
    );
};

export default Footer;