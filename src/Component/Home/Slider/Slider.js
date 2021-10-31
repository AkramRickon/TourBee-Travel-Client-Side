import React from 'react';


import { Carousel } from 'react-bootstrap';


const Slider = () => {
    return (

        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/wNrgTVB/sajek.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/QFHyb4X/river.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/YQWD8G7/rsz-riashat-rafat-ph5vl5tilto-unsplash.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/HTkFjxH/saintmartin.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/s6Mz4H2/badorban.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/86JsQFs/hill.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Slider;