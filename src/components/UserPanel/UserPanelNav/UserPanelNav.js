import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faInbox, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './userPanelNav.module.css'
const UserPanelNav = () => {
    const id = sessionStorage.getItem('selectedServiceId')
    console.log(id)
    return (
        <div className={classes.wrappingContainer}>
            <Link to="/home"><img src={require('../../../assets/images/logos/logo.png')} className={classes.siteLogo} alt=""/></Link>
            <Link to={`/userPanel/${sessionStorage.getItem('selectedServiceId')}/orders`}><FontAwesomeIcon icon={faShoppingCart} />  Order</Link>
            <Link to="/userPanel/orderedServices"><FontAwesomeIcon icon={faInbox} />  Service List</Link>
            <Link to="/userPanel/ordersReview"><FontAwesomeIcon icon={faCommentAlt} />  Review</Link> 
        </div>
    );
};

export default UserPanelNav;