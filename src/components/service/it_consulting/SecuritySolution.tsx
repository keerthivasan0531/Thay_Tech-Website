import React, { useEffect } from "react";
import "../ServiceBranch.css";

const SecuritySolution: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="body font-body">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Security Solution</b>
            </h1>
            <p>Bridging the Gap Between Innovation and Business Efficiency</p>
          </div>
          <div className="flex-1">
            <img
              src="/IT_Consulting/Security On-amico.svg"
              className="animate-right-to-left"
            />
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
            </h1>
           
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>The Importance of Security solution</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
           <b> Data Protection:</b> Safeguards sensitive information from unauthorized access or breaches.<br></br>
           <b>Threat Prevention: </b> Blocks cyber attacks like malware, ransomware, and phishing.<br></br>
<b>Regulatory Compliance:</b> Ensures adherence to legal standards like GDPR and HIPAA.<br></br>
<b>Minimized Downtime:</b> Reduces system outages and financial losses due to security incidents.<br></br>
<b>Cost Savings: </b>Prevents costly breaches, data recovery expenses, and reputational damage.
            </p>
          </div>
          <div className="img p-10">
            <img src="/cloud_support/application_support/App-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/cloud_support/application_support/App-img2.jpg" />
            </div>
            <div className="content p-10">
             
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Benefits of security solution</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
            <b>Protection Against Cyber Threats:</b>   Defends against malware, ransomware, and other cyber attacks, keeping systems and data safe.<br></br>

              <b>Prevent Unauthorized Access:</b> Blocks unauthorized users from accessing sensitive data through encryption, firewalls, and multi-factor authentication.<br></br>

              <b>Compliance with Regulations:</b> Helps ensure adherence to legal data protection requirements, reducing the risk of fines and penalties.<br></br>

                <b>Business Continuity:</b> Minimizes downtime and financial losses by preventing disruptions from security breaches.<br></br>

                 <b>Customer Trust: </b>Builds confidence in your brand by ensuring the safe handling of client information, fostering long-term loyalty.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Choose Thay Technologies for security solution</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
            <b>Industry Expertise: </b>We bring deep knowledge and experience in providing tailored security solutions to meet your specific needs.<br></br>

<b>Comprehensive Protection:</b> Our solutions cover every aspect of cybersecurity, from threat prevention to compliance and incident response.<br></br>

<b>Innovative Technology:</b> We use the latest technologies, ensuring your systems stay ahead of evolving threats.<br></br>

<b>Reliable Support:</b> Our 24/7 customer support ensures you receive immediate assistance when needed, minimizing risks and downtime.<br></br>

<b>Proven Trust and Results:</b> With a strong reputation and satisfied clients, we deliver dependable solutions you can trust.
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="/cloud_support/application_support/App-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecuritySolution;