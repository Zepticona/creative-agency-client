import React from 'react';
import classes from './singleService.module.css'

const SingleService = (props) => {
    const {servName, servImg, servDescription} = props.serviceInfo
    return (
        <div className={classes.singleServiceContainer}>
            <img src={`http://localhost:8080/${servImg}`} alt="service"/>
            <h4>{servName}</h4>
            <p>{servDescription}</p>
        </div>
    );
};

export default SingleService;