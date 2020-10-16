import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import classes from './prevProjects.module.css'

const PrevProjects = () => {
    return ( 
        <div className={classes.carouselContainer}>
            <h2>Here are some of <span className="brandText">our works</span></h2>
            <Container className>
            <OwlCarousel
            items={3}
            className="owl-theme"
            responsive={
                {
                    0 : {
                        items: 1
                    },
                    480 : {
                        items: 2
                    },
                    768 : {
                        items: 3
                    }
                }
            }
            loop="true"
            autoplay={true}
            margin={20}
            >
            <div class="item"><img src={require('../../../assets/images/carousel-1.png')} alt=""/></div>
            <div class="item"><img src={require('../../../assets/images/carousel-2.png')} alt=""/></div>
            <div class="item"><img src={require('../../../assets/images/carousel-3.png')} alt=""/></div>
            <div class="item"><img src={require('../../../assets/images/carousel-4.png')} alt=""/></div>
            <div class="item"><img src={require('../../../assets/images/carousel-5.png')} alt=""/></div>
            </OwlCarousel>
        </Container>
        </div>
        
        
    );
};

export default PrevProjects;