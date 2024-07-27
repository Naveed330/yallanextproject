'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import nutone from '../Assets/HomePageAssets/shopsAssets/nutone.png';
import nuttwo from '../Assets/HomePageAssets/shopsAssets/nuttwo.png';
import nutthree from '../Assets/HomePageAssets/shopsAssets/nutthree.png';
import nutfour from '../Assets/HomePageAssets/shopsAssets/nutfour.png';
import nutfive from '../Assets/HomePageAssets/shopsAssets/nutfive.png';
import nutsix from '../Assets/HomePageAssets/shopsAssets/nutsix.png';
import drinkone from '../Assets/HomePageAssets/shopsAssets/drinkone.png';
import drinktwo from '../Assets/HomePageAssets/shopsAssets/drinktwo.png';
import drinkthree from '../Assets/HomePageAssets/shopsAssets/drinkthree.png';
import drinkfour from '../Assets/HomePageAssets/shopsAssets/drinkfour.png';
import drinkfive from '../Assets/HomePageAssets/shopsAssets/drinkfive.png';
import drinksix from '../Assets/HomePageAssets/shopsAssets/drinksix.png';
import drinkseven from '../Assets/HomePageAssets/shopsAssets/drinkseven.png';
import barsone from '../Assets/HomePageAssets/shopsAssets/barsone.png';
import barstwo from '../Assets/HomePageAssets/shopsAssets/barstwo.png';
import barsthree from '../Assets/HomePageAssets/shopsAssets/barsthree.png';
import barsfour from '../Assets/HomePageAssets/shopsAssets/barsfour.png';
import barsfive from '../Assets/HomePageAssets/shopsAssets/barsfive.png';
import barssix from '../Assets/HomePageAssets/shopsAssets/barssix.png';
import barsseven from '../Assets/HomePageAssets/shopsAssets/barsseven.png';
import barseight from '../Assets/HomePageAssets/shopsAssets/barseight.png';
import chipsone from '../Assets/HomePageAssets/shopsAssets/chipsone.png';
import chipstwo from '../Assets/HomePageAssets/shopsAssets/chipstwo.png';
import chipsthree from '../Assets/HomePageAssets/shopsAssets/chipsthree.png';
import chipsfour from '../Assets/HomePageAssets/shopsAssets/chipsfour.png';
import chipsfive from '../Assets/HomePageAssets/shopsAssets/chipsfive.png';
import chipssix from '../Assets/HomePageAssets/shopsAssets/chipssix.png';
import detailsImageBar from '../Assets/HomePageAssets/shopsAssets/detailsImageBar.png'
import chipsOnedetails from '../Assets/HomePageAssets/shopsAssets/chipsOnedetails.png'
import barsfivedetails from '../Assets/HomePageAssets/shopsAssets/barsfivedetails.png'
import nutsonedetils from '../Assets/HomePageAssets/shopsAssets/nutsonedetils.png'
import AOS from 'aos';
import Image from 'next/image';
import './shopStyle.css';
import { Col, Container, Row } from 'react-bootstrap';


const YallaAllShopProduct = () => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClose = () => setShow(false);



  function handleShow(product) {
    setFullscreen(product);
    setSelectedProduct(product);
    setShow(true);
  }

  const cards = [
    {
      title: 'MANI YUMMY BARBEQUE',
      description: 'A high energy snack bar',
      image: nutone,
      detailsImage: nutsonedetils,
      detailsDes: 'Carefully selected large, crunchy cashews, cleaned then dry roasted with fresh ground black pepper and sea salt.',
      category: 'Nuts'
    },
    {
      title: 'MANI YUMMY BARBEQUE',
      description: 'A high energy snack bar',
      image: nuttwo,
      detailsImage: nutsonedetils,
      category: 'Nuts'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: nutthree,
      detailsImage: detailsImageBar,
      category: 'Nuts'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: nutfour,
      detailsImage: detailsImageBar,
      category: 'Nuts',
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: nutfive,
      detailsImage: detailsImageBar,
      category: 'Nuts'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: nutsix,
      detailsImage: detailsImageBar,
      category: 'Nuts'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinkone,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinktwo,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinkthree,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinkfour,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinkfive,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinksix,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: drinkseven,
      detailsImage: detailsImageBar,
      category: 'Drinks'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barsone,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      detailsDes: 'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      image: barstwo,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI CAPPUCCINO ALMOND',
      description: 'A high energy snack bar',
      image: barsfive,
      detailsImage: barsfivedetails,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barsfour,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barsthree,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barssix,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barsseven,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barseight,
      detailsImage: detailsImageBar,
      category: 'Bars'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsone,
      detailsImage: chipsOnedetails,
      category: 'chips'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipstwo,
      detailsImage: detailsImageBar,
      category: 'chips'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsthree,
      detailsImage: detailsImageBar,
      category: 'chips'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsfour,
      detailsImage: detailsImageBar,
      category: 'chips'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsfive,
      detailsImage: detailsImageBar,
      category: 'chips'
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipssix,
      detailsImage: detailsImageBar,
      category: 'chips'
    },


  ];
  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return cards
      .filter(
        (product) => product.category === selectedProduct.category
      )
      .slice(0, 3);
  }, [selectedProduct]);


  return (
    <div className="shop-container">
      {cards.map((card, index) => (
        <Card key={index} className='mt-3 All_shop_card_class'
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className='card-content'>
            <div className='image_bars'>
              <Image src={card.image} alt={card.title} className='Yalla_product_images' />
            </div>
            <Card.Body className='text-center card-body'>
              <h1 className='bars_title'>{card.title}</h1>
              <p className='bars_des'>{card.description}</p>
              <div className='overlay'></div>
              <div className="view-details-btn-container">
                {/* <Button variant="primary" onClick={() => handleShow(card)} className="view-details-btn">View Details</Button> */}
                <button className="btn-12" onClick={() => handleShow(card)} ><span>View Details</span></button>
                {/* <Button onClick={() => handleShow(card)} >View Details</Button> */}
              </div>
            </Card.Body>
          </div>
        </Card>
      ))}


      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton className='modal_bg_color'>
        </Modal.Header>
        <Modal.Body className='modal_bg_color'>
          <Row className='mt-3'>
            <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center ' }}>
              <div className='YallahealthyBarcontainer'>
                <h1 className='healthybar'>
                  <span style={{ color: '#4BC6DA' }}>YALLA</span> Healthy Bars
                </h1>
                <div>
                  <h1 className='almondtext'>TOSI ALMOND SUPER BITES</h1>
                </div>
                <div>
                  <p className='ptag mt-3'>
                    That is an excellent source of protein, omega 3s, and fiber. Contains chia seeds and flax seeds
                  </p>
                  <ul className='ptag'>
                    <li>Gluten free</li>
                    <li>Organic</li>
                    <li>Vegan</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='YallahealthyBarcontainer mb-3'>
                <Image src={selectedProduct?.detailsImage || selectedProduct?.image} alt={selectedProduct?.title} className='productImage_modal' />
              </div>
            </Col>
          </Row>

          <Container>
            <Row>
              <h1 className='related_product_title' >Related Products</h1>
              {relatedProducts.map((product, index) => (
                <Col xs={12} md={4} key={index} className='mb-3'>
                  <Card
                    key={index}
                    className='mt-3 all-shop-card'
                    data-aos="fade-up"
                  >
                    <div className='card-content'>
                      <div className='image_container_modal'>
                        <Image
                          src={product.image}
                          alt={product.title}
                          className='Yalla_product_images'

                        />
                      </div>
                      <Card.Body className='text-center card-body'>
                        <h1 className='card-title'>{product.title}</h1>

                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>

  );
};

export default YallaAllShopProduct;



