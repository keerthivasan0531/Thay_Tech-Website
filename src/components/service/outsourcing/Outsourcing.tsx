import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import "../service_home/HomeService.css";
import HeaderService from "../service_home/HeaderService";

function OutSourcing() {
  return (
    <div>
      <HeaderService name="Outsourcing" />
      {/* Our Services Section */}
      <div className="container mx-auto py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="font-black text-center">
            Flexible and cost-effective outsourcing services to rapidly expand
            your IT business.
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
                    <FontAwesomeIcon icon={faGears} className="mr-2" />
                    Infrastructure Outsourcing
                  </a>
                  <div className="service-content-inner">
                    <p className="mb-4">
                      Affordable and secure IT infrastructure services to
                      quickly scale your business with flexible options and
                      top-notch facilities.
                    </p>
                    <a
                      className="bg-cyan-400  rounded-full py-2 px-4"
                      href="/services/outsourcing/infrastructure-outsourcing"
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
                    <FontAwesomeIcon icon={faGears} className="mr-2" />
                    Staff Outsourcing
                  </a>
                  <p className="mb-4">
                    Swift, risk-free staff outsourcing and offshoring solutions
                    with highly qualified IT professionals to enhance your
                    business performance
                  </p>
                  <a
                    className="bg-cyan-400  rounded-full py-2 px-4"
                    href="/services/outsourcing/staff-outsourcing"
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
}

export default OutSourcing;
