import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'
import img5 from './imgs/img5.png'
import img6 from './imgs/img6.png'
import p1 from './imgs/p-1.png'
import p2 from './imgs/p-2.png'
import p3 from './imgs/p-3.png'
import p4 from './imgs/p-4.png'
import p5 from './imgs/p-5.png'
import p6 from './imgs/p-6.png'
import Phone from '../../landing-page/images/phone-call.png';
import Mail from '../../landing-page/images/envelope.png';
import Location from '../../landing-page/images/marker.png';
import { useState } from 'react';


export default function CareerPageHero() {
  return (
    <div>
      <div className="w-screen flex-wrap flex-col bg-black text-white flex h-screen items-center justify-center text-center p-4">
          <h1 className="text-3xl md:text-6xl font-bold font-kufam mt-6 mb-12 leading-relaxed">
              TRAFFIC AND ENGAGEMENT <br/> METRICS FOR CAREER PAGE
          </h1>
          <p className="text-lg md:text-2xl font-montserrat text-gray-300 mb-24 leading-relaxed">
              Identify, assess, and mitigate risks with data-driven <br /> insights tailored to your business needs.
          </p>
          <button className="bg-[#5BD8A3] hover:bg-green-300 font-montserrat mt-6 text-black gap-2 font-medium py-3 px-5 rounded-md flex items-center">
              Get In Touch
              <img
                  src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/192f3b2d699a273c665bf60310f3cb2cf3b3992509fd278e60369b421f9ef038?apiKey=49da03168f27461ca59f3dd580a07fb1&"
                  alt="Arrow icon"
                  className="w-5 h-5 ml-2"
              />
          </button>
      </div>
      <ImageLayout/>
      <WhyJoinUs/>
      <ImageLayout2/>
      <AllFooter/>
      
    </div>
  );
}

export const ImageLayout = () => {
  return (
    <div className="grid bg-white grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-4">
      {/* First row */}
      <div className="col-span-1 md:col-span-1">
        <img
          src={img1}
          alt="First image"
          className="object-cover"
        />
      </div>
      <div className="col-span-1 md:col-span-1 relative">
        <img
          src={img2}
          alt="Presentation"
          className="object-cover"
        />
        <img
          src={img3}
          alt="Smiling professional"
          className="object-cover absolute bottom-0 left-0"
        />
      </div>

      {/* Second row */}
      <div className="col-span-1 md:col-span-1">
        <img
          src={img4}
          alt="Writing notes"
          className="object-cover"
        />
      </div>

      {/* Third row */}
      <div className="col-span-1 md:col-span-1 relative">
        <img
          src={img5}
          alt="Working on a laptop"
          className="object-cover"
        />
        <img
          src={img6}
          alt="Happy individual with laptop"
          className="object-cover absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};



const WhyJoinUs = () => {
  const features = [
    {
      title: "Fast Growing Company",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor turpis eget diam magna donec rhoncus sagittis lorem id.",
    },
    {
      title: "Great Colleagues",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor turpis eget diam magna donec rhoncus sagittis lorem id.",
    },
    {
      title: "Take Charge",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor turpis eget diam magna donec rhoncus sagittis lorem id.",
    },
    {
      title: "Growth Opportunities",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor turpis eget diam magna donec rhoncus sagittis lorem id.",
    },
    {
      title: "Impactful And Challenging Work",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor turpis eget diam magna donec rhoncus sagittis lorem id.",
    },
    {
      title: "Work-Life Balance",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porttitor turpis eget diam magna donec rhoncus sagittis lorem id.",
    },
  ];

  return (
    <section className="bg-[#D7CDE6] w-screen h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className='h-11'></div>
        <h2 className="text-3xl font-montserrat font-semibold text-black text-center mb-16 underline decoration-2" style={{ textUnderlineOffset: '16px', textDecorationColor: '#9C69EB' }}>
          Why Join Us?
        </h2>
      <div className="h-10"></div>
       
        <div className="grid grid-cols-1 font-montserrat sm:grid-cols-2 text-gray-800 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md border-gray-400 border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-[#D7CDE6] rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllFooter = () => {
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
            <li><a className="text-white" href="/">Home</a></li>
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

export const ImageLayout2 = () => {
  return (
    <div className="grid bg-white grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-4">
      {/* First row */}
      <div className="col-span-1 md:col-span-1">
        <img
          src={p1}
          alt="First image"
          className="object-cover"
        />
      </div>
      <div className="col-span-1 md:col-span-1">
        <img
          src={p2}
          alt="Writing notes"
          className="object-cover"
        />
      </div>
      <div className="col-span-1 md:col-span-1 relative">
        <img
          src={p3}
          alt="Presentation"
          className="object-cover"
        />
        <img
          src={p4}
          alt="Smiling professional"
          className="object-cover absolute bottom-0 left-0"
        />
      </div>

      {/* Third row */}
      <div className="col-span-1 md:col-span-1 relative">
        <img
          src={p5}
          alt="Working on a laptop"
          className="object-cover"
        />
        <img
          src={p6}
          alt="Happy individual with laptop"
          className="object-cover absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};




