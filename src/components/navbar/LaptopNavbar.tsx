import React, { useState, useEffect, useRef } from "react";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import NavbarLogo from "./NavbarLogo";
import MegaMenu from "./MegaMenu";

const LaptopNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node) && servicesButtonRef.current && !servicesButtonRef.current.contains(event.target as Node)) {
      setIsMegaMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 300);
    setTimeoutId(id);
  };

  return (
    <nav className="bg-[var(--navbar-background)] border-[var(--box-shadow-color)] relative" style={{ boxShadow: "0 4px 8px var(--box-shadow-color)" }}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <NavbarLogo />
        <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className={`md:flex md:w-auto md:order-1 ${isMenuOpen ? "flex" : "hidden"}`} id="mega-menu-full-image">
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0 font-medium">
            <li className="w-full md:w-auto">
              <button
                ref={servicesButtonRef}
                id="mega-menu-full-cta-image-button"
                className="flex items-center justify-between w-full py-2 px-3 font-medium heading border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 navbar-hover-text md:p-0"
                onClick={toggleMegaMenu}
                onMouseEnter={handleMouseEnter}>
                Services
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
          
            <li className="flex items-center">
              <MenuItem label="Technology" href="/technology" showIcon={false} />
            </li>
            <li className="flex items-center">
              <MenuItem label="Clients" href="/clients" showIcon={false} />
            </li>
            <li className="flex items-center">
              <MenuItem label="Contact Us" href="/contact-us" showIcon={false} />
            </li>
            <li className="flex items-center">
              <MenuItem label="Career" href="/Career" showIcon={false} />
            </li>
            <li className="flex items-center">
              <MenuItem label="About" href="/About" showIcon={false} />
            </li>
          </ul>
        </div>
      </div>
      <MegaMenu ref={megaMenuRef} isOpen={isMegaMenuOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </nav>
  );
};

export default LaptopNavbar;
