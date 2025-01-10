import Footer from '../landing-page/components/footer';
import bContact from './b-contact.png';

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bContact})` }}
    >
      {/* Header Section */}
      <div className="w-11/12 md:w-4/5 lg:w-3/5 text-center mt-20">
        <h1
          className="text-3xl font-semibold text-black font-montserrat py-8 underline decoration-2"
          style={{ textUnderlineOffset: '16px', textDecorationColor: '#9C69EB' }}
        >
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 font-montserrat px-4 md:px-8">
          We'd love to hear from you! Whether you have questions, need
          assistance, or want to discuss potential partnerships, our team is
          here to help. Use the form below to get in touch, and we'll respond to
          your inquiry as soon as possible.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white shadow-md mt-10 w-11/12 md:w-4/5 lg:w-3/5">
        <div className="p-4 md:p-6 lg:flex gap-6">
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 p-3 border text-black bg-white border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 p-3 border text-black bg-white border-gray-300 rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border text-black bg-white border-gray-300 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border text-black bg-white border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border text-black bg-white border-gray-300 rounded-md h-28"
              ></textarea>
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
              <div className="flex font-montserrat items-start gap-4">
                <span className="px-3 py-2 bg-white text-[#9E6AED] rounded-full">
                  📞
                </span>
                <p>+91-7758871196</p>
              </div>
              <div className="flex font-montserrat items-start gap-4">
                <span className="px-3 py-2 bg-white text-purple-500 rounded-full">
                  ✉️
                </span>
                <p>connect@quantarena.co.in</p>
              </div>
              <div className="flex font-montserrat items-start gap-4">
                <span className="px-3 py-2 bg-white text-purple-500 rounded-full">
                  📍
                </span>
                <p>Head Office: Office no. A-15, Sr. no. 90, Majestique Memories, NIBM Annex, Mohammadwadi, Pune- 411060 (MH) <br/> <br/> Registered Address: Office no. A-15, Sr. no. 90, Majestique Memories, NIBM Annex, Mohammadwadi, Pune- 411060 (MH) </p>
              </div>
              
              <div className="mt-6">
                <p className="font-semibold font-montserrat">Follow Us</p>
                <div className="flex gap-4 mt-2">
                  <span className="px-3 py-3 bg-white rounded-full"></span>
                  <span className="px-3 py-3 bg-white rounded-full"></span>
                  <span className="px-3 py-3 bg-white rounded-full"></span>
                </div>
                <button className="px-8 w-80 py-2 mt-4 bg-white text-black font-semibold hover:bg-gray-200">
                  Message us on Whatsapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
      <Footer />
    </div>
  );
};

export default ContactPage;
