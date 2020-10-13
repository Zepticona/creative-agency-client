import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleFeedback from './SingleFeedback/SingleFeedback';
const feedbackData = [
    {
        id: 1,
        name: 'Nash Patrik',
        img: 'img link',
        designation: 'CEO, Manpol',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis distinctio, commodi cum excepturi, adipisci explicabo odit praesentium sequi saepe perspiciatis aliquid velit officia temporibus placeat provident in non ut.'
    },
    {
        id: 2,
        name: 'Miriam Barron',
        img: 'img link',
        designation: 'CEO, Manpol',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis distinctio, commodi cum excepturi, adipisci explicabo odit praesentium sequi saepe perspiciatis aliquid velit officia temporibus placeat provident in non ut.'
    },
    {
        id: 3,
        name: 'Bria Malone',
        img: 'img link',
        designation: 'CEO, Manpol',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis distinctio, commodi cum excepturi, adipisci explicabo odit praesentium sequi saepe perspiciatis aliquid velit officia temporibus placeat provident in non ut.'
    },
]
const Feedback = () => {
    return (
        <Container style={{marginBottom: '100px'}}>
            <h2 style={{textAlign: 'center',marginTop: '60px', marginBottom: '50px'}}>Clients <span className="brandText">Feedback</span></h2>
            <Row>
            {
                feedbackData.map( service => <Col md={4} key={service.id}><SingleFeedback serviceInfo={service}></SingleFeedback></Col>)
            }
            </Row>
        </Container>
    );
};

export default Feedback;