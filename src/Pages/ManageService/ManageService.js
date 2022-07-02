import React from 'react';
import useServices from '../../hooks/useServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageService = () => {
    const [services, setServices]  = useServices();
    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure ?');
        if(proceed){
                const url = `http://localhost:5000/service/${id}`;
                console.log(url);
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => toast('Service Has been Deleted!', data));
                const remaining = services.filter(service=> service._id !== id);
                setServices(remaining)
        }
    }
    return (
        <div>
            <h1>Manage Service</h1>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></h4>
                </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default ManageService;