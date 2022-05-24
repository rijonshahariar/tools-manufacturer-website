import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import BusinessSum from './BusinessSum/BusinessSum';
import Offer from './Offer/Offer';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSum />
            <Products />
            <Offer />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;