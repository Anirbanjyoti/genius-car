import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
// useRef
    const emailRef = useRef(' '); 
    const passwordRef= useRef(' '); 

    const handleUserLogin =event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        
    }

    const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <div className="container log-container">
        <div className="row">
          <h1>This is Login Page</h1>
          <Form onSubmit={handleUserLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            New to Genius Car?{" "}
            <button onClick={handleRegister}>Please Register!</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
