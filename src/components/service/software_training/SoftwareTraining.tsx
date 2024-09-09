import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../service_home/HomeService.css";
import HeaderService from "../service_home/HeaderService";

const Training: React.FC = () => {
  return (
    <div>
      <HeaderService name="Software Training" />

      <div className="container mx-auto py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="font-black text-center">
            Effective software training is key to empowering your team with the
            skills needed to drive productivity and achieve business success..
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
                    href=""
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    Corporate Training
                  </a>
                  <div className="service-content-inner">
                    <p className="mb-4">
                      Aligning Skills to Drive Organizational Success
                    </p>
                    <a
                      className="bg-cyan-400  rounded-full py-2 px-4"
                      href="/services/software-training/corporate-training"
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
                    href=""
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    On-the-Job Training
                  </a>
                  <p className="mb-4">
                    Immediate Skill Application and Enhanced Productivity
                  </p>
                  <a
                    className="bg-cyan-400  rounded-full py-2 px-4"
                    href="/services/software-training/on-job-training"
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
                    href=""
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    Project-Based Training
                  </a>
                  <p className="mb-4">
                    Expert IT consulting to streamline your operations and drive
                    innovation with strategic solutions.
                  </p>
                  <a
                    className="bg-cyan-400  rounded-full py-2 px-4"
                    href="/services/software-training/project-training"
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
                    href=""
                    className="h4 mb-4 flex items-center justify-center text-start"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    Online and Offline Training
                  </a>
                  <p className="mb-4">
                    Outsource your IT needs to us and focus on your core
                    business while we handle the rest.
                  </p>
                  <a
                    className="bg-cyan-400 rounded-full py-2 px-4"
                    href="/services/software-training/online-offline-training"
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

export default Training;
