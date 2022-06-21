import React from 'react';
import notfound from '../../../images/notfound/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>The Mechanic Is Sleeping Find Other</h1>
            <img src={notfound} alt='img'></img>
        </div>
    );
};

export default NotFound;