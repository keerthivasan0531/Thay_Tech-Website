import React from "react";
import {
  FaCode,
  FaCloud,
  FaExternalLinkAlt,
  FaBook,
  FaCogs,
} from "react-icons/fa";

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface MenuItem {
  href: string;
  icon: React.ReactNode;
  text: string;
  submenus?: { href: string; text: string }[];
}

const menuItems: MenuItem[] = [
  {
    href: "/services/development",
    icon: <FaCode />,
    text: "Development",
    submenus: [
      {
        href: "/services/development/software-development",
        text: "Software Development",
      },
      {
        href: "/services/development/product-development",
        text: "Product Development",
      },
    ],
  },
  {
    href: "/services/outsourcing",
    icon: <FaCogs />,
    text: "Outsourcing",
    submenus: [
      {
        href: "/services/outsourcing/infrastructure-outsourcing",
        text: "Infrastructure Outsourcing",
      },
      {
        href: "/services/outsourcing/staff-outsourcing",
        text: "Staff Outsourcing",
      },
    ],
  },
  {
    href: "/services/it-consulting",
    icon: <FaExternalLinkAlt />,
    text: "IT Consulting",
    submenus: [
      {
        href: "/services/it-consulting/tech-integration",
        text: "Tech Integration",
      },
      {
        href: "/services/it-consulting/security-solution",
        text: "Security Solution",
      },
    ],
  },
  {
    href: "/services/cloud-support",
    icon: <FaCloud />,
    text: "Cloud Support",
    submenus: [
      {
        href: "/services/cloud-support/application-support",
        text: "Application support",
      },
      {
        href: "/services/cloud-support/database-support",
        text: "Database support",
      },
      {
        href: "/services/cloud-support/operating-system",
        text: "Operating System",
      },
      {
        href: "/services/cloud-support/network-support",
        text: "Network support",
      },
    ],
  },
  {
    href: "/services/software-training",
    icon: <FaBook />,
    text: "Software Training",
    submenus: [
      {
        href: "/services/software-training/corporate-training",
        text: "Corporate Training",
      },
      {
        href: "/services/software-training/on-job-training",
        text: "On-Job Training",
      },
      {
        href: "/services/software-training/project-training",
        text: "Project Training",
      },
      {
        href: "/services/software-training/online-offline-training",
        text: "Online & Offline Training",
      },
    ],
  },
];

const MegaMenu = React.forwardRef<HTMLDivElement, MegaMenuProps>(
  ({ isOpen, onMouseEnter, onMouseLeave }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-3/4 border-gray-200 shadow-lg border-y ${
          isOpen ? "block" : "hidden"
        } z-50 rounded-lg`}
        style={{
          marginTop: "5px",
          paddingTop: "0px",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex flex-wrap max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500">
          {/* First Row: Menu Items */}
          <div className="flex flex-wrap w-full gap-y-8">
            {menuItems.slice(0, 3).map((item) => (
              <div key={item.href} className="w-full md:w-1/3 space-y-4">
                <a
                  href={item.href}
                  className="flex items-center space-x-2 group navbar-hover-text"
                >
                  <h3 className="text-lg font-medium flex items-center group-hover:text-[#00D1F9]">
                    {item.icon && (
                      <span className="mr-2 text-gray-500 group-hover:text-[#00D1F9]">
                        {item.icon}
                      </span>
                    )}
                    {item.text}
                  </h3>
                </a>
                {item.submenus && (
                  <ul className="space-y-2 mt-2">
                    {item.submenus.map((submenu) => (
                      <li
                        key={submenu.href}
                        className="flex items-center group"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9]"
                          style={{ transform: "rotate(270deg)" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                        <a
                          href={submenu.href}
                          className="text-gray-900 group-hover:text-[#00D1F9]"
                        >
                          {submenu.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Second Row: Menu Items and Promotional Content */}
          <div className="flex flex-wrap w-full gap-y-8 mt-8">
            {/* Menu Items */}
            {menuItems.slice(3).map((item) => (
              <div key={item.href} className="w-full md:w-1/3 space-y-4">
                <a
                  href={item.href}
                  className="flex items-center space-x-2 group navbar-hover-text"
                >
                  <h3 className="text-lg font-medium flex items-center group-hover:text-[#00D1F9]">
                    {item.icon && (
                      <span className="mr-2 text-gray-500 group-hover:text-[#00D1F9]">
                        {item.icon}
                      </span>
                    )}
                    {item.text}
                  </h3>
                </a>
                {item.submenus && (
                  <ul className="space-y-2 mt-2">
                    {item.submenus.map((submenu) => (
                      <li
                        key={submenu.href}
                        className="flex items-center group"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9]"
                          style={{ transform: "rotate(270deg)" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                        <a
                          href={submenu.href}
                          className="text-gray-900 group-hover:text-[#00D1F9]"
                        >
                          {submenu.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Promotional Content */}
            <div className="w-full md:w-1/3 lg:w-1/3">
              <div
                className="relative w-full h-36 rounded-lg overflow-hidden border-2 border-[var(--heading-text)] bg-cover bg-center"
                style={{ backgroundImage: "url(/development/img9.jpg)" }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

                <div className="relative p-4 z-20 flex flex-col justify-center h-full text-center">
                  <p className="mb-2 text-lg font-bold text-white">
                    Transform Your Business
                  </p>
                  <p className="mb-3 text-sm font-medium text-gray-300">
                    Empower your team with cutting-edge solutions.
                  </p>
                  <button
                    type="button"
                    onClick={() => (window.location.href = "/services")}
                    className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-semibold text-white bg-[var(--heading-text)] rounded-lg hover:bg-[var(--primary-button-icon)] focus:outline-none transition-all duration-300 group mx-auto"
                  >
                    <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1.5">
                      Explore Now
                      <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default MegaMenu;
