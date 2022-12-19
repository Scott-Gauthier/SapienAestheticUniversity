import React from "react";
import { Container, Card, Col, Row } from 'react-bootstrap';

import Auth from "../utils/Auth";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';

import SaveButton from "../components/SaveButton/SaveButton";
import DeleteButton from "../components/DeleteButton/DeleteButton";
import ClassList from "../components/ClassList";

const Student = () => { 
  const { loading, error, data } = useQuery(QUERY_ALL_CONTENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>

    {Auth.loggedIn() ? (
      <>
      <ClassList/>
      </> ) : ( <> </>
    )}; 

    <Container>
      <Row xs={1} md={3} className="g-4 py-3">
        {data.AllContent.map((element) => {
          return (
            <Col>
              <Card id={element._id}>
                <Card.Img variant="top" src={require("../assets/SpacePicsForArticles/space" + element.image + ".png")} />
                <Card.Body>
                  <Card.Title className="fw-bold">{element.title}</Card.Title>
                  <Card.Text>
                    {element.description}
                  </Card.Text>

                  {Auth.loggedIn() ? (
                    <>
                   <SaveButton/>
                   <DeleteButton/>
                    </> ) : ( <> </>
                  )}

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