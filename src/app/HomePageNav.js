'use client';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';

// Import your assets
import yallanavbarlogo from './Assets/HomePageAssets/yallanavbarlogo.png';
import navbarlinkdind from './Assets/HomePageAssets/navbarlinkdind.png';
import navfb from './Assets/HomePageAssets/navfb.png';
import navinsta from './Assets/HomePageAssets/navinsta.png';
import navtwitter from './Assets/HomePageAssets/navtwitter.png';
import './HomePageNavbar.css';

const AllComponentNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => setIsNavOpen(!isNavOpen);

    return (
        <Navbar
            expand="lg"
            className={`navbar_container_component sticky-top ${isNavOpen ? 'bg-black-opacity' : ''} ${isNavOpen ? 'fade-in show' : 'fade-in show'}`}
            onToggle={handleNavToggle}
        >
            <Container fluid className='navbar_container_component'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center w-100'>
                        {/* Social Media Icons */}
                        <div className='d-flex mb-2 mb-lg-0 social_media_links' style={{ gap: '10px' }}>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={navfb} alt='navfb' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={navbarlinkdind} alt='navbarlinkdind' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={navinsta} alt='navinsta' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={navtwitter} alt='navtwitter' /></Link>
                        </div>

                        {/* Navbar Logo */}
                        <div className='navbar_logo'>
                            <Image src={yallanavbarlogo} alt='yallanavbarlogo' />
                        </div>

                        {/* Navigation Links */}
                        <Nav className='ml-auto navbar_links_container '>
                            <Link href={'/'} className='yalla_navbar_links'>Home</Link>
                            <Link href={'/yallaLifestyle'} className='yalla_navbar_links'>Yalla Lifestyle</Link>
                            <Link href={'/shops'} className='yalla_navbar_links'>Products</Link>
                            <Link href={'/machines'} className='yalla_navbar_links'>Machines</Link>
                            <Link href={'/contactUs'} className='yalla_navbar_links'>Contact Us</Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AllComponentNavbar;
