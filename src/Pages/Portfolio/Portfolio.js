import React from "react";
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div className='profile-section bg-primary'>
      <div className='profile-container'>


        <div className='profile-content'>
          <div className='know-me'>
            <h3 className='text-2xl text-center'>Shahariar Rijon</h3>
            <h5 className='text-primary text-center mb-5 mt-1'>Junior Web Developer</h5>
            <label htmlFor="email">EMAIL</label>
            <h5 className='mb-3'>shahariar.rijon@gmail.com</h5>
            <h2 className="text-primary">EDUCATION</h2>
            <p>2022
              <br />
              Admission Candidate
            </p>
            <p className='my-3'>
              HSC (2021)
              <br />
              Science
              <br />
              Chittagong University College
            </p>
          </div>

          <div className='expertise-container'>
            <h3 className='text-2xl text-primary'>SKILLS</h3>

            <p className='my-1'>HTML5, CSS3, Bootstrap5, Tailwind, Javascript, ReactJS, MongoDB, NodeJS, and ExpressJS
            </p>


            <h3 className='text-2xl mt-4 text-primary'>KNOW ABOUT</h3>

            <p className='my-1'>Axios, Python, PHP, Wordpress, Java
            </p>

            <h3 className='text-2xl mt-4 mb-1 text-primary'>BEST PROJECTS LINK</h3>

            <p><a href="https://carvaly-d931e.web.app/">Cars Warehouse Website</a></p>
            <p><a href="https://phoneforest.netlify.app/">Phone Database Website</a></p>
            <p><a href="https://onushthan.netlify.app/">Convention Center Website</a></p>
          </div>
        </div>

        <h2 className=" text-center mt-5 font-bold text-primary text-4xl mb-5 uppercase">
          PROJECTS IMAGE
        </h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/MB0xxZq/CarValy.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Carvaly</h2>
              <p>Warehouse Management Website</p>
              <div className="card-actions justify-end">
                <a className="btn btn-primary" href="https://carvaly-d931e.web.app/">Visit</a>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/L9MDGB9/Phone-Forest.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">PhoneForest</h2>
              <p>Phone Details, Price Database</p>
              <div className="card-actions justify-end">
                <a className="btn btn-primary" href="https://phoneforest.netlify.app/">Visit</a>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/166kChc/Onushthan.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Onushthan</h2>
              <p>Convention Center Website</p>
              <div className="card-actions justify-end">
                <a className="btn btn-primary" href="https://onushthan.netlify.app/">Visit</a>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div >
  );
};

export default Portfolio;
