import React, { useEffect } from "react";
import "../ServiceBranch.css";

const OnJobTraining: React.FC = () => {
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
      <div className="body font-body">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>On Job Training</b>
            </h1>
            <p>Let decide on what you want. We will deliver what you need.</p>
          </div>
          <div className="flex-1">
            <img src="/software_training/on_job_training/On-Job-Training.svg" className="animate-right-to-left" />
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Elevating Expertise</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              Our On-Job Training (OJT) programs are meticulously crafted to provide employees with immersive, hands-on experience by embedding learning directly into their day-to-day
              responsibilities. <br />
            </p>
            <br></br>
            <p>
              Our seasoned trainers work in close collaboration with employees at their workstations, delivering step-by-step guidance and support tailored to the specific tasks they perform. <br />{" "}
              <br /> This personalized mentorship ensures that each participant gains a comprehensive understanding of the software’s critical role in their daily operations, driving both proficiency
              and performance.
            </p>
          </div>
          <div className="img p-10">
            <img src="/software_training/on_job_training/Onjob-img1.jpg" />
          </div>
        </div>

        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/software_training/on_job_training/Onjob-img2.jpg" alt="Marketing" />
            </div>

            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-3xl">
                <b>Comprehensive Training Approach</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                Our expert trainers work in close partnership with employees at their workstations, delivering step-by-step instructions and tailored support for the tasks at hand.
              </p>
              <br />
              <b>Hands-On Training :</b>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                Each case study and exercise is strategically developed to align with specific learning objectives, ensuring that participants leave the training with a robust understanding of the
                software’s functionalities.
              </p>
              <br />
              <b>Real World Application :</b>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                As employees acquire new skills, they immediately apply them to their job tasks. This real-time application solidifies learning through direct experience, ensuring the training is
                highly relevant to their work environment.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why us?</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              We emphasize real-time application of skills, allowing your employees to implement what they’ve learned directly into their job tasks. This method reinforces learning through hands-on
              experience, ensuring that new skills are retained and effectively utilized in your business environment.
            </p>
            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              By choosing us, you are investing in a training program that prioritizes your team’s success. Our approach drives both proficiency and performance, empowering your employees to leverage
              technology effectively and contribute to your organization’s overall success.
            </p>

            <br></br>

          
          </div>
          <div className="img p-10">
            <img src="/software_training/on_job_training/Onjob-img4.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnJobTraining;
