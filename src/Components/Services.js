import React from 'react';

const Services = () => {
    return (
        <div className='px-12'>
            <h2 className=" text-center font-bold text-primary my-8 text-4xl uppercase">
                BUSINESS SUMMERY
            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 text-primary text-7xl pt-10">
                        <i className="bi bi-emoji-smile">
                        </i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="text-4xl card-title">502+</h1>
                        <p className='text-xl'>Happy Clients</p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10  text-primary text-7xl pt-10">

                        <i className="bi bi-people"></i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="text-4xl card-title">70+</h1>
                        <p className='text-xl'>Hard Workers</p>

                    </div>

                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10  text-primary text-7xl pt-10">
                        <i className="bi bi-headset"></i>                </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="text-4xl card-title">7000+</h1>
                        <p className='text-xl'>Hours Of Support</p>

                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10  text-primary text-7xl pt-10">
                        <i className="bi bi-journal-richtext"></i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="text-4xl card-title">500+</h1>
                        <p className='text-xl'>Products</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;