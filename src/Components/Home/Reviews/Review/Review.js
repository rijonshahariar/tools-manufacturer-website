import { Rating } from '@mui/material';
import React from 'react';
import './Review.css'
const Review = ({ review }) => {
    const { name, rvw, rate } = review;
    return (

        <div className="col ">
            <div className="card h-100 effect-1">
                <div className="card-body p-3">
                    <p>{rvw}</p>

                </div>
                <div className='card-footer border-0'>
                    <Rating name="read-only" value={rate} readOnly />
                    <h5>{name}</h5>

                </div>
            </div>
        </div>
    );
};

export default Review;