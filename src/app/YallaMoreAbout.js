'use client'
import React, { useEffect } from 'react';
import './AboutsectionStyle.css'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import aboutusPage from '../app/Assets/HomePageAssets/aboutusPage.png'
import yallaaboutlogo from '../app/assets/HomePageAssets/yallaaboutlogo.png'

const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        
        <div className="container">
            <div className="flex-container">
                <div className="image-container" data-aos="fade-right"
                    data-aos-anchor-placement="top-bottom">
                    <Image
                        src={aboutusPage}
                        alt='gallerysix'
                        className='image_yalla_about'
                        layout="responsive"
                    />
                </div>
                <div className="text-container" data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom">
                    <Image src={yallaaboutlogo} alt='yallaaboutlogo' className='yallaaboutlogo' />
                    <h1 className='about_us_heading mt-3' >About Us</h1>
                    <p className='yallaaBOUTText'>
                    Yalla food and drinks is an Emirati owned company supported by khalifa fund. We are a company driven by a passionate belief that customers 
                    seeking convenience foods should be allowed healthier and balanced choices. This has been our goal from inception. Our team members share 
                    </p>
                    <p className='yallaaBOUTText'>
                    The vision of a healthier UAE and are determined to help combat prevailing health issues such as obesity and diabetes. We aim to become a 
                    powerful voice for changing the way people think about vending by making healthier products and related information more accessible to people.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Page;
