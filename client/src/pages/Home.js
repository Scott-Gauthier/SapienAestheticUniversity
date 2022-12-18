import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
// import HeroCarousel from '../components/HeroCarousel';
import SaveButton from "../components/SaveButton/SaveButton";

function ClassPage() {
  const [content] = useQuery(QUERY_ALL_CONTENT);

  return (
    <div>
      <Row xs={1} md={3} className="g-4 py-3">
        <Col>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>test 1</Card.Title>
              <Card.Text>
                Test body
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
    </div>
  )
}

export default ClassPage;