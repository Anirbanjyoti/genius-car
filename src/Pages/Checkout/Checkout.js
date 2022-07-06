import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className="w-50 mx-auto">
      <h1>Please Book : {service.name}</h1>
      <form action="">
        <input
          className="w-100 mb-2"
          type="text"
          name=""
          id=""
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name=""
          id=""
          placeholder="Email"
          required
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
          name=""
          id=""
          placeholder="Phone"
          required
        />
        <br />
        <textarea
          className="w-100 mb-2"
          type="text"
          name=""
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
