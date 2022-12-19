import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import LOGO from '../assets/Logos/Eclipse-Logo-Sapien.jpg';

import Auth from '../utils/Auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className='mb-auto p-3' bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img src={LOGO} alt='logo' style={{ width:"80px", height:"80px" }}/> Sapien Aesthetic University 
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
              <Nav className='ml-auto text-light fs-6'>

              {/* if user is logged in */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/student'>
                    Profile
                  </Nav.Link>

                  <Nav.Link as={Link} to='/saved'>
                    Saved Classes
                  </Nav.Link>
                  
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link as={Link} to='/'> Home </Nav.Link> 

                <Nav.Link as={Link} to='/about-us'>
                  About Us
                </Nav.Link>

                <Nav.Link as={Link} to='/team'>
                  Meet the Instructors 
                </Nav.Link>
  
                <Nav.Link onClick={() => setShowModal(true)}>Login or Sign Up</Nav.Link> 
                </>
              )} 

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title>
              <Nav className='nav-pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal> 
    </>
  );
};

export default AppNavbar;