import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './customers.module.css'

const Customers = () => {
    return (
        <Container>
            <div className={classes.customersContainer}>
                <img src={require('../../../assets/images/logos/google.png')} alt=""/>
                <img src={require('../../../assets/images/logos/airbnb.png')} alt=""/>
                <img src={require('../../../assets/images/logos/netflix.png')} alt=""/>
                <img src={require('../../../assets/images/logos/slack.png')} alt=""/>
                <img src={require('../../../assets/images/logos/uber.png')} alt=""/>
            </div>
        </Container>
    );
};

export default Customers;