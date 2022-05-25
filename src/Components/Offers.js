import React from 'react';
const Offers = () => {
    return (
        <div>
            <div className="hero bg-primary text-white" style={{ backgroundImage: "url(" + "https://t4.ftcdn.net/jpg/04/31/19/89/360_F_431198909_DwGgs82ot1BTZ7wu6dnvwpBRTKVDZROd.jpg" + ")" }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h2 className="uppercase text-5xl mb-4">Final sales</h2>
                        <p className="mb-0">Up to</p>
                        <h1 className="text-8xl mb-3">70%</h1>
                        <p className="mb-5">* Free shipping on orders over $700.</p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;