import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import BusinessSum from './BusinessSum/BusinessSum';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSum />
            <Offer />
            <Footer />
        </div>
    );
};

export default Home;