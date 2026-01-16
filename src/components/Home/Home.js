import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/dashboard1.png";
import { Link } from "react-router-dom";
import Partners from "../Partners/Partners";
import HomeAchievements from "./HomeAchievements";
import Logo1 from "../../Assets/Logo1.png"; // Adjust relative path from the component file
import serviceimage1 from "../../Assets/20944573.jpg"; // Adjust relative path from the component file
import serviceimage2 from "../../Assets/19728.jpg"; // Adjust relative path from the component file
import serviceimage3 from "../../Assets/19197135.jpg"; // Adjust relative path from the component file
import ComplianceChatbot from "../ComplianceChatbot";
import Carousel from "react-bootstrap/Carousel";
// import Cloud from "../../Assets/favicon.png"; 

const heroTexts = [
  {
    title: "Compliance Made Easy.",
    text: "Real-Time Insights",
    desc:
      "Manage audits, track compliance, and generate real-time reports with a powerful centralized compliance platform",
  },
 
    // ✅ NEW SLIDE 4
  {
    title: "Automate Statutory Compliance",
    text: "Never Miss a Deadline",
    desc:
      "Automated alerts, reminders, and filings ensure your organization stays compliant across all states and acts",
  },
   
  // ✅ NEW SLIDE 5
  {
    title: "One Platform,Total Control",
    text: "Multi-State Compliance",
    desc:
      "Manage complex multi-state and multi-location compliance requirements with centralized governance and reporting",
  },

  // ✅ NEW SLIDE 6
 {
  title: "Built for Indian Labour Law Compliance",
  text: "Acts. Rules. Registers.",
  desc:
    "Manage PF, ESI, CLRA, Factory Act, payroll, and multi-state compliances through a single statutory governance platform.",
},

];



const scrollServices = [
  {
    title: "Establishment Compliances",
    desc: "Manage all establishment-level statutory compliances in one place.",
    image: serviceimage1,
    path: "/services/compliance-mgmt",
  },
  {
    title: "Payroll Administration",
    desc: "Automated payroll with complete statutory compliance.",
    image: serviceimage2,
    path: "/services/payroll",
  },
  {
    title: "Factory Compliances",
    desc: "End-to-end factory act compliance and license management.",
    image: serviceimage3,
    path: "/services/factory-license",
  },
  {
    title: "CLRA Compliances",
    desc: "Complete contract labour compliance tracking.",
    image: serviceimage1,
    path: "/services/clra",
  },
  {
    title: "Audit Management",
    desc: "Plan, execute, and close audits efficiently.",
    image: serviceimage2,
    path: "/services/audits",
  },
  {
    title: "Register Management",
    desc: "Digital statutory registers with auto updates.",
    image: serviceimage3,
    path: "/services/hr-shared-services",
  },
  {
    title: "Statutory Returns & Filings",
    desc: "Never miss a filing deadline again.",
    image: serviceimage1,
    path: "/services/statutory-returns",
  },
  {
    title: "Social Security Compliance",
    desc: "PF, ESI & PT compliance made simple.",
    image: serviceimage2,
    path: "/services/social-security",
  },
  {
    title: "Contractor & Vendor Compliance",
    desc: "Vendor onboarding & compliance scorecards.",
    image: serviceimage3,
    path: "/services/vendor-compliance",
  },
  {
    title: "Multi-State Compliance",
    desc: "State-wise compliance with central monitoring.",
    image: serviceimage1,
    path: "/services/multi-state-compliance",
  },
  {
    title: "Compliance Tracking & Alerts",
    desc: "Real-time alerts & escalation workflows.",
    image: serviceimage2,
    path: "/services/compliance-tracking",
  },
  {
    title: "Governance & Risk Management",
    desc: "Risk heatmaps & executive dashboards.",
    image: serviceimage3,
    path: "/services/risk-management",
  },
];

function Home() {
  const [servicePage, setServicePage] = useState(0);
  const scrollableServices = scrollServices.slice(0, 8); // Only first 8 for scrolling
  const totalPages = Math.ceil(scrollableServices.length / 2);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const services = document.getElementById("asana-services");
  const hero = document.getElementById("hero-section");
  const nextSection = document.getElementById("last-services");

  if (!services || !hero || !nextSection) return;

  let isScrolling = false;
  const tolerance = 5; // px tolerance for scrollTop

  const onWheel = (e) => {
    if (isScrolling) return;
    isScrolling = true;

    const scrollTop = services.scrollTop;
    const clientHeight = services.clientHeight;
    const scrollHeight = services.scrollHeight;

    const pageHeight = clientHeight; // each internal “page” = 1 viewport
    const currentPage = Math.floor(scrollTop / pageHeight); 
    const totalPages = Math.ceil(scrollHeight / pageHeight) - 1;

    // ⬇️ DOWN → Additional Features
    if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - tolerance) {
      window.requestAnimationFrame(() => {
        nextSection.scrollIntoView({ behavior: "smooth" });
        isScrolling = false;
      });
      return;
    }

    // ⬆️ UP → Hero section
    if (e.deltaY < 0 && scrollTop <= tolerance) {
      window.requestAnimationFrame(() => {
        hero.scrollIntoView({ behavior: "smooth" });
        isScrolling = false;
      });
      return;
    }

    // reset scrolling flag if not at edge
    setTimeout(() => (isScrolling = false), 50);
  };

  services.addEventListener("wheel", onWheel, { passive: true });
  return () => services.removeEventListener("wheel", onWheel);
}, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }, []);
  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const currentHero = heroTexts[currentIndex];

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffffff",
        }}
      > 
        <div
          id="preloader"
          style={{
            width: "150px",
            height: "150px",
            backgroundImage: `url(${Logo1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            animation: "spinScale 1.5s linear infinite",
          }}
        ></div>

        <style>{`
          @keyframes spinScale {
            0% { transform: rotate(0deg) scale(0.9); opacity: 0.7; }
            50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
            100% { transform: rotate(360deg) scale(0.9); opacity: 0.7; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <section style={{ position: "relative" }}>
      {/* <Particle /> */}
      {/* Particle background removed to match HTML white design */}

      {/* ========== HERO ========== */}
      <Container
       id="hero-section"  
        fluid
        className="home-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "90px",
          position: "relative",
          zIndex: 2,
          backgroundColor: "#ffffff", // White background
          color: "#1f2937", // Dark text
        }}
      >
        <Container>
          <Row className="align-items-center">
<Col md={7}>
  {/* MATRIX HR – BRAND LINE (BIGGEST) */}
  <h1
    style={{
      fontSize: "3.2rem",
      fontWeight: 900,
      letterSpacing: "3px",
      color: "#2F6DB5",
      marginBottom: "18px",
      textTransform: "uppercase",
    }}
  >
    Matrix HR Technologies
  </h1>
{/* ===== BRAND LOGO HERO TEXT (EXACT LOGO STYLE) =====
<div
  style={{
    position: "relative",
    display: "inline-block",
    marginBottom: "32px",
  }}
>
  CLOUD – positioned above end of MATRIX
  <img
    src={Cloud}
    alt="Cloud"
    style={{
      width: "58px",
      position: "absolute",
      top: "-42px",
      left: "138px",   // 👈 IMPORTANT: aligns above Matrix end
      pointerEvents: "none",
    }}
  />

  Matrix HR
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
    }}
  >
    <span
      style={{
        fontSize: "3.2rem",
        fontWeight: 900,
        color: "#366CB5",
        lineHeight: "1",
        marginRight: "8px",
      }}
    >
      Matrix
    </span>

    <span
      style={{
        fontSize: "3.2rem",
        fontWeight: 900,
        color: "#CD6032",
        lineHeight: "1",
      }}
    >
      HR
    </span>
  </div>

  Technologies
  <div
    style={{
      fontSize: "1.05rem",
      letterSpacing: "6px",
      fontWeight: 700,
      color: "#7FAED6",
      marginTop: "6px",
      marginLeft: "4px",
    }}
  >
    TECHNOLOGIES
  </div>
</div> */}


  {/* TITLE */}
  <h2 
    className="hero-title"
    style={{
      fontSize: "2.3rem",
      lineHeight: "1.2",
      fontWeight: 800,
      marginBottom: "12px",
    }}
  >
    {currentHero.title}
  </h2>

  {/* TEXT */}
  <h3
    className="hero-subtitle"
    style={{
      fontSize: "1.4rem",
      color: "#2F6DB5",
      marginBottom: "18px",
      fontWeight: 600,
    }}
  >
{currentHero.text}
  </h3>

  {/* DESCRIPTION */}
  <p
    className="hero-desc"
    style={{
      fontSize: "1rem",
      maxWidth: "700px",
      color: "#4b5563",
      lineHeight: "1.7",
    }}
  >
    {currentHero.desc}
  </p>

  <div className="mt-4 d-flex gap-3 flex-wrap">
    <Button
      as={Link}
      to="/contact"
      className="hero-btn-primary"
      variant="none"
      style={{ fontSize: "0.9rem" }}
    >
      Get Started Free
    </Button>
 
    <Button    
      as={Link}
      to="/demo"
      className="hero-btn-outline"
      variant="none"
      style={{ fontSize: "0.9rem" }}
    >
      Watch Demo
    </Button>
  </div>
</Col>


            <Col md={5} className="text-center">
              <img
                src={homeLogo}
                alt="hero"
                className="hero-image img-fluid"
                style={{
                  maxHeight: "750px", // slightly bigger
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                  animation: "float 4s ease-in-out infinite",
                }}
              />
            </Col>
          </Row>
        </Container>
        
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            width: "100%",
            textAlign: "center",
            opacity: 0.6,
          }}
        ></div>

        {/* HERO ANIMATIONS */}
        <style>{`
          .hero-title {
            font-weight: 900;
            animation: slideFade 0.8s ease forwards;
          }
          .hero-subtitle {
            font-weight: 700;
            animation: slideFade 1.2s ease forwards;
          }
          .hero-desc {
            animation: slideFade 1.6s ease forwards;
          }
          .hero-btn-primary {
            background: #2F6DB5;
            border: 2px solid #2F6DB5;
            color: #fff;
            padding: 16px 38px;
            border-radius: 30px;
            font-weight: 600;
            animation: slideFade 2.4s ease forwards;
            transition: all 0.3s;
          }
          .hero-btn-primary:hover {
            transform: scale(1.05);
          }
          .hero-btn-outline {
            background: transparent;
            border: 2px solid #2F6DB5;
            color: #2F6DB5;
            padding: 16px 38px;
            border-radius: 30px;
            font-weight: 600;
            animation: slideFade 2.6s ease forwards;
            transition: all 0.3s;
          }
          .hero-btn-outline:hover {
            background: #2F6DB5;
            color: #fff;
            transform: scale(1.05);
          }
          .hero-image {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes slideFade {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
      </Container>

      {/* ========== SERVICES (FULL-PAGE SCROLL STYLE) ========== */}
<section
  id="asana-services"
  style={{
    height: "100vh",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
    background: "#013789",
  }}
>

  {/* SECTION HEADING */}
  <div
    style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "#013789",
      padding: "40px 0 20px",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "2.8rem",
        fontWeight: 700,
        marginBottom: "10px",
      }}
    >
      Our Services
    </h2>
 
  </div>
               
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              scrollSnapAlign: "start",
     
            }}
          >
            {scrollableServices
              .slice(pageIndex * 2, pageIndex * 2 + 2)
              .map((service, i) => (
             <div
  key={i}
  className="service-card"
  style={{
    width: "35%",            // reduced from 45%
    background: "#fff",
    borderRadius: "20px",    // slightly smaller rounding
    padding: "25px",         // reduced from 40px
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img
    src={service.image}
    alt={service.title}
    className="img-fluid mb-3"
    style={{
      borderRadius: "15px",
      maxHeight: "180px",  // reduced from 250px
      objectFit: "cover",
    }}
  />
  <h3
    style={{
      fontSize: "1.6rem",   // reduced from 2rem
      fontWeight: 700,
      textAlign: "center",
    }}
  >
    {service.title}
  </h3>
  <p
    style={{
      fontSize: "1rem",    // slightly smaller
      color: "#4b5563",
      textAlign: "center",
    }}
  >
    {service.desc}
  </p>
  <Button
    as={Link}
    to={service.path}
    className="hero-btn-primary mt-2"
    variant="none"
  >
    Learn More
  </Button>
</div>

              ))}
          </div>
        ))}
        <style>{`
          #asana-services::-webkit-scrollbar {
            width: 6px;
          }
          #asana-services::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
          }
          .service-card {
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-10px);
          }
        `}</style>
      </section>

      {/* ========== LAST 4 SERVICES GRID ========== */}
      <section
  id="last-services"
  style={{
    padding: "80px 0",      // ✅ remove left/right padding
    backgroundColor: "#F3F4F6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    width: "100%",
  }}
>

        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            color: "#1F2937",
            marginBottom: "40px",
          }}
        >
          Additional Features
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {scrollServices.slice(8).map((service, i) => (
      <div
  key={i}
  className="service-card"
  style={{
    flex: "1 1 200px",         // reduced from 250px
    maxWidth: "340px",         // reduced from 280px
    background: "#fff",
    borderRadius: "20px",      // slightly smaller
    padding: "10px",           // reduced from 30px
    boxShadow: "0 15px 30px rgba(0,0,0,0.12)", // slightly smaller shadow
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  }}
>
  <img
    src={service.image}
    alt={service.title}
    className="img-fluid mb-3"
    style={{
      borderRadius: "15px",
      maxHeight: "150px",  // reduced from 180px
      objectFit: "cover",
    }}
  />
  <h3
    style={{
      fontSize: "1.5rem",  // reduced from 1.8rem
      fontWeight: 700,
      marginBottom: "12px",
    }}
  >
    {service.title}
  </h3>
  <p
    style={{
      fontSize: "0.95rem",  // slightly smaller
      color: "#4B5563",
      marginBottom: "15px",
    }}
  >
    {service.desc}
  </p>
  <Button
    as={Link}
    to={service.path}
    className="hero-btn-primary"
    variant="none"
  >
    Learn More
  </Button>
</div>


          ))}
        </div>

        <style>{`
          .service-card:hover {
            transform: translateY(-10px);
          }
        `}</style>
      </section>

      {/* ========== FOOTER CTA ========== 
      <Container className="py-5 text-center" style={{ position: "relative", zIndex: 2 }}>
        <h3 className="fw-bold mb-3 text-white">
          Ready to work with us?
        </h3> */}

      {/* ✅ FOOTER CONTACT BUTTON */}
      {/* <Button variant="primary" as={Link} to="/contact">
        Contact Us
      </Button>
      </Container> */}

      <HomeAchievements />
      <Partners />
      <ComplianceChatbot />
    </section>
  );
}

export default Home;
