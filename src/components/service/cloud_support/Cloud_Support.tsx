import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import "../service_home/HomeService.css";
import HeaderService from "../service_home/HeaderService";

const CloudSupport: React.FC = () => {
  return (
    <div>
      <HeaderService name="Cloud Support" />
      <div className="container mx-auto py-5 fadeInLeft">
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
                  src="/service/itsupport/itsupport.jpg"
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
                    Application support
                  </a>
                  <div className="service-content-inner">
                    <p className="mb-4">
                      Expert cloud application setup and management to boost
                      your business productivity.
                    </p>
                    <a
                      className="bg-cyan-400  rounded-full py-2 px-4"
                      href="/services/cloud-support/application-support"
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
                  src="/service/itsupport/itsupport.jpg"
                  className="img-fluid w-full rounded-t-lg"
                  alt="Service 2"
                />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a
                    href="/CloudSupport"
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faCloud} className="mr-2" />
                    Database support
                  </a>
                  <p className="mb-4">
                    Comprehensive cloud database services for businesses of all
                    sizes.
                  </p>
                  <a
                    className="bg-cyan-400  rounded-full py-2 px-4"
                    href="/services/cloud-support/database-support"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 fadeInLeft">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img
                  src="/service/itsupport/itsupport.jpg"
                  className="img-fluid w-full rounded-t-lg"
                  alt="Service 3"
                />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a
                    href="/ITConsulting"
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faCloud} className="mr-2" />
                    Operating system support
                  </a>
                  <p className="mb-4">
                    Seamless cloud OS installation and troubleshooting across
                    platforms.
                  </p>
                  <a
                    className="bg-cyan-400  rounded-full py-2 px-4"
                    href="/services/cloud-support/operating-system"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 fadeInRight">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img
                  src="/service/itsupport/itsupport.jpg"
                  className="img-fluid w-full rounded-t-lg"
                  alt="Service 4"
                />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a
                    href="/OutSourcing"
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faCloud} className="mr-2" />
                    Network support
                  </a>
                  <p className="mb-4">
                    Secure and flexible cloud network solutions tailored to your
                    needs
                  </p>
                  <a
                    className="bg-cyan-400 rounded-full py-2 px-4"
                    href="/services/cloud-support/network-support"
                  >
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

export default CloudSupport;
