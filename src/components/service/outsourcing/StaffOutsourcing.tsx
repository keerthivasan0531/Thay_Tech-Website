import React, { useEffect } from "react";


const StaffOutSourcing: React.FC = () => {
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
      <div className="body ">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Staff Outsourcing</b>
            </h1>
            <p>Boost your workforce with tailored expertise and flexible solutions </p>
          </div>
          <div className="flex-1 text-right">
            <img src="/outsourcing/staff_outsourcing/Staff-Outsourcing.svg" alt="Head Software Development" className="animate-right-to-left" />
          </div>
        </div>
        {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
          
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Access to Specialized Talent:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Expertise on Demand: </b>Companies can quickly acquire skilled professionals in areas such as programming, system analysis, and project management, tailored to their specific needs.{" "}
              <br /> <b>Global Talent Pool: </b>Outsourcing enables businesses to tap into a diverse talent pool, including professionals from different regions with varying skill sets.
            </p>
            <br />
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Operational Efficiency:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Focus on Core Activities:</b> By outsourcing staffing needs, businesses can focus on their core operations and strategic initiatives while external providers manage recruitment and
              employee performance. <br />
              <b> Reduced Administrative Burden:</b> Outsourcing providers handle administrative tasks such as payroll, benefits, and compliance, reducing the internal workload.
            </p>
          </div>
          <div className="img p-10">
            <img src="/outsourcing/staff_outsourcing/Staff-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/outsourcing/staff_outsourcing/Staff-img2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Cost Management:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
                <b>Lower Costs:</b> Outsourcing can be more cost-effective than hiring full-time employees, particularly for roles that are not needed on a permanent basis. <br />{" "}
                <b>Flexible Staffing:</b> Businesses can adjust staffing levels based on project requirements or seasonal demands, avoiding the costs associated with permanent hires.
              </p>
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Risk Mitigation:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Legal and Financial Protection:</b> Outsourcing firms often handle legal compliance and financial risks related to employment, providing a buffer against potential liabilities.{" "}
                <br /> <b>Performance Management:</b> Providers are responsible for managing employee performance, ensuring that staff meet the agreed-upon standards and objectives.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Types of Staff Outsourcing:</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <b>IT Staff:</b> Includes roles such as programmers, network administrators, system analysts, and project managers. <br /> <b> Virtual Employees:</b> Remote workers who provide
              specialized skills and services from various locations. <br />
              <b> Offshoring:</b> Utilizing talent from different geographical locations to benefit from cost efficiencies and diverse expertise.
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="/outsourcing/staff_outsourcing/Staff-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffOutSourcing;
