import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SingleService from './SingleService/SingleService';

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:8080/allServices')
        .then( res => res.json())
        .then ( data => {
            const newServices = [...data];
            // console.log(newServices)
            setServices(newServices)
            setLoading(false)
        })
    }, [])

    // const spinnerStyle = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    
    return (
        <Container style={{marginBottom: '100px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Provide awesome <span className="brandText">services</span></h2>
            <Row className={`align-items-center`}>
            {
                loading ? 
                    <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
        
             />  : services.map( service => 
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