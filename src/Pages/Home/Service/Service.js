import React from 'react';
import './Service.css'
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const { id, name, price, description, img} = service;
    const navigate = useNavigate();
    const handleServiceDetail =id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt='img'></img>
            <h4>Service Name: {name}</h4>
            <h5>Price: {price}</h5>
            <p>Price: {description}</p>
            <button onClick={()=>handleServiceDetail(id)} className='btn  btn-primary'>{name}</button>
        </div>
    );
};

export default Service;