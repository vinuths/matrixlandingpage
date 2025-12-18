// import React from "react";
import { Col, Row } from "react-bootstrap";
// import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={chrome} alt="Chrome" className="tech-icon-images" />
          <div className="tech-icons-text">vector salesfor</div>
        </Col>

        {/* Browser */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={chrome} alt="Chrome" className="tech-icon-images" />
          <div className="tech-icons-text">Google Chrome</div>
        </Col>

        {/* IDEs */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={vsCode} alt="VS Code" className="tech-icon-images" />
          <div className="tech-icons-text">VS Code</div>
        </Col>

        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
          <div className="tech-icons-text">IntelliJ</div>
        </Col>

        {/* Add more tools later */}
        {/* Example placeholders for GCP/Cloud tools */}
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={vsCode} alt="Cloud Shell" className="tech-icon-images" />
          <div className="tech-icons-text">Cloud Shell</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="tech-icons">
          <img src={vsCode} alt="Cloud Console" className="tech-icon-images" />
          <div className="tech-icons-text">Cloud Console</div>
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

export default Toolstack;
