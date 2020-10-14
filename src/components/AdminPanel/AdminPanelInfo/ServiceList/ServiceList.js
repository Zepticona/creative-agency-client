import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleServiceRow from '../SingleService/SingleServiceRow'
import classes from './serviceList.module.css'

const ServiceList = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('http://localhost:8080/allOrders')
        .then( res => res.json())
        .then( data => {
            const newOrders = [...data];
            setOrders(newOrders);
        })
    }, [])

    const changeStatus = (e, order) => {
        const currentOrderInfo = {...order}
        console.log(currentOrderInfo)
        const status = {
            updatedStatus: e.target.value
        }
        fetch(`http://localhost:8080/updateStatus/${order._id}`, {
            method: 'PATCH',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(status)
        })
        .then( res => res.json())
        .then( data => console.log(data))
    }
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Service List</h2>
            <Container className={classes.card}>
                <Row className={classes.headerRow}>
                    <Col md={2}>Name</Col>
                    <Col md={2}>Email ID</Col>
                    <Col md={2}>Service</Col>
                    <Col md={4}>Project Details</Col>
                    <Col md={2}>Status</Col>
                </Row>
                {
                    orders.map ( order => <SingleServiceRow clicked={(e) => changeStatus(e, order)} key={order._id} orderDetail={order}></SingleServiceRow>)
                }
            </Container>
        </div>
    );
};

export default ServiceList;