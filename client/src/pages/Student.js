import React from "react";
import { Container, Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import SaveButton from "../components/SaveButton/SaveButton";

function Student() {
  const { loading, error, data } = useQuery(QUERY_ALL_CONTENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1 className="text-light text-center py-3">List of Classes</h1> 
      <Container>
      <Row xs={1} md={3} className="py-3">
      {data.AllContent.map((element) => {
        console.log(element)
      return (
          <Col className="py-3">
            <Card key={element.id}>
              <Card.Img variant="top" src={require("../assets/SpacePicsForArticles/space"+element.image+".png")}/>
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.description}
                </Card.Text>
              <SaveButton/>
              </Card.Body>
            </Card>
          </Col>
        )
      }
      )}
      </Row> 
      </Container>
    </div>
  )
}

export default Student;