import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Select from "react-select";
import classes from './singleService.module.css'
const SingleServiceRow = (props) => {
    
    const [status, setStatus] = useState({status: props.orderDetail.status});
    let options;;
    // if(props.orderDetail.status === "pending") {
    //     options = (
    //         <div>
    //             <option value="pending">Pending</option>
    //             <option selected value="done">Done</option>
    //         </div>
    //     )
    // }

    return (
        <Row className={classes.rowStyle}>
            <Col md={2}>{props.orderDetail.userName}</Col>
            <Col md={2}>{props.orderDetail.email}</Col>
            <Col md={2}>{props.orderDetail.servName}</Col>
            <Col md={4}>{props.orderDetail.serviceDescription}</Col>
            <Col md={2}>
                <select onChange={props.clicked}>
                    <option selected={false} value="pending">Pending</option>
                    <option selected={true} value="done">Done</option>
                </select>
            </Col>
        </Row>
    );
};

export default SingleServiceRow;