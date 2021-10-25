import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <footer className="bg-danger">
          <Form >
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>  
        </footer>
        </>
    );
};

export default Footer;