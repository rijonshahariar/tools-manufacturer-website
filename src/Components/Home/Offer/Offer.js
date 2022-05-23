import React from 'react';
import './Offer.css'

const Offer = () => {
    return (
        <section className="bg-offer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-white text-center py-5">
                        <h2 className="display-4 text-uppercase mb-4">Final sales</h2>
                        <p className="mb-0">Up to</p>
                        <h2 className="display-1 fw-bold mb-3">70%</h2>
                        <p className="mb-5">* Free shipping on orders over $70.</p>
                        <p><button className="btn btn-outline-light" href="#">Shop now</button></p>
                    </div>
                    <div className="col-lg-6 bg-img"></div>
                </div>
            </div>
        </section>
    );
};

export default Offer;