import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateEerror] = useUpdateProfile(auth);
  const [error, setError] = useState(" ");
  const [agree, setAgree] = useState(false);
  if (user) {
    console.log(`user:`, user);
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    navigate("/home");

    if (!agree) {
      setError("Please checked the terms and condition!");
    }
    if (password !== confirmPassword) {
      setError("Your Password and Confirm Password does not match !");
      return;
    }
    if (password.length < 6) {
      setError("Password must be six character or more !");
      return;
    }
  };
  if(loading || updating){
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="container log-container">
        <div className="row">
          <h1>Please Registration !</h1>

          <Form onSubmit={handleCreateUser}>
            <Form.Group className="mb-3" controlId="formBasicName">
              {/* <Form.Label>User Name</Form.Label> */}
              <Form.Control type="Text" name="name" placeholder="Your Name" />
              {/* <Form.Text className="text-muted">Enter Your Name.</Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                name="email"
                type="email"
                placeholder="Email Address"
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label  className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms" type='checkbox'>Accept Genius Car Terms and Condition</label> */}
              <Form.Check
                onClick={() => setAgree(!agree)}
                name="terms"
                type="checkbox"
                label="Accept Genius Car Terms and Condition"
                // Conditional css class
                // method one
                // className={agree ? 'text-primary' : 'text-danger'}
                // Method two
                className={`${agree ? "text-primary" : "text-danger"}`}
              />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button
              variant="primary"
              type="submit"
              className="btn-lg mx-auto w-100 mb-3 d-block"
              disabled={!agree}
            >
              Sign Up
            </Button>
          </Form>

          <p>
            Already have an account?
            <Link className="ps-2 text-decoration-none" to="/login">
              Please Login!
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
