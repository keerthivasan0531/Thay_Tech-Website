import React, { useEffect } from "react";
import "../ServiceBranch.css";

const ApplicationSupport: React.FC = () => {
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
              <b>Application Support</b>
            </h1>
            <p>Optimize performance with proactive application care</p>
          </div>
          <div className="flex-1">
            <img src="/cloud_support/application_support/ApplicationSupport.svg" className="animate-right-to-left" />
          </div>
        </div>
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl  font-body">
              <b>Key Services:</b>
            </h1>
            <h3 className="text-gray-600 pb-3 text-xl ">
              <b>Application Analysis and Strategy:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal font-family">
              <b>Business Needs Assessment:</b> We conduct a thorough assessment of your business operations to identify the applications that will provide the greatest impact. <br />{" "}
              <b>Strategic Planning:</b> Based on the assessment, we create a strategic plan that outlines the most effective cloud application solutions for your business. <br />
              <b>Application Portfolio Management:</b> We help you manage and optimize your application portfolio, ensuring you get the most value from your cloud investments.
            </p>
            <br />

          
          </div>
          <div className="img p-10 shadow-l">
            <img src="/cloud_support/application_support/App-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10 shadow-l">
              <img src="/cloud_support/application_support/App-img2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Ongoing Application Management:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
                <b>Continuous Monitoring:</b> We provide 24/7 monitoring of your cloud applications, identifying and addressing issues before they impact your operations.{" "}
<br></br><b>Performance Optimization:</b> 
                Regular performance assessments and optimizations ensure your applications are always running at peak efficiency. <br />
                <b>Version Control and Updates:</b> We manage application updates and version control, ensuring your software is always up-to-date and secure.
              </p>
             
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Thay Technologies</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <b>Expertise Across Industries:</b> Our experience spans multiple industries, allowing us to provide customized solutions that align with your industry’s unique requirements. <br />
              <b>Cutting-Edge Technology:</b> We leverage the latest cloud technologies to ensure your applications are secure, efficient, and future-proof. <br />
              <b>Client-Centric Approach:</b> Our services are tailored to your business needs, ensuring that you receive solutions that drive real business results.
            </p>

            <br />
          </div>
          <div className="img p-10 shadow-l">
            <img src="/cloud_support/application_support/App-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSupport;
