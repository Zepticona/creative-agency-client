import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../UserPanel/UserPanelNav/userPanelNav.module.css'
const AdminPanelNav = () => {
    return (
        <div className={classes.wrappingContainer}>
            <Link to="/home"><img src={require('../../../assets/images/logos/logo.png')} className={classes.siteLogo} alt=""/></Link>
            <Link to="/adminPanel/serviceList">Service List</Link>
            <Link to="/adminPanel/addService">Add Service</Link>
            <Link to="/adminPanel/makeAdmin">Make Admin</Link> 
        </div>
    );
};

export default AdminPanelNav;