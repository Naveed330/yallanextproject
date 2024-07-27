import React from 'react'
import '../shopStyle.css'
import HomePageNav from '@/app/HomePageNav'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import YallaFooter from '@/app/YallaFooter'
import yallaShop from '../../Assets/HomePageAssets/yallashop.png'
import viewproducts from '../../Assets/HomePageAssets/viewproducts.png'
import search_icon from '../../Assets/HomePageAssets/search_icon.png'
import Link from 'next/link'
import YallaShopDrink from './YallaShopDrink'
import YallaButton from '../YallaButton'
const Page = () => {
    return (
        <div>
            <HomePageNav />
            <Container fluid className='shopContainer'>
                <div className='yalla_shop_iamge' >
                    <Image src={yallaShop} alt='yallaShop' />
                </div>


                <div className='main_container_product' >

                    <div className='productcategories_container' >
                        <p className='product_categories' style={{ margin: 0 }} >Product Categories</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <Image src={viewproducts} alt='viewproducts' />
                            <p className='shwoing_data' style={{ margin: 0 }} > {`Showing 1-16 of 17`} </p>
                        </div>
                    </div>

                    {/* <div className="search-container">
                        <input placeholder="Search product" className="input_tag" />
                        <Image src={search_icon} alt="search_icon" className="search-icon" />
                    </div> */}

                </div>

                <Row>
                    <Col xs={12} md={2} className='categories_main_shop'>
                        <div className='class_categories_all' >
                            <div>
                                <YallaButton />
                            </div>

                        </div>

                    </Col>
                    <Col xs={12} md={10}  >
                        <YallaShopDrink />
                    </Col>
                </Row>

            </Container>
            <YallaFooter />
        </div>
    )
}

export default Page