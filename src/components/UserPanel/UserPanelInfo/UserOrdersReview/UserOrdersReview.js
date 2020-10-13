import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import classes from '../userPanelInfo.module.css'
const UserOrdersReview = () => {
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Review</h2>
            <Form className={classes.userOrdersForm}>
                <Form.Row>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Your name" id="name" required />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Company’s name, Designation" id="designation" required />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Description" id="description" required />
                    </Form.Group>
                </Col>
                </Form.Row>
                <Button style={{background: '#111430'}} type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default UserOrdersReview;