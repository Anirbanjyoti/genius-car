import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
    const navigate =useNavigate();
    const [createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);
        const [error, setError] = useState(" ");
    if(user){
        navigate('/home')
    }
    const handleCreateUser=event=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const agree = event.target.terms.checked;
        if(agree){
          createUserWithEmailAndPassword(email, password) 
        }else{
          setError('Please checked the terms and condition!')
        }
        if (password !== confirmPassword) {
          setError("Your Password and Confirm Password does not match !");
          return;
        }
        if (password.length < 6) {
          setError("Password must be six character or more !");
          return;
        }

    }
  return (
    <div>
      <div className="container log-container">
        <div className="row">
          <h1>This is Registration Page</h1>

          <Form onSubmit={handleCreateUser}> 
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="Text" name="name" placeholder="Enter Your Name" />
              <Form.Text className="text-muted">Enter Your Name.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name='terms' type="checkbox" label="Accept Genius Car Terms and Condition" />
            </Form.Group>
           <p className="text-danger">{error}</p>
           <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>

          <p>
            If you have account?
            <Link to="/login">Please Login!</Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
