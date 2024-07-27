'use client'
import React from "react";
import './yallaStyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import socialbrandone from '../Assets/LifestyleAssets/socialbrandone.png';
import eatgoodfeelgoodsocial from '../Assets/LifestyleAssets/eatgoodfeelgoodsocial.png';
import yallasocial from '../Assets/LifestyleAssets/yallasocial.png';
import yallasociallink from '../Assets/LifestyleAssets/yallasociallink.png';
import yallasociallinks from '../Assets/LifestyleAssets/yallasociallinks.png';
import Link from 'next/link';
import YallaSocialMediaCarousal from './YallaSocialMediaCarousal';
import { useMediaQuery } from 'react-responsive';

const YallaSocialMedia = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <div className="social_media_container" >
            <Container>
                <h1 className='social_media_life_style' data-aos="fade-up">SOCIAL MEDIA</h1>
                <p className='social_insta_link' data-aos="fade-up">Follow us on Instagram @yallalifestyle</p>

                {
                    isMobile && isMobile ? (
                        <><YallaSocialMediaCarousal /></>
                    )
                        :
                        <>
                            <div className="desktop_screen">
                                <Row>
                                    <Col>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up" >
                                                <Image src={socialbrandone} alt='socialbrandone' style={{ width: '100%' }} />
                                            </Link>

                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                                <Image src={eatgoodfeelgoodsocial} alt='eatgoodfeelgoodsocial' className='mt-3' style={{ width: '100%' }} data-aos="fade-up" />
                                            </Link>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up">
                                                <Image src={yallasocial} alt='yallasocial' style={{ width: '100%' }} />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up">
                                                <Image src={yallasociallink} alt='yallasociallink' className='mt-2' style={{ width: '100%' }} />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} lg={12}>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up">
                                                <Image src={yallasociallinks} alt='yallasociallinks' className='mt-2' style={{ width: '100%' }} />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                }

                {/* {!isMobile && (
                    <div className="desktop_screen">
                        <Row>
                            <Col>
                                <div>
                                    <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                        <Image src={socialbrandone} alt='socialbrandone' style={{ width: '100%' }} />
                                    </Link>

                                    <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                        <Image src={eatgoodfeelgoodsocial} alt='eatgoodfeelgoodsocial' className='mt-3' style={{ width: '100%' }} />
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div>
                                    <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                        <Image src={yallasocial} alt='yallasocial' style={{ width: '100%' }} />
                                    </Link>
                                </div>
                                <div>
                                    <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                        <Image src={yallasociallink} alt='yallasociallink' className='mt-2' style={{ width: '100%' }} />
                                    </Link>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} lg={12}>
                                <div>
                                    <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                        <Image src={yallasociallinks} alt='yallasociallinks' className='mt-2' style={{ width: '100%' }} />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}

                {isMobile && <YallaSocialMediaCarousal />} */}
            </Container>
        </div>
    );
}

export default YallaSocialMedia;
