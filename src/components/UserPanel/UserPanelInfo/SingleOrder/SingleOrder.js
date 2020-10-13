import React from 'react';
import classes from '../userPanelInfo.module.css'

const SingleOrder = () => {
    return (
        <div className={classes.singleOrderContainer}>
            <div className={classes.orderedHeader}>
                <img src={require('../../../../assets/images/icons/service1.png')} className={classes.serviceIcon} alt=""/>
                <span>Pending</span>
            </div>
            <div className={classes.orderDescription}>
                <h6>Name</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, architecto.</p>
            </div>
        </div>
    );
};

export default SingleOrder;