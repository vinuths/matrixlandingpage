import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/home-main.svg";
import { Link } from "react-router-dom";
import Partners from "../Partners/Partners";
import HomeAchievements from "./HomeAchievements";
import Logo1 from "../../Assets/Logo1.png"; // Adjust relative path from the component file
import serviceimage1 from "../../Assets/20944573.jpg"; // Adjust relative path from the component file
import serviceimage2 from "../../Assets/19728.jpg"; // Adjust relative path from the component file
import serviceimage3 from "../../Assets/19197135.jpg"; // Adjust relative path from the component file

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

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Rotate hero text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
useEffect(() => {
  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";
}, []);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  const currentHero = heroTexts[currentIndex];

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0c0513", // dark background
        }}
      >
        <div
          id="preloader"
          style={{
            width: "150px",
            height: "150px",
            margin: "auto",
            backgroundImage: `url(${Logo1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            animation: "spinScale 1.5s linear infinite",
          }}
        ></div>

        <style>{`
          @keyframes spinScale {
            0% { transform: rotate(0deg) scale(0.9); opacity: 0.7; }
            50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
            100% { transform: rotate(360deg) scale(0.9); opacity: 0.7; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <section style={{ position: "relative" }}>
      <Particle />

      {/* ========== HERO ========== */}
      <Container
        fluid
        className="home-section text-light py-5"
        style={{ position: "relative", zIndex: 2, paddingTop: "140px", background: "transparent" }}
      >
        <Container>
          <Row className="align-items-center" style={{ marginTop: "20px" }}>
            <Col md={7}>
              <h1
                className="mb-3 fw-bold text-white"
                style={{
                  fontSize: "2.2rem",
                  lineHeight: "1.3",
                  maxWidth: "650px",
                }}
              >
                {currentHero.title}
              </h1>

              <p className="text-light opacity-75">{currentHero.text}</p>

              <Button variant="primary" as={Link} to="/contact" className="me-3">
                Get Started
              </Button>

              {/* ✅ HERO CONTACT BUTTON */}
              {/* <Button variant="outline-light" as={Link} to="/contact">
                Contact Us
              </Button> */}
            </Col>

            <Col md={5} className="text-center">
              <img src={homeLogo} alt="hero" className="img-fluid" style={{ maxHeight: "320px" }} />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ========== SERVICES (REDESIGNED) ========== */}
      <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="text-center fw-bold mb-5 text-white">Our Services</h2>

        {/* ===== BLOCK 1 : LEFT BUTTONS | RIGHT IMAGE ===== */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            {[
              { title: "Establishment Compliances", path: "/services/compliance-mgmt" },
              { title: "Payroll Administration", path: "/services/payroll" },
              { title: "Factory Compliances", path: "/services/factory-license" },
              { title: "CLRA Compliances", path: "/services/clra" },
            ].map((service, i) => (
              <Button
                key={i}
                variant="light"
                as={Link}
                to={service.path}
                className="w-100 mb-3 fw-bold"
                style={{ padding: "16px", borderRadius: "12px" }}
              >
                {service.title}
              </Button>
            ))}
          </Col>

          <Col md={6} className="text-center">
            <img
              src={serviceimage1}
              alt="services"
              className="img-fluid"
              style={{ maxHeight: "260px" }}
            />
          </Col>
        </Row>

        {/* ===== BLOCK 2 : LEFT IMAGE | RIGHT BUTTONS ===== */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center">
            <img
              src={serviceimage2}
              alt="services"
              className="img-fluid"
              style={{ maxHeight: "260px" }}
            />
          </Col>

          <Col md={6}>
            {[
              { title: "Audit Management", path: "/services/audits" },
              { title: "Register Management", path: "/services/hr-shared-services" },
              { title: "Statutory Returns & Filings", path: "/services/statutory-returns" },
              { title: "Social Security Compliance", path: "/services/social-security" },
            ].map((service, i) => (
              <Button
                key={i}
                variant="light"
                as={Link}
                to={service.path}
                className="w-100 mb-3 fw-bold"
                style={{ padding: "16px", borderRadius: "12px" }}
              >
                {service.title}
              </Button>
            ))}
          </Col>
        </Row>

        {/* ===== BLOCK 3 : LEFT BUTTONS | RIGHT IMAGE ===== */}
        <Row className="align-items-center">
          <Col md={6}>
            {[
              { title: "Contractor & Vendor Compliance", path: "/services/vendor-compliance" },
              // { title: "Audit & Inspection Readiness", path: "/services/inspection-readiness" },
              { title: "Multi-State Compliance", path: "/services/multi-state-compliance" },
              { title: "Compliance Tracking & Alerts", path: "/services/compliance-tracking" },
              { title: "Governance & Risk Management", path: "/services/risk-management" },
            ].map((service, i) => (
              <Button
                key={i}
                variant="light"
                as={Link}
                to={service.path}
                className="w-100 mb-3 fw-bold"
                style={{ padding: "16px", borderRadius: "12px" }}
              >
                {service.title}
              </Button>
            ))}
          </Col>

          <Col md={6} className="text-center">
            <img
              src={serviceimage3}
              alt="services"
              className="img-fluid"
              style={{ maxHeight: "260px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* ========== FOOTER CTA ========== 
      <Container className="py-5 text-center" style={{ position: "relative", zIndex: 2 }}>
        <h3 className="fw-bold mb-3 text-white">
          Ready to work with us?
        </h3> */}

      {/* ✅ FOOTER CONTACT BUTTON */}
      {/* <Button variant="primary" as={Link} to="/contact">
        Contact Us
      </Button>
      </Container> */}

      <HomeAchievements />
      <Partners />
    </section>
  );
}

export default Home;
