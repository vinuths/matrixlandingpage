// src/pages/services/CLRA.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const clraServices = [
  { title: "Registration of Contractors", description: "Registration of contract labour contractors", icon: "📝" },
  { title: "Compliance Monitoring", description: "Compliance monitoring and reporting", icon: "⚖️" },
  { title: "Record Maintenance", description: "Document and wage record maintenance", icon: "📂" },
  { title: "Audits & Inspections", description: "Periodic audits and inspections", icon: "🔍" },
];

const benefits = [
  { title: "Reduce Legal Risk", description: "Reduce legal risk and penalties", icon: "⚖️" },
  { title: "Contractor Compliance", description: "Ensure compliance across all contractors", icon: "📝" },
  { title: "Save Administrative Effort", description: "Save administrative effort with automated tracking", icon: "💼" },
];

const CLRA = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "#2a1f3d", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">CLRA Compliance</h1>
          <p className="mb-4 text-light opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Ensure compliance with the Contract Labour (Regulation & Abolition) Act effectively.
          </p>
          <Button variant="primary" className="me-3 px-4 py-2" onClick={() => navigate("/contact")}>
            Book a Demo
          </Button>
          <Button variant="outline-light" className="px-4 py-2" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Container>
      </Container>

      {/* SERVICES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Our Services</h2>
        <Row className="gy-4 justify-content-center">
          {clraServices.map((service, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#2a1f3d", color: "#fff", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-light opacity-75">{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BENEFITS SECTION */}
      <Container className="py-5" style={{ background: "#1b1429" }}>
        <h2 className="text-center fw-bold mb-5 text-white">Benefits</h2>
        <Row className="gy-4 justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#2a1f3d", color: "#fff", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{benefit.icon}</div>
                <h5 className="fw-bold">{benefit.title}</h5>
                <p className="text-light opacity-75">{benefit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CLRA;
