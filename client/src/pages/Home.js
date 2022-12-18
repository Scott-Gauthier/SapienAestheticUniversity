import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
// import HeroCarousel from '../components/HeroCarousel';
import SaveButton from "../components/SaveButton/SaveButton";

function ClassPage() {
  const { AllContent } = useQuery(QUERY_ALL_CONTENT)
  // const content = data?.AllContent || {};

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  return (
    
    <select name='AllContent'>
      {AllContent.map((element) => (
        <Row xs={1} md={3} className="g-4 py-3">
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.description}
                </Card.Text>
                <SaveButton />
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>test</Card.Title>
                <Card.Text>
                  Testing the body works
                </Card.Text>
                <SaveButton />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
  )
}
    </select>
  );
}

export default ClassPage;