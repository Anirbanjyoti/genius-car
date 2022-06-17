import React from "react";
import { Link, useParams } from "react-router-dom";
// useParams
const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>This is Service Detail of: {serviceId}</h1>
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
<h1>This is Service Detail of: </h1>;
