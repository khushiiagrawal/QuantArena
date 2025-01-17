import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logout from "../images/logout.png";
import pswd from "../images/pswd.png";
import Logo from "../images/Logo.png";

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const dropdownRefs = useRef([]);
  const profileRef = useRef(null);

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
    const newIsMobileMenuOpen = !isMobileMenuOpen;
    setIsMobileMenuOpen(newIsMobileMenuOpen);
    const servicesIndex = navItems.findIndex(item => item.label === "Services");
    setOpenDropdownIndex(newIsMobileMenuOpen ? servicesIndex : null);
  };

  const handleProfileDropdownToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

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

  const textColorClass = "text-black";
  const hoverTextColorClass = "hover:text-gray-700";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current.some(ref => ref && ref.contains(event.target)) || (profileRef.current && profileRef.current.contains(event.target))) {
        return;
      }
      setOpenDropdownIndex(null);
      setIsProfileDropdownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="Header">
      <header className="fixed w-full flex items-center justify-between px-8 md:px-12 py-3 md:py-5 bg-white bg-opacity-90 font-montserrat shadow-md transition-colors duration-300 z-50">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-48 h-auto" />
          </Link>
        </div>
        <nav
          className={`${isMobileMenuOpen
            ? "absolute top-full left-0 w-full bg-white z-50 flex flex-col"
            : "hidden"
            } md:flex md:flex-row md:static flex-1 items-center justify-center md:gap-10`}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              ref={item.hasDropdown ? (el) => (dropdownRefs.current[index] = el) : null}
              onClick={() => item.hasDropdown && handleDropdownToggle(index)}
            >
              <Link
                to={item.link}
                className={`${textColorClass} text-xl ${hoverTextColorClass} text-black hover:underline transition-colors flex items-center`}
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
                    className={`ml-1 md:ml-3 w-4 h-4 transform ${openDropdownIndex === index ? "rotate-180" : "rotate-0"
                      } transition-transform ${textColorClass}`}
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
              {item.hasDropdown && (openDropdownIndex === index || isMobileMenuOpen) && (
                <ul
                  className={`${isMobileMenuOpen
                      ? "static mt-2 w-full"
                      : "absolute top-full left-0 text-xl mt-2 w-60"
                    } bg-gray-200 text-black rounded shadow-lg z-50`}
                >
                  <Link to="/analytics" onClick={() => setOpenDropdownIndex(null)}>
                    <li className="px-3 py-5 font-semibold text-center hover:rounded hover:bg-gray-300 cursor-pointer">
                      <span className="text-[#9E6AED]">Analytics</span>
                    </li>
                  </Link>
                  <Link to="/risk-management" onClick={() => setOpenDropdownIndex(null)}>
                    <li className="px-3 py-5 font-semibold text-center hover:rounded hover:bg-gray-300 cursor-pointer">
                      <span className="text-[#9E6AED]">Risk Management</span>
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          ))}
          <Link
            to="/contact-us"
            className={`bg-[#9E6AED] text-white px-4 py-2 rounded hover:bg-purple-200 transition-colors flex items-center md:hidden ${location.pathname === "/dashboard" || location.pathname === "/projectid" || location.pathname === "/changepswd" ? "mr-4" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          {(location.pathname === "/dashboard" || location.pathname === "/projectid") && (
            <div className="relative md:hidden" ref={profileRef}>
              <button onClick={handleProfileDropdownToggle} className="flex bg-white rounded-full w-12 h-12 border border-gray-100 hover:bg-gray-300 hover:border-gray-200 focus:outline-none">
                <img src="/path/to/profile-image.jpg" alt="Profile" className="w-8 h-8 bg-white rounded-full" />
              </button>
              {(isProfileDropdownOpen || isMobileMenuOpen) && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white text-black rounded shadow-lg z-50">
                  <li className="px-4 py-2 flex items-center">
                    <img src="/path/to/profile-image.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <div className="font-semibold truncate max-w-full">John Doe</div>
                      <div className="text-sm text-start text-gray-600 truncate max-w-full">john.doe@example.com</div>
                    </div>
                  </li>
                  {(location.pathname === "/qapms") && (
                    <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-100 cursor-pointer" onClick={toggleTheme}>Dark/Light Mode</li>
                  )}
                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-100 cursor-pointer flex items-center">
                    <img src={pswd} alt="Change Password" className="w-5 h-5 mr-2" />
                    Change Password
                  </li>
                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-100 cursor-pointer flex items-center">
                    <img src={logout} alt="Logout" className="w-5 h-5 mr-2" />
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact-us"
            className={`bg-[#9E6AED] text-white px-4 py-2 rounded hover:bg-purple-200 transition-colors flex items-center ${location.pathname === "/dashboard" || location.pathname === "/projectid" || location.pathname === "/changepswd" ? "mr-4" : ""}`}
          >
            Contact Us
          </Link>
          {(location.pathname === "/dashboard" || location.pathname === "/projectid" || location.pathname === "/changepswd") && (
            <div className="relative" ref={profileRef} onTouchStart={handleProfileDropdownToggle}>
              <button onClick={handleProfileDropdownToggle} className="flex bg-white rounded-full w-12 h-12 border border-gray-100 hover:bg-gray-300 hover:border-gray-200 focus:outline-none">
                <img src="/path/to/profile-image.jpg" alt="Profile" className="w-8 h-8 bg-white rounded-full" />
              </button>
              {isProfileDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-60 bg-white text-black rounded shadow-lg z-50">
                  <li className="px-4 py-2 flex items-center">
                    <img src="/path/to/profile-image.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-gray-600 truncate">john.doe@example.com</div>
                    </div>
                  </li>
                  {(location.pathname === "/projectid") && (
                    <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-100 cursor-pointer" onClick={toggleTheme}>
                      Dark/Light Mode
                    </li>
                  )}
                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-100 cursor-pointer flex items-center" onClick={toggleTheme}>
                    {theme === "light" ? (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12h-1m15.36 4.95l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z"></path>
                        </svg>
                        Light Mode
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12h-1m15.36 4.95l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z"></path>
                        </svg>
                        Dark Mode
                      </>
                    )}
                  </li>
                  
                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white text-black bg-gray-100 cursor-pointer flex items-center">
                    <Link to="/changepswd" className="flex items-center text-black hover:text-white">
                      <img src={pswd} alt="Change Password" className="w-5 h-5 mr-2 text-black hover:text-white" />
                      Change Password
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-100 cursor-pointer flex items-center">
                    <img src={logout} alt="Logout" className="w-5 h-5 mr-2" />
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={handleMobileMenuToggle} className="text-white focus:outline-none">
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
