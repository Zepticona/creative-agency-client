import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './contactForm.module.css'
const ContactForm = () => {
    return (
        <div className={classes.contactSectionContainer}>
            <Row>
                <Col md={4}>
                    <div className={classes.contactSectionContent}>
                        <h2>Let us handle your project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </Col>
                <Col md={8}>
                    <form style={{margnLeft: '100px'}}>
                        <input type="email" name="" id="" placeholder="Your email address" />
                        <input type="text" name="" id="" placeholder="Your name / company’s name" />
                        <textarea name="" placeholder="Your message" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </Col>
            </Row>
            
        </div>
    );
};

export default ContactForm;