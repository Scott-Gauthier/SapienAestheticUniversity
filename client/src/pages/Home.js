import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import HeroCarousel from '../components/HeroCarousel';
import SaveButton from "../components/SaveButton/SaveButton";

function ClassPage() {
  const { loading, error, data } = useQuery(QUERY_ALL_CONTENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
       <HeroCarousel/>
      {data.AllContent.map((element) => {
        console.log(element)
        return (
        <Row xs={1} md={3} className="g-4 py-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.description}
                  
                </Card.Text>
                <div id={element.id}><SaveButton /></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        )}
      )}
    </div>
  )
}

export default ClassPage;