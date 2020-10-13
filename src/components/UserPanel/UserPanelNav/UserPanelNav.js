import React from 'react';
import { Link } from 'react-router-dom';
import classes from './userPanelNav.module.css'
const UserPanelNav = () => {
    return (
        <div className={classes.wrappingContainer}>
            <Link to="/home"><img src={require('../../../assets/images/logos/logo.png')} className={classes.siteLogo} alt=""/></Link>
            <Link to="/userPanel/orders">Order</Link>
            <Link to="/userPanel/orderedServices">Service List</Link>
            <Link to="/userPanel/ordersReview">Review</Link> 
        </div>
    );
};

export default UserPanelNav;