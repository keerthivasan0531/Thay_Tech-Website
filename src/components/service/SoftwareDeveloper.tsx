import React, { useEffect, useRef } from "react";
import "./SoftwareDeveloper.css";

const SoftwareDeveloper: React.FC = () => {
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
      { threshold: 0.5 } // Adjust this value if you want more or less of the video visible before it starts
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
      <div className="body ">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Software Development</b>
            </h1>
            <p>Let decide on what you want. We will deliver what you need.</p>
          </div>
          <div className="flex-1">
            <img
              src="/Software-images/Software.svg"
              alt="Head Software Development"
              className="animate-right-to-left"
            />
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Transforming Ideas into Impactful Software Solutions</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              At Thay Technologies, we are dedicated to crafting custom software
              solutions that drive business success. Our approach is rooted in
              deep technical expertise and a commitment to innovation, ensuring
              that the software we develop not only meets current needs but also
              anticipates future challenges.
            </p>
            <br />
            <h2 className="text-gray-600 pb-3 text-xl">
              <b>The Essence of Software Development</b>
            </h2>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              Software development is a strategic process involving design,
              coding, testing, and deployment of applications tailored to solve
              specific business problems. At Thay Technologies, we blend
              creativity with rigorous engineering practices to deliver
              solutions that are robust, scalable, and aligned with your
              business objectives.
            </p>
          </div>
          <div className="img p-10">
            <img src="/Software-Logos/img3.jpg" alt="Marketing" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/Software-Logos/img8.jpg" alt="Marketing" />
            </div>
            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-2xl">
                <b>Why Choose Thay Technologies?</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                Technological Excellence: Our team of experts leverages the
                latest technologies to create software that is not only
                innovative but also future-proof. We stay ahead of industry
                trends to ensure your solution remains cutting-edge.
              </p>
              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                Client-Centric Innovation: We prioritize your vision and goals,
                working closely with you throughout the development process. Our
                solutions are tailored to address your specific needs and drive
                tangible results.
              </p>
              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                Security and Compliance: We incorporate robust security measures
                and ensure compliance with industry standards, protecting your
                data and maintaining the integrity of your operations.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Sustainability: Driving Eco-Friendly Solutions</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              Sustainability is a core value at Thay Technologies. We are
              committed to developing software solutions that are not only
              effective but also environmentally responsible. Our practices
              include optimizing code for energy efficiency and using
              sustainable infrastructure, contributing to a lower carbon
              footprint.
            </p>
            <br />
            <h2 className="text-gray-600 pb-3 text-xl">
              <b>Global Reach with Local Adaptability</b>
            </h2>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              In an increasingly interconnected world, our software solutions
              are designed to support global operations while being adaptable to
              local markets. We understand the complexities of international
              business and ensure that our software meets global standards while
              accommodating regional variations.
            </p>
            <br />
          </div>
          <div className="img p-10">
            <img src="/Software-Logos/img4.jpg" alt="Marketing" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/Software-Logos/img-10.jpg" alt="Marketing" />
            </div>
            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-2xl">
                <b>Technological Adaptability: Embracing Change</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                We recognize that technology evolves rapidly. Our software
                solutions are designed with adaptability in mind, allowing you
                to incorporate new features and technologies as they become
                available. This flexibility ensures that your software remains
                relevant and continues to provide value as your business and the
                technology landscape change.
              </p>
              <br />
              <h2 className="text-gray-600 pb-3 text-xl">
                <b>Client-Focused Development: Building Partnerships</b>
              </h2>

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                At Thay Technologies, we view every project as a partnership.
                Our collaborative approach ensures that we work closely with you
                to understand your needs and deliver a solution that aligns with
                your strategic objectives. We are committed to your success and
                focus on building long-term relationships based on trust and
                mutual growth.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="box flex fade-in-section">
          <div className="blur-content p-10">
            <h1 className="text-gray-600 pb-8 text-center text-5xl">
              <b>The Thay Technologies Difference</b>
            </h1>
            <p className="text-l mb-10 text-justify text-center">
              What sets Thay Technologies apart is our unwavering commitment to
              delivering high-quality, innovative software solutions that meet
              your unique needs. Our blend of technological expertise,
              sustainability focus, and client-centric approach ensures that
              every project we undertake delivers exceptional results. Partner
              with us to experience the transformative power of expert software
              development.
            </p>
          </div>
        </div>
        <div>
          <img src="Software-images/TimelineCycle-Transperant.svg" alt="" className="fade-in-section" />
        </div>
      </div>
    </>
  );
};

export default SoftwareDeveloper;
