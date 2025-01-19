import herobg from '../images/Group2.png';

export default function MainPage() {
  return (
    <div id="Hero" >
      <div className="flex items-center justify-between px-6 py-8 min-h-screen w-auto  bg-black text-white md:px-20 md:py-12 relative" style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-auto md:max-w-lg mt-12 md:mt-18 md:ml-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight font-kufam text-white">
          Advanced Analytics & Risk Management Solutions
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl font-light font-montserrat leading-relaxed">
          Identify, assess and mitigate with data-driven insights tailored to
          your business needs.
        </p>
        
        <a href='/contact-us' className="flex items-center gap-1 justify-center py-2 w-36 mt-6 bg-[#5BD8A3] text-black font-montserrat hover:text-gray-800 rounded-md shadow hover:bg-[#82E3BA] transition">
          <span>Get In Touch</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/192f3b2d699a273c665bf60310f3cb2cf3b3992509fd278e60369b421f9ef038?apiKey=49da03168f27461ca59f3dd580a07fb1&"
            alt="Arrow icon"
            className="w-5 h-5"
          />
        </a>
      </div>
      <div className="w-full md:flex-1 mt-12 md:mt-0 md:ml-30 max-w-xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/535f906c05d9d3ce1bcbc19837a3d3cc02d374afaac2315d8d1369cfe3c85590?apiKey=49da03168f27461ca59f3dd580a07fb1&"
          alt="Hero illustration"
          className="w-full h-auto max-w-6xl mt-10 md:mt-24 py-6 md:py-4 transform transition-transform duration-500 hover:scale-105 hover:rotate-2"
        />
      </div>
     </div>
    </div>
  );
}


export function AboutSection() {
  return (
    <div id='about'>
      <div className="relative py-4 bg-gradient-to-r from-gray-500 to-gray-100 text-center font-montserrat">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-white pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-2xl md:text-4xl text-montserrat font-medium text-black mt-12">
          Who Is QuantArena?
        </h2>
        {/* Underline */}
        <div className="w-20 md:w-60 h-0.5 bg-[#9E6AED] mx-auto my-4"></div>

        {/* Paragraph Section */}
        <div className="mt-10 px-2 md:px-8">
          <p className="text-base md:text-lg text-gray-900 font-montserrat leading-8 mb-10">
            
            QuantArena Analytics and Risk Management Private Limited (‘QuantArena’), having CIN ****, is a company incorporated to cater the diverse analytics and risk management 
            related needs of individuals and/or organizations belonging to any sector. Starting from any kind of analytics with or without statistical modeling to financial analytics, 
            model validation, policy development and validation, enterprise risk framework development and maintenance; we are the one stop shop for all your analytics and risk management needs. 
            Our solutions are the most practical, curated as per your specific needs and provided to you in the most simplistic manner making us the analytics and risk manager partner that you’d love to rely on. 
            We do all these because we love doing these and our charges are very reasonably priced. Please refer to the Services section for details of our services.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}
