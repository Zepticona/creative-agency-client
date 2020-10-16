import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHdd, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import classes from '../../UserPanel/UserPanelNav/userPanelNav.module.css'
const AdminPanelNav = () => {
    return (
        <div className={classes.wrappingContainer}>
            <Link to="/home"><img src={require('../../../assets/images/logos/logo.png')} className={classes.siteLogo} alt=""/></Link>
            <Link to="/adminPanel/serviceList"  className={classes.adminNavFirstLink}><FontAwesomeIcon icon={faHdd}/>Service List</Link>
            <Link to="/adminPanel/addService"><FontAwesomeIcon icon={faPlus} />Add Service</Link>
            <Link to="/adminPanel/makeAdmin"><FontAwesomeIcon icon={faUserPlus} />Make Admin</Link> 
        </div>
    );
};

export default AdminPanelNav;