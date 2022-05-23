import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-bg d-flex flex-column h-100">

            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">ArcTools.</h5>
                            <p className="small text-muted">Leading manufacturer of innovative tools for the professional trades</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <span className="text-primary">ArcTools</span></p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Receive early discount offers, updates and new products info.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" />
                                    <button className="btn btn-orange" id="button-addon2" type="button">➤</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;