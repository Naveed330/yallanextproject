'use client';
import React, { useEffect } from 'react';
import Card from 'react-animated-3d-card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import producttwo from '../app/assets/producttwo.png';
import productone from '../app/assets/productone.png';
import productthree from '../app/assets/productthree.png';
import productfour from '../app/assets/productfour.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from "react-spring";
import './YallaSupplier.css'
import supplierone from '../app/assets/supplierone.png'
import suppliertwo from '../app/assets/suppliertwo.png'
import supplierthree from '../app/assets/supplierthree.png'
import supplierfour from '../app/assets/supplierfour.png'
import supplierfive from '../app/assets/supplierfive.png'
import suppliersix from '../app/assets/suppliersix.png'
import supplierseven from '../app/assets/supplierseven.png'
import suppliereight from '../app/assets/suppliereight.png'

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const jsonData = [
        {
            id:0,
            image: supplierone
        },
        {
            id:1,
            image: suppliertwo
        },
        {
            id:2,
            image: supplierthree
        },
        {
            id:3,
            image: supplierfour
        },
        {
            id:4,
            image: supplierfive
        },
        {
            id:5,
            image: suppliersix
        },
        {
            id:6,
            image: supplierseven
        },
        {
            id:7,
            image: suppliereight
        },
    ];

    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const calc = (x, y) => {
        const BUFFER = 50;

        const why = -(y - window.innerHeight / 2) / BUFFER;
        const ex = (x - window.innerWidth / 2) / BUFFER;

        console.log("why", why);
        console.log("y", y);
        return [-(y / 50), x / 50, 1.1];
    };
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    return (
        <Container>
            <h1 className='yalla_supplier_text'>Yalla Supplier</h1>
            <Row>
                {jsonData.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} >
                        <div
                            data-aos-offset="200"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos="fade-up"
                            className='card_container_supplier'
                        >
                            <Card
                                style={{
                                    backgroundColor: "#f0f0f0",
                                    width: "100%",
                                    height: "300px",
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    // padding: "20px",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                                    margin: '10px'
                                }}
                            >
                                <Image src={item.image} alt={`product ${index + 1}`} width={250} height={180} />
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Page;
