import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/home-main.svg";
import { Link } from "react-router-dom";

const heroTexts = [
  {
    title: "Matrix HR Technologies  Turning Compliance Into Control",
    text: "Unified platform that gives HR leaders visibility, accuracy, and assurance across statutory obligations",
  },
  {
    title: "Matrix HR Technologies  Compliance, Without Compromise",
    text: "Eliminate errors, delays, and uncertainty with end-to-end compliance management",
  },
  {
    title: "Matrix HR Technologies  Compliance You Can Rely On",
    text: "Ensure accuracy, accountability, and assurance across every compliance process, accuracy, and assurance across statutory obligations",
  },
];

const achievements = [
  { value: "50,000+", label: "Compliance Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "1,000+", label: "Clients Served" },
  { value: "100+", label: "Expert Consultants" },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate hero text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroTexts[currentIndex];

  return (
    <section style={{ position: "relative" }}>
      <Particle />

      {/* ========== HERO ========== */}
      <Container
        fluid
        className="home-section text-light py-5"
        style={{ position: "relative", zIndex: 2 }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="mb-3 fw-bold text-white">
                {currentHero.title}
              </h1>
              <p className="text-light opacity-75">{currentHero.text}</p>

              <Button variant="primary"  as={Link} to="/contact" className="me-3">
                Get Started
              </Button>

              {/* ✅ HERO CONTACT BUTTON */}
              {/* <Button variant="outline-light" as={Link} to="/contact">
                Contact Us
              </Button> */}
            </Col>

            <Col md={5} className="text-center">
              <img
                src={homeLogo}
                alt="hero"
                className="img-fluid"
                style={{ maxHeight: "320px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ========== SERVICES ========== */}
      <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="text-center fw-bold mb-5 text-white">Our Services</h2>

        <Row className="gy-4">
          {[
            { title: "Establishment Compliances", path: "/services/compliance-mgmt" },
            { title: "Payroll Administration", path: "/services/payroll" },
            { title: "Factory Compliances", path: "/services/factory-license" },
            { title: "CLRA Compliances", path: "/services/clra" },
            { title: "Audit Management", path: "/services/audits" },
            { title: "Register Management", path: "/services/hr-shared-services" },
            { title: "Statutory Returns & Filings", path: "/services/statutory-returns" },
            { title: "Social Security Compliance", path: "/services/social-security" },
            { title: "Contractor & Vendor Compliance", path: "/services/vendor-compliance" },
            { title: "Audit & Inspection Readiness", path: "/services/inspection-readiness" },
            { title: "Multi-State Compliance", path: "/services/multi-state-compliance" },
            { title: "Compliance Tracking & Alerts", path: "/services/compliance-tracking" },
            { title: "Governance & Risk Management", path: "/services/risk-management" },
          ].map((service, i) => (
            <Col md={6} key={i}>
              <div
                style={{
                  padding: "24px",
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <h5 className="fw-bold mb-0 text-dark">{service.title}</h5>

                <Button variant="primary" as={Link} to={service.path}>
                  View
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ========== ACHIEVEMENTS ========== */}
      <Container
        fluid
        className="py-5"
        style={{
          background: "rgba(27,20,41,0.95)",
          color: "#ffffff",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container>
          <h2 className="text-center fw-bold mb-4">Our Achievements</h2>
          <Row>
            {achievements.map((item, i) => (
              <Col md={3} sm={6} key={i} className="text-center mb-3">
                <h3 className="fw-bold">{item.value}</h3>
                <p>{item.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* ========== FOOTER CTA ==========
      <Container
        className="py-5 text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h3 className="fw-bold mb-3 text-white">
          Ready to work with us?
        </h3> */}

        {/* ✅ FOOTER CONTACT BUTTON */}
        {/* <Button
          variant="primary"
          as={Link}
          to="/contact"
        >
          Contact Us
        </Button>
      </Container> */}
    </section>
  );
}

export default Home;
