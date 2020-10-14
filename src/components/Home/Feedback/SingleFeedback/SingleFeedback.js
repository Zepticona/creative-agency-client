import React from 'react';
import classes from './singleFeedback.module.css'
const SingleFeedback = (props) => {
    console.log(props)
    const {reviewer, designation, feedback, reviewerImg} = props.reviewInfo
    return (
        <div className={classes.singleFeedbackContainer}>
            <div className={classes.clientInfo}>
                <img src={`http://localhost:8080/${reviewerImg}`} alt="client"/>
                <p>{reviewer}<br/> <small>{designation}</small></p>
            </div>
            <div className={classes.clientFeedback}>
                <p>
                    {feedback}
                </p>
            </div>
        </div>
    );
};

export default SingleFeedback;