import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../../landing-page/components/footer";
import { FaChartLine, FaDatabase, FaMoneyBillWave, FaBuilding } from "react-icons/fa";

const Analytics = () => {
  useEffect(() => {
    document.title = "Analytics Services";
  }, []);

  return (
    <div>
    <div className="w-screen min-h-screen font-montserrat bg-gradient-to-r from-[#CFB6F5] to-[#AA7BF1] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat mt-20 md:mt-6 text-white animate-bounce text-center">
        Analytics as Our Service
      </h1>
      <div className="grid grid-cols-1 container sm:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-12 gap-4 md:gap-6 w-full max-w-7xl">
        <Link
          to="/data-management"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaDatabase size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-8 lg:text-2xl">Data Management and Processing</span>
        </Link>
        <Link
          to="/data-analytics"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaChartLine size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-8 lg:text-2xl">Data Analytics</span>
        </Link>
        <Link
          to="/financial-analytics"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaMoneyBillWave size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-8 lg:text-2xl">Financial Analytics</span>
        </Link>
        <Link
          to="/enterprise-policy"
          className="bg-white text-[#9E6AED] text-center py-6 md:py-10 lg:py-14 px-4 md:px-6 lg:px-10 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-[#9C6EE4] hover:text-white flex flex-col items-center"
        >
          <FaBuilding size={40} md:size={60} className="mb-4" />
          <span className="text-lg md:text-xl md:mt-8 lg:text-2xl">Enterprise Policy Development</span>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Analytics;
