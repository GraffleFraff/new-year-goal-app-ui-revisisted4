import React from "react";
import { Card, Container } from "react-bootstrap";
import construction from "../components/images/construction3.png";
import Header from "../components/Header";
import { Hammer } from "react-bootstrap-icons";

function ConstructionPage() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <div class="d-flex">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Construction
            </li>
          </ol>
        </nav>
        <Header />
      </div>
      <div class="d-flex"></div>
      <Card className="mb-3 shadow-sm">
        <Card.Header>
          <Card.Title>
            <h3 style={{ textAlign: "center" }}>
              <Hammer />
              &nbsp;
              <b>Page Under Construction</b>
            </h3>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Container>
            <h6>
              Pardon the mess, you've clicked on a page that's still under
              construction. This website is a for a UI/UX project for SWE-632,
              and only the following use cases are fully functional:
              <ul>
                <li>Adding a goal</li>
                <li>Editing a goal</li>
                <li>Deleting a goal</li>
                <li>Viewing weekly goal progress</li>
                <li>Journaling about weekly progress</li>
                <li> Crafting a high level vision for 2024</li>
              </ul>
              Other links (e.g. profile, preferences, about, contact, faq) are
              set up to showcase the intended design of this web application and
              have not been fully fleshed out.
            </h6>
            <figure class="figure">
              {" "}
              <img
                src={construction}
                alt="Construction"
                class="figure-img img-fluid rounded"
              />
              <figcaption class="figure-caption text-center">
                <b>Image Source:</b> https://stock.adobe.com/
              </figcaption>
            </figure>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionPage;
