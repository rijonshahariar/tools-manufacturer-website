import React from 'react';
import banner1 from '../../../Assets/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-bg'>
            <div className='banner-body'>
                <div className=''>
                    <h1 className='banner-heading'>ArcTools <br />Trusted Tools Manufacturer</h1>
                    <p className='banner-text'>ArcTools, a leading manufacturer of innovative tools for the professional trades, offers reliable and durable equipment to get jobs done right the first time.</p>
                </div>
                <div className='banner-img'>
                    <img className='img-fluid' src={banner1} alt="banner" />
                </div>
            </div>

        </section>
    );
};

export default Banner;