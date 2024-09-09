import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../service_home/HomeService.css";
import SvelteSignals from "./SvelteSignals";

const Development: React.FC = () => {
  return (
    <div>
      {/* Include SvelteSignals Component */}
      <SvelteSignals />

      <div className="container mx-auto py-5">
        <div className="flex flex-wrap p-10 justify-center text-center gap-4">
          {/* Service Items */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4  fadeInLeft">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img ">
                <img
                  src="/service/itsupport/itsupport.jpg"
                  className="img-fluid w-full rounded-t-lg"
                  alt="Service 1"
                />
              </div>
              <div className="service-content p-4 ">
                <div className="service-content-inner">
                  <a
                    href=""
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    Software Development
                  </a>
                  <div className="service-content-inner">
                    <p className="mb-4">
                      Expert software development services to build robust and
                      scalable solutions.
                    </p>
                    <a
                      className="bg-cyan-400  rounded-full py-2 px-4"
                      href="/services/development/software-development"
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
              <div className="service-content p-4 ">
                <div className="service-content-inner">
                  <a
                    href=""
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    Product Development
                  </a>
                  <p className="mb-4">
                    End-to-end product development to bring your innovative
                    ideas to life
                  </p>
                  <a
                    className="bg-cyan-400  rounded-full py-2 px-4"
                    href="/services/development/product-development"
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

export default Development;
