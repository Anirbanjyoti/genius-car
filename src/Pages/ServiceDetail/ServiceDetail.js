import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// useParams
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService]= useState({});
  useEffect(()=>{
    const url =`http://localhost:5000/service/${serviceId}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> setService(data))
  }, [serviceId])
  return (
    <div>
      <h1>This is Service Detail of: {service.name}</h1>
      <Link to="/checkout">
        <button className="btn btn-primary m-5 text-center">Proceed checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
<h1>This is Service Detail of: </h1>;
