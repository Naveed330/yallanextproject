'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import AOS from 'aos';
import barsone from '../../Assets/HomePageAssets/shopsAssets/barsone.png';
import barstwo from '../../Assets/HomePageAssets/shopsAssets/barstwo.png';
import barsthree from '../../Assets/HomePageAssets/shopsAssets/barsthree.png';
import barsfour from '../../Assets/HomePageAssets/shopsAssets/barsfour.png';
import barsfive from '../../Assets/HomePageAssets/shopsAssets/barsfive.png';
import barssix from '../../Assets/HomePageAssets/shopsAssets/barssix.png';
import barsseven from '../../Assets/HomePageAssets/shopsAssets/barsseven.png';
import barseight from '../../Assets/HomePageAssets/shopsAssets/barseight.png';
import barnine from '../../Assets/HomePageAssets/shopsAssets/barnine.png';
import barten from '../../Assets/HomePageAssets/shopsAssets/barten.png';
import bareleven from '../../Assets/HomePageAssets/shopsAssets/bareleven.png';
import bartwelve from '../../Assets/HomePageAssets/shopsAssets/bartwelve.png';
import bartirteen from '../../Assets/HomePageAssets/shopsAssets/bartirteen.png';
import barfourteen from '../../Assets/HomePageAssets/shopsAssets/barfourteen.png';
import barfifteen from '../../Assets/HomePageAssets/shopsAssets/barfifteen.png';
import bars from '../../Assets/HomePageAssets/shopsAssets/bars.png';
import detailsImageBar from '../../Assets/HomePageAssets/shopsAssets/detailsImageBar.png'
import barstwodetails from '../../Assets/HomePageAssets/shopsAssets/barstwodetails.png'
import barsfivedetails from '../../Assets/HomePageAssets/shopsAssets/barsfivedetails.png'
import barsfourdetails from '../../Assets/HomePageAssets/shopsAssets/barsfourdetails.png'
import barssixdetails from '../../Assets/HomePageAssets/shopsAssets/barssixdetails.png'
import barssevendetails from '../../Assets/HomePageAssets/shopsAssets/barssevendetails.png'
import '../shopStyle.css';
import { Col, Container, Row } from 'react-bootstrap';

const YallaShopBar = () => {
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
      title: 'TOSI CAPPUCCINO ALMOND',
      description: 'A high energy snack bar',
      image: barsone,
      detaildes: 'That is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax ',
      detailsImage: detailsImageBar,
    },
    {
      title: 'TOSI CASHEW SUPER BITES',
      description: 'A high energy snack bar',
      image: barstwo,
      detaildes: 'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barstwodetails,
    },
    {
      title: 'TOSI CAPPUCCINO ALMOND',
      description: 'A high energy snack bar',
      image: barsfive,
      detaildes: 'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barsfivedetails,
    },
    {
      title: 'BE-KIND DARK CHOCOLATE NUTS',
      description: 'A high energy snack bar',
      image: barsfour,
      detaildes: 'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barssevendetails,
    },

    {
      title: 'BE-KIND DARK CHOCOLATE NUTS',
      description: 'A high energy snack bar',
      image: barsthree,
      detaildes: 'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barsfourdetails,
    },

    {
      title: 'BE-KIND NUT DELIGHT',
      description: 'A high energy snack bar',
      image: barssix,
      detaildes: 'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barssixdetails,
    },
    {
      title: 'Nestle Fitness strawberry',
      description: 'A high energy snack bar',
      image: barsseven
    },
    {
      title: 'Nestle Fitness Chocolate',
      description: 'A high energy snack bar',
      image: barseight
    },
    {
      title: 'Barebells BIRTHDAY CAKE',
      description: 'A high energy snack bar',
      image: barnine
    },
    {
      title: 'Barebells cookies & cream',
      description: 'A high energy snack bar',
      image: barten
    },
    {
      title: 'Barebells cookies & CARAMEL',
      description: 'A high energy snack bar',
      image: bareleven
    },
    {
      title: 'Barebells CARAMEL CHOCO',
      description: 'A high energy snack bar',
      image: bartwelve
    },
    {
      title: 'Barebells CARAMEL CHOCO',
      description: 'A high energy snack bar',
      image: bartirteen
    },
    {
      title: 'Barebells CARAMEL CHOCO',
      description: 'A high energy snack bar',
      image: barfourteen
    },
    {
      title: 'Barebells CARAMEL CHOCO',
      description: 'A high energy snack bar',
      image: barfifteen
    },
    {
      title: 'Barebells CARAMEL CHOCO',
      description: 'A high energy snack bar',
      image: bars
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
        <Card key={index} className='mt-3 All_shop_card_class' data-aos="fade-up" data-aos-duration="1000" onClick={() => handleShow(card)}>
          <div className='card-content'>
            <div className='image_bars' >
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

export default YallaShopBar;
