import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("bg-white bg-opacity-60");
  const location = useLocation();

  const navItems = [
    { label: "Home", link: "/home" },
    { label: "Services", hasDropdown: true },
    { label: "QAPMS", link: "/qapms" },
    { label: "Career", link: "/career" },
    { label: "Contact Us", link: "/contact-us" },
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
          setHeaderBg("bg-white bg-opacity-60");
        } else {
          setHeaderBg("bg-black bg-opacity-60");
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
      setHeaderBg("bg-black bg-opacity-60");
    }
  }, [location.pathname]);

  const textColorClass = headerBg.includes("bg-black") ? "text-white" : "text-black";

  return (
    <div id="Header">
      <header className={`fixed w-screen flex items-center justify-between px-8 md:px-16 py-3 md:py-5 ${headerBg} font-montserrat shadow-md z-50 transition-colors duration-300`}>
        <div className={`text-2xl md:text-2xl ${textColorClass}`}>Logo</div>
        <div className="md:hidden">
          <button onClick={handleMobileMenuToggle} className={textColorClass}>
            <svg
              className="w-6 h-6"
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
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex items-center md:text-xl gap-4 md:gap-10 text-lg`}
        >
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item.link}
                className={`${textColorClass} hover:text-gray-600 hover:underline transition-colors flex items-center`}
                onClick={() => {
                  if (item.hasDropdown) {
                    handleDropdownToggle(index);
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
                <ul className={`absolute top-full left-0 mt-2 w-48 ${headerBg.includes("bg-white") ? "bg-black text-white" : "bg-white text-black"} shadow-lg`}>
                  <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                    <Link to="/services/service1">Service 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                    <Link to="/services/service2">Service 2</Link>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </nav>
      </header>
    </div>
  );
}
