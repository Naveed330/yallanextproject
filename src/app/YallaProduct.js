'use client';
import React, { useEffect, useState } from 'react';
import './YallaProductStyle.css';
import producttwo from '../app/assets/HomePageAssets/producttwo.png';
import productone from '../app/Assets/HomePageAssets/productone.png';
import productthree from '../app/assets/HomePageAssets/productthree.png';
import productfour from '../app/assets/HomePageAssets/productfour.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

// Sample JSON data
const jsonData = [
    {
        title: "BARS",
        image: productthree
    },
    {
        title: "drinks",
        image: productfour
    },
    {
        title: "crisps",
        image: productone
    },
    {
        title: "nuts",
        image: producttwo
    },
];

function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        setIsLoaded(true); // Trigger animation after component is mounted
    }, []);

    return (
        <Container fluid>
            <h1 className='yalla_title' data-aos="fade-up" >
                Yalla <span className='product_title'>Products</span>
            </h1>
            <p className='product_des' data-aos="fade-up" >
                A wide variety of branded snack products that provide healthier alternatives to traditional snacks.
            </p>
            <div className="card_container_product">
                {jsonData.map((item, index) => (
                    <div
                        key={index}
                        className={`product_card_yalla ${isLoaded ? 'show' : ''}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <Image src={item.image} alt={`product ${index + 1}`} className='yalla_product_image' width={250} height={180} />
                        <h3 className='product_product_name'>{item.title}</h3>
                    </div>
                ))}
            </div>
            <div className='all_btn_product'>
                <Link href={''} className="animated-button" data-aos="fade-up" data-aos-delay="100" style={{textDecoration:'none'}} >
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                    <span className="text">Products</span>
                    <span className="circle" />
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                </Link>
            </div>
        </Container>
    );
}

export default Page;