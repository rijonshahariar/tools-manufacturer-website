import { Rating } from '@mui/material';
import React from 'react';
import './Review.css'
const Review = ({ review }) => {
    const { name, picture, rvw, rate } = review;
    return (


        <div className='card'>

            <div className="reviewcontainer">
                <div className='caption'>
                    <img src={picture} alt="" />

                    <p>{rvw}</p>
                    <Rating name="read-only" value={rate} readOnly />
                    <h3>{name}</h3>

                </div>
            </div>
        </div>
    );
};

export default Review;