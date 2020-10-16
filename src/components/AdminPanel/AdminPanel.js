import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import classes from '../UserPanel/userPanel.module.css'
import AdminPanelInfo from './AdminPanelInfo/AdminPanelInfo';
import AdminPanelNav from './AdminPanelNav/AdminPanelNav';
const AdminPanel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:8080/isAdmin`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data);
            }) 

    }, [])
    const fillerText = (
        <h2>This page is available to admins only.</h2>
    )
    return (

        <Container className={classes.adminPanelContainer}>
            {
                isAdmin ?
                    <div className={classes.adminPanelWrappingContainer}>
                        <div className={classes.adminNavigationPanel}>
                            <AdminPanelNav></AdminPanelNav>
                        </div>
                        <div className={classes.userInfoPanel}>
                            <AdminPanelInfo></AdminPanelInfo>
                        </div>
                    </div> :
                    fillerText
            }

        </Container>


    );
};

export default AdminPanel;