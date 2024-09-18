import React, { useEffect } from "react";
import "../ServiceBranch.css";

const NetworkSupport: React.FC = () => {
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
              <b>Network Support</b>
            </h1>
            <p>Keep your connections seamless with expert network management</p>
          </div>
          <div className="flex-1 text-right">
            <img src="/cloud_support/network_support/Networking.svg" alt="Head Software Development" className="animate-right-to-left" />
          </div>
        </div>
        {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              
            </h1>
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Network Design and Architecture:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Custom Network Design:</b> We design networks tailored to your specific business needs, ensuring they are optimized for performance, security, and scalability. <br />
              <b>Cloud Integration:</b> Our network designs ensure seamless integration with your cloud infrastructure, providing a cohesive and efficient environment.
              <br />
             
            </p>
            <br />
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Network Security and Compliance:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Advanced Security Protocols:</b> We implement the latest security protocols to protect your network from threats and vulnerabilities. <br />
              <b>Compliance Management:</b> We ensure your network complies with industry regulations and standards, reducing the risk of legal and financial penalties. <br />
             
            </p>
          </div>
          <div className="img p-10">
            <img src="/cloud_support/network_support/Net-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/cloud_support/network_support/Net-img2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Network Implementation and Setup:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
                <b>Seamless Deployment:</b> We handle the complete deployment of your network, ensuring it is set up correctly from the start.
                <br />
                <b>Load Balancing and Traffic Management:</b> We implement load balancing solutions to optimize network performance and ensure reliable traffic management.
                <br />
               
              </p>
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Ongoing Network Management:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>24/7 Monitoring:</b> Continuous network monitoring allows us to detect and address issues <br />
                <b>Expert Troubleshooting:</b> Our network support experts are available around the clock to resolve any issues quickly and efficiently. <br />
              
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
              <b>Cross-Platform Expertise:</b> Our team has extensive experience with multiple operating systems, ensuring we can support your specific needs. <br />
              <b>Proactive Support:</b> We focus on proactive maintenance and monitoring to prevent issues before they impact your business. <br />
              <b>Customer-Centric Approach:</b> Our services are tailored to meet your unique business requirements, ensuring you get the most value from your cloud infrastructure.
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="/cloud_support/network_support/Net-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkSupport;
