import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {id, name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} alt='img'></img>
            <h4>Service Name: {name}</h4>
            <h5>Price: {price}</h5>
            <p>Price: {description}</p>
            <button>{name}</button>
        </div>
    );
};

export default Service;