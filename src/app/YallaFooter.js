"use client"
import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, InputGroup, Container, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import footerlogo from './Assets/HomePageAssets/footerlogo.png';
import twitter from './Assets/HomePageAssets/twitter.png';
import fb from './Assets/HomePageAssets/fb.png';
import insta from './Assets/HomePageAssets/insta.png';
import footercircle from './Assets/HomePageAssets/footercircle.png'
import './HomePage.css';

const YallaFooter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const currentYear = new Date().getFullYear(); // Get current year dynamically
    const handleemailsubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form with email:', email);

        try {
            const response = await fetch('https://formspree.io/f/mdknojjo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            console.log('Response:', response);

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);


    return (
        <Container fluid>
            <Row className='footerContainer p-4'>
                <Col xs={12} md={6} lg={4}>
                    <div>
                        <Image src={footerlogo} alt='YallaLifestyle' />
                        <h6 className='footerText mt-2'>
                            Yalla Food and Drinks, supported by the Khalifa Fund, promotes healthier options in the UAE, tackling obesity and diabetes with balanced choices and accessible nutrition.
                        </h6>

                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={twitter} alt='twitter' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={fb} alt='fb' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={insta} alt='insta' /></Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className='companyHELP'>
                        <div className='company_div'>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>COMPANY</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>About</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Features</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Works</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Career</p></Link>
                        </div>

                        <div className='company_div'>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>HELP</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Customer Support</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Delivery Details</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Terms & Conditions</p></Link>
                            <Link href={''} style={{ textDecoration: 'none', color: 'white' }}><p>Privacy Policy</p></Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>

                    <div className='footer_circle_image' >
                        <Image src={footercircle} alt='footercircle' />
                        <Image src={footerlogo} alt='YallaLifestyle' className='image_nested_footer' />
                    </div>

                </Col>
                <hr />
                <p className='copyright'>© Copyright {currentYear}, All Rights Reserved by Yalla lifestyle</p>
            </Row>
        </Container>
    );
};

export default YallaFooter;