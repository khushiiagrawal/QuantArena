import { Link } from "react-router-dom";
import { useEffect } from "react";

import { FaClipboardCheck, FaFileAlt, FaSitemap, FaShieldAlt } from "react-icons/fa";

const RiskManagement = () => {
  useEffect(() => {
    document.title = "Risk Management Services";
  }, []);

  return (
    <div className="w-screen min-h-screen font-montserrat bg-gradient-to-r from-[#CFB6F5] to-[#AA7BF1] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat mt-20 md:mt-6 text-white animate-bounce text-center">
        Risk Management as Our Service
      </h1>
      <div className="grid grid-cols-1 container sm:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-12 gap-4 md:gap-6 w-full max-w-7xl">
        <Link
          to="/model-review"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaClipboardCheck size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-12 lg:text-2xl">Model Review</span>
        </Link>
        <Link
          to="/policy-review"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaFileAlt size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-12 lg:text-2xl">Policy Review</span>
        </Link>
        <Link
          to="/enterprise-risk-framework"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaSitemap size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-12 lg:text-2xl">Enterprise Risk Framework</span>
        </Link>
        <Link
          to="/risk-review"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaShieldAlt size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-12 lg:text-2xl">Risk Review</span>
        </Link>
      </div>
    </div>
  );
};

export default RiskManagement;
