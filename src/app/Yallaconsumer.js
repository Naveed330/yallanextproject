import React, { useEffect } from 'react';
import './YallaConsumer.css';
import { Container, Row, Col } from 'react-bootstrap';
import cosumerone from './Assets/HomePageAssets/cosumerone.png';
import cosumertwo from './Assets/HomePageAssets/cosumertwo.png';
import cosumerthree from './Assets/HomePageAssets/cosumerthree.png';
import cosumerfour from './Assets/HomePageAssets/cosumerfour.png';
import cosumerfive from './Assets/HomePageAssets/cosumerfive.png';
import cosumersix from './Assets/HomePageAssets/cosumersix.png';
import cosumerseven from './Assets/HomePageAssets/cosumerseven.png';
import cosumereight from './Assets/HomePageAssets/cosumereight.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [
        { src: cosumerone, alt: 'cosumerone' },
        { src: cosumertwo, alt: 'cosumertwo' },
        { src: cosumerthree, alt: 'cosumerthree' },
        { src: cosumerfour, alt: 'cosumerfour' },
        { src: cosumerfive, alt: 'cosumerfive' },
        { src: cosumersix, alt: 'cosumersix' },
        { src: cosumerseven, alt: 'cosumerseven' },
        { src: cosumereight, alt: 'cosumereight' },
    ];

    return (
        <div>
            <h1 className='yalla_titile' data-aos="fade-up" >Yalla <span className='product_title'>Consumer</span></h1>
            <Container className='Consumer_container'>
                <Row>
                    {images.map((image, index) => (
                        <Col
                            key={index}
                            xs={3} md={4} lg={3}
                            className="image-col"
                            data-aos="fade-up"
                        >
                            <Image src={image.src} alt={image.alt} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Page;
