import React from 'react';
import { Form, Button } from 'react-bootstrap';

const registration = () => {
  return (
    <div className="container">
      <h2>Registration</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label> address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label> password</Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>5 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>6 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label> 7</Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>8 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>9 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>10 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>11 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>12 </Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>13 </Form.Label>
          <Form.Control type="email" placeholder="Enter " />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default registration;