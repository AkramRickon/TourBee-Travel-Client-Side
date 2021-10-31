import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Table, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PlaceBooking from '../PlaceBooking/PlaceBooking';
import './Booking.css';

const Booking = () => {
    const { packageId } = useParams();
    const [packageDetails, setPackageDetails] = useState();

    useEffect(() => {
        fetch(`https://ghostly-moonlight-88781.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [packageId])


    return (
        <Container className="my-5">
            <Container>
                <Row xs={1} md={1} lg={2} className="g-5">
                    <Container className="">
                        <CardGroup>
                            <Card className="text-center rounded  shadow">
                                <Card.Img variant="top" src={packageDetails?.photo} className="booking-photo" />
                                <Card.Body className="fw-bold">
                                    <Card.Title>{packageDetails?.title}</Card.Title>
                                    <Card.Text>
                                        <span className="text-success"> Duration : {packageDetails?.duration}</span><br />
                                        <span  className="text-warning "> Cost : {packageDetails?.cost}</span><br />
                                        <span  className="text-danger" > Transport : {packageDetails?.transport}</span><br />
                                        <span >{packageDetails?.details}</span><br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>


                    <PlaceBooking package={packageDetails}></PlaceBooking>

                    {/* <Col>

                        <img src={packageDetails?.photo} alt="" className="img-fluid "></img>

                    </Col>
                    <Col >
                        <div className="bg-dark text-white py-4 px-3">
                            <h5 className="lh-lg">Package Name : {packageDetails?.title}</h5>
                            <h5 className="lh-lg">Package Duration : {packageDetails?.duration}</h5>
                            <h5 className="lh-lg">Cost : {packageDetails?.cost}</h5>
                            <h5 className="lh-lg">Transport : {packageDetails?.transport}</h5>
                            <h5 className="lh-lg">{packageDetails?.details}</h5>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
};

export default Booking;