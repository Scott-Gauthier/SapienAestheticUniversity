import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import HeroCarousel from '../components/HeroCarousel';

//class images 
import ABC from '';


function ClassPage() {
  return (
  
  <div>
   <HeroCarousel/>
   
    <Row xs={1} md={3} className="g-4 py-3">

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={ABC} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>

              </Card.Text> 
            </Card.Body>
          </Card>
        </Col>
      ))}
        
        <Col>
          <Card>
            <Card.Img variant="top" src={DAB} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Row>
    </div>
  );
}

export default ClassPage;