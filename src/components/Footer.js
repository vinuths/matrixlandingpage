import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container
      fluid
      className="footer"
      style={{
        padding: "30px 0 15px",
        position: "relative",
        zIndex: 10,
        pointerEvents: "auto",
      }}
    >
      <Row className="text-center text-md-left align-items-start">

        {/* LEFT */}
        <Col xs={12} md={3} className="mb-3">
          <h3 style={{ color: "#fff", marginBottom: "8px" }}>
            Matrix HR Technologies
          </h3>

          <p style={{ color: "#ccc", fontSize: "14px", marginBottom: "8px" }}>
            Complete compliance management solutions for your organization.
          </p>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", marginBottom: 0 }}>
            Email:{" "}
            <a
              href="mailto:info@matrixhrtech.com"
              style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}
            >
              binoy@matrixhrservices.com
            </a>
          </p>
        </Col>

        {/* SERVICES */}
        <Col xs={12} md={6} className="mb-3">
          <h4 style={{ color: "#fff", marginBottom: "15px" }}>
            Our Services
          </h4>

          <Row>
            <Col xs={6}>
              <FooterLink to="/services/compliance-mgmt" label="Establishment Compliances" />
              <FooterLink to="/services/payroll" label="Payroll Administration" />
              <FooterLink to="/services/factory-license" label="Factory Compliances" />
              <FooterLink to="/services/clra" label="CLRA Compliances" />
              <FooterLink to="/services/audits" label="Audit Management" />
              <FooterLink to="/services/hr-shared-services" label="Register Management" />
            </Col>

            <Col xs={6}>
              <FooterLink to="/services/statutory-returns" label="Statutory Returns" />
              <FooterLink to="/services/social-security" label="Social Security" />
              <FooterLink to="/services/vendor-compliance" label="Vendor Compliance" />
              <FooterLink to="/services/inspection-readiness" label="Inspection Readiness" />
              <FooterLink to="/services/multi-state-compliance" label="Multi-State Compliance" />
              <FooterLink to="/services/risk-management" label="Risk Management" />
            </Col>
          </Row>
        </Col>

        {/* SOCIAL */}
        <Col xs={12} md={3}>
          <h4 style={{ color: "#fff", marginBottom: "15px" }}>
            Connect
          </h4>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <SocialIcon href="https://x.com/MatrixHRService">
              <AiOutlineTwitter size={25} />
            </SocialIcon>
            <SocialIcon href="https://in.linkedin.com/company/matrix-hr-service">
              <FaLinkedinIn size={25} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/matrixhrtech/">
              <AiFillInstagram size={25} />
            </SocialIcon>
          </div>
        </Col>
      </Row>

      {/* COPYRIGHT BOTTOM */}
      <Row>
        <Col xs={12} className="text-center mt-3">
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
            © Matrix Compliance. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

/* ===== SMALL REUSABLE COMPONENTS ===== */
const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      display: "block",
      color: "rgba(255,255,255,0.75)",
      textDecoration: "none",
      marginBottom: "8px",
      fontSize: "14px",
    }}
    onMouseOver={(e) => (e.target.style.color = "#a259ff")}
    onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
  >
    {label}
  </Link>
);

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff" }}
  >
    {children}
  </a>
);

export default Footer;
