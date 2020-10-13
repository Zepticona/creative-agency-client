import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleOrder from '../SingleOrder/SingleOrder';
import classes from '../userPanelInfo.module.css'

const orderedServices = [
    {
        id: 1,
        img: 'img Link',
        name: 'Web Design',
        status: 'Pending'
    },
    {
        id: 2,
        img: 'img Link',
        name: 'Graphic Design',
        status: 'Done'
    },
]

const UsersOrderedServices = () => {
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Add Event</h2>
            <div className={classes.servicesContainer}>
                <Row>
                    {
                        orderedServices.map( service => <Col key={service.id} md={5}><SingleOrder></SingleOrder></Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default UsersOrderedServices;