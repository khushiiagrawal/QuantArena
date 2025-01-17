



import bgContact from './bg-contact.png';
import call from './call.png';
import email from './email.png';
import location from './pin.png';
import whatsapp from './whatsapp.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import mapImage from './mapImage.png';
import pinImage from './pinImage.png';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  
  return (
    <div>
      <div
        className="min-h-screen w-screen bg-gray-200 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        {/* Header Section */}
        <div className="w-11/12 md:w-4/5 lg:w-3/5 text-center mt-20">
          <h1
            className="text-3xl font-semibold text-black font-kufam py-8 underline decoration-2"
            style={{ textUnderlineOffset: '16px', textDecorationColor: '#9C69EB' }}
          >
            Get In Touch
          </h1>
          <p className="text-center text-gray-600 font-montserrat px-4 md:px-8">
          We’d love to hear from you! Whether you have questions, need assistance, or want to discuss a project or potential partnerships, our team is here to help. Use the form below to get in touch, and we’ll respond to your inquiry as soon as possible. Alternatively, you may also choose to email or call using our contact details.
          </p>
        </div>

        {/* Contact Form Section */}
          <div className="bg-white shadow-md mt-10 w-full md:w-4/5 lg:w-3/4">
            <div className="p-4 md:p-6 lg:flex gap-6">
              {/* Contact Form */}
            <div className="flex-1">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <label className="block font-montserrat text-black mb-2" htmlFor="firstName">First Name<span className='text-red-500'>*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="w-full p-3 border text-black bg-white border-gray-300 rounded-md"
                      required
                      name="firstName"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block font-montserrat text-black mb-2" htmlFor="lastName">Last Name<span className='text-red-500'>*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full p-3 border text-black bg-white border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-montserrat text-black mb-2" htmlFor="email">Email Address<span className='text-red-500'>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block font-montserrat text-black mb-2" htmlFor="phone">Phone Number<span className='text-red-500'>*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block font-montserrat text-black mb-2" htmlFor="message">Message<span className='text-red-500'>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full p-3 border text-black bg-white border-gray-300 rounded-md h-28"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-[#5BD8A3] text-white font-semibold rounded-md hover:bg-[#8EE8C2]"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* Contact Info */}
            <div className="flex-1 bg-[#9E6AED] text-white p-6 rounded-md mt-6 lg:mt-0">
              <div className="space-y-4">
                <div className="flex font-montserrat items-center gap-4">
                  <img src={call} alt="Call Icon"  />
                  <p className='text-left text-front'>+91-7758871196</p>
                </div>
                <div className="flex font-montserrat items-center gap-4">
                  <img src={email} alt="Email Icon"  />
                  <p className='text-left text-front'>connect@quantarena.co.in</p>
                </div>
                <div className="flex font-montserrat items-start gap-4">
                  <img src={location} alt="Location Icon" />
                  <p className='text-left text-front'>
                    Head Office: Office no. A-15, Sr. no. 90, Majestique Memories,NIBM Annex, Mohammadwadi, Pune- 411060 (MH) <br/> <br/> Registered Address: Office no. A-15, Sr. no. 90, Majestique Memories, NIBM Annex, Mohammadwadi, Pune- 411060 (MH)
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold font-montserrat">Follow Us</p>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/niloy-ray-07bbba176/" target="_blank" rel="noopener noreferrer">
                      <img src={linkedin} alt="Linkedin" className='w-12 h-12 cursor-pointer'/>
                    </a>
                    <a href="https://www.linkedin.com/in/niloy-ray-07bbba176/" target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt="Facebook" className='w-12 h-12 cursor-pointer' />
                    </a>
                  </div>
                  <br/>
                  <a href="https://www.linkedin.com/in/niloy-ray-07bbba176/" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="whatsapp" className='w-100 cursor-pointer'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative w-full mt-10">
          {/* Map Image */}
          <img
            src={mapImage}
            alt="Map Location"
            className="w-full h-100 object-cover"
          />
          {/* Clickable Pin */}
          <a
            href="https://maps.app.goo.gl/CnGt2VY13oNzQ8ti6"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src={pinImage}
              alt="Pin Icon"
              className="w-7 h-12 cursor-pointer"
            />
          </a>
        </div>
     
      </div>
      
   
    </div>
  );
};
export default ContactPage;



