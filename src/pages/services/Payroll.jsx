// src/pages/services/Payroll.jsx
import React from "react";
import ServicePage from "./ServicePage";

const Payroll = () => {
  return (
    <ServicePage
      title="Payroll Administration"
      description={
        <>
          <p>
            We provide end-to-end payroll processing ensuring accuracy,
            compliance, and confidentiality.
          </p>
          <ul>
            <li>Salary processing</li>
            <li>Statutory deductions</li>
            <li>Payslips & reports</li>
          </ul>
        </>
      }
    />
  );
};

export default Payroll;
