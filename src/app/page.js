'use client'
import React, { useState, useEffect } from 'react';
import HomePageNav from './HomePageNav';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import machinelogo from './Assets/HomePageAssets/machinelogo.png';
import YallaMoreAbout from './YallaMoreAbout';
import YallaProduct from './YallaProduct';
import YallaGallery from './YallaGallery';
import YallaServices from './YallaServices';
import HomePageBlogs from './HomePageBlogs';
import YallaFooter from './YallaFooter';
import YallaConsumer from './YallaConsumer'
import YallaSupplier from './YallaSupplier'
import VendingMachineCarousal from './VendingMachineCarousal';
import './HomePage.css';
import HeroSectionCarousal from './HeroSectionSlider';

const Page = () => {
    const [animate, setAnimate] = useState(false);
    const [bgColor, setBgColor] = useState('initialColor'); // Replace 'initialColor' with your initial background color

    useEffect(() => {
        setAnimate(true);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 20) {
                setBgColor('rgba(131, 218, 243, 0.1)');
            } else {
                setBgColor('white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='HomePageContainer' style={{ backgroundColor: bgColor }}>
            <HomePageNav />
            <HeroSectionCarousal />
            <YallaMoreAbout />
            <YallaProduct />
            <YallaGallery />
            <YallaServices />
            <YallaConsumer />
            <YallaSupplier />
            <HomePageBlogs />
            <YallaFooter />
        </div>
    );
}

export default Page;



