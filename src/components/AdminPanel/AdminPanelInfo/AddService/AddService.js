import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from '../../adminPanel.module.css'
const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleFormSubmit =  (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('servName', serviceInfo.servName);
        formData.append('servImg', serviceInfo.servImg);
        formData.append('servDescription', serviceInfo.servDescription)

        fetch('http://localhost:8080/addService', {
            method: 'POST',
            body: formData
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
        })

        e.preventDefault();
    }
    const handleBlur = e => {
        const newInfo = {...serviceInfo}
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo)
        console.log(file)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile)
        console.log(file)
    } 
    return (
        <div>
            <h2 style={{ marginBottom: '20px', marginTop: '25px' }}>Add Services</h2>
            <div className={classes.addServiceContainer}>
                <form onSubmit={handleFormSubmit} className={classes.formContainer}>
                    <Row>
                        <Col md={6}>
                            <p>Service Title</p>
                            <input onBlur={handleBlur} type="text" name="servName" id=""/>
                        </Col>
                        <Col md={6}>
                            <p>Icon</p>
                            <input onChange={handleFileChange} type="file" name="servImg" id=""/>
                        </Col>
                        <Col md={6}>
                            <p>Description</p>
                            <input onBlur={handleBlur} type="text" name="servDescription" id=""/>
                        </Col>
                    </Row>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;