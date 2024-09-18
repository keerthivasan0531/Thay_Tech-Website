import React, { useEffect } from "react";
import "../ServiceBranch.css";

const CorporateTraining: React.FC = () => {
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
      <div className="body font-body ">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Corporate Training</b>
            </h1>
            <p>Let decide on what you want. We will deliver what you need.</p>
          </div>
          <div className="flex-1">
            <img src="/software_training/corporate_training/Corporate_training.svg" className="animate-right-to-left" />
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-xl">
              <b>Achieving Operational Excellence:</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              The primary goal of corporate training is to enhance the proficiency of your workforce with the software tools they use daily. This includes mastering software features, understanding
              best practices, and improving overall productivity. <br />
              <br /> Identifying the skills gap and understanding the software’s role in your operations. Creating training modules that cover the software’s features, functionalities, and
              applications relevant to your business processes.
            </p>
            <br />
           
          </div>
          <div className="img p-10">
            <img src="/software_training/corporate_training/corp-img1.jpg" />
          </div>
        </div>

        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/software_training/corporate_training/crop-img2.jpg" />
            </div>

            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-xl">
                <b>Experience Driven Learning:</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                Detailed exploration of software features, functionalities, and advanced options. Developing realistic scenarios and case studies that reflect your industry and operational challenges.{" "}
                <br />
                
              </p>
              <br />
              <p className="text-gray-600 pb-3 text-xl">
                <b>Hands On Training :</b>
              </p>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                Each case study and exercise is strategically developed to align with specific learning objectives, ensuring that participants leave the training with a robust understanding of the
                software’s functionalities.
              </p>
              <br />
              <p className="text-gray-600 pb-3 text-xl">
                <b>Real World Application :</b>
              </p>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                The practical application of software tools leads to increased proficiency, enabling your team to leverage technology effectively and efficiently. Our training empowers employees to
                not only understand how to use the software but to master it in ways that drive business success.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-3xl">
              <b>Why us?</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              At Thay Technologies, we are committed to transforming your workforce into skilled users of essential software tools. Our training programs offer a comprehensive exploration of software
              features, functionalities, and advanced options, ensuring participants move beyond surface-level knowledge.
            </p>
            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              Our focus on practical application ensures that participants can seamlessly integrate their training into their daily operations. By emphasizing real-world scenarios and hands-on
              exercises, we enhance proficiency and efficiency, allowing your team to not only understand how to use the software but to master it. 
            </p>
            <br></br>
            
          </div>
          <div className="img p-10">
            <img src="/software_training/corporate_training/crop-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateTraining;
