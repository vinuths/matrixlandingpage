// src/pages/services/RiskManagement.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const riskFeatures = [
  {
    title: "Corporate Governance Framework",
    description: "Establish strong governance structures aligned with regulatory and ethical standards",
    icon: "🏛️",
  },
  {
    title: "Risk Identification",
    description: "Identify operational, financial, legal, and compliance risks proactively",
    icon: "🔎",
  },
  {
    title: "Risk Assessment & Analysis",
    description: "Evaluate risk impact and likelihood to prioritize mitigation strategies",
    icon: "📊",
  },
  {
    title: "Policy & Controls Design",
    description: "Develop internal controls, SOPs, and policies to reduce business exposure",
    icon: "📘",
  },
  {
    title: "Compliance Risk Monitoring",
    description: "Continuous monitoring to ensure adherence to statutory and internal controls",
    icon: "🛡️",
  },
  {
    title: "Management Reporting",
    description: "Clear dashboards and reports for leadership decision-making",
    icon: "📈",
  },
];

const RiskManagement = () => {
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
          <h1 className="fw-bold mb-3 text-white">
            Governance & Risk Management
          </h1>
          <p
            className="mb-4 text-light opacity-75"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Strengthen corporate governance and proactively manage risks to
            protect your business and ensure long-term sustainability.
          </p>
          <Button
            variant="primary"
            className="me-3 px-4 py-2"
            onClick={() => navigate("/contact")}
          >
            Book a Demo
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

      {/* FEATURES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">
          Key Capabilities
        </h2>
        <Row className="gy-4 justify-content-center">
          {riskFeatures.map((feature, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{
                  borderRadius: "16px",
                  background: "#2a1f3d",
                  color: "#fff",
                  transition: "0.3s",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                  {feature.icon}
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-light opacity-75">
                  {feature.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RiskManagement;
