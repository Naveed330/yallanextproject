'use client'
import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { Container, Button } from 'react-bootstrap';
import yallalogo from '../app/assets/yallalogo.png';
import Image from 'next/image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Whowearestyle.css';

const Page = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        beforeChange: (current, next) => setSlideIndex(next),
    };

    const handleButtonClick = (index) => {
        setSlideIndex(index);
        sliderRef.current.slickGoTo(index);
    };

    const marqueeData = [
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
        { image: yallalogo, text: "Who We Are" },
    ];

    const contentData = [
        {
            title: "About",
            content: "Yalla Food and Drinks, backed by the Khalifa Fund, promotes healthier options in convenience foods. Since our inception, we've been committed to offering balanced choices. Our team is dedicated to improving public health in the UAE by addressing issues like obesity and diabetes. We strive to reshape perceptions of vending by making nutritious products and information more accessible."
        },
        {
            title: "Mission",
            content: "At Yalla Food and Drinks, our mission is to revolutionize the UAE's vending industry with healthier, balanced food choices. With the support of the Khalifa Fund, we promote wellness and combat health issues such as obesity and diabetes. Through dedication and innovation, we strive to provide convenient access to nutritious products, fostering a healthier, more informed community."
        },
        {
            title: "Vision",
            content: "Our vision at Yalla Food and Drinks is to lead the way in transforming vending choices across the UAE. Supported by the Khalifa Fund, we aspire to create a culture where healthier options are easily accessible. By promoting balanced eating and combating health challenges like obesity and diabetes, we aim to inspire a community that values wellness and informed choices."
        }
    ];

    const calculateProgress = () => {
        return (slideIndex + 1) / contentData.length * 100;
    };

    return (
        <>
            {/* <marquee>
                <div className='marqueee_text_image'>
                    {marqueeData.map((item, index) => (
                        <div key={index} className='marqueee_text_image'>
                            <Image src={item.image} alt='marquee' className='marquee_image' />
                            <h1 className='marquee-text'>{item.text}</h1>
                        </div>
                    ))}
                </div>
            </marquee> */}

            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className='mt-4'>
                    {contentData.map((item, index) => (
                        <Button
                            key={index}
                            variant="outline-success"
                            onClick={() => handleButtonClick(index)}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>

                <div className='mt-4' >
                    <ProgressBar striped variant="info" now={calculateProgress()} style={{ height: '7px' }} />
                </div>
                <div className="slider_container_who_we_are mt-4">
                    <Slider ref={sliderRef} {...settings}>
                        {contentData.map((item, index) => (
                            <div key={index}>
                                <h3 className='yalla_about_text'>
                                    {item.content}
                                </h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </>
    );
};

export default Page;
