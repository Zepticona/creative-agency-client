import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleFeedback from './SingleFeedback/SingleFeedback';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:8080/allReviews')
        .then( res => res.json())
        .then( data => {
            const newReviews = [...data];
            setReviews(newReviews);
        })
    }, [])
    return (
        <Container style={{marginBottom: '100px'}}>
            <h2 style={{textAlign: 'center',marginTop: '60px', marginBottom: '50px'}}>Clients <span className="brandText">Feedback</span></h2>
            <Row>
            {
                reviews.map( review => <Col md={4} key={review._id}><SingleFeedback reviewInfo={review}></SingleFeedback></Col>)
            }
            </Row>
        </Container>
    );
};

export default Feedback;