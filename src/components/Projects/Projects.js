import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder images (keep these for now)
import gcpProjectImg from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Highlighting my work as a Technical Analyst supporting enterprise customers on GCP.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={gcpProjectImg}
              isBlog={false}
              title="GCP Technical Analyst Project"
              description={
                <>
                  Configured and supported enterprise applications hosted on Google Cloud Platform (GCP). Key activities included:
                  <ul>
                    <li>Cloud Monitoring & Cloud Logging for system health and error tracking</li>
                    <li>Application Support & Issue Resolution (L2/L3)</li>
                    <li>Incident Management & Root Cause Analysis (RCA)</li>
                    <li>Technical Documentation & Standard Operating Procedures (SOPs)</li>
                    <li>Support Automation & Health Checks using scripts and monitoring tools</li>
                    <li>Customer Issue Analysis & Reporting ensuring SLA compliance</li>
                  </ul>
                  This project demonstrates expertise in GCP services, troubleshooting, cloud operations, and customer support.
                </>
              }
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
