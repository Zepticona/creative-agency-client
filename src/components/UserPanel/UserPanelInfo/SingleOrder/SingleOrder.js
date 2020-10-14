import React from 'react';
import classes from '../userPanelInfo.module.css'

const SingleOrder = (props) => {
    console.log(props)
    const {servName, servImg, servDescription, status} = props.orderInfo;
    return (
        <div className={classes.singleOrderContainer}>
            <div className={classes.orderedHeader}>
                <img src={`http://localhost:8080/${servImg}`} className={classes.serviceIcon} alt=""/>
                <span>{status}</span>
            </div>
            <div className={classes.orderDescription}>
                <h6>{servName}</h6>
                <p>
                    {servDescription}
                </p>
            </div>
        </div>
    );
};

export default SingleOrder;