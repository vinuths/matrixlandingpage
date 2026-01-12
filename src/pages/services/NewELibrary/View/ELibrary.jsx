// src/pages/services/ELibrary.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const libraryItems = [
  { title: "Acts", icon: "📜" },
  { title: "Rules", icon: "📄" },
  { title: "Labour Forms", icon: "🧾" },
  { title: "National Holidays", icon: "📅" },
  { title: "Labour Welfare Fund", icon: "🏦" },
  { title: "Minimum Wages", icon: "💰" },
  { title: "Working Hours", icon: "⏰" },
  { title: "Professional Tax", icon: "🧾" },
  { title: "Compliance Q&A", icon: "❓" },
  { title: "Policy Templates", icon: "📂" },
  { title: "Legal Updates", icon: "📰" },
  { title: "General", icon: "📚" },
];

const ELibrary = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
      }}
    >
      {/* HERO SECTION */}
      <Container fluid className="py-5">
        <Container className="text-center py-5">
          <h1 className="fw-bold mb-3 text-white">E-Library</h1>
          <p
            className="mb-4"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#ffffff",
              opacity: 0.85,
            }}
          >
            Access all your HR compliance resources, templates, and training materials in one place.
          </p>

          {/* REQUEST ACCESS */}
          <Button
            variant="none"
            className="me-3 px-4 py-2"
            style={{
              backgroundColor: "#d27147",
              border: "1px solid #d27147",
              color: "#ffffff",
              fontWeight: "600",
            }}
            onClick={() => navigate("/contact")}
          >
            Request Access
          </Button>

          {/* BACK TO HOME – NOW ORANGE */}
          <Button
            variant="none"
            className="px-4 py-2"
            style={{
              backgroundColor: "#d27147",
              border: "1px solid #d27147",
              color: "#ffffff",
              fontWeight: "600",
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Container>
      </Container>

      {/* ELIBRARY ITEMS */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 text-white">
          Knowledge Hub
        </h2>
        <Row className="gy-4 justify-content-center">
          {libraryItems.map((item, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <Card
                className="text-center p-4 h-100 border-0 shadow"
                style={{
                   borderRadius: "16px",
                  background: "#ffffff",
                  color: "#013879",
                  transition: "0.3s",
                  cursor: "pointer",
                }}cursor children
                onClick={() => navigate("/contact")}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                  {item.icon}
                </div>
                <h5 className="fw-bold">{item.title}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* DISCLAIMER SCROLL */}
      <div
        style={{
          width: "100vw",
          height: "52px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #013879 0%, #CCEBFD 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          borderTop: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <p
          style={{
            whiteSpace: "nowrap",
            paddingLeft: "100%",
            animation: "scrollText 35s linear infinite",
            fontSize: "9.5px",
            color: "#ffffff",
            letterSpacing: "0.4px",
            margin: 0,
          }}
        >
          <strong>Disclaimer:</strong> The content published on this website is provided by{" "}
          <strong>Matrix HR Technologies Pvt. Ltd.</strong> for informational purposes only. All rights reserved.
        </p>
      </div>

      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
};

export default ELibrary;
