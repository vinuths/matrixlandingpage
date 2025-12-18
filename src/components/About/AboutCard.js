import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-paragraph">
            Hi! I’m <span className="purple">Namratha Sringeshwara</span> from <span className="purple">Bangalore, India</span>.
            <br />
            I work as a <span className="purple">Technical Solutions Specialist</span> at <span className="purple">Infosys Ltd</span>, supporting enterprise customers on <span className="purple">Google Cloud Platform (GCP)</span>.
            <br />
            I specialize in cloud infrastructure troubleshooting, database migration, IAM security, networking, and monitoring.
            <br /><br />
            Some highlights of my work include:
          </p>

          <ul className="about-list">
            <li className="about-activity">
              <ImPointRight className="about-icon" /> Resolved 450+ customer issues while maintaining 95%+ SLA compliance
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> Designed multi-region disaster recovery solutions
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> Implemented Cloud Monitoring and Logging to reduce incident resolution time by 35%
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> Optimized IAM roles and enforced least-privilege access
            </li>
          </ul>

          <p className="about-quote" style={{ color: "rgb(155 126 172)" }}>
            "Committed to improving system reliability and providing exceptional cloud support."
          </p>
          <footer className="blockquote-footer">Namratha Sringeshwara</footer>
        </blockquote>
      </Card.Body>

      {/* Inline CSS for mobile responsiveness */}
      <style jsx>{`
        .about-paragraph {
          text-align: justify;
        }
        .about-list {
          padding-left: 20px;
        }
        .about-activity {
          margin-bottom: 10px;
          font-size: 16px;
        }
        .about-icon {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .about-paragraph {
            text-align: left;
            font-size: 14px;
          }
          .about-activity {
            font-size: 14px;
          }
          .about-icon {
            font-size: 16px;
          }
          .about-list {
            padding-left: 15px;
          }
        }

        @media (max-width: 480px) {
          .about-paragraph {
            font-size: 13px;
          }
          .about-activity {
            font-size: 13px;
          }
          .about-icon {
            font-size: 14px;
          }
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;

