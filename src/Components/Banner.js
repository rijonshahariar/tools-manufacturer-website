import React from "react";

const Banner = () => {


  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(" + "https://www.mach1services.com/wp-content/uploads/2020/08/Mobile-Mechanic-Near-Me.jpg" + ")" }}>
      <div className="hero-overlay  bg-opacity-60"></div>
      <div className="hero-content  text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">ArcTools BD</h1>
          <p className="mb-5">Trusted Tools & Parts Manufacturer in Bangladesh. We specialize in cost reductions through vending solutions. We offer a vending solution tailored to the customer product acquisition strategy.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
