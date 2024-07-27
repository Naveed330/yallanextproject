import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import supplierone from './Assets/HomePageAssets/supplierone.png';
import suppliertwo from './Assets/HomePageAssets/suppliertwo.png';
import supplierthree from './Assets/HomePageAssets/supplierthree.png';
import supplierfour from './Assets/HomePageAssets/supplierfour.png';
import supplierfive from './Assets/HomePageAssets/supplierfive.png';
import suppliersix from './Assets/HomePageAssets/suppliersix.png';
import supplierseven from './Assets/HomePageAssets/supplierseven.png';
import suppliereight from './Assets/HomePageAssets/suppliereight.png';
import suppliernine from './Assets/HomePageAssets/suppliernine.png';
import supplierten from './Assets/HomePageAssets/supplierten.png';
import suppliereleven from './Assets/HomePageAssets/suppliereleven.png';
import suppliertwelve from './Assets/HomePageAssets/suppliertwelve.png';
import supplierthirteen from './Assets/HomePageAssets/supplierthirteen.png';
import supplieryalla from './Assets/HomePageAssets/supplieryalla.png';
import supplieryallaone from './Assets/HomePageAssets/supplieryallaone.png';
import supplieryallatwo from './Assets/HomePageAssets/supplieryallatwo.png';
import supplieryallathree from './Assets/HomePageAssets/supplieryallathree.png';
import supplieryallafour from './Assets/HomePageAssets/supplieryallafour.png';
import supplierfourteen from './Assets/HomePageAssets/supplierfourteen.png';
import supplieryallafive from './Assets/HomePageAssets/supplieryallafive.png';
import supplieryallasix from './Assets/HomePageAssets/supplieryallasix.png';
import supplieryallaseven from './Assets/HomePageAssets/supplieryallaseven.png';
import supplieryallaeight from './Assets/HomePageAssets/supplieryallaeight.png';
import yallasuppluierss from './Assets/HomePageAssets/yallasuppluierss.png';
import './YallaSupplier.css'
import Image from 'next/image';

const suppliers = [
    { src: supplierone, alt: 'Supplier One' },
    { src: suppliertwo, alt: 'Supplier Two' },
    { src: supplierthree, alt: 'Supplier Three' },
    { src: supplierfour, alt: 'Supplier Four' },
    { src: supplierfive, alt: 'Supplier Five' },
    { src: suppliersix, alt: 'Supplier Six' },
    { src: supplierseven, alt: 'Supplier Seven' },
    { src: suppliereight, alt: 'Supplier Eight' },
    { src: suppliernine, alt: 'Supplier Nine' },
    { src: supplierten, alt: 'Supplier Ten' },
    { src: suppliereleven, alt: 'Supplier Eleven' },
    { src: suppliertwelve, alt: 'Supplier Twelve' },
    { src: supplierthirteen, alt: 'Supplier Thirteen' },
    { src: supplieryalla, alt: 'Supplier Yalla' },
    { src: supplieryallaone, alt: 'Supplier Yalla One' },
    { src: supplieryallatwo, alt: 'Supplier Yalla Two' },
    { src: supplieryallathree, alt: 'Supplier Yalla Three' },
    { src: supplieryallafour, alt: 'Supplier Yalla Four' },
    { src: supplierfourteen, alt: 'Supplier Yalla Four' },
    { src: supplieryallafive, alt: 'Supplier Yalla Four' },
    { src: supplieryallasix, alt: 'Supplier Yalla Four' },
    { src: supplieryallaseven, alt: 'Supplier Yalla Four' },
    { src: supplieryallaeight, alt: 'Supplier Yalla Four' },
    { src: yallasuppluierss, alt: 'Supplier Yalla Four' },
];

const YallaSupplier = () => {
    return (
        <Container className='Supplier_container'>
            <h1 className='yalla_titile' data-aos="fade-up">Yalla <span className='product_title'>Supplier</span></h1>
            <Row>
                {suppliers.map((supplier, index) => (
                    <Col key={index} xs={3} md={4} lg={3} className="mb-4 yallaSupplierRow" >
                        <div className="supplier-card" data-aos="fade-up">
                            <Image src={supplier.src} alt={supplier.alt} layout="responsive" />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default YallaSupplier;
