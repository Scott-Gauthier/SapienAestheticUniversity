import React from "react";
import { Card, Col, Row } from 'react-bootstrap';

//class images 
import ABC from '../assets/SpacePicsForArticles/space1.png';
import CAD from '../assets/SpacePicsForArticles/space2.png';
import BAD from '../assets/SpacePicsForArticles/space3.png';
import SAD from '../assets/SpacePicsForArticles/space4.png';
import CHAD from '../assets/SpacePicsForArticles/space5.png';
import FAB from '../assets/SpacePicsForArticles/space6.png';
import DAB from '../assets/SpacePicsForArticles/space7.png';
import LAD from '../assets/SpacePicsForArticles/space8.png';
import MAD from '../assets/SpacePicsForArticles/space9.png';

function Student() {
  return (
    <div>

    <h1 className="py-3 text-center">List of Classes</h1>

    <Row xs={1} md={3} className="g-4 py-3">

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={ABC} />
            <Card.Body>
              <Card.Title>Intro to Skincare 101</Card.Title>
              <Card.Text>
              Dive deeper on the most common misconceptions of skincare. This course will go over the many behaviors and environmental factors that influence skin health, how to recognize the best skin products for each skin type and how to build a skincare routine.
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
        
        <Col>
          <Card>
            <Card.Img variant="top" src={DAB} />
            <Card.Body>
              <Card.Title>Collagen 101</Card.Title>
              <Card.Text>
                Collagen is EVERYWHERE. Literally. If you’ve explored any portion of the skin-care world, then you’re likely familiar with collagen, the amazing protein that deserves all of the hype that it receives. Understanding this dermal protein is imperative in understanding skin aging. Let's talk more about it.
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={MAD} />
            <Card.Body>
              <Card.Title>The Many Benefits of Facial Message</Card.Title>
              <Card.Text>
                Facial massage not only feels amazing, but it also relieves tension, reduces stress, and increases circulation which plays an important role in skin aging. Many of us tend to hold stress in our faces and frequent facial massages are great for both relaxation and skin health. Learn about all the benefits in this quick and easy course. 
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={LAD} />
            <Card.Body>
              <Card.Title>Why You Should Wear SPF Everyday</Card.Title>
              <Card.Text>
              Fractional laser is designed to treat surgical and acne scars on any area of the body, including the face. It can be safely used on most skin types. During your consultation, we will determine if you are a good candidate for the procedure based on a variety of factors. 
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={CAD} />
            <Card.Body>
              <Card.Title>Hyperpigmentation 101</Card.Title>
              <Card.Text>
              Fractional laser is designed to treat surgical and acne scars on any area of the body, including the face. It can be safely used on most skin types. During your consultation, we will determine if you are a good candidate for the procedure based on a variety of factors. 
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={BAD} />
            <Card.Body>
              <Card.Title>Natural vs. Medical Grade Products</Card.Title>
              <Card.Text>
                This service is a Treatment Facial PLUS Microneedling to stimulate the top layers of the skin which release of natural growth factors naturally encouraging rebuilding your own collagen and elastin in order to improve fine lines, wrinkles, sagging skin, texture & tone. Multiple treatments and home-care are recommended for optimal results and 3-5 days downtime is typical.

                Client is required to bring their own UPF protection to the appointment as sunscreen cannot be applied after needling and light exposure can damage the freshly needled skin. Bluestone shields are available to purchase at your appointment time.
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={SAD} />
            <Card.Body>
              <Card.Title>LED Light Therapy</Card.Title>
              <Card.Text>
              A lifting technique designed to give you longer-looking lashes without the need for lash extensions. All treatments include a lash tint for your upper lashes, though this may not replace mascara for those clients with petite or fine lashes.  
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={CHAD} />
            <Card.Body>
              <Card.Title>Skin Anatomy 101</Card.Title>
              <Card.Text>
              Laser resurfacing facial is a revolutionary cosmetic procedure that uses laser beams to improve the look of your skin. This non-surgical treatment works by targeting damaged or wrinkled areas and eliminates dead cells, resulting in a diminished appearance of fine lines, wrinkles, enlarged pores and acne scars. *All new clients must book a consultation prior to making any booking for laser services. 
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={FAB} />
            <Card.Body>
              <Card.Title>Acne 101</Card.Title>
              <Card.Text>
                Intense pulsed light (IPL) therapy, aka photofacial, is a way to improve the color and texture of your skin without surgery. It can undo some of the visible damage caused by sun exposure — called photoaging. You may notice it mostly on your face, neck, hands, or chest where your skin has been exposed to light the most.

                IPL is indicated if you have red, brown, or splotchy skin and have relatively fair skin.
              </Card.Text>
              <Card.Link href="#">Save Class</Card.Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  );
}

export default Student;