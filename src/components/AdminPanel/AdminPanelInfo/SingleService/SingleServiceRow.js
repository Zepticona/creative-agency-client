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
        <tr>
            <td>{props.orderDetail.userName}</td>
            <td>{props.orderDetail.email}</td>
            <td>{props.orderDetail.servName}</td>
            <td>{props.orderDetail.serviceDescription}</td>
            <td><select onChange={props.clicked} style={style}>
                     {
                         options
                     }
                 </select></td>
        </tr>
    );
};

export default SingleServiceRow;