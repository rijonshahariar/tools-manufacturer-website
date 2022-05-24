import React from 'react';
import useReviews from '../../../Hooks/useReviews';
import Review from './Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <h1 className="section-title text-center my-5 fw-bold">
                    <span className="d-inline-block">
                        CUSTOMER REVIEWS
                    </span>
                </h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Reviews;