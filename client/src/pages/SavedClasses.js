import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import SaveButton from "../components/SaveButton/SaveButton";

function SavedClasses() {
  const { loading, error, data } = useQuery(QUERY_ALL_CONTENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

    console.log(data);

  return (
      <>
      <div className="py-4">
      <div
        className="col-md-6 m-auto py-3 shadow-4 rounded-3"
        style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
      >
        <h1 className="text-center fw-bold">
          SAVED CLASSES 
        </h1>

        <hr className="my-2" />
      </div>  

      <Container>
      <Row xs={1} md={3} className="g-4 py-3">
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
    </>
  )
}

export default SavedClasses;