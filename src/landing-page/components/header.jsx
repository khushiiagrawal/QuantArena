import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/home" },
    { label: "Services", link: "/services", hasDropdown: true },
    { label: "QAPMS", link: "/qapms" },
    { label: "Career", link: "/career" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-8 md:px-16 py-4 md:py-6 bg-black bg-opacity-50 shadow-md z-50">
      <div className="text-2xl md:text-3xl text-white">Logo</div>
      <div className="md:hidden">
        <button onClick={handleMobileMenuToggle} className="text-white">
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
        } md:flex items-center gap-4 md:gap-10 text-lg`}
      >
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            <Link
              to={item.link}
              className="text-white hover:text-gray-300 transition-colors flex items-center"
              onClick={() => {
                if (item.hasDropdown) {
                  handleDropdownToggle();
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
              {item.hasDropdown && (
                <span className="ml-1 md:ml-3 w-2.5 h-2.5 border-b-2 border-r-2 border-white rotate-45 transform translate-y-[2px]"></span>
              )}
            </Link>
            {item.hasDropdown && isDropdownOpen && (
              <ul className="absolute top-[80%] mt-2 md:mt-5 w-32 md:w-40 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/services/service1">Service 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/services/service2">Service 2</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/services/service3">Service 3</Link>
                </li>
              </ul>
            )}
          </div>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-2 text-lg text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/0a623bc57fb9bee0580045249f3a76eac147fd8aee4876041b41185b52ddde14?apiKey=49da03168f27461ca59f3dd580a07fb1&"
          alt="Phone icon"
          className="w-4 h-4 md:w-5 md:h-5 filter invert"
        />
        <span className="text-sm md:text-base">1008899097</span>
      </div>
    </header>
  );
}
