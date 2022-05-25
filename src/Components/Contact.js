import React from 'react';

const Contact = () => {
    return (

        <section className="bg-accent" >
            <div className='bg-primary px-10 py-14 ' style={{ backgroundImage: "url(" + "https://mixkit.imgix.net/videos/preview/mixkit-animation-of-purple-background-and-white-triangles-99548-0.jpg?q=80&auto=format%2Ccompress" + ")" }}>
                <div className='text-center pb-14 text-white'>

                    <h1 className='text-4xl font-bold mt-3'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button className="btn btn-wide btn-secondary">Submit</button>
                </div>
            </div>
        </section>

    );
};

export default Contact;