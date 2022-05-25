import React from 'react';

const Special = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex justify-center items-center my-9'>
                <i class="text-5xl mx-3 bi bi-telephone"></i>
                <div>
                    <p>HELP: 09678110110</p>
                    <p>09.00am - 08.00pm (7 days a week)
                    </p>
                </div>
            </div>
            <div className='flex justify-center gap-4 items-center my-9'>
                <i class="text-5xl mx-3 bi bi-cash"></i>
                <div>
                    <p>PAY CASH BY CARD</p>
                    <p>Pay by your card easily</p>
                </div>
            </div>
            <div className='flex justify-center items-center my-9'>

                <i class="text-5xl mx-3 bi bi-truck"></i>
                <div>
                    <p>SERVICE</p>
                    <p>All over Bangladesh</p>
                </div>
            </div>

        </div>
    );
};

export default Special;