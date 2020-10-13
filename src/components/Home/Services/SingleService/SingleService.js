import React from 'react';
import classes from './singleService.module.css'

const SingleService = ({serviceInfo}) => {
    return (
        <div className={classes.singleServiceContainer}>
            <img src={require('../../../../assets/images/icons/service1.png')} alt=""/>
            <h4>{serviceInfo.name}</h4>
            <p>{serviceInfo.description}</p>
        </div>
    );
};

export default SingleService;