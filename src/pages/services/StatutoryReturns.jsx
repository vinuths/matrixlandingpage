// src/pages/services/StatutoryReturns.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const statutoryFeatures = [
  { title: "Timely Filings", description: "Ensure statutory returns are filed within due dates", icon: "⏱️" },
  { title: "Multi-Act Coverage", description: "Manage returns across labour laws and state-specific acts", icon: "📜" },
  { title: "Automated Reports", description: "Auto-generated returns to minimize manual effort", icon: "🖥️" },
  { title: "Digital Records", description: "Secure storage of all filed statutory documents", icon: "📂" },
  { title: "PF & ESI Returns", description: "Dedicated tracking and filing of PF & ESI submissions", icon: "🏦" },
  { title: "Compliance Verification", description: "Regular checks to ensure all returns meet statutory requirements", icon: "✅" },
];

const StatutoryReturns = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "#2a1f3d", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Statutory Returns & Filings</h1>
          <p className="mb-4 text-light opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Accurate and timely labour law returns across acts and states.
          </p>
          <Button variant="primary" className="me-3 px-4 py-2" onClick={() => navigate("/contact")}>
            Book a Demo
          </Button>
          <Button variant="outline-light" className="px-4 py-2" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Container>
      </Container>

      {/* FEATURES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">Key Features</h2>
        <Row className="gy-4 justify-content-center">
          {statutoryFeatures.map((feature, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{ borderRadius: "16px", background: "#2a1f3d", color: "#fff", transition: "0.3s" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-light opacity-75">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatutoryReturns;
