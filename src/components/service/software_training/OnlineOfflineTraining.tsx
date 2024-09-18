import React, { useEffect } from "react";
import "../ServiceBranch.css";

const OnlineOfflineTraining: React.FC = () => {
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
              <b>Online & Offline Training</b>
            </h1>
            <p>
              Seamless learning, anytime and anywhere — online and offline
              training tailored for you
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/software_training/online_offline_training/On-Off-Training.svg"
              className="animate-right-to-left"
            />
          </div>
        </div>

        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Online Training</b>
            </h1>
            <b>Flexible learning at our convenience :</b>
            <br />
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              To provide an adaptable and accessible learning experience that
              empowers participants to learn at their own pace, from any
              location. <br />
              <br /> Engage with interactive online courses that combine video
              lectures, comprehensive reading materials, and assessment quizzes
              to reinforce learning. <br />
              <br /> Participants gain the skills and knowledge necessary to
              effectively use the software, all within a framework that supports
              self-paced and flexible learning.
            </p>
            <br></br>
            
          </div>
          <div className="img p-10">
            <img src="/software_training/online_offline_training/OnOffTrain1.jpg" />
          </div>
        </div>

        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/software_training/online_offline_training/OnOffTrain6.jpg" />
            </div>

            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-3xl">
                <b>Offline Training </b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                To provide a structured and engaging in-person learning
                experience, where participants benefit from direct interaction
                with expert trainers. <br />

              </p>
              <br />
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                Apply what you’ve learned through practical sessions, guided by
                experienced trainers who provide real-time feedback. <br />
                <br /> Collaborate with peers in team-based exercises that build
                problem-solving skills and foster a deeper understanding of the
                material. <br />
                <br /> Participants receive comprehensive, hands-on training,
                leading to a deep and practical understanding of the software
                and its applications.
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
              We don’t just offer courses we offer a community. Engage in
              dynamic discussions with trainers and peers, exchange insights,
              and deepen your understanding through collaborative <br />
              <br />
            </p>
            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              Choosing <b>Thay Technologies</b> means choosing a partner
              dedicated to your success. Whether you prefer the flexibility of
              online learning or the hands-on approach of offline training, we
              are committed to providing an exceptional learning experience that
              equips you with the skills and knowledge you need to excel. <br />
              <br /> Our programs are not just about teaching; they’re about
              empowering you to achieve your goals and advance your career.
            </p>

            <br></br>
          </div>
          <div className="img p-10">
            <img src="/software_training/online_offline_training/OnOffTrain3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineOfflineTraining;
