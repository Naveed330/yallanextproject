'use client';
import React, { useEffect, useState } from 'react';
import './Gallerystyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import galleryone from '../app/assets/galleryone.png';
import gallerytwo from '../app/assets/gallerytwo.png';
import gallerythree from '../app/assets/gallerythree.png';
import galleryfour from '../app/assets/galleryfour.png';
import galleryfive from '../app/assets/galleryfive.png';
import gallerysix from '../app/assets/gallerysix.png';
import galleryseven from '../app/assets/galleryseven.png';
import galleryeight from '../app/assets/galleryeight.png';
import Animatedcard from '../app/Animatedcard'
import AboutSection from '../app/AboutSection'
import  YallaSupplier from '../app/YallaSupplier'
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
        <div className='Main_container' >
            <AboutSection />
            <Animatedcard />
            <Container fluid>
                <article class="main-container__marquee" data-aos="fade-up" data-aos-delay="300">
                    <div class="main-container__marquee-track">
                        <div class="main-container__marquee-items">
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD</span>
                        </div>
                        <div aria-hidden="true" class="main-container__marquee-items">
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD</span>
                        </div>
                    </div>
                </article>
                <Row>
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
                <article class="main-container__marquee" data-aos="fade-up" data-aos-delay="300">
                    <div class="main-container__marquee-track">
                        <div class="main-container__marquee-items">
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD EAT GOOD FEEL GOOD</span>
                        </div>
                        <div aria-hidden="true" class="main-container__marquee-items">
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD</span>
                            <span class="main-container__marquee-item">EAT GOOD FEEL GOOD</span>
                        </div>
                    </div>
                </article>
            </Container>
            <YallaSupplier/>
        </div>
    );
};

export default Page;

