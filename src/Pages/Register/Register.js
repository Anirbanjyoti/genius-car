import Button from "react-bootstrap/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {

    const handleCreateUser=event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name, email);
        
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
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <p>
            If you have account?
            <Link to="/login">Please Login!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
