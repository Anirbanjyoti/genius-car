import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import Loading from "../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Shared/PageTitle/PageTitle";


const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let errorElement;
  // useRef
  const emailRef = useRef(" ");
  const passwordRef = useRef(" ");
  // Toast Message

  //
  const handleUserLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  //
  const handleRegister = () => {
    navigate("/register");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast("Sent email Please Check Inbox!");
    }else{
      toast('Please Enter Email!')
    }
  };
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  // Redirection
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  // Show loading
  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div>
    <PageTitle title='Login'></PageTitle>
      <div className="container log-container">
        <div className="row">
          <h1>Please Login !</h1>
          <Form onSubmit={handleUserLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {/* {loading && <p>Loading....</p>} */}
            {/* Firebase Error Message */}
            {/* <p style={{ color: "red" }}>{error?.message}</p> */}
            <p style={{ color: "red" }}>{errorElement}</p>
            <Button
              className="w-100 mx-auto d-block mb-2"
              variant="primary"
              type="submit"
            >
              Log in
            </Button>
          </Form>
          <p>
            New to Genius Car?
            <Link
              className="ps-2 text-decoration-none text-danger"
              to="/register"
              onClick={handleRegister}
            >
              Please Register!
            </Link>
          </p>
          <p>
            Forgot Password?
            <button
              className="btn btn-link ps-2 text-decoration-none text-danger"
              onClick={resetPassword}
            >
              Reset Password!
            </button>
          </p>

          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
