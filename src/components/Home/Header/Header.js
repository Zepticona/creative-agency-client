import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import headerImg from '../../../assets/images/logos/headerImg.png'
const Header = () => {
    return (
        <div className={classes.headerContainer}>
            <Container>
                <NavigationBar></NavigationBar>
                <main>
                    <Row className={classes.mainContainer}>
                        <Col md={5} className={classes.headerContent}>
                            <h2>Let's Grow Your Brand to The Next Level</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta quas maxime. Qui perferendis quasi ipsum a est, dolores in nesciunt recusandae ea vitae obcaecati vero maxime repudiandae, eius autem!</p>
                            <Link to="/userPanel/orders">
                                Hire Us
                            </Link>
                        </Col>
                        <Col md={7} className={classes.headerImg}>
                            <img src={headerImg} alt=""/>
                        </Col>
                    </Row>    
                </main>
            </Container>
        </div>
    );
};

export default Header;