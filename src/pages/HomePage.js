import React from "react";
import { Card, Container } from "react-bootstrap";
import planner from "../components/images/planner.png";
import Header from "../components/Header";
import { House } from "react-bootstrap-icons";

function HomePage() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <div class="d-flex">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
        <Header />
      </div>
      <Card className="mb-3 shadow-sm">
        <Card.Header>
          <Card.Title>
            <h3 style={{ textAlign: "center" }}>
              <House /> &nbsp;
              <b>Home</b>
            </h3>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Container>
            <h6>
              Goal Planner is an innovative, paperless planning solution
              tailored to meet all your goal-setting requirements for the 2024
              calendar year. This application facilitates seamless weekly goal
              planning, enabling you to meticulously set, track, and achieve
              your objectives with unparalleled ease. <br />
              <br />
              To get started, use the links in the sidebar to either craft your
              high level vision for the year or start tracking your weekly
              goals.
            </h6>
            <figure class="figure">
              {" "}
              <img
                src={planner}
                alt="Planner"
                class="figure-img img-fluid rounded"
              />
              <figcaption class="figure-caption text-center">
                <b>Image Source:</b>{" "}
                https://timeular.com/blog/different-types-of-planners/
              </figcaption>
            </figure>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
