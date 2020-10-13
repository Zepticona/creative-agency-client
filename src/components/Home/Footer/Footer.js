import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm/ContactForm';
import Copyright from './Copyright/Copyright';
import classes from './footer.module.css'
const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <Container style={{padding: '0px 30px'}}>
                <ContactForm></ContactForm>
                <Copyright></Copyright>
            </Container>
        </footer>
    );
};

export default Footer;