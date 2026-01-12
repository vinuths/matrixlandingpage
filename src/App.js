import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";

// ✅ Login (ALL logic inside Login.jsx)
import Login from "./pages/services/Login/Login";

// ✅ Services Pages
import ComplianceMgmt from "./pages/services/ComplianceMgmt";
import Payroll from "./pages/services/Payroll";
import FactoryLicense from "./pages/services/FactoryLicense";
import CLRA from "./pages/services/CLRA";
import Audits from "./pages/services/Audits";
import HRSharedServices from "./pages/services/HRSharedServices";
import StatutoryReturns from "./pages/services/StatutoryReturns";
import SocialSecurity from "./pages/services/SocialSecurity";
import VendorCompliance from "./pages/services/VendorCompliance";
import InspectionReadiness from "./pages/services/InspectionReadiness";
import MultiStateCompliance from "./pages/services/MultiStateCompliance";
import ComplianceTracking from "./pages/services/ComplianceTracking";
import RiskManagement from "./pages/services/RiskManagement";
import Demo from "./pages/services/demo/Demo";
import ELibrary from "./pages/services/NewELibrary/View/ELibrary";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        <Routes>
          {/* ================= MAIN PAGES ================= */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />

          {/* ================= LOGIN & DASHBOARD (SAME COMPONENT) ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:role" element={<Login />} />

          {/* ================= SERVICES ================= */}
          <Route path="/services/compliance-mgmt" element={<ComplianceMgmt />} />
          <Route path="/services/payroll" element={<Payroll />} />
          <Route path="/services/factory-license" element={<FactoryLicense />} />
          <Route path="/services/clra" element={<CLRA />} />
          <Route path="/services/audits" element={<Audits />} />
          <Route path="/services/hr-shared-services" element={<HRSharedServices />} />
          <Route path="/services/statutory-returns" element={<StatutoryReturns />} />
          <Route path="/services/social-security" element={<SocialSecurity />} />
          <Route path="/services/vendor-compliance" element={<VendorCompliance />} />
          <Route path="/services/inspection-readiness" element={<InspectionReadiness />} />
          <Route path="/services/multi-state-compliance" element={<MultiStateCompliance />} />
          <Route path="/services/compliance-tracking" element={<ComplianceTracking />} />
          <Route path="/services/risk-management" element={<RiskManagement />} />
         
          {/* ================= FALLBACK ================= */}
          <Route path="*" element={<Navigate to="/" />} />
           <Route path="/demo" element={<Demo />} />
          
           {/* ===== ELIBRARY ===== */}
        <Route path="/elibrary" element={<ELibrary />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
