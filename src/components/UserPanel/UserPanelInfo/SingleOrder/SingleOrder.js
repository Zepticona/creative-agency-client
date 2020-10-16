import React from 'react';
import classes from '../userPanelInfo.module.css'

const SingleOrder = (props) => {
    console.log('[single Orger]',props)
    const {servName, servImg, servDescription, status} = props.orderInfo;
    let style;
    if(status === "pending") {
        style = {
            backgroundColor: '#FFE3E3',
            color: '#FF4545',
            padding: '6px 10px',
            height: '100%', 
            borderRadius: '6px'

        }
    }
    if(status === "done") {
        style = {
            backgroundColor: '#C6FFE0',
            color: '#009444',
            padding: '6px 10px',
            height: '100%', 
            borderRadius: '6px'
        }
    }
    if(status === "on going") {
        style = {
            backgroundColor: 'rgb(255, 194, 81)',
            color: 'rgb(255, 153, 0)',
            padding: '6px 10px',
            height: '100%', 
            borderRadius: '6px'
        }
    }
    return (
        <div className={classes.singleOrderContainer}>
            <div className={classes.orderedHeader}>
                {
                    props.orderInfo.image? <img className={classes.serviceIcon} src={`data:image/png;base64,${props.orderInfo.image.img}`} alt="backup" /> : 
                    <img src={`http://localhost:8080/${servImg}`} className={classes.serviceIcon} alt=""/>
                }
                <span style={style}>{status}</span>
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