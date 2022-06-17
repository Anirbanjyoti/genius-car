import React from 'react';
import { useParams } from 'react-router-dom';
// useParams
const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>This is Service Detail of: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;<h1>This is Service Detail of: </h1>