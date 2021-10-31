
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const PaymentMethod = () => {
    return (
        <div>
            <h2 className="text-center my-5"><span className="text-success fw-bold">Payment</span> Method</h2>
            <Row xs={2} md={3} lg={6} className="g-3 my-3">
                <Col>
                    <img src="https://i.ibb.co/L9s74n5/amex-new.png" alt="" className="img-fluid"></img>
                </Col>
                
                <Col>
                    <img src="https://i.ibb.co/10XWqJq/bkash-new.png" alt="" className="img-fluid"></img>
                </Col>
                <Col>
                    <img src="https://i.ibb.co/Yyy8tbZ/dbbl-new.png" alt="" className="img-fluid"></img>
                </Col>
                <Col>
                    <img src="https://i.ibb.co/9vjHzmY/mastercard-new.png" alt="" className="img-fluid"></img>
                </Col>
                <Col>
                    <img src="https://i.ibb.co/FYLMT54/visa-new.png" alt="" className="img-fluid"></img>
                </Col>
                <Col>
                    <img src="https://i.ibb.co/WGF6YV2/nogod-new.png" alt="" className="img-fluid"></img>
                </Col>
                
            </Row>
        </div>
    );
};

export default PaymentMethod;