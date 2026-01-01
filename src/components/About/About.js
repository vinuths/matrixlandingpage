import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Background particles */}
      <Particle />

      {/* Main About Section */}
      <Container
        fluid
        className="about-section"
        style={{
          paddingTop: "130px", // pushes content below navbar/particles
          paddingBottom: "70px",
          position: "relative",
          zIndex: 2, // ensures content stays above particles
        }}
      >
        <Container>
          {/* ================= HERO ================= */}
          <Row className="justify-content-center text-center mb-5">
            <Col md={10}>
              <h1 className="fw-bold mb-3 text-white">
                Matrix HR Technologies
              </h1>

              {/* ✅ Subheading color updated */}
              <p
                className="fs-5 mb-3"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                “Empowering HR through Technology and Compliance Excellence.”
              </p>

              <Button
                variant="primary"
                className="mt-3"
                onClick={() => navigate("/contact")}
              >
                Book a Demo
              </Button>
            </Col>
          </Row>

          {/* ================= CONTENT ================= */}
          <Row className="align-items-center">
            <Col md={7} className="mb-4">
              <p style={{ color: "#ffffffcc" }}>
                Matrix HR Technologies combines deep domain expertise in human
                resources with smart technology to deliver reliable, scalable,
                and future-ready HR solutions. Founded with the vision of
                simplifying complex HR processes, we partner with organizations
                across industries to streamline HR administration, ensure
                statutory compliance, and enhance employee lifecycle management.
              </p>

              <p style={{ color: "#ffffffcc" }}>
                Our solutions are designed to support businesses of all sizes—
                from growing startups to established enterprises. We understand
                that people are the backbone of every organization, and our
                approach is rooted in accuracy, transparency, and efficiency,
                enabling our clients to focus on strategic growth while we take
                care of their HR operations.
              </p>

              <p style={{ color: "#ffffffcc" }}>
                We offer a comprehensive suite of services including HR
                compliance management, payroll and statutory support, HR process
                automation, policy and documentation support, and
                technology-driven HR tools. Our team of experienced HR
                professionals and compliance specialists stays updated with
                evolving labour laws and regulatory frameworks to ensure seamless
                adherence across jurisdictions.
              </p>

              <p style={{ color: "#ffffffcc" }}>
                Driven by innovation and integrity, Matrix HR Technologies is
                more than a service provider—we are a trusted HR partner helping
                organizations build compliant, efficient, and people-centric
                workplaces.
              </p>
            </Col>

            <Col md={5} className="text-center">
              <img
                src={laptopImg}
                alt="About Matrix HR Technologies"
                className="img-fluid"
                style={{ maxHeight: "360px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
