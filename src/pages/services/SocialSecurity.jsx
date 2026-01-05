// src/pages/services/SocialSecurity.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const socialSecurityFeatures = [
  { title: "PF Compliance", description: "Automated Provident Fund calculations, deposits, and reporting.", icon: "🏦" },
  { title: "ESI Compliance", description: "Ensure timely ESI contributions and statutory filings.", icon: "🩺" },
  { title: "Employee Benefits", description: "Manage gratuity, leave encashment, and other statutory benefits.", icon: "🎁" },
  { title: "Centralized Dashboard", description: "Monitor all social security compliance in one unified view.", icon: "📊" },
  { title: "Compliance Alerts", description: "Automated reminders for PF, ESI, and other deadlines.", icon: "⏰" },
  { title: "Audit Readiness", description: "Maintain inspection-ready records for regulatory audits.", icon: "✅" },
  { title: "Document Management", description: "Organize and maintain employee compliance documents efficiently.", icon: "📄" },
];

const SocialSecurity = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "#2a1f3d", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Social Security Compliance</h1>
          <p className="mb-4 text-light opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            We handle all social security compliance requirements such as PF, ESI, and other employee benefits.
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
          {socialSecurityFeatures.map((feature, idx) => (
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

export default SocialSecurity;
