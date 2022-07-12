import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Order from '../Order/Order';

const Orders = () => {
    const [user] =useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        // Data load by async await
        // -------------------------------------------------------
        const getOrders = async()=>{
            const email = user?.email;
            const url = `https://sleepy-harbor-68407.herokuapp.com/orders?email=${email}`;
           try{
            const {data} = await axios.get(url, {
                // sending Token
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrders(data)
           }catch(error){
                console.log(error);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut();
                    navigate('/login')
                }
                
           }
        }
        getOrders();
        // ----------------------------------------
        // data Load By fetch 
        // --------------------------------------
        // fetch(url)
        //       .then((res) => res.json())
        //       .then((data) => setOrders(data));
        
    }, [user.email, navigate])
    return (
        <div>
            <h1 style={{width:'800px', margin: 'auto'}}> Your Order:  {orders.length}</h1>
            {
            orders.map(order=><Order key={order._id} order={order}></Order>)    
            }
        </div>
    );
};

export default Orders;