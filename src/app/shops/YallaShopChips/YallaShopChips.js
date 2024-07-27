'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import chipsone from '../../Assets/HomePageAssets/shopsAssets/chipsone.png';
import chipstwo from '../../Assets/HomePageAssets/shopsAssets/chipstwo.png';
import chipsthree from '../../Assets/HomePageAssets/shopsAssets/chipsthree.png';
import chipsfour from '../../Assets/HomePageAssets/shopsAssets/chipsfour.png'
import chipsfive from '../../Assets/HomePageAssets/shopsAssets/chipsfive.png'
import chipssix from '../../Assets/HomePageAssets/shopsAssets/chipssix.png'
import AOS from 'aos';
import Image from 'next/image';
import '../shopStyle.css';
import { Col, Row } from 'react-bootstrap';

const YallaChipsShops = () => {
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
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsone
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipstwo
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsthree
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsfour
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsfive
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipssix
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipstwo
    },
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: chipsone
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
          onClick={() => handleShow(card)}
        >
          <div className='card-content'>
            <div className='image_bars' >
              <Image src={card.image} alt={card.title} />
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
                    {selectedProduct?.detaildes}

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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default YallaChipsShops;
