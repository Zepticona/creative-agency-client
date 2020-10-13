import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from './SingleService/SingleService';
const serviceData = [
    {
       id: 1,
       name: 'Web & Mobile Design',
       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, incidunt',
       img: 'img link'

    },
    {
        id: 2,
        name: 'Graphic Design',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, incidunt',
        img: 'img link'
 
     },
     {
        id: 3,
        name: 'Web development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, incidunt',
        img: 'img link'
 
     }
]
const Services = () => {
    return (
        <Container style={{marginBottom: '100px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Provice Awesome Services</h2>
            <Row>
            {
                serviceData.map( service => <Col md={4} key={service.id}><SingleService serviceInfo={service}></SingleService></Col>)
            }
            </Row>
        </Container>
    );
};

export default Services;