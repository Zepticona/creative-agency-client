import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import classes from '../../adminPanel.module.css'
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const [email, setEmail] = useState({})
    const handleBlur = (e) => {
        const adminEmail = {...email}
        adminEmail[e.target.name] = e.target.value;
        console.log(adminEmail)
        setEmail(adminEmail);
    }

    useEffect( () => {
        // fetch('http://localhost:8080/isAdmin', {
        //     method: 'POST'
        // })
    }, [])

    const handleFormSubmit = e => {
        fetch('http://localhost:8080/addAdmin', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(email)
        })
        .then( res => res.json())
        .then( data => console.log(data))
        e.preventDefault();
    }
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Make Admin</h2>
            <div className={classes.addServiceContainer}>
                <form onSubmit={handleFormSubmit} className={classes.formContainer}>
                    <Row>
                        <Col md={6}>
                            <p>Make Admin</p>
                            <input onBlur={handleBlur} type="email" name="email" id="" placehodler="Enter email" />
                        </Col>
                    </Row>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;