import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCloud } from "@fortawesome/free-solid-svg-icons";
import "../service_home/HomeService.css";
import HeaderService from "../service_home/HeaderService";

const ITConsulting: React.FC = () => {
  return (
    <div>
      <HeaderService name="IT Consulting" />
      {/* Our Services Section */}
      <div className="container mx-auto py-5 font-body">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="font-black text-center">
            Comprehensive cloud support services to optimize and maintain your
            business infrastructure.
          </h1>
        </div>

        <div className="flex flex-wrap justify-center text-center gap-4">
          {/* Service Items */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 fadeInLeft">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img
                  src="/IT_Consulting/IT-image1.jpg"
                  className="img-fluid w-full rounded-t-lg"
                  alt="Service 1"
                />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a
                    href="/SoftwareTraining"
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faCloud} className="mr-2" />
                    Tech Integeration
                  </a>
                  <div className="service-content-inner">
                    <p className="mb-4">
                      Expert cloud application setup and management to boost
                      your business productivity.
                    </p>
                    <a
                      className="bg-cyan-400  rounded-full py-2 px-4"
                      href="/services/it-consulting/tech-integration"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 fadeInRight">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img
                  src="/IT_Consulting/IT-image2.jpg"
                  className="img-fluid w-full rounded-t-lg"
                  alt="Service 4"
                />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a
                    href="/services/it-consulting/security-solution"
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    Security Solution
                  </a>
                  <p className="mb-4">
                    Secure and flexible cloud network solutions tailored to your
                    needs
                  </p>
                  <a className="bg-cyan-400 rounded-full py-2 px-4" href="/service/it_consulting/SecuritySolution">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITConsulting;
