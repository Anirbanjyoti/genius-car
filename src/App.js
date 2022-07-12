// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import AddService from "./Pages/AddService/AddService";
import ManageService from "./Pages/ManageService/ManageService";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageService></ManageService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
