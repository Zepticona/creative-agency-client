import React from 'react';
import classes from './singleFeedback.module.css'
const SingleFeedback = (props) => {
    // console.log(props)
    const {reviewer, designation, feedback, reviewerImg} = props.reviewInfo
    // console.log(`[reviewerImg] ${reviewerImg}`)
    let imageLink;
    if(reviewerImg.split('URL--')[1]) {
        // console.log(reviewerImg.split('URL--')[1])
        imageLink = reviewerImg.split('URL--')[1];
        console.log(imageLink)
    } 
    if( reviewerImg.split('URL--')[1]=== undefined) {
        imageLink = `${reviewerImg}`;
        console.log(imageLink)
    }
    return (
        <div className={classes.singleFeedbackContainer}>
            <div className={classes.clientInfo}>
                <img style={{borderRadius: '50%'}} src={imageLink} alt="client"/>
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