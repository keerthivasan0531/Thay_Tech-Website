import React, { useEffect, useRef } from "react";


const InfrastructureOutsourcing: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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
      <div className="body">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Infrastructure Outsourcing</b>
            </h1>
            <p>Stay ahead with a resilient, always-available infrastructure.</p>
          </div>
          <div className="flex-1 text-right">
            <img
              src="/outsourcing/infrastructure_outsourcing/Infrastructure.svg"
              alt="Head Software Development"
              className="animate-right-to-left"
            />
          </div>
        </div>
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Infrastructure Outsourcing</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              Infrastructure Outsourcing involves delegating the management and
              provision of IT infrastructure—such as hardware, software,
              networks, and facilities—to external service providers. This
              strategy is designed to help businesses quickly scale their
              operations and improve performance without the burden of
              maintaining physical infrastructure and technology.
            </p>
            <br />
          </div>
          <div className="img p-10">
            <img src="/outsourcing/infrastructure_outsourcing/Infra-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/outsourcing/infrastructure_outsourcing/Infra-img3.jpg" />
            </div>
            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-2xl">
                <b>Key Aspects of Infrastructure Outsourcing:</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                <b>Rapid Expansion:</b> Companies can quickly acquire additional
                resources, such as servers, data storage, or office space,
                without investing in new infrastructure.
              </p>
              <br />
              <p className="text-l text-justify whitespace-normal">
                <b> Adjustable Resources: </b>Businesses can easily scale
                resources up or down based on demand, avoiding over-investment
                or underutilization. Cost Efficiency:
              </p>
              <br />

              <p className="text-l text-justify whitespace-normal">
                <b> Reduced Capital Expenditure:</b> Outsourcing eliminates the
                need for large capital investments in IT infrastructure and
                facilities.
              </p>
              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Predictable Costs:</b> Companies benefit from predictable
                operational costs through service contracts, allowing for better
                budget management.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-xl font-body">
              <b>Access to Advanced Technology</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b> Cutting-Edge Solutions:</b> External providers offer
              state-of-the-art technology and infrastructure that might be
              cost-prohibitive for companies to develop in-house.
            </p>
            <br />
            <h2 className="text-gray-600 pb-3 text-xl">
              <b>Global Reach with Local Adaptability</b>
            </h2>
            <p className="text-l text-justify font-weight: 500  whitespace-normal ">
              <b>Upgrades and Maintenance:</b> Service providers handle updates
              and maintenance, ensuring that technology remains current and
              effective.
            </p>
            <br />
            <h1 className="text-gray-600 pb-3 text-xl">
              <b>Enhanced Focus on Core Activities</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Core Competencies:</b> By outsourcing infrastructure
              management, businesses can concentrate on their primary activities
              and strategic goals without being bogged down by technological
              issues.
            </p>
          </div>
          <div className="img p-10">
            <img src="/outsourcing/infrastructure_outsourcing/Infra-img2.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/outsourcing/infrastructure_outsourcing/Infra-img4.jpg" />
            </div>
            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-2xl">
                <b>Services Typically Included:</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                <b>Data Centers and Server Management:</b> Management of
                physical servers and data storage solutions.
              </p>
              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Network Infrastructure and Security:</b> Setup and
                maintenance of network systems and cybersecurity measures.
              </p>
              <br />
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Disaster Recovery and Backup Solutions:</b> Ensuring data
                safety and business continuity in case of emergencies.
              </p>
              <br />
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>
                  {" "}
                  Office Space, Training Rooms, and Conference Facilities:{" "}
                </b>{" "}
                Providing well-equipped spaces to support business operations
                and client interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfrastructureOutsourcing;
