import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleServiceRow from '../SingleService/SingleServiceRow'
import classes from './serviceList.module.css'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ServiceList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8080/allOrders')
            .then(res => res.json())
            .then(data => {
                const newOrders = [...data];
                setOrders(newOrders);
                setLoading(false);
            })
    }, [])

    const changeStatus = (e, order) => {
        const currentOrderInfo = { ...order }
        console.log(currentOrderInfo)
        const status = {
            updatedStatus: e.target.value
        }
        fetch(`http://localhost:8080/updateStatus/${order._id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Service List</h2>
            <Container className={classes.allOrdersContainer}>
                <div className="table-responsive" style={{background: '#fff', borderRadius: '12px'}}>
                    <table className="table table-borderless">
                        <thead>
                            <tr style={{background: '#F5F6C'}}>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? 
                                <Loader
                            type="Bars"
                            color="#00BFFF"
                            height={100}
                            width={100}
                    
                        />  :
                                orders.map(order => <SingleServiceRow clicked={(e) => changeStatus(e, order)} key={order._id} orderDetail={order}></SingleServiceRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default ServiceList;