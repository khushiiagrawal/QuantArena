import { useState } from 'react';
import Phone from '../images/phone-call.png';
import Mail from '../images/envelope.png';
import Location from '../images/marker.png';

export default function Footer() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleServicesClick = (e) => {
    e.preventDefault();
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <footer className="bg-black text-white py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-gray-600 pb-8">
        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#9E6AED] flex items-center justify-center">
            <img src={Phone} alt="Phone" className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg">7758871196</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#FCBE60] flex items-center justify-center">
            <img src={Mail} alt="Mail" className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg">connect.quantarena.co.in</span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#9E6AED] flex items-center justify-center">
            <img src={Location} alt="Location" className="h-6 w-6 text-white" />
          </div>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-auto mx-auto px-8 mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Subscribe */}
        <div className="space-y-4 mb-8">
          <h1 className="text-xl px-12 font-bold">LOGO</h1>
        
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-12 w-auto mx-auto" /> */}

          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-white text-black rounded"
            />
            <button className="mt-4 px-6 py-2 bg-[#9E6AED] text-white">
              Subscribe
            </button>
          </div>
        </div>
             
        {/* Links */}
        <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h2 className="font-bold mb-4 text-white">Pages</h2>
            <ul className="space-y-2">
            <li className="text-white"><a href="#Header" onClick={(e) => { e.preventDefault(); document.getElementById('Header').scrollIntoView({ behavior: 'smooth' }); }} className="text-white">Home</a></li>
              <li><a href="/" onClick={handleServicesClick} className="text-white">Services</a></li>
              {showServicesDropdown && (
                <ul className="space-y-2 pl-4">
                  <li><a href="/service1" className="text-white">Service 1</a></li>
                  <li><a href="/service2" className="text-white">Service 2</a></li>
                </ul>
              )}
              <li><a href="/qamps" className="text-white">QAPMS</a></li>
              <li><a href="/career" className="text-white">Career</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              <li className="text-white"><a href="#AboutUs" onClick={(e) => { e.preventDefault(); document.getElementById('AboutUs').scrollIntoView({ behavior: 'smooth' }); }} className="text-white">About Us</a></li>
              <li className="text-white"><a href="#TeamSection" onClick={(e) => { e.preventDefault(); document.getElementById('TeamSection').scrollIntoView({ behavior: 'smooth' }); }} className="text-white">Our Team</a></li>
              <li className="text-white"><a href="/career" className="text-white">Career</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4 text-white">Analytics</h2>
            <ul className="space-y-2">
              <li className="text-white"><a href="/" className="text-white">Data Management & Processing</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4 text-white">Risk management</h2>
            <ul className="space-y-2">
            <li className="text-white"><a href="#Header" onClick={(e) => { e.preventDefault(); document.getElementById('Header').scrollIntoView({ behavior: 'smooth' }); }} className="text-white">Home</a></li>
              <li><a href="/" onClick={handleServicesClick} className="text-white">Services</a></li>
              {showServicesDropdown && (
                <ul className="space-y-2 pl-4">
                  <li><a href="/service1" className="text-white">Service 1</a></li>
                  <li><a href="/service2" className="text-white">Service 2</a></li>
                </ul>
              )}
              <li><a href="/qamps" className="text-white">QAPMS</a></li>
              <li><a href="/career" className="text-white">Career</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 text-white">Policy</h2>
            <ul className="space-y-2">
              <li><a className="text-white" href="/">Terms & Condition</a></li>
              <li> <a className="text-white" href="/">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 text-white">Links</h2>
            <ul className="space-y-2">
              <li><a className="text-white" href="/">Instagram</a></li>
              <li><a className="text-white" href="/">Facebook</a></li>
              <li><a className="text-white " href="/">LinkedIn</a></li>
              <li><a className="text-white" href="/">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-400">
          © {currentYear} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}