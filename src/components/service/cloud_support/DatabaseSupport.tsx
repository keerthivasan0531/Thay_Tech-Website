import React, { useEffect } from "react";


const DatabaseSupport: React.FC = () => {
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
              <b>Database Support</b>
            </h1>
            <p>
              Safeguard and enhance your data with expert database solutions
            </p>
          </div>
          <div className="flex-1 text-right">
            <img
              src="/cloud_support/database_support/Database_support.svg"
              alt="Head Software Development"
              className="animate-right-to-left"
            />
          </div>
        </div>
        {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Key Services:</b>
            </h1>
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Database Design and Architecture:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <strong> Custom Database Design:</strong> We design databases
              tailored to your specific business needs, ensuring optimal
              structure and performance. <br />
              <strong> Scalable Architecture:</strong> Our database
              architectures are built to scale, allowing your database to grow
              with your business without compromising performance. <br />
             
            </p>
            <br />
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Database Migration:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <strong> Seamless Migration:</strong> We specialize in migrating
              on-premise databases to the cloud with minimal downtime and risk.
              <br />
              <strong> Data Integrity and Security:</strong> We ensure that your
              data remains intact and secure throughout the migration process.
              <br />
            
            </p>
          </div>
          <div className="img p-10">
            <img src="/cloud_support/database_support/Data-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/cloud_support/database_support/Data-img2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Database Management:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <strong> Automated Backups and Recovery:</strong> We implement
                automated backup solutions and disaster recovery plans to
                safeguard your data.
                <br />
                <strong> Performance Tuning:</strong> Our team regularly
                assesses and optimizes your database performance, ensuring fast
                query responses and efficient data handling. <br />
               
              </p>
              <br />
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Advanced Analytics and Reporting:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <strong> Data Warehousing:</strong> We set up cloud data
                warehouses that enable you to store and analyze large volumes of
                data efficiently.
                <br />
                <strong> Real-Time Analytics:</strong> We provide real-time
                analytics solutions that help you gain actionable insights from
                your data.
                <br />
               
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Ongoing Support and Maintenance:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
              <strong> 24/7 Monitoring:</strong> We provide continuous
              monitoring of your cloud database, ensuring optimal performance
              and rapid issue resolution.
              <br />
              <strong> Proactive Maintenance:</strong> Regular maintenance
              services keep your database secure, up-to-date, and optimized for
              performance.
              <br />
             
            </p>
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Thay Technologies?</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <strong>Unmatched Expertise:</strong> Our team has deep experience
              with a wide range of database technologies, from SQL to NoSQL,
              ensuring that we can support your specific needs.
              <br /> <strong>Tailored Solutions:</strong> We offer customized
              solutions that align with your business goals, whether you’re a
              small startup or a large enterprise.
             
            </p>
            <br />
          </div>
          <div className="img p-10">
            <img
              src="/cloud_support/database_support/Data-img3.jpg"
              alt="Marketing"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseSupport;
