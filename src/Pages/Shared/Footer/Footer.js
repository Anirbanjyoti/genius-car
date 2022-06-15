import React from 'react';
import './Footer.css'

const Footer = () => {
    const today =new Date()
    const year = today.getFullYear()
    return (
        <div className='footer text-center bg bg-primary p-2'>
            <h3>Copyright @ Car Doctor {year}</h3>
        </div>
    );
};

export default Footer;