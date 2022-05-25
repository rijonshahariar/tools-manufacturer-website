import React from 'react';
import notfound from '../Assets/notfound.gif'

const NotFound = () => {
    return (
        <div>
            <img className='block mx-auto' src={notfound} alt="nothing found" />
        </div>
    );
};

export default NotFound;