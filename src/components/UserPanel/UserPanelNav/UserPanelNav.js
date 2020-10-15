import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './userPanelNav.module.css'
const UserPanelNav = () => {
    const id = sessionStorage.getItem('selectedServiceId')
    console.log(id)
    return (
        <div className={classes.wrappingContainer}>
            <Link to="/home"><img src={require('../../../assets/images/logos/logo.png')} className={classes.siteLogo} alt=""/></Link>
            <Link to={`/userPanel/${sessionStorage.getItem('selectedServiceId')}/orders`}>Order</Link>
            <Link to="/userPanel/orderedServices">Service List</Link>
            <Link to="/userPanel/ordersReview">Review</Link> 
        </div>
    );
};

export default UserPanelNav;