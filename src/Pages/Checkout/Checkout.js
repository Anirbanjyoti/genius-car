import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios.post('https://sleepy-harbor-68407.herokuapp.com/order',order)
    .then(res=>{
      const {data} = res;
      if(data.insertedId){
        toast(' Your Order is Booked!');
      }
     e.target.reset();
    })
      // Redirection page.

  };
  return (
    <div className="w-50 mx-auto">
      <h1>Please Book : {service.name}</h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          id=""
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name=""
          id=""
          value={user?.email}
          placeholder="Email"
          required
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name=""
          id=""
          value={service.name}
          placeholder="Service"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <br />
        <textarea
          className="w-100 mb-2"
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
        />
        <br />
        <input
          className="btn btn-primary"
          type="submit"
          name=""
          id=""
          value="Place Order"
        />
        <br />
      </form>
    </div>
  );
};
export default Checkout;
