import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import SingleOrder from '../SingleOrder/SingleOrder';
import classes from '../userPanelInfo.module.css'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const UsersOrderedServices = () => {
    const [loggedInUser, setLoggedInsuer] = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        fetch(`http://localhost:8080/orders/${loggedInUser.email}`)
        .then( res => res.json())
        .then( data => {
            const orders = [...data]
            setOrderedServices(orders)
            setLoading(false);
            console.log(data)
        })
    }, [])
    return (
        <div style={{height: '100vh'}}>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Ordered Services</h2>
            <div className={classes.servicesContainer}>
                <Row>
                    {loading ? 
                    <Loader
                type="Bars" 
                color="#00BFFF"
                height={100}
                width={100}
        
             /> :
                        orderedServices.map( order => <Col key={order._id} md={5}><SingleOrder orderInfo={order}></SingleOrder></Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default UsersOrderedServices;