import visionImage from '../images/Unveiling Project Success_ Embracing Risk Analysis in Project Management.png';
import missionImage from '../images/simple task management software.png';
import expertiseImage from '../images/Interest_ Firme Marketing 4_0 specializes in….png';

export default function About() {
    const fontStyle = { fontFamily: 'Montserrat, sans-serif' };

    return (
        <div id='AboutUs'>
            <div className="relative bg-gray-200 text-black" style={fontStyle}>
                {/* Purple Banner Background */}
                <div
                    className="relative h-20 md:h-36 flex items-center justify-center ml-2 md:ml-20"
                    style={{ backgroundColor: '#9E6AED' }}
                >
                    {/* Large Background Text */}
                    <h1
                        className="absolute text-[50px] sm:text-[60px] md:text-[120px] lg:text-[180px] font-extrabold uppercase text-white opacity-10"
                        style={{ ...fontStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        ABOUT US
                    </h1>

                    {/* Foreground Text */}
                    <h2 className="absolute top-0 left-4 md:left-12 m-4 md:m-12 text-2xl md:text-4xl font-semibold uppercase text-white underline underline-offset-8 decoration-2" style={{ textUnderlineOffset: '12px' }}>
                        About Us
                    </h2>
                </div>

                {/* Content Section */}
                <div className="relative z-10 mt-8 container max-w-7xl mx-auto px-2 md:px-2">
                    {/* Vision Section */}
                    <div className="flex flex-col items-center md:flex-row md:items-center gap-8 mb-8">
                        <div className="relative w-full mt-10 md:w-1/2 px-4 md:px-6">
                            <div className="relative">
                                <img
                                    src={visionImage}
                                    alt="Vision Image"
                                    className="object-cover shadow-xl w-full"
                                />
                                <div
                                    className="absolute inset-0 transform -translate-x-4 md:-translate-x-10 translate-y-4 md:translate-y-10 -z-10"
                                    style={{ backgroundColor: '#E9DFF8', boxShadow: '0 10px 20px rgba(158, 106, 237, 0)' }}
                                ></div>
                                <div
                                    className="absolute inset-0 bg-[#9E6AED] opacity-35"
                                ></div>
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left mt-12 max-w-prose px-4 md:px-6">
                            <h3 className="text-2xl md:text-3xl mb-6 text-black" style={fontStyle}>
                                Our Vision
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800" style={fontStyle}>
                                Whether you are an individual, a sole proprietorship, a start-up, a
                                large corporate, or any organization including Government bodies,
                                analytics is the most significant everyday partner for almost all
                                your insights visibility and decision-making. At the same time,
                                risk areas are to be identified, assessed, and mitigated on an
                                ongoing basis in order to run your process or business smoothly
                                and efficiently.
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="flex flex-col items-center md:flex-row-reverse md:items-center gap-8 mb-8">
                        <div className="relative w-full md:w-1/2 px-4 md:px-6 mt-20">
                            <div className="relative">
                                <img
                                    src={missionImage}
                                    alt="Mission Image"
                                    className="object-cover shadow-xl w-full"
                                    style={{ boxShadow: '0 8px 12px rgba(158, 106, 237, 0.05)' }}
                                />
                                <div
                                    className="absolute inset-0 transform -translate-x-4 md:-translate-x-10 translate-y-4 md:translate-y-10 -z-10"
                                    style={{ backgroundColor: '#E9DFF8' }}
                                ></div>
                                <div
                                    className="absolute inset-0 bg-[#9E6AED] opacity-35"
                                ></div>
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left mt-12 max-w-prose px-4 md:px-6">
                            <h3 className="text-2xl md:text-3xl mb-6 text-black" style={fontStyle}>
                                Our Mission
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800" style={fontStyle}>
                                Our mission is to deliver cutting-edge analytics and risk
                                management solutions that empower organizations to take the best
                                possible decisions, identify, assess, and mitigate risks with
                                precision. We are committed to providing actionable insights,
                                fostering data-driven decision-making, and enabling businesses to
                                enhance their resilience and long-term success in an ever-evolving
                                landscape.
                            </p>
                        </div>
                    </div>

                    {/* Expertise Section */}
                    <div className="flex flex-col items-center md:flex-row md:items-center gap-8">
                        <div className="relative w-full md:w-1/2 px-4 md:px-6 mt-20">
                            <div className="relative">
                                <img
                                    src={expertiseImage}
                                    alt="Expertise Image"
                                    className="object-cover shadow-xl w-full"
                                    style={{ boxShadow: '0 8px 12px rgba(158, 106, 237, 0.05)' }}
                                />
                                <div
                                    className="absolute inset-0 transform -translate-x-4 md:-translate-x-10 translate-y-4 md:translate-y-10 -z-10"
                                    style={{ backgroundColor: '#E9DFF8' }}
                                ></div>
                                <div
                                    className="absolute inset-0 bg-[#9E6AED] opacity-35"
                                ></div>
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left mt-12 max-w-prose px-4 md:px-6">
                            <h3 className="text-2xl md:text-3xl mb-6 text-black" style={fontStyle}>
                                Our Expertise
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800" style={fontStyle}>
                                Our expertise lies at the union of advanced analytics and
                                efficient risk management. We specialize in leveraging data-driven
                                insights, predictive modeling, and cutting-edge technologies to
                                help organizations anticipate and mitigate risks across all
                                sectors. Our team’s thorough research combined with a
                                sophisticated understanding of risk dynamics enables us to deliver
                                tailored solutions that drive resilience, optimize performance,
                                and safeguard against future uncertainties.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Space at the bottom */}
                <div className="h-20"></div>
            </div>
        </div>

    );
}
