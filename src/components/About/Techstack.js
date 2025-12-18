import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
// import Node from "../../Assets/TechIcons/Node.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postgresql from "../../Assets/TechIcons/SQL.svg"; // placeholder for PostgreSQL
// import ReactIcon from "../../Assets/TechIcons/React.svg";
// import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
// import Docker from "../../Assets/TechIcons/Docker.svg";
// import Kubernetes from "../../Assets/TechIcons/Kubernates.svg";
import CloudSQL from "../../Assets/TechIcons/cloudsql.png"; // temporary placeholder
import AppEngine from "../../Assets/TechIcons/SQL.svg"; // temporary placeholder
import CloudRun from "../../Assets/TechIcons/SQL.svg"; // temporary placeholder
import CloudFunctions from "../../Assets/TechIcons/SQL.svg"; // temporary placeholder
import CloudStorage from "../../Assets/TechIcons/SQL.svg"; // temporary placeholder
import CloudBuild from "../../Assets/TechIcons/SQL.svg"; // temporary placeholder

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {/* Programming Languages */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={C} alt="C++" />
          <div className="tech-icons-text">C++</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Java} alt="Java" />
          <div className="tech-icons-text">Java</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Javascript} alt="Javascript" />
          <div className="tech-icons-text">C</div>
        </Col>
        {/* <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Node} alt="Node.js" />
          <div className="tech-icons-text">Node.js</div>
        </Col> */}

        {/* Databases */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={SQL} alt="MySQL" />
          <div className="tech-icons-text">MySQL</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Postgresql} alt="PostgreSQL" />
          <div className="tech-icons-text">PostgreSQL</div>
        </Col>

        {/* Frontend
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="React.js" />
          <div className="tech-icons-text">React.js</div>
        </Col> */}

        {/* Version Control */}
        {/* <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Git} alt="Git" />
          <div className="tech-icons-text">Git</div>
        </Col> */}

        {/* GCP Services (temporary placeholders) */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={CloudSQL} alt="Cloud SQL" />
          <div className="tech-icons-text">Cloud SQL</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={AppEngine} alt="App Engine" />
          <div className="tech-icons-text">App Engine</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={CloudRun} alt="Cloud Run" />
          <div className="tech-icons-text">Cloud Run</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={CloudFunctions} alt="Cloud Functions" />
          <div className="tech-icons-text">Cloud Functions</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={CloudStorage} alt="Cloud Storage" />
          <div className="tech-icons-text">Cloud Storage</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={CloudBuild} alt="Cloud Build" />
          <div className="tech-icons-text">Cloud Build</div>
        </Col>

        {/* DevOps */}
        {/* <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Docker} alt="Docker" />
          <div className="tech-icons-text">Docker</div>
        </Col> */}
        {/* <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Kubernetes} alt="Kubernetes" />
          <div className="tech-icons-text">Kubernetes</div>
        </Col> */}

        {/* Tools */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Firebase} alt="Firebase" />
          <div className="tech-icons-text">Firebase</div>
        </Col>
      </Row>

      {/* Optional inline CSS for smaller screens */}
      <style jsx>{`
        .tech-icons img {
          width: 60px;
          height: 60px;
          transition: all 0.3s ease;
        }
        .tech-icons-text {
          font-size: 14px;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .tech-icons img {
            width: 50px;
            height: 50px;
          }
          .tech-icons-text {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .tech-icons img {
            width: 40px;
            height: 40px;
          }
          .tech-icons-text {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}

export default Techstack;
