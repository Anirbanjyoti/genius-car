import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'100px'}} className='d-flex w-50 mx-auto justify-content-center align-items-center'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;