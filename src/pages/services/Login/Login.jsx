import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("matrix");

  // ✅ CENTRALIZED ROUTES
  const roleRoutes = {
    // matrix: "https://ce.matrixhrtech.com/",
    executive: "https://executive.matrixhrtech.com/",
    auditor: "https://auditor.matrixhrtech.com/",
    company: "https://client.matrixhrtech.com/",
  };

  const handleContinue = () => {
    const destination = roleRoutes[activeTab];

    if (destination.startsWith("http")) {
      window.location.href = destination;
    } else {
      navigate(destination);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #3b2a5a 0%, #1b1429 45%, #120c1e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
      }}
    >
      <Container style={{ maxWidth: "520px" }}>
        <Card
          style={{
            background: "linear-gradient(180deg, rgba(42,31,61,0.95), rgba(20,14,32,0.95))",
            borderRadius: "20px",
            border: "1px solid rgba(162,89,255,0.25)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.65)",
            color: "#fff",
            backdropFilter: "blur(12px)",
          }}
        >
          <Card.Body style={{ padding: "40px 35px" }}>
            {/* ===== Title ===== */}
            <div className="text-center mb-4">
              <h3 style={{ fontWeight: 700, letterSpacing: "0.5px" }}>
                Login Portal
              </h3>
              <p style={{ color: "#b9a9d6", fontSize: "14px" }}>
                Select your role to continue
              </p>
            </div>

            {/* ===== Role Tabs ===== */}
            <Nav
              variant="pills"
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="justify-content-center gap-2"
            >
              {[
                // { key: "matrix", label: "Matrix Executive" },
                { key: "executive", label: "Executive" },
                { key: "auditor", label: "Auditor" },
                { key: "company", label: "Company" },
              ].map((role) => (
                <Nav.Item key={role.key}>
                  <Nav.Link
                    eventKey={role.key}
                    style={{
                      borderRadius: "20px",
                      padding: "8px 18px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color:
                        activeTab === role.key ? "#fff" : "#b9a9d6",
                      background:
                        activeTab === role.key
                          ? "linear-gradient(135deg, #a259ff, #7b3fe4)"
                          : "rgba(255,255,255,0.06)",
                      border:
                        activeTab === role.key
                          ? "none"
                          : "1px solid rgba(255,255,255,0.12)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {role.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            {/* ===== Selected Info ===== */}
            <div className="text-center mt-4">
              <p style={{ opacity: 0.75, fontSize: "14px" }}>
                Selected role:
                <span style={{ color: "#a259ff", fontWeight: 600 }}>
                  {" "}
                  {activeTab}
                </span>
              </p>

              {/* ===== Continue Button ===== */}
              <Button
                onClick={handleContinue}
                style={{
                  background:
                    "linear-gradient(135deg, #a259ff, #7b3fe4)",
                  border: "none",
                  borderRadius: "30px",
                  padding: "12px 38px",
                  fontSize: "15px",
                  fontWeight: 600,
                  boxShadow: "0 10px 25px rgba(162,89,255,0.45)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Continue →
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
