import React from 'react';
import './Service.css'
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const { _id, name, price, description, img} = service;
    const navigate = useNavigate();
    const handleServiceDetail =id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service card-body'>
            <img src={img} alt='img'></img>
            <h4 className="card-title">Service Name: {name}</h4>
            <h5>Price: {price}</h5>
            <p className='card-text'>Description: {description}</p>
            <button onClick={()=>handleServiceDetail(_id)} className='btn  btn-primary'>{name}</button>
        </div>
    );
};

export default Service;