import React, { useContext, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import classes from '../userPanelInfo.module.css'
const UserOrdersReview = () => { 

    const [loggedInUser, setLoggedInuser] = useContext(UserContext);
    const [review, setReview] = useState({});
    const handleBlur = e => {
        const reviewInfo = {...review};
        reviewInfo.reviewerImg = `URL--${loggedInUser.userImg}`;
        reviewInfo[e.target.name] = e.target.value;
        setReview(reviewInfo)
    }

    const handleFormSubmit = e => {

        fetch('http://localhost:8080/addUserReview', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then( res => res.json())
        .then( data => console.log(data))

        e.preventDefault();
    }

    
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Review</h2>
            <Form className={classes.userOrdersForm} onSubmit={handleFormSubmit}>
                <Form.Row>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} type="text" placeholder="Your name" name="reviewer" required />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} type="text" placeholder="Company’s name, Designation" name="designation" required />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <Form.Control  className={classes.reviewDescription} onBlur={handleBlur} type="text" placeholder="Description" name="feedback" required />
                    </Form.Group>
                </Col>
                </Form.Row>
                <Button className={classes.reviewSubmitBtn} style={{background: '#111430'}} type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default UserOrdersReview;