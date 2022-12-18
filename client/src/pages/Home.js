import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import { saveContent, deleteBook } from '../utils/API';
import HeroCarousel from '../components/HeroCarousel';
import Student from './Student'

function Home() {

  
  return (
    <div>
       <HeroCarousel/>

      {data.AllContent.map((element) => {
        console.log(element)
        
      return (
        <Row xs={1} md={3} className="g-4 py-3">

          <Col>
            <Card key={element.id}>
              <Card.Img variant="top" src={require("../assets/SpacePicsForArticles/space"+element.image+".png")}/>
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

export default Home;