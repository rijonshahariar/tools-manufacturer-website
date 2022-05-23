import React from 'react';
import './BusinessSum.css'
const BusinessSum = () => {
    return (
        <>
            <h1 className='text-center mt-5 heading'>MILLIONS BUSINESS TRUST US</h1>
            <section id="counts" className="counts">

                <div className="container" data-aos="fade-up">
                    <div className="row"><div className="col-lg-3 col-md-6">
                        <div className="count-box"> <i className="bi bi-emoji-smile">
                        </i>
                            <span className="purecounter">502+</span><p>Happy Clients</p>
                        </div>
                    </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                <span className="purecounter">500+</span><p>Products</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box"> <i className="bi bi-headset"></i>
                                <span className="purecounter">5000+</span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-people"></i>
                                <span className="purecounter">76+</span>
                                <p>Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BusinessSum;