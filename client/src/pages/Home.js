import React, { useState, useEffect }  from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
// import HeroCarousel from '../components/HeroCarousel';
import SaveButton from "../components/SaveButton/SaveButton";

function ClassPage() {
  const [userData, setUserData] = useState({});
  const response = QUERY_ALL_CONTENT();

  return (
    <Row>
      {AllContent.map((element) => {
        return (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.description}
                </Card.Text>
                <SaveButton />
              </Card.Body>
            </Card>
          </Col>
        )
      }
      )}
    </Row>
  );
}

export default ClassPage;