import React from 'react';
import classes from './singleService.module.css'

const SingleService = (props) => {
    const {servName, servImg, servDescription} = props.serviceInfo
    console.log(props)
    return (
        <div className={classes.singleServiceContainer}>
           { 
               props.serviceInfo.image ? <img src={`data:image/png;base64,${props.serviceInfo.image.img}`} alt="backup" /> : 
               <img src={`http://localhost:8080/${servImg}`} alt="service"/>
           }
            <h4>{servName}</h4>
            <p>{servDescription}</p>
        </div>
    );
};

export default SingleService;