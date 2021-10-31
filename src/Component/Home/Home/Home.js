import React from 'react';
import { Container } from 'react-bootstrap';
import Aboutus from '../AboutUs/Aboutus';
import OurServices from '../OurServices/OurServices';
import Packages from '../Packages/Packages';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        <Container className="my-5 pb-5 text-center">
            <Aboutus></Aboutus>
            <Packages></Packages>
            <OurServices></OurServices>
            <PaymentMethod></PaymentMethod>
        </Container>
        </>
    );
};

export default Home;