import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'
import img5 from './imgs/img5.png'
import img6 from './imgs/img6.png'
import p3 from './imgs/p-3.png'
import p4 from './imgs/p-4.png'
import p5 from './imgs/p-5.png'
import p6 from './imgs/p-6.png'
import a1 from './imgs/fast.png'
import a2 from './imgs/great.png'
import a3 from './imgs/take.png'
import a4 from './imgs/growth.png'
import a5 from './imgs/impactful.png'
import a6 from './imgs/balance.png'
import Footer from '../../landing-page/components/footer'
import herobg from '../../landing-page/images/Group2.png';
import { FaBriefcase } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';




export default function CareerPageHero() {
  return (
    <div>
      <div id='ca'>
        <div className="w-screen flex-wrap flex-col bg-black text-white flex h-screen items-center justify-center text-center p-4" style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-3xl md:text-6xl font-bold font-kufam mt-6 mb-10 leading-relaxed">
            YOUR CAREER THROUGH <br /> OUR VISION
          </h1>
          <p className="text-lg md:text-2xl font-montserrat text-gray-300 mb-24 leading-relaxed">
            Shaping Your Career, Enriching Your Future <br /> Where Ambition Meets a Satisfied Pocket!
          </p>
          <span className="bg-[#5BD8A3]  font-montserrat mt-6 text-black gap-2 font-medium py-3 px-5 rounded-md flex items-center">
            Scroll Down
            <img
              src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/192f3b2d699a273c665bf60310f3cb2cf3b3992509fd278e60369b421f9ef038?apiKey=49da03168f27461ca59f3dd580a07fb1&"
              alt="Arrow icon"
              className="w-5 h-5 ml-2 transform rotate-90"
            />
          </span>
        </div>
      </div>
      <ImageLayout />
      <WhyJoinUs />
      <ImageLayout2 />
      <JobApplicationPage />
      <Footer />
    </div>
    );
  }

export const ImageLayout = () => {
  return (
    <div id='img'>
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
    <section className="bg-[#D7CDE6] w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-semibold text-black text-center mb-16 underline decoration-2" style={{ textUnderlineOffset: '16px', textDecorationColor: '#9C69EB' }}>
          Why Join Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md border-gray-400 border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-[#D7CDE6] rounded-full mb-4 flex items-center justify-center">
                <img src={index === 0 ? a1 : index === 1 ? a2 : index === 2 ? a3 : index === 3 ? a4 : index === 4 ? a5 : a6} alt="Icon" className="w-7 h-7" />
              </div>
              <h3 className="text-xl text-gray-800 font-montserrat font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export const ImageLayout2 = () => {
  return (
    <div className="grid bg-white grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-4">
      <div className="col-span-1 md:col-span-1 relative">
          <img
            src={p3}
            alt="Presentation"
            className="object-cover"
          />
          
        </div>
        <div className="col-span-1 md:col-span-1 relative">
          <img
            src={p4}
            alt="Presentation"
            className="object-cover"
          />
          
        </div>
        <div className="col-span-1 md:col-span-1 relative">
          <img
            src={p5}
            alt="Presentation"
            className="object-cover"
          />
          
        </div>
        <div className="col-span-1 md:col-span-1 relative">
          <img
            src={p6}
            alt="Presentation"
            className="object-cover"
          />
          
        </div>
    </div>
  );
};




import { useState, useEffect } from 'react';

export const JobApplicationPage = () => {
  const fontStyle = { fontFamily: 'Montserrat, sans-serif' };
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    introduce: '',
    contribution: '',
    importance: '',
    message: '',
    attachment: null
  });
  const [formData2, setFormData2] = useState({
    name2: '',
    phone2: '',
    email2: '',
    introduce2: '',
    contribution2: '',
    importance2: '',
    message2: '',
    attachment2: null,
    link2: '',

  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const jobsPerPage = 8;
  const [selectedDes, setSelectedDes] = useState(null);

  const jobPositions = [
    { title: 'Sr. UI UX Designer', location: 'Pune, India', type: 'Full Time', description: 'Job description for Sr. UI UX Designer.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo quis ligula facilisis auctor. Sed sollicitudin leo ut lorem efficitur, a fermentum lorem sodales. Nullam tempor, nisi eu luctus gravida, nunc erat lobortis nisi, sed facilisis elit justo non nunc. Maecenas euismod sem et enim tincidunt, non suscipit enim euismod. Integer vel justo a nunc vestibulum egestas ac non felis. Vivamus maximus erat ac bibendum vehicula. Fusce euismod ex eu malesuada fermentum. Nulla facilisi. Curabitur venenatis nibh ut ante tempus, vel tempor neque vulputate. ', criteria: 'Criteria for Sr. UI UX Designer' },
    { title: 'Sr. Software Developer', location: 'Bangalore, India', type: 'Full Time', description: 'Job description for Sr. Software Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo quis ligula facilisis auctor. Sed sollicitudin leo ut lorem efficitur, a fermentum lorem sodales. Nullam tempor, nisi eu luctus gravida, nunc erat lobortis nisi, sed facilisis elit justo non nunc. Maecenas euismod sem et enim tincidunt, non suscipit enim euismod. Integer vel justo a nunc vestibulum egestas ac non felis. Vivamus maximus erat ac bibendum vehicula. Fusce euismod ex eu malesuada fermentum. Nulla facilisi. Curabitur venenatis nibh ut ante tempus, vel tempor neque vulputate.', criteria: 'Criteria for Sr. Software Developer' },
    { title: 'Frontend Engineer', location: 'Remote', type: 'Contract', description: 'Job description for Frontend Engineer', criteria: 'Criteria for Frontend Engineer' },
    { title: 'Backend Developer', location: 'Hyderabad, India', type: 'Full Time', description: 'Job description for Backend Developer', criteria: 'Criteria for Backend Developer' },
    { title: 'Product Manager', location: 'Mumbai, India', type: 'Full Time', description: 'Job description for Product Manager', criteria: 'Criteria for Product Manager' },
    { title: 'Data Scientist', location: 'Chennai, India', type: 'Full Time', description: 'Job description for Data Scientist', criteria: 'Criteria for Data Scientist' },
    { title: 'QA Tester', location: 'Noida, India', type: 'Part Time', description: 'Job description for QA Tester', criteria: 'Criteria for QA Tester' },
    { title: 'DevOps Engineer', location: 'Pune, India', type: 'Full Time', description: 'Job description for DevOps Engineer', criteria: 'Criteria for DevOps Engineer' },
    { title: 'Full Stack Developer', location: 'Mumbai, India', type: 'Full Time', description: 'Job description for Full Stack Developer', criteria: 'Criteria for Full Stack Developer' },
    { title: 'Data Analytics', location: 'Pune, India', type: 'Full Time', description: 'Job description for Data Analytics', criteria: 'Criteria for Data Analytics' },
    { title: 'Cyber Security', location: 'Pune, India', type: 'Full Time', description: 'Job description for Cyber Security', criteria: 'Criteria for Cyber Security' },
    { title: 'AI/ML Enthusiast', location: 'Pune, India', type: 'Full Time', description: 'Job description for AI/ML Enthusiast', criteria: 'Criteria for AI/ML Enthusiast' },
    { title: 'Product Manager', location: 'Noida, India', type: 'Full Time', description: 'Job description for Product Manager', criteria: 'Criteria for Product Manager' },
    { title: 'Sr. Software Developer', location: 'Pune, India', type: 'Full Time', description: 'Job description for Sr. Software Developer', criteria: 'Criteria for Sr. Software Developer' }
  ];

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobPositions.slice(indexOfFirstJob, indexOfLastJob);

  const isFormValid = () => {
    return (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.introduce &&
      formData.contribution &&
      formData.importance &&
      formData.attachment
    );
  };

  const isFormValid2 = () => {
    return (
      formData2.name2 &&
      formData2.phone2 &&
      formData2.email2 &&
      formData2.introduce2 &&
      formData2.contribution2 &&
      formData2.importance2 &&
      formData2.attachment2 &&
      formData2.link2
    );
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value
    }));
  };

  const handleChange2 = (e) => {
    const { id, value, files } = e.target;
    setFormData2((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (isFormValid2()) {
      console.log('Form submitted:', formData2);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (indexOfLastJob < jobPositions.length) setCurrentPage(currentPage + 1);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleapplyClick = (job) => {
    setSelectedDes(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen">
      <div className="font-montserrat">
        {/* Header Section */}
        <div className="relative h-40 flex items-center justify-center" style={{ backgroundColor: '#9E6AED' }}>
          <h1
            className="absolute text-[50px] sm:text-[70px] md:text-[90px] lg:text-[140px] font-extrabold uppercase text-white opacity-10"
            style={{ ...fontStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', zIndex: 0 }}
          >
            WANT TO JOIN US?
          </h1>
          <h2 className="absolute top-0 font-montserrat left-4 m-10 text-xl md:text-3xl font-semibold uppercase text-white" style={{ zIndex: 1 }}>
            Want to join us?
          </h2>
        </div>

        <div className="bg-gray-200 p-6">
          <div className="container mx-auto py-8 px-4 bg-white shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Open Positions Section */}
              <div className="space-y-6">
                <h2 className="text-2xl text-black">Open Positions</h2>
                {currentJobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded border-gray-300 border p-6 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-black">{job.title}</h3>
                        <p className="text-gray-600">{job.location}</p>
                      </div>
                      <span className="bg-[#5BD8A3] text-white px-3 py-1 text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    <p
                      onClick={() => handleJobClick(job)}
                      className="text-[#9E6AED] bg-white hover:underline font-medium mt-4 cursor-pointer"
                    >
                      View & Apply
                    </p>
                  </div>
                ))}
                {/* Pagination Controls */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-black rounded disabled:opacity-50"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={indexOfLastJob >= jobPositions.length}
                    className="px-4 py-2 bg-black rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Application Form Section */}
              <div className="bg-[#9E6AED] p-8">
                <h2 className="text-xl mb-6">In case you are someone who really wants to join us and cannot find an appropriate opening, fill out this form. We will surely get back to you.</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2" htmlFor="name">
                      Name<span className='text-red-500'>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-white text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2" htmlFor="phone">
                      Phone Number<span className='text-red-500'>*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      pattern="\d{10}"
                      maxLength="10"
                      className="w-full px-3 py-2 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete') {
                          e.preventDefault();
                        }
                        }}
                      />
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-white mb-2" htmlFor="introduce">
                        Introduce Yourself
                      </label>
                      <textarea
                        id="introduce"
                        className="w-full px-3 py-3 h-32 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                        placeholder="Enter your introduction"
                        rows="3"
                        value={formData.introduce}
                        onChange={handleChange}
                      ></textarea>
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-white mb-2" htmlFor="contribution">
                        What will you bring to the table?
                      </label>
                      <textarea
                        id="contribution"
                        className="w-full px-3 py-3 h-32 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                        placeholder="Describe your contribution"
                        rows="3"
                        value={formData.contribution}
                        onChange={handleChange}
                      ></textarea>
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-white mb-2" htmlFor="importance">
                        Why do you think what you can bring to the table is important?
                      </label>
                      <textarea
                        id="importance"
                        className="w-full px-3 py-3 h-32 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                        placeholder="Explain the importance"
                        rows="3"
                        value={formData.importance}
                        onChange={handleChange}
                      ></textarea>
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
                        Any other message for us?
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-3 py-3 h-32 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                        placeholder="Enter your message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-white mb-2" htmlFor="attachment">
                        Relevant Attachments (One or more)
                      </label>
                      <input
                        id="attachment"
                        type="file"
                        className="w-full px-3 py-4 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                        onChange={handleChange}
                      />
                      <br/><br/>
                      <input
                        id="attachment2"
                        type="file"
                        className="w-full px-3 py-4 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                        onChange={handleChange}
                      />
                      <br/><br/>
                
                      <input
                      id="link"
                      type="url"
                      className="w-full px-3 py-2 border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-[#9E6AED]"
                      placeholder="Enter a link"
                      value={formData.link || ''}
                      onChange={handleChange}
                      />
                      </div>

                      <button
                      type="submit"
                      className="w-full bg-[#5BD8A3] hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg"
                      >
                      Submit
                      </button>
                    </form>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
                {useEffect(() => {
        console.log('Form Data:', formData);
      }, [formData])}

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex p-6 items-center w-screen h-screen justify-center z-50">
          <div className="bg-white container text-black font-montserrat p-6 shadow-lg max-w-3xl w-screen relative">
            <span
              onClick={handleCloseModal}
              className="absolute top-0 w-6 h-6 right-3 cursor-pointer text-gray-500 hover:text-gray-700 text-4xl"
            >
              &times;
            </span>
            <h2 className="text-2xl text-gray-900 font-montserrat font-bold mb-1 text-left">{selectedJob.title}</h2>
            
            <div className="text-sm mb-1 text-gray-600 gap-4 font-montserrat text-left">QuantArena</div>
                <div className="text-sm mb-4 text-gray-800 gap-4 font-montserrat font-semibold text-left">Job ID:</div>
                
                <div className="flex items-center gap-2">
                  <FaBriefcase className=" text-sm mb-1 gap-4 font-montserrat text-left text-gray-500" />
                  <span className=" text-sm mb-1 gap-4 font-montserrat text-left text-gray-600">2-4 years | {selectedJob.location}</span>
                  <FaMapMarkerAlt className="text-sm mb-1 gap-4 font-montserrat text-left text-gray-500" />
                </div>
            <div className="w-full h-0.5 bg-gray-300 my-4"></div>


            <div className='font-montserrat font-semibold text-lg text-gray-900 mb-4 text-left'>
              Job Description:


            <ul className="list-disc text-sm font-normal mt-2 mb-8 font-sm list-inside space-y-2">
              <li>Lorem ipsum dolor sit amet consectetur. In ut donec ipsum cursus neque rhoncus nec a vivamus. Mattis tellus mattis est hendrerit eu amet fermentum. Amet enim consectetur arcu sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur. In ut donec ipsum cursus neque rhoncus nec a vivamus. Mattis tellus mattis est hendrerit eu amet fermentum. Amet enim consectetur arcu sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur. In ut donec ipsum cursus neque rhoncus nec a vivamus. Mattis tellus mattis est hendrerit eu amet fermentum. Amet enim consectetur arcu sit.</li>
            </ul>

            </div>
            <div className='font-montserrat font-semibold text-lg text-gray-900 mb-4 text-left'>
              Eligibility Criteria:


            <ul className="list-disc text-sm font-normal mt-2 font-sm list-inside space-y-2">
              <li>Lorem ipsum dolor sit amet consectetur. In ut donec ipsum cursus neque rhoncus nec a vivamus. Mattis tellus mattis est hendrerit eu amet fermentum. Amet enim consectetur arcu sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur. In ut donec ipsum cursus neque rhoncus nec a vivamus. Mattis tellus mattis est hendrerit eu amet fermentum. Amet enim consectetur arcu sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur. In ut donec ipsum cursus neque rhoncus nec a vivamus. Mattis tellus mattis est hendrerit eu amet fermentum. Amet enim consectetur arcu sit.</li>
            </ul>

            </div>
            



            <div className="flex justify-center">
              <p
                onClick={() => {
                  handleapplyClick(selectedJob);
                  handleCloseModal();
                }}
                className="bg-[#5BD8A3] text-white px-8 py-2 border hover:border-green-200 hover:bg-green-100 cursor-pointer"
                >
                Apply
                </p>
              </div>
              </div>
            </div>
            )}
            {selectedDes && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex p-6 items-center justify-center z-50">
              <div className="bg-white text-black font-montserrat p-6 rounded shadow-lg max-w-xl w-screen relative overflow-y-auto" style={{ maxHeight: '90vh' }}>
              <span
                onClick={() => setSelectedDes(null)}
                className="absolute top-0 w-6 h-6 right-3 cursor-pointer text-gray-500 hover:text-gray-700 text-4xl"
              >
                &times;
              </span>
              <form className="space-y-4" onSubmit={handleSubmit2}>
                <div>
                <h3 className="text-2xl font-montserrat text-gray-800 font-bold mb-1 text-left">{selectedDes.title}</h3>
                <div className="text-sm mb-1 text-gray-600 gap-4 font-montserrat text-left">QuantArena</div>
                <div className="text-sm mb-4 text-gray-800 gap-4 font-montserrat font-semibold text-left">Job ID:</div>
                
                <div className="flex items-center gap-2">
                  <FaBriefcase className=" text-sm mb-1 gap-4 font-montserrat text-left text-gray-500" />
                  <span className=" text-sm mb-1 gap-4 font-montserrat text-left text-gray-600">2-4 years | {selectedDes.location}</span>
                  <FaMapMarkerAlt className="text-sm mb-1 gap-4 font-montserrat text-left text-gray-500" />
                </div>

                <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="name2">
                  Name
                </label>
                <input
                  id="name2"
                  type="text"
                  className="w-full px-3 py-2 border border-black text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Enter your name"
                  value={formData2.name2}
                  onChange={handleChange2}
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="phone2">
                  Phone Number
                </label>
                <input
                  id="phone2"
                  type="tel"
                  pattern="\d{10}"
                  maxLength="10"
                  className="w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Enter phone number"
                  value={formData2.phone2}
                  onChange={handleChange2}
                  onKeyDown={(e) => {
                  if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete') {
                    e.preventDefault();
                  }
                  }}
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="email2">
                  Email Address
                </label>
                <input
                  id="email2"
                  type="email"
                  className="w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Enter your email address"
                  value={formData2.email2}
                  onChange={handleChange2}
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="introduce2">
                  Introduce Yourself
                </label>
                <textarea
                  id="introduce2"
                  className="w-full px-3 py-3 h-32 border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Enter your introduction"
                  rows="3"
                  value={formData2.introduce2}
                  onChange={handleChange2}
                ></textarea>
                </div>

                <div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="contribution2">
                  What will you bring to the table?
                </label>
                <textarea
                  id="contribution2"
                  className="w-full px-3 py-3 h-32 border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Describe your contribution"
                  rows="3"
                  value={formData2.contribution2}
                  onChange={handleChange2}
                ></textarea>
                </div>

                <div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="message2">
                  Any other message for us?
                </label>
                <textarea
                  id="message2"
                  className="w-full px-3 py-3 h-32 border border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Enter your message"
                  rows="3"
                  value={formData2.message2}
                  onChange={handleChange2}
                ></textarea>
                </div>

                <div>
                <label className="block text-sm font-medium text-black mb-2" htmlFor="attachment2">
                  Relevant Attachments (One or more)
                </label>
                <input
                  id="attachment2"
                  type="file"
                  className="w-full px-3 py-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                  onChange={handleChange2}
                />
                <br/><br/>
                <input
                  id="attachment2"
                  type="file"
                  className="w-full px-3 py-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                  onChange={handleChange2}
                />
                <br/><br/>

                <input
                  id="link2"
                  type="url"
                  className="w-full px-3 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                  placeholder="Enter a link"
                  value={formData2.link2 || ''}
                  onChange={handleChange2}
                />
                </div>

                <button
                type="submit"
                className="w-full bg-[#5BD8A3] hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg"
                >
                Submit
                </button>
              </form>
              </div>
            </div>
            )}
            {useEffect(() => {
            console.log('Form Data 2:', formData2);
            }, [formData2])}
          </div>
          );
        }
