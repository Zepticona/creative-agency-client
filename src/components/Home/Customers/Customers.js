import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './customers.module.css'

const Customers = () => {
    // className={classes.customersContainer}
    return (
        <Container>
            <Row className={`${classes.customersContainer} align-items-center`}>

                <img src={require('../../../assets/images/logos/google.png')} alt="" />



                <img src={require('../../../assets/images/logos/airbnb.png')} alt="" />



                <img src={require('../../../assets/images/logos/netflix.png')} alt="" />



                <img src={require('../../../assets/images/logos/slack.png')} alt="" />



                <img src={require('../../../assets/images/logos/uber.png')} alt="" />


            </Row>
        </Container>
    );
};

export default Customers;