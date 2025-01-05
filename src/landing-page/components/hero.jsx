export default function MainPage() {
  return (
    <div className="flex flex-wrap items-center justify-between px-6 py-8 h-full bg-black text-white md:px-20 md:py-12 relative">
      <div className="w-full md:max-w-lg mt-12 md:mt-18 md:ml-6 text-center md:text-left">
        <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold uppercase leading-tight text-white">
          Advanced Analytics & Risk Management Solutions
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl font-light leading-relaxed">
          Identify, assess, and mitigate with data-driven insights tailored to
          your business needs.
        </p>
        <button className="flex items-center justify-center gap-2 px-4 py-2 mt-6 bg-green-300 text-black rounded-md shadow hover:bg-green-500 transition">
          <span>Get In Touch</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/192f3b2d699a273c665bf60310f3cb2cf3b3992509fd278e60369b421f9ef038?apiKey=49da03168f27461ca59f3dd580a07fb1&"
            alt="Arrow icon"
            className="w-5 h-5"
          />
        </button>
      </div>
      <div className="w-full md:flex-1 mt-12 md:mt-0 md:ml-30 max-w-xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/535f906c05d9d3ce1bcbc19837a3d3cc02d374afaac2315d8d1369cfe3c85590?apiKey=49da03168f27461ca59f3dd580a07fb1&"
          alt="Hero illustration"
          className="w-full h-auto max-w-6xl mt-10 md:mt-24 py-6 md:py-4 transform transition-transform duration-500 hover:scale-105 hover:rotate-2"
        />
      </div>
    </div>
  );
}


export function AboutSection() {
  return (
    <div className="relative py-4 bg-gradient-to-r from-gray-400 to-gray-100 text-center font-montserrat">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-2xl md:text-4xl text-montserrat font-medium text-black mt-12">
          Who Is QuantArena?
        </h2>
        {/* Underline */}
        <div className="w-20 md:w-60 h-0.5 bg-[#9E6AED] mx-auto my-4"></div>

        {/* Paragraph Section */}
        <div className="mt-10 px-4 md:px-8">
          <p className="text-base md:text-lg text-gray-900 font-montserrat leading-8 mb-10">
            QuantArena Analytics and Risk Management Private Limited
            (<span className="italic">&quot;QuantArena&quot;</span>), having CIN ****, is a
            company incorporated to cater to the diverse analytics and risk
            management-related needs of individuals and/or organizations
            belonging to any sector. Starting from any kind of analytics with or
            without statistical modeling to financial analytics, model
            validation, policy development and validation, enterprise risk
            framework development and maintenance; we are the one-stop shop for
            all your analytics and risk management needs.
          </p>
        </div>
      </div>
    </div>
  );
}
