import React, { useEffect } from "react";


const TechIntegration: React.FC = () => {
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
      <div className="body  ">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Tech Integration</b>
            </h1>
            <p>Bridging the Gap Between Innovation and Business Efficiency</p>
          </div>
          <div className="flex-1">
            <img
              src="/IT_Consulting/Business Plan-pana.svg"
              className="animate-right-to-left"
            />
          </div>
        </div>
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
            </h1>
           
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>The Importance of Tech Integration</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              In a rapidly changing market, the ability to quickly adapt to new
              technologies is critical. Businesses that fail to integrate new
              technologies risk falling behind competitors who leverage these
              advancements to reduce costs, increase productivity, and enhance
              customer experiences. Tech integration not only enhances
              operational efficiency but also provides the flexibility to
              innovate and scale in response to market demands.
            </p>
          </div>
          <div className="img p-10">
            <img src="/IT_Consulting/tech_integeration/tech1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/IT_Consulting/tech_integeration/tech2.jpg" />
            </div>
            <div className="content p-10">
             
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Benefits of Tech Integration</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Enhanced Operational Efficiency:</b>
                By automating routine tasks and optimizing workflows, tech
                integration can significantly boost your operational efficiency,
                freeing up valuable resources for more strategic initiatives.{" "}
                <br />
                <b>Cost Reduction:</b> Integrating advanced technologies can
                help identify and eliminate inefficiencies, leading to
                significant cost savings over time.
                <br /> <b>Improved Decision-Making:</b>With integrated data
                analytics and reporting tools, you gain real-time insights into
                your operations, enabling more informed decision-making and
                strategic planning. <br />
                <b>Increased Agility:</b>Tech integration allows your business
                to adapt quickly to changing market conditions, giving you a
                competitive edge in a dynamic business environment. <br />
                <b>Future-Proofing Your Business:</b>As technology continues to
                evolve, our integration services ensure that your business
                remains agile and ready to adopt new innovations, keeping you
                ahead of the curve.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Choose Thay Technologies for Tech Integration?s</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              At Thay Technologies, we bring a wealth of experience and industry
              expertise to every tech integration project. Our commitment to
              innovation, combined with our deep understanding of business
              processes, allows us to deliver solutions that not only meet your
              current needs but also prepare you for future growth. Whether
              you’re looking to integrate new software, automate workflows, or
              enhance your data management capabilities, we’re here to help you
              navigate the complexities of tech integration with confidence.
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="/IT_Consulting/tech_integeration/tech3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechIntegration;