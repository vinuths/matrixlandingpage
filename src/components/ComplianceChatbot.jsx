import React, { useState } from "react";
import { Button } from "react-bootstrap";

const predefinedReplies = {
  hi: "Hello 👋 Welcome to Matrix HR Technologies. I’m here to help you with compliance, payroll, audits, and statutory requirements.",

  help:
    "If you’re not sure what to ask, no worries 🙂 I can explain compliance, payroll, audits, or guide you to our experts.",

  compliance:
    "Compliance ensures your organization follows labour laws, avoids penalties, and stays audit-ready. Many companies face issues due to missed filings or incorrect registers.",

  payroll:
    "Our payroll services ensure accurate salary processing, statutory deductions, PF, ESI, and timely filings — all in compliance with regulations.",

  audit:
    "We help organizations prepare for audits by maintaining proper registers, records, and statutory documentation.",

  services:
    "Our services include Establishment Compliance, Payroll Administration, Factory Compliance, Audit Management, and Statutory Filings.",

  unsure:
    "If you’re unsure about your compliance status, it’s best to speak with our experts. They can quickly assess your requirements.",

  contact:
    "📞 The best next step is to contact our compliance experts. Please visit the Contact page and our team will assist you personally.",

  default:
    "Not sure what to ask? 😊 You can type: compliance, payroll, audit, services, or contact. Our experts are always ready to help.",
};

function ComplianceChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
{
  from: "bot",
  text: "Hi 👋 I’m your Compliance Assistant. If you’re not sure what to ask, just type ‘help’ or ‘compliance’ 😊",
},
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const key = input.toLowerCase();
    const reply =
      predefinedReplies[key] || predefinedReplies.default;

    setMessages([...messages, userMessage, { from: "bot", text: reply }]);
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <div
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
        }}
      >
        <Button
          onClick={() => setOpen(!open)}
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "22px",
          }}
        >
          💬
        </Button>
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "25px",
            width: "320px",
            background: "#0c0513",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "12px",
              background: "#1b1429",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Compliance Chatbot
          </div>

          <div
            style={{
              padding: "12px",
              height: "240px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.from === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background:
                      msg.from === "user" ? "#0d6efd" : "#2a2240",
                    color: "#fff",
                    fontSize: "0.85rem",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ padding: "10px", display: "flex", gap: "6px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type: compliance, payroll..."
              style={{
                flex: 1,
                padding: "6px",
                borderRadius: "6px",
                border: "none",
              }}
            />
            <Button size="sm" onClick={handleSend}>
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplianceChatbot;
