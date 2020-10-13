import React from 'react';
import classes from './singleFeedback.module.css'
const SingleFeedback = () => {
    return (
        <div className={classes.singleFeedbackContainer}>
            <div className={classes.clientInfo}>
                <img src={require('../../../../assets/images/customer-2.png')} alt="client"/>
                <p>Name <br/> <small>Designation</small></p>
                
            </div>
            <div className={classes.clientFeedback}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis beatae, omnis voluptatem quae vitae officia! Dolores inventore quo cupiditate deleniti perferendis. Dolor unde quisquam fugiat? Quam doloremque ut dicta tempore.</p>
            </div>
        </div>
    );
};

export default SingleFeedback;