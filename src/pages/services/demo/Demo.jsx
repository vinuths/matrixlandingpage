import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <Container
        fluid
        className="py-5"
        style={{
          background: "#2a1f3d",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container className="text-center py-5">
          <h1 className="fw-bold text-white mb-3">
            Product Demo
          </h1>
          <p
            className="text-light opacity-75 mb-4"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Watch how our platform simplifies compliance, payroll, and governance
            through automation and accuracy.
          </p>

          <Button
            variant="primary"
            className="me-3 px-4 py-2"
            onClick={() => navigate("/contact")}
          >
            Request Full Demo
          </Button>

          <Button
            variant="outline-light"
            className="px-4 py-2"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Container>
      </Container>

      {/* VIDEO SECTION */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                background: "#000",
              }}
            >
              <video width="100%" controls>
                <source
                  src="/VIDEO-2025-05-29-11-14-23.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Demo;
