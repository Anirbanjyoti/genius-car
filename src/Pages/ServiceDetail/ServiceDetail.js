import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
// useParams
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div>
      <h1>This is Service Detail of: {service.name}</h1>
      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-primary m-5 text-center">Proceed checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;