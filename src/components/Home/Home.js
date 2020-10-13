import React from 'react';
import Customers from './Customers/Customers';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Customers></Customers>
            <Services></Services>
        </div>
    );
};

export default Home;