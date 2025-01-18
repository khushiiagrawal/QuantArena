import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Phone from '../images/phone-call.png';
import Mail from '../images/envelope.png';
import Location from '../images/marker.png';
import Logo from '../images/logo.png';


export default function Footer() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();
    setShowServicesDropdown(!showServicesDropdown);
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    navigate('/policy');
    setTimeout(() => {
      const element = document.getElementById('terms-and-conditions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    navigate('/policy');
    setTimeout(() => {
      const element = document.getElementById('privacy');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleLegalClick = (e) => {
    e.preventDefault();
    navigate('/policy');
    setTimeout(() => {
      const element = document.getElementById('legal');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <footer className="bg-black text-white py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-gray-600 pb-8">
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
          <span className="text-lg">Office no. A-15, Sr. no. 90, <br /> Majestique Memories, NIBM <br /> Annex, Mohammadwadi,<br /> Pune - 411060 (MH)</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Subscribe */}
        <div className="col-span-1 md:col-span-1 flex justify-center md:justify-start">
          <div className="w-48 h-auto">
            <img src={Logo} alt="QuantArena" />
          </div>
        </div>

        {/* Links */}
        <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h2 className="font-bold mb-4 underline text-white">Pages</h2>
            <ul className="space-y-2">
              <li className="text-white"><a href="/" className="text-white">Home</a></li>
              <li><a href="/" onClick={handleServicesClick} className="text-white">Services</a></li>
              {showServicesDropdown && (
                <ul className="space-y-2 pl-4">
                  <li><a href="/analytics" className="text-white">Analytics</a></li>
                  <li><a href="/risk-management" className="text-white">Risk Management</a></li>
                </ul>
              )}
              <li><a href="/qamps" className="text-white">QAPMS</a></li>
              <li><a href="/career" className="text-white">Career</a></li>
              <li><a href="/contact-us" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 underline text-white">Analytics</h2>
            <ul className="space-y-2">
              <li className="text-white"><a href="/data-management" className="text-white">Data Management
                <br /> & Processing</a></li>
              <li className="text-white"><a href="/data-analytics" className="text-white">Data Analytics</a></li>
              <li className="text-white"><a href="/financial-analytics" className="text-white">Financial Analytics</a></li>
              <li className="text-white"><a href="/enterprise-policy" className="text-white">Enterprise Policy
                Development</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4 underline text-white">Risk management</h2>
            <ul className="space-y-2">
              <li className="text-white"><a href="/model-review" className="text-white">Model Review</a></li>
              <li className="text-white"><a href="/policy-review" className="text-white">Policy Review</a></li>
              <li className="text-white"><a href="/enterprise-risk-framework" className="text-white">Enterprise Risk Framework</a></li>
              <li className="text-white"><a href="/risk-review" className="text-white">Risk Review</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 underline text-white">Policy</h2>
            <ul className="space-y-2">
              <li><a className="text-white" href="/policy" onClick={handleTermsClick}>Terms & Condition</a></li>
              <li><a className="text-white" href="/policy" onClick={handlePrivacyClick}>Privacy Policy</a></li>
              <li><a className="text-white" href="/policy" onClick={handleLegalClick}>Legal Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 underline text-white">Links</h2>
            <ul className="space-y-2">
              <li><a className="text-white" href="/">LinkedIn</a></li>
              <li><a className="text-white" href="/">Facebook</a></li>
              <li><a className="text-white" href="/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        © {currentYear} All Rights Reserved
      </div>
    </footer>
  );
}
