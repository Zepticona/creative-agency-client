import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import classes from '../userPanelInfo.module.css' 
const UserOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState({})
    const [order, setOrder] = useState({});
    const serviceIdObject = useParams()
    sessionStorage.setItem('selectedServiceId', serviceIdObject.serviceId)
    useEffect( () => {
        fetch(`http://localhost:8080/userPanel/orders/${serviceIdObject.serviceId}`)
        .then( res => res.json())
        .then( data => {
            const serviceInfo = {...data}
            console.log(serviceInfo);
            setService(serviceInfo)
            setOrder({
                image: serviceInfo.image,
                servName: serviceInfo.servName,
                servDescription: serviceInfo.servDescription,
                serviceName: serviceInfo.servName, 
                email: loggedInUser.email, 
                status: 'pending'
            })
            console.log(order);
        })
    }, [])

    const handleBlur = e => {
        console.log(e.target.name)
        const orderInfo = {...order};
        orderInfo[e.target.name] = e.target.value;
        setOrder(orderInfo);
        // console.log(orderInfo)
    }
    const handleFormSubmit = e => {

        fetch('http://localhost:8080/placeOrder', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then( res => res.json())
        .then( data => console.log(data))

        console.log(order)
        e.preventDefault()
    }
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Order</h2>
            <Form className={classes.userOrdersForm} onSubmit={handleFormSubmit}>
                <Form.Row>
                <Col md={8}>
                    
                        <input onBlur={handleBlur} name="userName" type="text"  placeholder="Your name / company’s name" id="title" required />
                    
                </Col>

                <Col md={8}>
                    
                        <input onBlur={handleBlur} name="email" type="email" value={loggedInUser.email} id="email" required />
                    
                </Col>
                <Col md={8}>
                    
                        <input onBlur={handleBlur} name="serviceName" type="text" value={service.servName} id="serviceName" />
                    
                </Col>
                <Col md={8}>
                    
                        <textarea className={classes.textArea} onBlur={handleBlur} name="serviceDescription" type="text" placeholder="Project Details" id="description" required />
                    
                </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={4}>
                        
                            <input onBlur={handleBlur} name="price" type="number" placeholder="Price" id="price" required />
                        
                    </Col>
                    <Col md={4}>
                        
                            <Button disabled ><FontAwesomeIcon icon={faCloudUploadAlt} />  Upload Project File</Button>
                        
                    </Col>
                </Form.Row>

                <input className={classes.orderSubmit} variant="secondary" type="submit" value="Submit" />

            </Form>
        </div>
    );
};

export default UserOrder;