import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {

    const [allPackage, setAllPackage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://ghostly-moonlight-88781.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setAllPackage(data);
                setLoading(false);
            });
    }, [])

    // Load only 6 packages for home
    const packages = allPackage.slice(0, 6);


    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }

    return (
        <Container className="my-5">
            <h2 className="text-center my-5">Our Travel <span className="text-success fw-bold">Packages</span></h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        packages?.map(packagedata => <Package package={packagedata} key={packagedata._id}></Package>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Packages;