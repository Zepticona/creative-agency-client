import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from '../userPanelInfo.module.css'
const UserOrder = () => {
    const style = {
        padding: '30px',
        backgroundColor: 'white'
    }
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Add Event</h2>
            <Form className={classes.userOrdersForm}>
                <Form.Row>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Your name / company’s name" id="title" required />
                    </Form.Group>
                </Col>

                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Your email address" id="email" />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Graphic Design" id="serviceName" />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Project Details" id="description" />
                    </Form.Group>
                </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Control type="number" placeholder="Price" id="price" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Button style={{display: 'block', width: '100%'}}>Upload Project File</Button>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Button variant="secondary" type="submit">Submit</Button>

            </Form>
        </div>
    );
};

export default UserOrder;