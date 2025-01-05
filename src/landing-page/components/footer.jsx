import Phone from '../images/phone-call.png'
import Mail from '../images/envelope.png'
import Location from '../images/marker.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <h2 className="font-bold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>QAPMS</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Analytics</h2>
            <ul className="space-y-2">
              <li>Data Management & Processing</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Risk management</h2>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>QAPMS</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Policy</h2>
            <ul className="space-y-2">
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
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
