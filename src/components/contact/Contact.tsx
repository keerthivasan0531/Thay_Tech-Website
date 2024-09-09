import React from "react";
import HeaderService from "../service/service_home/HeaderService";

const Contact: React.FC = () => {
  return (
    <div>
      {/* Header Service */}
      <HeaderService name="Contact Us" />

      {/* Title Section */}
      <div className="container mx-auto py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="font-black text-center">
            If You Have Any Query, Feel Free To Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white shadow-2xl p-6 rounded-lg mb-6 animate_animated animatefadeIn animate_delay-200ms">
              <h4 className="text-blue-600 text-xl mb-4">Get in Touch</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-4">
                  <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Address</h4>
                    <p className="text-gray-700">
                      Plot 897, Door No 9, 10th Cross,<br></br> H Block Anna
                      Nagar West,
                      <br /> Chennai - 600040
                      <br />
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Mail Us</h4>
                    <p className="text-gray-700">info@thaytech.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="fa fa-phone-alt text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Telephone</h4>
                    <p className="text-gray-700">+919840384140 </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="fab fa-firefox-browser text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Yoursite@ex.com</h4>
                    <p className="text-gray-700"> +91 6380454663</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pt-[56.25%] w-full mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1828668996204!2d80.19901517480832!3d13.087594212325145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263e2537f09e9%3A0xd11f38bf12af6d9b!2sVaagai%20Spaces!5e0!3m2!1sen!2sin!4v1725272164542!5m2!1sen!2sin"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white shadow-2xl p-6 rounded-lg animate_animated animatefadeIn animate_delay-200ms">
            <h4 className="text-blue-600 text-xl mb-4">Send Your Message</h4>
            <p className="text-gray-700 mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.{" "}
              <a
                className="text-blue-600 font-bold"
                href="https://htmlcodex.com/contact-form"
              >
                Download Now
              </a>
              .
            </p>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div  className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div  className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div  className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div  className="w-full">
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Project
                  </label>
                  <input
                    type="text"
                    id="project"
                    placeholder="Project"
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
                    placeholder="Leave a message here"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    rows={6}
                  ></textarea>
                </div>
                <div className="col-span-2 w-full">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
