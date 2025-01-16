import expertiseIcon from '../images/Vector.png';
import tailoredSolutionsIcon from '../images/Group 14.png';
import advancedAnalyticsIcon from '../images/Group 15.png';

export default function WhyChooseUs() {
    const fontStyle = { fontFamily: 'Montserrat, sans-serif' };

    return (
        <div className="relative bg-[#F8F4FD] text-black" style={fontStyle}>
            {/* Header Section */}
            <div
                className="relative h-32 flex items-center justify-center md:mr-20"
                style={{ backgroundColor: '#9E6AED' }}
            >
                {/* Large Background Text */}
                <h1
                    className="absolute text-[30px] sm:text-[70px] md:text-[50px] lg:text-[110px] font-extrabold uppercase text-white opacity-10"
                    style={{ ...fontStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                    WHY CHOOSE US?
                </h1>

                {/* Foreground Text */}
                <h2 className="absolute top-0 font-montserrat left-4 m-10 text-xl md:text-3xl font-semibold uppercase text-white">
                    Why choose us?
                </h2>
            </div>

            {/* Cards Section */}
            <div className="relative mt-12 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Inquisitiveness And Expertise */}
                <div className="bg-white shadow-lg p-8 text-center" style={{ minHeight: '400px' }}>
                    <div className="flex justify-center mt-2">
                        <div className="w-16 h-16 rounded-full bg-[#E9DFF8] flex items-center justify-center">
                            <img
                                src={advancedAnalyticsIcon}
                                alt="Expertise Icon"
                                className="w-10 h-12"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold font-montserrat text-gray-900 mt-10">
                        Inquisitiveness And Expertise
                    </h3>
                    <p className="text-gray-700 mt-8 text-sm font-montserrat leading-relaxed">
                        
                        Empower your organization with our advanced analytics services. By
                        employing cutting-edge statistical methods and real-time data analysis,
                        we deliver actionable insights that drive business success. Our advanced
                        analytics solutions help you identify hidden patterns, forecast trends,
                        and optimize your strategies.
                    </p>
                </div>

                {/* Card 2: Tailored Solutions */}
                <div className="bg-white shadow-lg p-8 text-center" style={{ minHeight: '400px' }}>
                    <div className="flex justify-center mt-2">
                        <div className="w-16 h-16 rounded-full bg-[#E9DFF8] flex items-center justify-center">
                            <img
                                src={tailoredSolutionsIcon}
                                alt="Tailored Solutions Icon"
                                className="w-10 h-12"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold font-montserrat text-gray-900 mt-10">
                        Tailored Solutions
                    </h3>
                    <p className="text-gray-700 font-montserrat text-sm mt-8 leading-relaxed">
                        Delivering results that fit your business like a glove, our tailored
                        solutions ensure your unique needs are met with precision. We specialize
                        in custom analytics and risk management strategies designed to address
                        your specific objectives and challenges.
                    </p>
                </div>

                {/* Card 3: Advanced Analytics */}
                <div className="bg-white shadow-lg p-8 text-center" style={{ minHeight: '450px' }}>
                    <div className="flex justify-center mt-2">
                        <div className="w-16 h-16 rounded-full bg-[#E9DFF8] flex items-center justify-center">
                            <img
                                src={expertiseIcon}
                                alt="Advanced Analytics Icon"
                                className="w-10 h-12"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold font-montserrat mt-10 text-gray-900 mb-4">
                        Advanced Analytics
                    </h3>
                    <p className="text-gray-700 font-montserrat text-sm mt-8 leading-relaxed">
                    Our team consists of individuals who are inquisitive by nature and have
                        expertise in the field of analytics and risk management, ready to
                        transform your raw data into actionable insights through comprehensive
                        analysis, predictive analytics, and automated solutions (wherever needed).
                        
                    </p>
                </div>
                <div className='mt-6'></div>
            </div>
            
        </div>
        
    );
}

export function PartnerSection() {
    return (
      <div className="relative py-14 bg-gradient-to-r from-gray-500 to-gray-100 text-center font-montserrat">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-white pointer-events-none"></div>
  
        {/* Content Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Heading Section */}
          <h2 className="text-2xl md:text-4xl text-montserrat font-smedium text-black mt-12">
            WHY A PARTNER THAT YOU MAY <br /> RELY ON?
          </h2>
          {/* Underline */}
          <div className="w-20 md:w-60 h-0.5 bg-[#9E6AED] mx-auto my-4"></div>
  
          {/* Paragraph Section */}
          <div className="mt-10 px-4 md:px-8">
            <p className="text-base md:text-lg text-gray-900 font-montserrat leading-8 mb-10">
              We bring unparalleled expertise and a commitment to excellence. Our
              team of dedicated professionals leverages assiduous research and
              cutting-edge technologies to deliver tailored solutions that meet
              your unique needs. We prioritize accuracy, integrity, and client
              satisfaction, ensuring that every decision is backed by robust data
              and statistical insights. By choosing us as your analytics and risk
              management partner, you gain the most reliable ally focused on
              driving your business forward and helping you navigate challenges
              with confidence and innovation.
            </p>
          </div>
        </div>
      </div>
    );
}
