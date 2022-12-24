import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
    return (
      <div className='d-flex flex-column min-vh-100'> 
      <MDBFooter className='text-center mt-auto page-footer' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
  
          <section>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Blog</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/about-us' className='text-white'>
                      Who we are?
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Careers</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/team' className='text-white'>
                      Join the Team
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>More Info</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/contact' className='text-white'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Subscribe</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/newsletter' className='text-white'>
                     Newsletter
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 Copyright:
            Sapien Aesthetic University 
        </div>
      </MDBFooter>
      </div>
    );
  }

export default Footer;
