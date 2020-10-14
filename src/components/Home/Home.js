import React, { useState } from 'react';
import PrevProjects from './PrevProjects/PrevProjects';
import Customers from './Customers/Customers';
import Header from './Header/Header';
import Services from './Services/Services';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';

const Home = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleFormSubmit =  (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('reviewer', reviewInfo.reviewer);
        formData.append('designation', reviewInfo.designation);
        formData.append('feedback', reviewInfo.feedback)

        fetch('http://localhost:8080/addReview', {
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
        const newInfo = {...reviewInfo}
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo)
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
            
            <Header></Header>
            <Customers></Customers>
            <Services></Services>
            <form onSubmit={handleFormSubmit}>
                <input onBlur={handleBlur} type="text" name="reviewer" placeholder="reviewer" />
                <input onBlur={handleBlur} type="text" name="designation" placeholder="designation" />
                <input onBlur={handleBlur} type="text" name="feedback" placeholder="feedback" />
                <input onChange={handleFileChange} type="file" name="file" />
                <input onChange={handleFileChange} type="submit" value="Submit"/>
            </form>
            <PrevProjects></PrevProjects>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;