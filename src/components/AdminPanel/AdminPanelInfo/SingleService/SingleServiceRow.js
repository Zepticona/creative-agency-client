import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Select from "react-select";
import classes from './singleService.module.css'
const SingleServiceRow = (props) => {
    
    const status = props.orderDetail.status;

    console.log(status)
    let options;
    let style={
        border: 'none',
    }
    if(status === "pending") {
        style.color = 'red'
        options = (
            <>
            <option selected={true} value="pending">Pending</option>
            <option selected={false} value="done">Done</option>
            <option selected={false} value="on going">On Going</option>
            </>
        )
    }
    if(status === "done") {
        style.color = 'green';
        options = (
            <>
            <option selected={false} value="pending">Pending</option>
            <option selected={true} value="done">Done</option>
            <option selected={false} value="on going">On Going</option>
            </>
        )
    }
    if(status === "on going") {
        style.color =  'orange';
        options = (
            <>
            <option selected={false} value="pending">Pending</option>
            <option selected={false} value="done">Done</option>
            <option selected={true} value="on going">On Going</option>
            </>
        )
    }

    return (
        <Row className={`${classes.rowStyle} adminRowStyle`}>
            <Col md={2}><span>{props.orderDetail.userName}</span></Col>
            <Col md={3}><span>{props.orderDetail.email}</span></Col>
            <Col md={2}><span>{props.orderDetail.servName}</span></Col>
            <Col md={3}><span>{props.orderDetail.serviceDescription}</span></Col>
            <Col md={2}>
                <select onChange={props.clicked} style={style}>
                    {/* <option selected={false} value="pending">Pending</option>
                    <option selected={true} value="done">Done</option>
                    <option selected={false} value="on going">On Going</option> */}
                    {
                        options
                    }
                </select>
            </Col>
        </Row>
    );
};

export default SingleServiceRow;