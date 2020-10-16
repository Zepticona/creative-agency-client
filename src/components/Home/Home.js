import React, { useState } from 'react';
import PrevProjects from './PrevProjects/PrevProjects';
import Customers from './Customers/Customers';
import Header from './Header/Header';
import Services from './Services/Services';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Customers></Customers>
            <Services></Services>
            <PrevProjects></PrevProjects>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;