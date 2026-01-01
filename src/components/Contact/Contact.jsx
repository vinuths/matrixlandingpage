import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Matrix HR Technologies!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Particle />
      <Container fluid className="contact-section" style={{ paddingBottom: "80px" }}>
        <Container>
          {/* ===== Heading ===== */}
          <Row className="justify-content-center" style={{ paddingTop: "120px" }}>
            <Col md={8} className="text-center">
              <h1 className="purple">Contact Us</h1>
              <p style={{ color: "#ccc", marginBottom: "40px" }}>
                Let’s discuss how we can work together
              </p>
            </Col>
          </Row>

          {/* ===== Form & Map Side by Side ===== */}
          <Row className="justify-content-center">
            {/* Contact Form */}
            <Col md={6} style={{ marginBottom: "30px" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    background: "#a259ff",
                    border: "none",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Map & Address */}
            <Col md={6} style={{ marginBottom: "30px" }}>
              {/* Wrap map and address inside a flex column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: "650px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#f8f9fa",
                  padding: "15px",
                }}
              >
                {/* Map */}
                <div style={{ flex: 1, marginBottom: "15px" }}>
                  <iframe
                    title="Matrix HR Technologies Location"
                    src="https://www.google.com/maps?q=Matrix%20HR%20Technologies%20Bangalore&output=embed"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                      borderRadius: "12px",
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Address */}
                <div style={{ color: "#000" }}>
                  <h5 style={{ fontWeight: "bold" }}>Address</h5>
                  <p>
                    Matrix HR Technologies, 320, Matrix Square, 7th Main Rd, BTM 2nd Stage,
                    BTM Layout, Bengaluru, Karnataka 560076
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
