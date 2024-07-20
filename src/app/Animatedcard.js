'use client';
import React, { useEffect } from 'react';
import './style.css';
import Card from 'react-animated-3d-card';
import producttwo from '../app/assets/producttwo.png';
import productone from '../app/assets/productone.png';
import productthree from '../app/assets/productthree.png';
import productfour from '../app/assets/productfour.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <h1 className='product_title' data-aos="fade-up">PRODUCTS</h1>
            <h1 className='yalla_titile' data-aos="fade-up" data-aos-delay="300">Yalla <span className='product_title'>Products</span></h1>
            <p className='product_des' data-aos="fade-up" data-aos-delay="400">A wide variety of branded snack products that provide healthier alternatives to traditional snacks.</p>
            <div className="card_container_product"
                data-aos-offset="200"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos="fade-up"
            >
                {jsonData.map((item, index) => (
                    <Card
                        key={index}
                        style={{
                            backgroundColor: "#f0f0f0",
                            width: "322px",
                            height: "366px",
                            cursor: "pointer",
                            margin: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "20px",
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
                        }}

                    >
                        <Image src={item.image} alt={`product ${index + 1}`} width={250} height={180} />
                        <h3 className='product_product_name'>{item.title}</h3>
                    </Card>
                ))}
            </div>

            <div className='all_btn_product'>
                <button className="animated-button" data-aos="fade-up" data-aos-delay="100">
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                    <span className="text">Products</span>
                    <span className="circle" />
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                </button>
                <button className="animated-button" data-aos="fade-up" data-aos-delay="100">
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                    <span className="text">Shop Now</span>
                    <span className="circle" />
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Page;
