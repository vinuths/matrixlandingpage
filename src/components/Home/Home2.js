import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girlimage.jfif";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m <b className="purple">Namratha Sringeshwara</b>, a Technical Solutions Specialist
              with nearly <b className="purple">3 years of experience</b> supporting enterprise customers on{" "}
              <b className="purple">Google Cloud Platform (GCP)</b>.
              <br />
              <br />

              My core expertise includes:
              <i>
                <b className="purple">
                  {" "}
                  cloud infrastructure troubleshooting, database migration, IAM security, networking, and monitoring
                </b>
              </i>
              , ensuring highly available and reliable systems.
              <br />
              <br />

              I have hands-on experience working with:
              <i>
                <b className="purple">
                  {" "}
                  Cloud Storage, Cloud SQL, Cloud Run, App Engine, Cloud Functions, Firebase, Database Migration Service (DMS),
                  Datastream, Cloud Build, Artifact Registry, VPC, IAM, Cloud Monitoring, and Cloud Logging
                </b>
              </i>
              .
              <br />
              <br />

              I enjoy analyzing recurring production issues, optimizing performance using logs and metrics, and collaborating
              with cross-functional engineering teams to reduce downtime and consistently meet SLA targets.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
