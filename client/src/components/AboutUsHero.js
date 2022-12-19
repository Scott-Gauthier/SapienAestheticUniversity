import React from "react";
import { MDBBtn, MDBContainer, MDBTypography } from "mdb-react-ui-kit";

function AboutUsHero() {
  return (
    <>
      <MDBContainer className="mt-5">
        <div
          className="p-4 shadow-4 rounded-3"
          style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
        >
          <MDBTypography tag="h2">Sapien was built on the idea of informed consent, education, personal
relationships, and meticulous esthetics practices to make you feel
empowered to look and feel the way you want to.</MDBTypography>
          <hr className="my-4" />

          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>

          <MDBBtn>Learn more</MDBBtn>
        </div>
      </MDBContainer>
    </>
  );
}

export default AboutUsHero;