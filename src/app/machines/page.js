"use client"
import React, { useEffect, useRef } from 'react'
import HomePageNav from '../HomePageNav'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './YallaMachinestyle.css'
import vendeone from '../Assets/MachinePageAssets/vende1.png'
import vendetwo from '../Assets/MachinePageAssets/vende2.png'
import vendehealthiers from '../Assets/MachinePageAssets/vendehealthiers.png'
import lifestylevendee from '../Assets/MachinePageAssets/lifestylevendee.png'
import thecoffee from '../Assets/MachinePageAssets/thecoffee.png'
import gymmachine from '../Assets/MachinePageAssets/gymmachine.png'
import YallaFooter from '../YallaFooter';
const Page = () => {

    const ref = useRef(null);

    useEffect(() => {
        const { current } = ref;
        if (current) {
            current.classList.add('fade-in');
        }
        return () => {
            if (current) {
                current.classList.remove('fade-in');
            }
        };
    }, []);

    return (
        <>
            <HomePageNav />
            <Container fluid className='machineConatiner' >
                <h1 className='chooseMachine' >CHOOSE YOUR MACHINE</h1>

                <div className='retailmainContainer'>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaHealtherParameter'}>
                            <Image src={vendehealthiers} alt='Retail_Machine' />
                        </Link>
                    </div>

                    <div className='retail_div'>
                        <Link href={'/machines/YallaRetailerParameter'}>
                            <Image src={lifestylevendee} alt='lifestylevendee' />
                        </Link>
                    </div>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaGym'}>
                            <Image src={thecoffee} alt='thecoffee' />
                        </Link>
                    </div>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaCoffee'}>
                            <Image src={gymmachine} alt='gymmachine' />
                        </Link>
                    </div>
                </div>
            </Container>
            <YallaFooter />
        </>
    )
}

export default Page







// className='retail_div'





