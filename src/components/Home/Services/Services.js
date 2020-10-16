import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:8080/allServices')
        .then( res => res.json())
        .then ( data => {
            const newServices = [...data];
            // console.log(newServices)
            setServices(newServices)
        })
    }, [])
    return (
        <Container style={{marginBottom: '100px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Provide awesome <span className="brandText">services</span></h2>
            <Row className={`align-items-center`}>
            {
                services.map( service => 
                    <Col md={4} key={service._id}>
                        <Link to={`/userPanel/${service._id}/orders`}><SingleService serviceInfo={service} /></Link>
                    </Col>
                )
            }
            </Row>
        </Container>
    );
};

export default Services;