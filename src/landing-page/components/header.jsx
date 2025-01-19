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
  const [theme, setTheme] = useState(localStorage.getItem('dark-mode') === 'true' ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem('dark-mode', newTheme === 'dark');
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
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

  const textColorClass = theme === 'dark' ? 'text-white' : 'text-black';
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
      <header className="fixed w-full flex items-center justify-between px-6 md:px-10 py-3 md:py-5 dark:bg-black dark:bg-opacity-60 bg-white bg-opacity-90 font-montserrat shadow-md transition-colors duration-300 z-50">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-48 mr-1 h-auto" />
          </Link>
        </div>
        <nav
          className={`${isMobileMenuOpen
            ? "absolute top-full left-0 w-full bg-white dark:bg-black z-50 flex flex-col"
            : "hidden"
            } md:flex md:flex-row md:static flex-1 items-center justify-center md:gap-16`}
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
                    className={`ml-1 md:ml-1 w-4 h-4 transform ${openDropdownIndex === index ? "rotate-180" : "rotate-0"
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
            className={`bg-[#9E6AED] text-white px-4 py-2 rounded hover:bg-purple-200 transition-colors mb-2 flex items-center md:hidden ${location.pathname === "/dashboard" || location.pathname === "/projectid" || location.pathname === "/changepswd" ? "mr-4" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          {(location.pathname === "/dashboard" || location.pathname === "/projectid" || location.pathname === "/changepswd") && (
            <div className="relative md:hidden" ref={profileRef}>
              <button onClick={handleProfileDropdownToggle} className="flex bg-white rounded-full w-12 h-12 border border-gray-100 hover:bg-gray-300 hover:border-gray-200 focus:outline-none">
                <img src="/path/to/profile-image.jpg" alt="Profile" className="w-8 h-8 bg-white rounded-full" />
              </button>
              {(isProfileDropdownOpen || isMobileMenuOpen) && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gray-200 text-black rounded shadow-lg z-50">
                  <li className="px-4 py-2 flex items-center">
                    <img src="/path/to/profile-image.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <div className="font-semibold truncate max-w-full">John Doe</div>
                      <div className="text-sm text-start text-gray-600 truncate max-w-full">john.doe@example.com</div>
                    </div>
                  </li>
                  {(location.pathname === "/projectid" || location.pathname === "/dashboard") && (
                    <li>
                      <div className="flex flex-col items-center justify-center mb-3">
                        {/* Hidden Checkbox */}
                        <input
                          type="checkbox"
                          name="light-switch"
                          id="light-switch"
                          className="sr-only"
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleTheme();
                          }}
                        />
                        {/* Label styled as a switch */}
                        <label
                          htmlFor="light-switch"
                          className="relative cursor-pointer w-56 h-14 bg-[#ECE1FB] rounded flex items-center transition-colors px-1 duration-300 dark:bg-[#ECE1FB]"
                        >
                          {/* Switch knob */}
                          <span
                            className="absolute w-24 h-14 bg-white rounded shadow transform transition-transform duration-300 dark:translate-x-32 translate-x-0"
                          ></span>
                          {/* Light Mode Icon */}
                          <svg
                            className="absolute left-9 w-7 h-7 text-[#9E6AED] transition-opacity duration-300 dark:opacity-0 opacity-100 dark:text-gray-400 dark:opacity-90"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                            <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                          </svg>
                          {/* Dark Mode Icon */}
                          <svg
                            className="absolute right-9 w-7 h-7 dark:text-[#9E6AED] transition-opacity duration-300 dark:opacity-100 text-gray-400 opacity-90"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                            <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                          </svg>
                        </label>
                      </div>
                    </li>

                  )}



                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white text-black bg-gray-200 cursor-pointer flex items-center">
                    <Link to="/changepswd" className="flex items-center text-black hover:text-white">
                      <img src={pswd} alt="Change Password" className="w-5 h-5 mr-2 text-black hover:text-white" />
                      Change Password
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#9E6AED] hover:text-white bg-gray-200 cursor-pointer flex items-center">
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
            className={`bg-[#9E6AED] text-white px-4 py-2 h-12 rounded hover:bg-purple-200 ml-2 transition-colors flex items-center ${location.pathname === "/dashboard" || location.pathname === "/projectid" || location.pathname === "/changepswd" ? "mr-4" : ""}`}
          >
            Contact Us
          </Link>
          {(location.pathname === "/dashboard" || location.pathname === "/projectid" ) && (
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
                  {(location.pathname === "/projectid" || location.pathname === "/changepswd" || location.pathname === "/dashboard") && (
                    <li>
                      <div className="flex flex-col items-center justify-center mb-3">
                        {/* Hidden Checkbox */}
                        <input
                          type="checkbox"
                          name="light-switch"
                          id="light-switch"
                          className="sr-only"
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleTheme();
                          }}
                        />
                        {/* Label styled as a switch */}
                        <label
                          htmlFor="light-switch"
                          className="relative cursor-pointer w-48 h-12 bg-[#ECE1FB] rounded flex items-center transition-colors px-1 duration-300 dark:bg-[#ECE1FB]"
                        >
                          {/* Switch knob */}
                          <span
                            className="absolute w-24 h-11 bg-white rounded shadow transform transition-transform duration-300 dark:translate-x-24 translate-x-0"
                          ></span>
                          {/* Light Mode Icon */}
                          <svg
                            className="absolute left-9 w-7 h-7 text-[#9E6AED] transition-opacity duration-300 dark:opacity-0 opacity-100 dark:text-gray-400 dark:opacity-90"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                            <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                          </svg>
                          {/* Dark Mode Icon */}
                          <svg
                            className="absolute right-9 w-7 h-7 dark:text-[#9E6AED] transition-opacity duration-300 dark:opacity-100 text-gray-400 opacity-90"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                            <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                          </svg>
                        </label>
                      </div>
                    </li>

                  )}




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
