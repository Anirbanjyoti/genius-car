import React from 'react';

const Order = ({order}) => {
    const {email, service} =order;
    return (
        <div style={{width:'800px', margin: 'auto'}}>
            <p>Service Order:<b>{service}</b> Email: 
            <span><i> <b>{email}</b></i></span></p>
        </div>
    );
};

export default Order;