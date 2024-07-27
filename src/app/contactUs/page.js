"use client"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contactPage.css'; // Import your external CSS file
import HomePageNav from '../HomePageNav'
import phone from '../Assets/ContactPageAssets/phone.png';
import location from '../Assets/ContactPageAssets/location.png';
import email from '../Assets/ContactPageAssets/email.png';
import imagedesign from '../Assets/ContactPageAssets/imagedesign.png';
import instagram from '../Assets/ContactPageAssets/instagram.png';
import twieeter from '../Assets/ContactPageAssets/twieeter.png';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Image from 'next/image';
import YallaFooter from '../YallaFooter';
import arrowhandle from '../Assets/ContactPageAssets/arrowhandle.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactformman from '../Assets/HomePageAssets/contactformman.png'
import { CSSTransition } from 'react-transition-group';


const Page = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
    });
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/mnnaqrwe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            toast.success('Message sent successfully!', {
                position: "bottom-right",
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } else {
            toast.error('Failed to send message. Please try again.', {
                position: "bottom-right",
            });
        }
    };

    return (
        <>
            <HomePageNav />
            <div className="backgroundImage">
                <ToastContainer />
                <Container fluid>
                    <div className='contactContainer'>
                        {/* <h1 className='YallaContact'>YALLA Contact Us</h1> */}
                        <h3 className='questionremarks'>Any question or remarks? Just write us a message!</h3>
                    </div>

                    <Row>
                        <Col xs={12} md={6} className='contactInformation mt-4'>
                            <div className='contactInformationDiv'>
                                <h1 className='contacttext'>Contact Information</h1>
                                <p className='saysomethingtext'>Say something to start a live chat!</p>

                                <div className='socialcontactDetails'>
                                    <div style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                                        <Image src={phone} alt='Contact' />
                                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                                            <p className='contactAllInfo'>+97125554712</p>
                                            <p className='contactAllInfo' style={{ marginTop: '-10px' }} >+97125554713</p>
                                        </div>
                                    </div>

                                    <div className='socialEmailDetails'>
                                        <Image src={email} alt='Contact' />
                                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                                            <p className='contactAllInfo'>Info@yallavending.com</p>
                                            <p className='contactAllInfo' style={{ marginTop: '-10px' }}>www.yallalifestyle.com</p>
                                        </div>
                                    </div>



                                    <div className='socialEmailDetails'>
                                        <Image src={location} alt='Contact' />
                                        <p className='contactAllInfo'>Yalla Lifestyle, Musaffah M2 Plot 13, Warehouse 4 Abu Dhabi,UAE</p>
                                    </div>
                                </div>

                                <div className='socialcontact'>
                                    <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={instagram} alt='instagram' /></Link>
                                    <Link href={''}><Image src={twieeter} alt='twieeter' /></Link>
                                </div>

                                <div className='imageDesigndiv'>
                                    <Image src={imagedesign} alt='IMAGE_design' />
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={6} className='secondColumn mt-3'>
                            <Form onSubmit={handleSubmit}>

                                <Row>

                                    <Col xs={12} md={8}>
                                        <CSSTransition in={inProp} timeout={300} classNames="fade">
                                            <div>
                                                {/* <Form.Label className='labelName'>First Name</Form.Label> */}
                                                {/* <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className='textInputField'
                                                /> */}
                                                <input
                                                    type="text"
                                                    name="fullname"
                                                    placeholder='Full Name'
                                                    value={formData.fullname}
                                                    onChange={handleChange}
                                                    className='textInputField w-100'

                                                />
                                            </div>
                                        </CSSTransition>

                                    </Col>

                                    <Col xs={12} md={8}>
                                        <CSSTransition in={inProp} timeout={300} classNames="fade" appear>
                                            <div>
                                                {/* <Form.Label className='labelName'>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className='textInputField'
                                                /> */}
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder='Email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className='textInputField w-100'

                                                />
                                            </div>
                                        </CSSTransition>
                                    </Col>

                                    <Col xs={12} md={8}>
                                        <CSSTransition in={inProp} timeout={300} classNames="fade" appear>
                                            <div>
                                                {/* <Form.Label className='labelName'>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className='textInputField'
                                                /> */}
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder='Phone'
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className='textInputField w-100'

                                                />
                                            </div>
                                        </CSSTransition>
                                    </Col>

                                    <Col xs={12} md={8}>
                                        <CSSTransition in={inProp} timeout={300} classNames="fade" appear>
                                            <div className='textareadiv'>
                                                {/* <Form.Label className='labelName'>Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={4}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder='Write your message..'
                                                    className='textareafield'
                                                /> */}

                                                <textarea 
                                                className='textareafield w-100'
                                                rows={4}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder='Write your message..'
                                                ></textarea>
                                            </div>
                                        </CSSTransition>
                                    </Col>


                                    <Col xs={12} md={8}>
                                        <CSSTransition in={inProp} timeout={300} classNames="fade" appear>
                                            <div className='linksubmit'>
                                                <button type="submit" className='submitText hoverEffect'>Submit</button>
                                            </div>
                                        </CSSTransition>
                                    </Col>

                                </Row>

                            </Form>
                        </Col>
                    </Row>

                    <div className='mapDiv mb-5'>
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=1-rLgZ5K9eiP4kcLV-FyZMtgxIHAnJTUS&ehbc=2E312F"
                            className='iframeclass'
                        ></iframe>
                    </div>
                </Container>
                <YallaFooter />
            </div>
        </>
    );
};

export default Page;


