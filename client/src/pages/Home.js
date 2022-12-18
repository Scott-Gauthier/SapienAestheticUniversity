import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import { saveContent, deleteBook } from '../utils/API';
import HeroCarousel from '../components/HeroCarousel';
import SaveButton from "../components/SaveButton/SaveButton";

function ClassPage() {

  const handleSaveContent = async (contentId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveContent(contentId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };




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
            <Card key={element.id}>
              <Card.Img variant="top" src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.description}
                  
                </Card.Text>
                <SaveButton onClick={() => handleSaveContent(element.id)}/>
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