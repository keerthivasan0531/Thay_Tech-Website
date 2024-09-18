import React, { useState } from "react";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface SubMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ isOpen, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={`flex flex-col flex-1 ${isOpen ? "block" : "hidden"} w-full`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-[#001442]">Services</h2>
        </div>
        <button onClick={onClose} className="text-[#00D1F9] focus:outline-none" aria-label="Back">
          <ArrowLeftIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col items-start p-4 mt-2 space-y-6 text-xl w-full">
      <a
          href="/services/it-consulting"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">IT Consulting</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("it-consulting");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
            <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "it-consulting" ? "rotate-180" : ""}`} />
          </button>
        </a>
        {dropdownOpen === "it-consulting" && (
          <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
            <a href="/services/it-consulting/tech-integration" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
            Tech Integration
            </a>
            <a href="/services/it-consulting/security-solution" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
            Security Solution
            </a>
          </div>
        )}
        <a
          href="/services/cloud-support"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Cloud Support</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("cloud-support");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
            <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "cloud-support" ? "rotate-180" : ""}`} />
          </button>
        </a>
        {dropdownOpen === "cloud-support" && (
          <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
            <a href="/services/cloud-support/application-support" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Application Support
            </a>
            <a href="/services/cloud-support/database-support" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Database Support
            </a>
            <a href="/services/cloud-support/operating-system" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Operating System
            </a>
            <a href="/services/cloud-support/network-support" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Network Support
            </a>
          </div>
        )}
        <a
          href="/services/outsourcing"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Outsourcing</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("outsourcing");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
            <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "outsourcing" ? "rotate-180" : ""}`} />
          </button>
        </a>
        {dropdownOpen === "outsourcing" && (
          <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
            <a href="/services/outsourcing/infrastructure-outsourcing" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Infrastructure Outsourcing
            </a>
            <a href="/services/outsourcing/staff-outsourcing" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Staff Outsourcing
            </a>
          </div>
        )}
        <a
          href="/services/development"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Development</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("development");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
            <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "development" ? "rotate-180" : ""}`} />
          </button>
        </a>
        {dropdownOpen === "development" && (
          <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
            <a href="/services/development/software-development" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Software Development
            </a>
            <a href="/services/development/product-development" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Product Development
            </a>
          </div>
        )}
        <a
          href="/services/software-training"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Software Training</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("software-training");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
            <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "software-training" ? "rotate-180" : ""}`} />
          </button>
        </a>
        {dropdownOpen === "software-training" && (
          <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
            <a href="/services/software-training/corporate-training" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Corporate Training
            </a>
            <a href="/services/software-training/on-job-training" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              On-Job Training
            </a>
            <a href="/services/software-training/project-training" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Project Training
            </a>
            <a href="/services/software-training/online-offline-training" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
              Online & Offline Training
            </a>
          </div>
        )}
      </div>
      {/* Promotional Content */}
      <div className="flex flex-col items-center p-4 mt-6 bg-[#F2F9F9] rounded-lg shadow-lg">
        <div className="relative w-full h-36 rounded-lg overflow-hidden border-2 border-[#001442] bg-cover bg-center" style={{ backgroundImage: "url(/development/img9.jpg)" }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

          <div className="relative p-4 z-20 flex flex-col justify-center h-full text-center">
            <p className="mb-2 text-lg font-bold text-white">Transform Your Business</p>
            <p className="mb-3 text-sm font-medium text-gray-300">Empower your team with cutting-edge solutions.</p>
            <button
              type="button"
              onClick={() => (window.location.href = "/services")}
              className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-semibold text-white bg-[#001442] rounded-lg hover:bg-[#00D1F9] focus:outline-none transition-all duration-300 group mx-auto">
              <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1.5">
                Explore Now
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
