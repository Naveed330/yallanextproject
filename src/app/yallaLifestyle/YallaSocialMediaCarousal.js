'use client'
import React from "react";
import Slider from "react-slick";
import socialbrandone from '../Assets/LifestyleAssets/socialbrandone.png';
import socialbrandtwo from '../Assets/LifestyleAssets/socialbrandtwo.png';
import socialthree from '../Assets/LifestyleAssets/socialthree.png';
import socialfour from '../Assets/LifestyleAssets/socialfour.png';
import socialfive from '../Assets/LifestyleAssets/socialfive.png';
import socialsix from '../Assets/LifestyleAssets/socialsix.png';
import socialseven from '../Assets/LifestyleAssets/socialseven.png';
import socialeight from '../Assets/LifestyleAssets/socialeight.png';
import socialnine from '../Assets/LifestyleAssets/socialnine.png';
import socialten from '../Assets/LifestyleAssets/socialten.png';
import socialss from '../Assets/LifestyleAssets/socialss.png';
import socialyalla from '../Assets/LifestyleAssets/socialyalla.png';
import Image from "next/image";
import Link from "next/link";

const YallaSocialMediaCarousal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [
        socialbrandone, socialbrandtwo, socialthree, socialfour, socialfive,
        socialsix, socialseven, socialeight, socialnine, socialten,
        socialss, socialyalla
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} data-aos="fade-up">
                        <Image 
                            src={image} 
                            alt={`social-brand-${index + 1}`}  
                            width={'100%'} 
                            height={300} 
                        />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default YallaSocialMediaCarousal;
