import React from 'react';
import { Col, Row } from 'react-bootstrap';

const OurServices = () => {
    return (
        <div>
            <h2 className="text-center">Our <span className="text-success fw-bold">Services</span></h2>
            <Row xs={1} md={2} lg={4} className="g-3 my-5">
                <Col>
                    <div className="border border-1 p-2 rounded">
                        <i className="fas fa-bus-alt fs-1 text-primary "></i>
                        <h4 className="my-2 text-secondary ">Bookings Tickets</h4>

                        <p className="text-secondary">We will book transport tickets for your journey. Booking a ticket for your next holiday journey has never been easier.</p>
                    </div>

                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded">
                        <i className="fas fa-hotel fs-1 text-primary"></i>
                        <h4 className="my-2 text-secondary">Hotel Reservation</h4>
                        <p className="text-secondary">We will reserve Hotels, Cottage and resorts for you. We will provide neccessary accomodation you need in our hotel.</p>
                    </div>
                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded">
                        <i className="fas fa-layer-group fs-1 text-primary" ></i>
                        <h4 className="my-2 text-secondary">Tour Packages</h4>
                        <p className="text-secondary">We always offer reasonable price. We provide defferent type of tour packages so that you can choose your travel plan with us.</p>
                    </div>

                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded">
                        <i className="fas fa-route fs-1 text-primary"></i>
                        <h4 className="my-2 text-secondary">Tour Guide</h4>
                        <p className="text-secondary">We will plan tour and guide you throughout the whole journey. Whatever your destination is, we'll plan your next vacation easily.</p>
                    </div>
                </Col>
            </Row>


        </div>
    );
};

export default OurServices;