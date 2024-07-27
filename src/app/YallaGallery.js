'use client';
import React, { useEffect, useState } from 'react';
import './YallaGalleryStyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import galleryone from '../app/assets/HomePageAssets/galleryone.png';
import gallerytwo from '../app/assets/HomePageAssets/gallerytwo.png';
import gallerythree from '../app/assets/HomePageAssets/gallerythree.png';
import galleryfour from '../app/assets/HomePageAssets/galleryfour.png';
import galleryfive from '../app/assets/HomePageAssets/galleryfive.png';
import gallerysix from '../app/assets/HomePageAssets/gallerysix.png';
import galleryseven from '../app/assets/HomePageAssets/galleryseven.png';
import galleryeight from '../app/assets/HomePageAssets/galleryeight.png';
import eatgoodloog from '../app/Assets/HomePageAssets/eatgoodloog.png'
import gallerytextlogo from '../app/Assets/HomePageAssets/gallerytextlogo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
    {
        id: 1,
        title: "Animated Card 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryone
    },
    {
        id: 2,
        title: "Animated Card 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: gallerytwo
    },
    {
        id: 3,
        title: "Animated Card 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: gallerythree
    },
    {
        id: 4,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryfour
    },
    {
        id: 5,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryfive
    },
    {
        id: 6,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: gallerysix
    },
    {
        id: 7,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryseven
    },
    {
        id: 8,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryeight
    },
];

const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <Container fluid>
                <article class="main-container__marquee" data-aos="fade-up">
                    <div class="main-container__marquee-track">
                        <div class="main-container__marquee-items">

                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                        <div aria-hidden="true" class="main-container__marquee-items">

                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                    </div>
                </article>
                <Row className='gallery_row' >
                    {cardData.map((card) => (
                        <Col key={card.id} md={3} sm={6} xs={12} className="yalla_gallery_column">
                            <div className="yalla_card_gallery"
                                data-aos-offset="200"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                data-aos="fade-up"
                            >
                                <Image src={card.image} alt={card.title} className="card-image" layout="responsive" />
                            </div>
                        </Col>
                    ))}
                </Row>
                <article class="main-container__marquee_below" data-aos="fade-up">
                    <div class="main-container__marquee-track">
                        <div class="main-container__marquee-items">

                        <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                        <div aria-hidden="true" class="main-container__marquee-items">
                        <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                    </div>
                </article>

                <div className='all_btn_product'>
                    <button className="animated-button" data-aos="fade-up" data-aos-delay="100">
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                        </svg>
                        <span className="text">View More</span>
                        <span className="circle" />
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                        </svg>
                    </button>
                </div>
            </Container>
        </>
    );
};

export default Page;

