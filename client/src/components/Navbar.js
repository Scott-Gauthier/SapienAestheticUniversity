import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//add customized styling here

function NavBar() => {
  return (

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#Sapien University">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Classes">Features</Nav.Link>
            <Nav.Link href="Login">Pricing</Nav.Link>
            // add drop down to register
          </Nav>
        </Container>
      </Navbar>
    
  )
};

// ------------code to review for styling inspiration-----------
// export default function Nav() {
//     const linkStyle = { border: '1px black', padding: '5px' };
  
//     return (
//       <nav className="main-header-menu">
//         <section
//           style={{
//             display: 'flex',
//             fontFamily: 'helvetica',
//             flexDirection: 'row',
//             alignItems: 'flex-start',
//             justifyContent: 'flex-start',
//           }}
//         >
//           <div style={linkStyle}>
//             <a href="#">Home</a>
//           </div>
//           <div style={linkStyle}>
//             <a href="#">Login</a>
//           </div>
//           <div style={linkStyle}>
//             <a href="#">Register</a>
//           </div>
//           <div style={linkStyle}>
//             <a href="#">About</a>
//           </div>
//           <div style={linkStyle}>
//             <a href="#">Contact</a>
//           </div>
//         </section>
//       </nav>
//     );
//   }