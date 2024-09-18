import React, { useEffect } from "react";


const ProductDevelopment: React.FC = () => {
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
            <h1 className="font-bold ">
              <b>Product Development</b>
            </h1>
            <p>Let decide on what you want. We will deliver what you need.</p>
          </div>
          <div className="flex-1">
            <img src="/development/product_development/Product_development.svg" className="animate-right-to-left" />
          </div>
        </div>
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Empowering Innovation with Expert Product Development Solutions</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              At Thay Technologies, product development is more than just a service—it's a journey we undertake with our clients to transform ideas into market-ready products. Our comprehensive
              approach covers every stage of the product development lifecycle, ensuring that your vision is brought to life with precision, creativity, and innovation.
            </p>
            <br />
          </div>
          <div className="img p-10">
            <img src="/development/product_development/prod-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/development/product_development/prod-img3.jpg" />
            </div>
            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-2xl">
                <b>Our Product Development Lifecycle</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                <b>Conceptualization: </b> We begin by understanding your ideas, business goals, and market needs. This phase includes brainstorming, idea validation, and initial feasibility analysis.
              </p>
              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Design & Prototyping:</b> Our expert designers and developers create detailed prototypes that reflect your vision. We focus on user experience, functionality, and scalability.
              </p>

              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Development:</b> Using the latest technologies and agile methodologies, we bring your product to life. 

              </p>
              <br />
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Testing & Quality Assurance:</b> Rigorous testing is conducted to ensure the product is robust, secure, and performs seamlessly across all platforms and environments.
              </p>
              <br />
             
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Choose Thay Technologies?</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <b>Expertise:</b> Our team consists of seasoned professionals with years of experience across various industries, ensuring that your product is in capable hands.
            </p>
            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Innovation:</b> We are committed to staying ahead of the curve, using the latest tools, technologies, and methodologies to deliver cutting-edge solutions.
            </p>

            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b> Customization:</b> We understand that every project is unique. Our solutions are tailored to meet your specific needs and objectives, ensuring that the final product is a perfect fit
              for your business.
            </p>
            <br />
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b> Client-Centric Approach:</b> We believe in building long-term partnerships with our clients. Your success is our success, and we work closely with you to ensure your vision is
              realized.
            </p>
            <br />
           
          </div>
          <div className="img p-10">
            <img src="/development/product_development/prod-img4.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/development/product_development/prod-img2.jpg" />
            </div>
            <div className="content p-10">
              <h2 className="text-gray-600 pb-3 text-2xl">
                <b> Sustainability and Innovation </b>
              </h2>
              <p className="text-l text-justify whitespace-normal">
                At Thay Technologies, we believe in creating products that are not only innovative but also sustainable. Our commitment to eco-friendly development practices ensures that we minimize
                our environmental impact while delivering high-performance solutions. <br />
                <br /> We integrate emerging technologies such as AI, blockchain, and IoT into our product development process, enabling us to create next-generation products that are both
                forward-thinking and responsible.
                <br />
                <br />
                Our approach to sustainability is holistic, considering the entire lifecycle of the product—from design and development to deployment and maintenance. <br />

              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Our Approach to Product Development</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              At Thay Technologies, our approach is collaborative and transparent. We believe in working closely with our clients throughout the development process, ensuring that you are involved and
              informed at every stage. <br />
            
            </p>
            <br />
            <h2 className="text-gray-600 pb-3 text-xl">
              <b> Global Reach and Scalability </b>
            </h2>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              In today’s interconnected world, your product needs to be ready to scale globally. Thay Technologies has a proven track record of developing solutions that cater to a global audience.{" "}
              <br />
             
            </p>
          </div>
          <div className="img p-10">
            <img src="/development/product_development/prod-img5.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDevelopment;
