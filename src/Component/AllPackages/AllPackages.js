import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PackageDetails from './PackageDetails/PackageDetails';

const AllPackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://ghostly-moonlight-88781.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
            });
    }, [])
    return (
        <Container className="my-5 pb-5">
            <h2 className="my-5 text-center">Our all Packages</h2>
           <Container>
           <Row xs={1} md={2} lg={3} className="g-5">
                {
                    packages?.map(packagedata => <PackageDetails package={packagedata} key={packagedata._id}></PackageDetails>)
                }
            </Row>
           </Container>
        </Container>
    );
};

export default AllPackages;