import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Techstack from "../About/Techstack";
// import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col xs={12} md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAMRATHA SRINGESHWARA</strong>
              </h1>

              <div style={{ padding: "20px 0", textAlign: "left" }}>
                <Type />
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    color: "#4b5563",
                    wordBreak: "break-word",
                  }}
                >
                  Bangalore, India | 8861887794 | namrathas1207@gmail.com |{" "}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="purple"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </Col>

            <Col xs={12} md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px", width: "100%", objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col xs={12} className="home-about-social text-center">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links d-flex justify-content-center flex-wrap">
              {/* GitHub - real */}
              <li className="social-icons mx-2 my-1">
                <a
                  href="https://github.com/namrathas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* Twitter - generic */}
              <li className="social-icons mx-2 my-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              {/* LinkedIn - generic */}
              <li className="social-icons mx-2 my-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram - generic */}
              <li className="social-icons mx-2 my-1">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @media (max-width: 768px) {
          .home-header {
            text-align: center;
            padding: 20px 0;
          }
          .home-about-social {
            padding: 20px 0;
          }
          .home-about-social-links {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
