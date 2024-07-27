"use client"
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import YallaMachineNavbar from '../YallaMachineNavbar';
import yallacoffee from '../../Assets/MachinePageAssets/yallacoffee.png';
import '../YallaHealther/Yallahealther.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YallaFooter from '@/app/YallaFooter';
import Link from 'next/link';
import backlogo from '../../Assets/MachinePageAssets/backlogo.png';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <YallaMachineNavbar />
            <div className='machineConatiner_parameter'>
                <Container >
                    <Link href='/machines'><MdOutlineKeyboardBackspace data-aos="fade-up" className='mt-4' style={{ color: 'black', fontSize: '40px' }} /></Link>
                    <h1 className='gohealthier_parameter' data-aos="fade-up" >THE GYM</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-up" >
                        <Image
                            src={yallacoffee}
                            alt='yallacoffee'
                            style={{ maxWidth: '100%', height: 'auto' }}
                            className='hover-animate'
                        />
                    </div>

                    <div className='h1_conatiner_healthier_tag' >
                        <h1 className='yallahealtier_h1_tag' data-aos="fade-up"  >
                            <span className='go_healthier_H_WORD' >O</span> ur coffee vending platform offers a premium, customizable experience with secure, efficient access to top-tier coffee. Tailored for modern spaces, our machines come in sleek designs or fully branded options, enhancing your environment while catering to coffee lovers and busy professionals. Enjoy seamless logistical support and targeted marketing to boost visibility and engagement. Elevate your space with high-quality coffee that fuels productivity and satisfaction, making every coffee break a moment of indulgence
                        </h1>
                    </div>

                    <div className='all_btn_product'>
                        <Link href={'/machines/YallaCoffeeParameter'} className="animated-button" data-aos="fade-up" data-aos-delay="100">
                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                            </svg>
                            <span className="text">VIEW PRODUCT PARAMETERS</span>
                            <span className="circle" />
                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                            </svg>
                        </Link>
                    </div>
                </Container>
                <YallaFooter />
            </div>
        </>
    );
}

export default Page;
