import React from "react";
import { Col, Row } from "react-bootstrap";

// Programming Languages
import C from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/c.png";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postgresql from "../../Assets/TechIcons/mysql.png"; // MySQL image as placeholder for PostgreSQL
import Firebase from "../../Assets/TechIcons/Firebase.svg";

// GCP / Cloud Services
import CloudSQL from "../../Assets/TechIcons/cloudsql.png";
import AppEngine from "../../Assets/TechIcons/app engine.png";
import CloudRun from "../../Assets/TechIcons/cloud run.jfif";
import CloudFunctions from "../../Assets/TechIcons/cloud function.jfif";
import CloudStorage from "../../Assets/TechIcons/cloud storage.jfif";
import CloudBuild from "../../Assets/TechIcons/cloud build.png";

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

        {/* Databases */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={SQL} alt="MySQL" />
          <div className="tech-icons-text">MySQL</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Postgresql} alt="PostgreSQL" />
          <div className="tech-icons-text">PostgreSQL</div>
        </Col>

        {/* GCP Services */}
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

        {/* Tools */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={Firebase} alt="Firebase" />
          <div className="tech-icons-text">Firebase</div>
        </Col>
      </Row>

      {/* Responsive Styles */}
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
