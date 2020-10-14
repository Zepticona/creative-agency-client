import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import SingleOrder from '../SingleOrder/SingleOrder';
import classes from '../userPanelInfo.module.css'



const UsersOrderedServices = () => {
    const [loggedInUser, setLoggedInsuer] = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:8080/orders/${loggedInUser.email}`)
        .then( res => res.json())
        .then( data => {
            const orders = [...data]
            setOrderedServices(orders)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Ordered Services</h2>
            <div className={classes.servicesContainer}>
                <Row>
                    {
                        orderedServices.map( order => <Col key={order._id} md={5}><SingleOrder orderInfo={order}></SingleOrder></Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default UsersOrderedServices;