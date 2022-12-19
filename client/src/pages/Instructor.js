import React from "react";
import { Container, Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

//importing photos until react mapping is edited
import Stephanie from "../assets/Meet-the-owner/Stephanie-stance.png.webp";
import Jess from "../assets/Educators/Jess/JessHeadshot.png";
import Kristen from "../assets/Educators/Kristen/KristenHeadshot.png";


//Instructor page is in development hard coded on website. Plan to move to react and mapping for future development 
function Instructor(){
    return(
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4 py-3">
                <Col>
                    <Card>
                    <Card.Img variant="top"  src={Stephanie}/>
                    <Card.Body>
                        <Card.Title className="fw-bold">Stephanie</Card.Title>
                        <Card.Text>
                        Stephanie moved to Seattle a decade ago for esthetics school, and after 12 years she has built a following with her results-driven treatments, straightforward approach, meticulous practices and a deep commitment to serving her clients.
                        </Card.Text>
                        <Button variant="primary" className='btn-dark'>Read More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src={Jess} />
                    <Card.Body>
                        <Card.Title className="fw-bold">Jess</Card.Title>
                        <Card.Text>
                        After pursuing her degree in fine arts, Jess came to Seattle to cultivate her creativity. She enrolled in an apprentice program at Sapien after being a dedicated client because she wanted to learn more about skincare and express her appreciation for beauty. 
                        </Card.Text>
                        <Button variant="primary" className='btn-dark'>Read More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src={Kristen} />
                    <Card.Body>
                        <Card.Title className="fw-bold">Kristen</Card.Title>
                        <Card.Text>
                        Kristen is a Master Esthetician living in Seattle, WA. After graduating in 2018, she honed her craft in medical aesthetics providing laser and skin revision treatments. Kristen joined Sapien in 2020, specializing in advanced aesthetics.
                        </Card.Text>
                        <Button variant="primary" className='btn-dark'>Read More</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
            
        );
};

export default Instructor;
