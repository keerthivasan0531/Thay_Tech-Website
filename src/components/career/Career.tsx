import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import CareerHeader from "./CareerHeader";

const Career: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobRole: "",
    message: "",
    resume: null as File | null,
  });

  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target); // Stop observing after fading in
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("jobRole", formData.jobRole);
    formDataToSend.append("message", formData.message);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    try {
      await axios.post("http://localhost:5000/send-email", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponse("Your application has been submitted successfully!");
      setError(null);
    } catch (error) {
      setResponse(null);
      setError("Error sending email. Please try again.");
    }
  };

  return (
    <div className=" ">
      <CareerHeader />

      {/* Details Section */}
      <div
        className="opacity-0 mx-10 px-8 sm:px-10 lg:px-8 font-body"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div id="details" className="pt-12 pb-16 lg:pt-16">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <div className="mb-16 lg:mb-0 xl:mt-16">
                <h2 className="mb-6 font-black">Join Our Team</h2>
                <p className="mb-4">
                Thay Technology Private Limited is a solution provider for the
                  manufacturing industry. We are dedicated to providing
                  innovative and customized software solutions to our clients to
                  help them achieve their business objectives and success.
                </p>
                <p className="mb-4">
                As we continue to grow, we are looking for talented and
                  passionate individuals to join our team. We offer a dynamic
                  work environment with opportunities for professional growth
                  and development.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 p-9">
              <div className="xl:ml-14 rounded-lg">
                <img
                  className="inline rounded-lg"
                  src="/career/career3.jpg"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div
        className="opacity-0 mx-10 p-12 pr-25"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <h1 className="font-black text-2xl text-blue-600 pb-3">
          Career Opportunities:
        </h1>
        <h2 className="font-black text-2xl text-blue-600">Apply Now:</h2>
        <p>
            If
          you’re interested in a career with Freedom Thay Technology private  Limited, please
          fill out the form below and attach your resume. <br></br>We look forward to
          hearing from you!
        </p>
      </div>

      {/* Form Section */}
      <div
        className="opacity-0 mx-20 max-w-4xl sm:max-w-5xl lg:max-w-6xl shadow-2xl bg-white rounded-lg p-6 sm:p-8 lg:p-12 mt-8"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <h4 className="text-blue-600 text-xl lg:text-2xl font-bold mb-4">
          Send Your Message
        </h4>
        <form className="bg-white p-4" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="jobRole"
                className="block text-sm font-medium text-gray-700"
              >
                Job Role
              </label>
              <input
                type="text"
                id="jobRole"
                name="jobRole"
                placeholder="Job Role"
                value={formData.jobRole}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            <div className="col-span-2 w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave a message here"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                rows={6}
              ></textarea>
            </div>

            <div className="col-span-2 w-full">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Your Resume
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                onChange={handleFileChange}
                className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
              />
            </div>

            <div className="col-span-2 w-full">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit Application
              </button>
            </div>

            {response && (
              <div className="col-span-2 w-full">
                <p className="text-green-600">{response}</p>
              </div>
            )}

            {error && (
              <div className="col-span-2 w-full">
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
