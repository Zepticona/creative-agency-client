import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleFeedback from './SingleFeedback/SingleFeedback';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Feedback = () => {
    const [reviews, setReviews] = useState([]);
    
    const [loading, setLoading] = useState(true);
    useEffect( () => { 
        fetch('http://localhost:8080/allReviews')
        .then( res => res.json())
        .then( data => {
            const newReviews = [...data];
            setReviews(data);
            console.log(`${newReviews}`)
            setLoading(false)
        })
    }, [])
    // console.log(`[reviews] ${reviews[0]}`);
    return (
        <Container style={{marginBottom: '100px'}}>
            <h2 style={{textAlign: 'center',marginTop: '60px', marginBottom: '50px'}}>Clients <span className="brandText">Feedback</span></h2>
            <Row>
            {
            loading ? 
                    <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
        
             />  :
                reviews.map( review => <Col md={4} key={review._id}><SingleFeedback reviewInfo={review}></SingleFeedback></Col>)
            }
            </Row>
        </Container>
    );
};

export default Feedback;