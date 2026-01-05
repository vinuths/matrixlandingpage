// src/pages/services/InspectionReadiness.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const readinessFeatures = [
  {
    title: "Audit & Inspection Readiness",
    description: "Always prepared with accurate, inspection-ready records",
    icon: "⚖️",
  },
  {
    title: "Document Verification",
    description: "Ensure all statutory and compliance documents are complete and accurate",
    icon: "✅",
  },
  {
    title: "Gap Analysis",
    description: "Identify compliance gaps and take corrective actions proactively",
    icon: "📋",
  },
  {
    title: "Internal Audits",
    description: "Conduct periodic audits to maintain readiness for inspections",
    icon: "📚",
  },
  {
    title: "Employee Preparedness",
    description: "Train employees on processes, records, and audit protocols",
    icon: "👥",
  },
  {
    title: "Regulatory Updates",
    description: "Stay updated with changes in labour laws and regulations",
    icon: "🔄",
  },
  {
    title: "Risk Mitigation",
    description: "Reduce non-compliance risks and avoid penalties",
    icon: "✔️",
  },
  {
    title: "Reporting & Dashboards",
    description: "Real-time dashboards for management insights on compliance readiness",
    icon: "📊",
  },
  {
    title: "Corrective Action Tracking",
    description: "Track and implement all audit observations effectively",
    icon: "🔍",
  },
  {
    title: "Continuous Improvement",
    description: "Establish a culture of audit readiness and compliance excellence",
    icon: "💡",
  },
];

const InspectionReadiness = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#1b1429", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Container fluid className="py-5" style={{ background: "#2a1f3d", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">Audit & Inspection Readiness</h1>
          <p className="mb-4 text-light opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Always prepared with accurate, inspection-ready records
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
          {readinessFeatures.map((feature, idx) => (
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

export default InspectionReadiness;
