"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { Carousel } from 'react-responsive-3d-carousel';
import './YallaConsumer.css';
import yallaconsumer from '../app/assets/yallaconsumer.png';
import cocacola from '../app/assets/cocacola.png';

const Yallaconsumer = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <Container fluid>
            <h1 className='yalla_consumer_text'>Our Consumer</h1>
            <Carousel
                showStatus={false}
                statusSize={'small'}
                statusColor={'rgb(255, 255, 255)'}
                showArrows={true}         // Show navigation arrows
                autoPlay={true}          // Enable automatic scrolling
                interval={3000}          // Set interval for automatic scrolling
                showThumbs={false}      // Hide thumbnails
                showIndicators={true}   // Show indicators (dots)
            >
                <div className="carousel-item">
                    <Image src={yallaconsumer} alt="yallaconsumer" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={cocacola} alt="cocacola" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={yallaconsumer} alt="yallaconsumer" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={cocacola} alt="cocacola" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={yallaconsumer} alt="yallaconsumer" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={cocacola} alt="cocacola" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={yallaconsumer} alt="yallaconsumer" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={cocacola} alt="cocacola" width={200} height={200} />
                </div>
                <div className="carousel-item">
                    <Image src={yallaconsumer} alt="yallaconsumer" width={200} height={200} />
                </div>
            </Carousel>
        </Container>
    );
};

export default Yallaconsumer;
