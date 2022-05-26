import React from 'react';

const Services = () => {
    return (
        <div className='px-12'>
            <h2 className=" text-center font-bold text-primary my-8 text-5xl uppercase">
                BUSINESS SUMMERY
            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 text-primary text-7xl pt-10">
                        <i className="bi bi-emoji-smile">
                        </i>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="text-4xl card-title">502+</h1>
                        <p className='text-xl'>Happy Clients</p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10  text-primary text-7xl pt-10">

                        <i className="bi bi-people"></i>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="text-4xl card-title">70+</h1>
                        <p className='text-xl'>Hard Workers</p>

                    </div>

                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10  text-primary text-7xl pt-10">
                        <i className="bi bi-headset"></i>                </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="text-4xl card-title">7000+</h1>
                        <p className='text-xl'>Hours Of Support</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10  text-primary text-7xl pt-10">
                        <i className="bi bi-journal-richtext"></i>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="text-4xl card-title">500+</h1>
                        <p className='text-xl'>Products</p>

                    </div>
                </div>

            </div>
            <div className=' mx-auto shadow-2xl mt-8 p-6 lg:flex justify-between items-center'>
                <div className='lg:w-3/4'>
                    <h1 className='text-4xl mb-2 text-primary'>Have any question about us or get a product request?</h1>
                    <p className='text-xl text-blue-900'>Don't hesitated to Contact us</p>
                </div>
                <div className='flex'>
                    <button className="btn mr-4 rounded-lg bg-primary border-0 btn-xs sm:btn-sm md:btn-md lg:btn-md">Request For Quote</button>
                    <button className="btn mr-4  rounded-lg bg-blue-900 btn-xs border-0 sm:btn-sm md:btn-md lg:btn-md">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Services;