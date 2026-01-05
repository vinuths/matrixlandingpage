// src/pages/services/FactoryLicense.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const licenseTypes = [
  {
    title: "Factory License",
    description: "License application, renewals and compliance tracking.",
    icon: "🏭",
  },
  {
    title: "Trade License",
    description: "Mandatory license for commercial establishments.",
    icon: "📝",
  },
  {
    title: "Shops & Establishments",
    description: "Registrations and renewals under S&E Act.",
    icon: "🏠",
  },
  {
    title: "Building / Occupancy License",
    description: "Ensure compliance with local building norms.",
    icon: "⚖️",
  },
];

const benefits = [
  {
    title: "Reduce Risk of Penalties",
    description: "Prevent fines and ensure full compliance with regulations.",
    icon: "📝",
  },
  {
    title: "Uninterrupted Operations",
    description: "Maintain seamless business operations with timely renewals.",
    icon: "🏭",
  },
  {
    title: "Streamlined Documentation",
    description: "Centralized and organized documentation for compliance.",
    icon: "📈",
  },
];

const FactoryLicense = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "#2a1f3d", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Factory Compliances</h1>
          <p className="mb-4 text-light opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Ensuring that your factories meet all legal, safety, and environmental compliance standards efficiently.
          </p>
          <Button variant="primary" className="me-3 px-4 py-2" onClick={() => navigate("/contact")}>
            Book a Demo
          </Button>
          <Button variant="outline-light" className="px-4 py-2" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Container>
      </Container>

      {/* LICENSE TYPES */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Types of Licenses</h2>
        <Row className="gy-4 justify-content-center">
          {licenseTypes.map((item, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#2a1f3d", color: "#fff", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-light opacity-75">{item.description}</p>
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

export default FactoryLicense;
