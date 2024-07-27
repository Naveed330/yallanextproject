import React from 'react';
import './yallaStyle.css';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import brandone from '../Assets/LifestyleAssets/brandone.png';
import brandtwo from '../Assets/LifestyleAssets/brandtwo.png';
import brandthree from '../Assets/LifestyleAssets/brandthree.png';
import brandfour from '../Assets/LifestyleAssets/brandfour.png';
import brandfive from '../Assets/LifestyleAssets/brandfive.png';
import brandsix from '../Assets/LifestyleAssets/brandsix.png';
import brandseven from '../Assets/LifestyleAssets/brandseven.png';
import brandeight from '../Assets/LifestyleAssets/brandeight.png';
import brandten from '../Assets/LifestyleAssets/brandten.png';
import brandeleven from '../Assets/LifestyleAssets/brandeleven.png';
import brandtwelve from '../Assets/LifestyleAssets/brandtwelve.png';
import brandthirteen from '../Assets/LifestyleAssets/brandthirteen.png';
import brandfouteen from '../Assets/LifestyleAssets/brandfouteen.png';
import brandfifteen from '../Assets/LifestyleAssets/brandfifteen.png';
import brandsisteen from '../Assets/LifestyleAssets/brandsisteen.png';
import brandseventeen from '../Assets/LifestyleAssets/brandseventeen.png';
import brandeighteen from '../Assets/LifestyleAssets/brandeighteen.png';
import brandninteen from '../Assets/LifestyleAssets/brandninteen.png';
import brandtwenty from '../Assets/LifestyleAssets/brandtwenty.png';
import brandtwentyone from '../Assets/LifestyleAssets/brandtwentyone.png';
import brandtwntytwo from '../Assets/LifestyleAssets/brandtwntytwo.png';
import brandtwentythree from '../Assets/LifestyleAssets/brandtwentythree.png';
import brandtwentyfour from '../Assets/LifestyleAssets/brandtwentyfour.png';
import brandtwentyfive from '../Assets/LifestyleAssets/brandtwentyfive.png';
import brandtwentysix from '../Assets/LifestyleAssets/brandtwentysix.png';
import yallabrandone from '../Assets/LifestyleAssets/yallabrandone.png';
import yallabrand from '../Assets/LifestyleAssets/yallabrand.png';

const images = [
    { src: brandone, alt: 'brandone' },
    { src: brandtwo, alt: 'brandtwo' },
    { src: brandthree, alt: 'brandthree' },
    { src: brandfour, alt: 'brandfour' },
    { src: brandfive, alt: 'brandfive' },
    { src: brandsix, alt: 'brandsix' },
    { src: brandseven, alt: 'brandseven' },
    { src: brandeight, alt: 'brandeight' },
    { src: brandten, alt: 'brandten' },
    { src: brandeleven, alt: 'brandeleven' },
    { src: brandtwelve, alt: 'brandtwelve' },
    { src: brandthirteen, alt: 'brandthirteen' },
    { src: brandfouteen, alt: 'brandfouteen' },
    { src: brandfifteen, alt: 'brandfifteen' },
    { src: brandsisteen, alt: 'brandsisteen' },
    { src: brandseventeen, alt: 'brandseventeen' },
    { src: brandeighteen, alt: 'brandeighteen' },
    { src: brandninteen, alt: 'brandninteen' },
    { src: brandtwenty, alt: 'brandtwenty' },
    { src: brandtwentyone, alt: 'brandtwentyone' },
    { src: brandtwntytwo, alt: 'brandtwntytwo' },
    { src: brandtwentythree, alt: 'brandtwentythree' },
    { src: brandtwentyfour, alt: 'brandtwentyfour' },
    { src: brandtwentyfive, alt: 'brandtwentyfive' },
    { src: brandtwentysix, alt: 'brandtwentysix' },
    { src: yallabrandone, alt: 'yallabrandone' },
    { src: yallabrand, alt: 'yallabrand' },
];

const YallaBrands = () => {
    return (
        <div className="brands_container_" >
            <h1 className='brandsTag' data-aos="fade-up" >Our Brands</h1>
            <div className="yalla-brands-container" >
                <Row>
                    {images.map((image, index) => (
                        <Col key={index} xs={4} md={4} lg={3} className="mb-4" data-aos="fade-up" >
                            <div className="image-container">
                                <Image src={image.src} alt={image.alt} className="brand_image_lifestyle" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default YallaBrands;
