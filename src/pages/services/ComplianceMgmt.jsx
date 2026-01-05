// src/pages/services/ComplianceMgmt.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Replace this array with your actual content for Compliance Management
const complianceServices = [
  { title: "Establishment Registration", description: "Register your establishment under applicable laws.", icon: "🏢" },
  { title: "License Management", description: "Maintain and renew all statutory licenses.", icon: "📄" },
  { title: "Policy Implementation", description: "Implement HR and workplace policies as per law.", icon: "🛠️" },
  { title: "Record Maintenance", description: "Keep all compliance records updated and accurate.", icon: "📂" },
];

const benefits = [
  { title: "Avoid Penalties", description: "Ensure full legal compliance to avoid fines.", icon: "⚖️" },
  { title: "Operational Efficiency", description: "Streamline compliance processes for efficiency.", icon: "📈" },
  { title: "Peace of Mind", description: "Focus on your business while compliance is managed.", icon: "🧘‍♂️" },
];

const ComplianceMgmt = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "#2a1f3d", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Establishment Compliances</h1>
          <p className="mb-4 text-light opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            We manage all your establishment compliance requirements efficiently, ensuring your business adheres to statutory regulations.
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
          {complianceServices.map((service, idx) => (
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

export default ComplianceMgmt;
