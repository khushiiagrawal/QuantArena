import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("bg-white bg-opacity-70");
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navItems = [
    { label: "Home", link: "/home" },
    { label: "Services", hasDropdown: true },
    { label: "QAPMS", link: "/qapms" },
    { label: "Career", link: "/career" },
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("Hero");
      const caSection = document.getElementById("ca");

      if (heroSection || caSection) {
        const section = heroSection || caSection;
        const sectionBottom = section.offsetTop + section.offsetHeight;

        if (window.scrollY <= sectionBottom) {
          setHeaderBg("bg-white bg-opacity-70");
        } else {
          setHeaderBg("bg-black bg-opacity-70");
        }
      }
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const caSection = document.getElementById("ca");
    if (caSection && window.scrollY <= caSection.offsetTop + caSection.offsetHeight) {
      setHeaderBg("bg-white bg-opacity-90");
    }
    if (location.pathname === "/contact-us") {
      setHeaderBg("bg-black bg-opacity-70");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textColorClass = headerBg.includes("bg-black") ? "text-white" : "text-black";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="Header">
      <header className={`fixed w-full flex items-center justify-between px-8 md:px-16 py-3 md:py-5 ${headerBg} font-montserrat shadow-md transition-colors duration-300 z-10`}>
        <div className={`text-2xl md:text-2xl ${textColorClass}`}>Logo</div>
        <nav className={`flex-1 flex items-center justify-center md:text-xl gap-4 md:gap-10 text-lg ${isMobileMenuOpen ? "block z-50" : "hidden"} md:flex`}>
          {navItems.map((item, index) => (
            <div key={index} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
              <Link
                to={item.link}
                className={`${textColorClass} hover:text-gray-600 hover:underline transition-colors flex items-center`}
                onClick={() => {
                  if (item.hasDropdown) {
                    handleDropdownToggle(index);
                  } else {
                    setOpenDropdownIndex(null);
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className={`ml-1 md:ml-3 w-4 h-4 transform ${openDropdownIndex === index ? "rotate-180" : "rotate-0"} transition-transform ${textColorClass}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </Link>
              {item.hasDropdown && openDropdownIndex === index && (
                <ul className={`absolute top-full rounded left-0 mt-2 w-60 bg-white text-black shadow-lg z-50`}>
                  <Link to="/analytics" onClick={() => setOpenDropdownIndex(null)}>
                    <li className="px-2 py-4 text-center hover:bg-gray-300 cursor-pointer">
                      <span className="text-[#9E6AED]">Analytics</span>
                    </li>
                  </Link>
                  <Link to="/risk-management" onClick={() => setOpenDropdownIndex(null)}>
                    <li className="px-2 py-4 text-center hover:bg-gray-300 cursor-pointer">
                      <span className="text-[#9E6AED]">Risk Management</span>
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          ))}
          <Link
            to="/contact-us"
            className={`block md:hidden bg-[#9E6AED] text-sm text-center text-white px-1 py-1 rounded hover:bg-purple-200 transition-colors`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            to="/contact-us"
            className={`bg-[#9E6AED] text-white px-4 py-2 rounded hover:bg-purple-200 transition-colors flex items-center`}
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleMobileMenuToggle} className="text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
