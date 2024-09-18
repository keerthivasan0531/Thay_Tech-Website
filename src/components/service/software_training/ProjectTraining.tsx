import React, { useEffect } from "react";


const ProjectTraining: React.FC = () => {
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
              <b>Project Training</b>
            </h1>
            <p>
              Transform your projects with expert training that drives success
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/software_training/project_training/ProjectTraining.svg"
              className="animate-right-to-left"
            />
          </div>
        </div>
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Transformative Workforce Preparation</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              To prepare students for the workforce by providing hands-on
              experience with the latest technologies and project management
              practices. This training equips them with the skills needed to
              excel in their future careers. <br />
              <br /> We emphasize preparing students for the workforce by
              immersing them in projects that mirror contemporary industry
              standards, utilizing cutting-edge technologies and best practices
              in project management.
            </p>
            <br></br>

          </div>
          <div className="img p-10">
            <img src="/software_training/project_training/Project-img1.jpg" />
          </div>
        </div>

        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/software_training/project_training/Project-img2.jpg" />
            </div>

            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-3xl">
                <b>Tailored Learning Opportunities </b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                Participants are given the choice or are assigned projects that
                align with their professional interests and career goals. These
                projects are meticulously chosen to reflect current industry
                trends, technologies, and practices, ensuring relevance and
                practical application.
              </p>
              <br />
             
              <br />
              <b>Real World Application :</b>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                As employees acquire new skills, they immediately apply them to
                their job tasks. This real-time application solidifies learning
                through direct experience, ensuring the training is highly
                relevant to their work environment.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why us?</b>
            </h1>
            <b>Real world focus :</b>
            <p className="text-l text-justify whitespace-normal">
              We don’t just teach concepts we immerse students in projects that
              mirror the complexities and challenges faced by today’s
              businesses. This real-world focus ensures that our trainees are
              not only learning but are also gaining relevant experience that
              they can immediately apply in their future careers.
            </p>
            <p className="text-l text-justify font-weight: 500  whitespace-normal"></p>

            <br></br>
            <b>Cutting-Edge Technology and Practices:</b>
            <p>
              We ensure that our students are trained on the most up-to-date
              technologies and best practices in project management. This
              commitment to current industry standards ensures that they are
              equipped with the skills needed to excel in today’s fast-paced
              tech environment.
            </p>
          </div>
          <div className="img p-10">
            <img src="/software_training/project_training/Project-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTraining;
