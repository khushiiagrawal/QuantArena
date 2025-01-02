import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#" },
    { label: "Services", link: "#", hasDropdown: true },
    { label: "QAPMS", link: "#" },
    { label: "Career", link: "#" },
    { label: "Contact Us", link: "#" }
  ];

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-16 py-6 bg-black bg-opacity-50 shadow-md z-50">
      <div className="text-3xl text-white">Logo</div>
      <nav className="flex items-center gap-8 text-lg">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            <a
              href={item.link}
              className="text-white hover:text-gray-300 transition-colors flex items-center"
              onClick={item.hasDropdown ? handleDropdownToggle : null}
            >
              {item.label}
              {item.hasDropdown && (
                <span className="ml-3 w-2.5 h-2.5 border-b-2 border-r-2 border-white rotate-45 transform translate-y-[2px]"></span>
              )}
            </a>
            {item.hasDropdown && isDropdownOpen && (
              <ul className="absolute top-[80%] mt-5 w-40 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#">Service 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#">Service 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#">Service 3</a>
                </li>
              </ul>
            )}
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-2 text-lg font-medium text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/0a623bc57fb9bee0580045249f3a76eac147fd8aee4876041b41185b52ddde14?apiKey=49da03168f27461ca59f3dd580a07fb1&"
          alt="Phone icon"
          className="w-5 h-5 filter invert"
        />
        1008899097
      </div>
    </header>
  );
}
