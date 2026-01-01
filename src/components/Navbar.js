import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../Assets/Logo11.png"; // adjust relative path based on Navbar.js location
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
https://github.com/vinuths/matrixlandingpage.git

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#a259ff" : "#ffffff",
    fontWeight: location.pathname === path ? "600" : "500",
    margin: "0 12px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    whiteSpace: "nowrap",
  });

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      collapseOnSelect
      style={{
        background: navColour
          ? "rgba(27,20,41,0.95)"
          : "rgba(27,20,41,0.7)",
        backdropFilter: "blur(10px)",
        transition: "0.4s ease",
        boxShadow: navColour ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
        padding: "10px 0",
      }}
    >
      <Container>
        {/* ✅ LOGO ON LEFT */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Matrix HR Technologies"
            style={{ height: "40px", cursor: "pointer" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => updateExpanded(expand ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          style={{ border: "none", outline: "none" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                style={linkStyle("/")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                style={linkStyle("/about")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                style={linkStyle("/project")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                style={linkStyle("/resume")}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item> */}

            {/* ✅ SERVICES DROPDOWN */}
            <NavDropdown
              title="Services"
              id="services-dropdown"
              style={{
                color: location.pathname.startsWith("/services")
                  ? "#a259ff"
                  : "#ffffff",
                fontWeight: location.pathname.startsWith("/services")
                  ? "600"
                  : "500",
              }}
            >
              <NavDropdown.Item
                as={Link}
                to="/services/compliance-mgmt"
                onClick={() => updateExpanded(false)}
              >
                Establishment Compliances
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/payroll"
                onClick={() => updateExpanded(false)}
              >
                Payroll Administration
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/factory-license"
                onClick={() => updateExpanded(false)}
              >
                Factory Compliances
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/clra"
                onClick={() => updateExpanded(false)}
              >
                CLRA Compliances
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/audits"
                onClick={() => updateExpanded(false)}
              >
                Audit Management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/hr-shared-services"
                onClick={() => updateExpanded(false)}
              >
                Register Management
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/statutory-returns"
                onClick={() => updateExpanded(false)}
              >
                Statutory Returns & Filings
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/social-security"
                onClick={() => updateExpanded(false)}
              >
                Social Security Compliance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/vendor-compliance"
                onClick={() => updateExpanded(false)}
              >
                Contractor & Vendor Compliance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/inspection-readiness"
                onClick={() => updateExpanded(false)}
              >
                Audit & Inspection Readiness
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/multi-state-compliance"
                onClick={() => updateExpanded(false)}
              >
                Multi-State Compliance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/compliance-tracking"
                onClick={() => updateExpanded(false)}
              >
                Compliance Tracking & Alerts
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/risk-management"
                onClick={() => updateExpanded(false)}
              >
                Governance & Risk Management
              </NavDropdown.Item>
            </NavDropdown>

            {/* ✅ CONTACT US ADDED */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                style={linkStyle("/contact")}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMail /> Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
