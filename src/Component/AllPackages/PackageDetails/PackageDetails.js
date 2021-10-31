import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PackageDetails = (props) => {
    const { photo, title, duration, details, _id, cost, transport } = props.package;

    return (
        <CardGroup>
            <Card className="text-center rounded  shadow">
                <Card.Img variant="top" src={photo} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <span className=""> Duration : {duration}</span><br/>
                        <span className=""> Cost : {cost}</span><br/>
                        <span className=""> Transport : {transport}</span><br/>
                        <span className="text-secondary">{details}</span><br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                    <Link to={`/booking/${_id}`}><button className="btn btn-warning w-100">Book Now</button></Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default PackageDetails;