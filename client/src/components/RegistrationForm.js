import React from 'react';
import { Form, Button } from 'react-bootstrap';

// import Auth from '../utils/Auth';

function RegistrationForm() { 
  return (
    <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor='name'>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your name'
            name='name'
            required
          />
          <Form.Control.Feedback type='invalid'>Your name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
      
        <Button 
          type='submit'
          variant='success'>
          Submit
        </Button>

      </Form>
  );
};

export default RegistrationForm;