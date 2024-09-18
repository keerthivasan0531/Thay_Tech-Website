import React, { useEffect } from "react";
import "../ServiceBranch.css";

const OSSupport: React.FC = () => {
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
              <b>Operating System Support</b>
            </h1>
            <p>Ensure smooth operations with reliable OS assistance</p>
          </div>
          <div className="flex-1 text-right">
            <img src="/cloud_support/os_support/OS-support.svg" alt="Head Software Development" className="animate-right-to-left" />
          </div>
        </div>
        {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Key Services:</b>
            </h1>
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Operating System Selection and Strategy:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Needs Assessment:</b> We evaluate your business requirements to recommend the best operating system for your cloud environment. <br />
              <b>Compatibility Analysis:</b> We ensure that your chosen OS is compatible with your existing applications and infrastructure.
              <br />
            
            </p>
            <br />
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Installation and Configuration:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Custom Installation:</b> We handle the installation of your operating system in the cloud, ensuring it is configured for optimal performance. <br />
              <b>Security Hardening:</b> We implement security best practices during installation, including firewall setup, user access controls, and system monitoring. <br />

            </p>
          </div>
          <div className="img p-10">
            <img src="/cloud_support/os_support/Os-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/cloud_support/os_support/Os-img2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Ongoing Maintenance and Updates:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
                <b>Regular Updates:</b> We ensure your operating system is always up-to-date with the latest patches and security updates. <br />
                <b>Performance Monitoring:</b> Continuous monitoring allows us to identify and resolve performance bottlenecks, ensuring smooth operation. <br />
               
                <br />
              </p>
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Troubleshooting and Support:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Rapid Issue Resolution:</b> Our experts are on hand to quickly diagnose and resolve any OS-related issues, minimizing downtime. <br />
                <b>System Recovery and Backup:</b> We implement robust backup solutions and disaster recovery plans to protect your system in case of failure. <br />
                
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Operating System Migration:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
              <b>Seamless Migration:</b> We manage OS migrations with minimal disruption to your business operations, ensuring a smooth transition. <br />
              <b>Cross-Platform Expertise:</b> Whether you’re moving from Windows to Linux or another platform, our team has the expertise to manage complex migrations. <br />
              
            </p>
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Thay Technologies</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <b>Cross-Platform Expertise:</b> Our team has extensive experience with multiple operating systems, ensuring we can support your specific needs. <br />
              <b>Proactive Support:</b> We focus on proactive maintenance and monitoring to prevent issues before they impact your business. <br />
            
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="/cloud_support/os_support/Os-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OSSupport;
