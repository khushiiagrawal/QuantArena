import { useState } from 'react';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';

const teamMembers = [
    {
        name: 'Niloy Ray',
        image: pic1,
        intro: (
            <div>
                Having obtained his B.Sc. (Hons.) degree in Statistics from Maulana Azad College (C.U.) and M.Sc. degree in Statistics from IIT Kanpur, Niloy joined the Model Risk Management (MRM) team of BA Continuum India Pvt. Ltd. (a non-bank subsidiary of Bank of America) in July 2020. He has worked with the bankcard acquisition model validation team where he has worked on marketing, customer acquisition models and also has some idea about ongoing bankcard accounts management models. Apart from these models, he has also worked on some administrative models. Laterwise, he has worked on real estate property pricing models whose outputs are used to provide loans (both new home purchases and refinancing) to customers. Apart from working on the BAU review items, he has also undertaken different ad-hoc tasks (e.g. authoring a document on Git, model related ad-hoc exercises, onboarding people into the organization etc.) over time. Post that, in November 2022, Niloy joined Citi’s balance and loss forecasting MRM team for b2b products and the models are used for CCAR submission and internal capital planning. 
                <br/> <br/>
                Since June 2023, Niloy had been working for his proprietory investment firm where he was indulged in construction, management and trading (swing) of equity portfolios consisting of several different companies representing different industries and so sectors. Analysed and traded in more than 150 companies comprising of several different industries within a span of slightly more than a year. Apart from the Indian capital market, he had small footprint in the United States capital market too. Niloy’s current focus is on investing in long-term value stocks and building businesses.
                <br/> <br/>
                In September 2024, Niloy ideated and co-founded a company named Nascent EV Battery Infrastructure Private Limited (a DPIIT recognized start-up who are a public charge point operator and provider of EV charging infrastructure to businesses). Further in January 2025, he co-founded QuantArena Analytics and Risk Management Private Limited, his dream company which aims to have its footprint in a wide range of industry and sectors through providing different kinds of analytics and risk management solutions.
            </div>
        )
    },
    {
        name: 'Dona Saha Ray',
        image: pic2,
        intro: (
            <div>
                Dona is a co-founder of “QuantArena”, who is also a founding member and C.F.O. of Nascent (a DPIIT recognised startup).
                As she is from the core field of finance and accounting, her skills extend to the depth of this area.
                <br/><br/>
                Dona completed her Bachelors in Commerce with Honours in Accounting in 2018 from Gauhati University affiliated B. H. College where she scored the highest in the batch of 2015-18. She later enrolled for Chartered Accountancy and pursued her articleship in B.  Jain and Co. And gained significant exposure in direct taxes and accounting. She worked in the same firm as Tax and Accounts Executive for 2.5 more years. She specialized in maintaining regular books of accounts and year-end preparation of financial reports, filing of various tax returns and reports, auditing of different entities including corporates, firms, charitable institutions, NBFCs, etc. Although she took care of accounting and indirect tax, her specialization was direct taxes. She handled more than 200 income tax cases including assessment under section 143(3) and 139, re-assessment under section 148 and 148A and appeals before Commissioner of Income Tax (Appeals) and Income Tax Appellate Tribunal, appeared in hearings before CIT(A), ITAT, ITO, assisted in search and seizure proceedings under section 153A/153C. She managed and led the tax team for over 700 annual submissions of various income tax returns and reports from AY 2021-22 to AY 2023-24. She passed her CA Intermediate Group I in December 2021. She was also briefly associated with U&I (an NGO) in 2021, first as a volunteer to teach underprivileged children and later, as a leader for Kolkata Chapter. She was also a team leader for West Bengal and North East India region for Breath India Initiative taken by U&I during COVID-19 Pandemic in 2021.

                <br/> <br/>
                Her career took a turn and she left her job to start quantitative stock trading and analysis and gained a good amount of knowledge in the Indian Capital Market. 
                <br/>
                She always tries to bring the best to the table when the work relates to her expertise zone i.e. accounting, taxation or finance.

            </div>
        )
    },
    {
        name: 'Debraj Dey',
        image: pic3,
        intro: (
            <div>
                Debraj is a passionate statistician and data analyst with a strong academic foundation and professional expertise. He completed his B.Sc. in Statistics from Maulana Azad College, Calcutta university and M.Sc. in Statistics from Ballygunge Science College, Calcutta University.
                <br/> <br/>
                His professional journey began as a Subject Matter Expert in statistics on leading online platforms such as Chegg, CourseHero, and TutorBin. Over the years, he has solved more than 25,000 problems, earning accolades like the prestigious "Expert of Experts Award" from Chegg for delivering the highest number of high-quality solutions. Additionally, he has served as a Quality Content Reviewer at Chegg, ensuring the accuracy and excellence of solutions provided to students worldwide.
                <br/> <br/>
                His statistical expertise spans probability, regression models, time series analysis, hypothesis testing, confidence intervals, quality control, and more. Additionally, he specializes in data analysis, data visualization, and representation using tools and technologies like C, R, Advanced Excel, Python, Power BI, and Minitab.
                <br/> <br/>
                With a blend of academic excellence and hands-on experience, Debraj is dedicated to leveraging data-driven insights to solve complex challenges and create value in the field of data analytics.
            </div>
        )
    }
];

export function TeamSection() {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleImageClick = (member) => {
        setSelectedMember(member);
    };

    const handleClose = () => {
        setSelectedMember(null);
    };

    return (
        <div id="TeamSection">
            <div className="py-16 w-full bg-gray-200 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl text-[#824AD8]">
                    <span className="font-semibold font-montserrat">
                        MEET THE TEAM THAT MAKES
                    </span>
                    <br />
                    <span className="italic">magic </span>
                    <span className="font-semibold font-montserrat">
                        HAPPEN
                    </span>
                </h2>
                <div className="w-40 h-0.5 bg-[#FFC362] my-4 mx-auto"></div>

                {/* Team Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 border container mx-auto px-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer"
                            onClick={() => handleImageClick(member)}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover mx-auto hover:shadow-lg transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-[70%] sm:w-[80%] lg:w-[90%] max-w-5xl p-5 shadow relative text-left overflow-y-auto max-h-[90vh]">
                        <span
                            className="absolute top-3 right-6 cursor-pointer text-gray-600 hover:text-gray-800 text-2xl"
                            onClick={handleClose}
                        >
                            ✕
                        </span>
                        <h3 className="text-2xl font-semibold font-montserrat text-gray-800 mb-2">
                            {selectedMember.name}
                        </h3>
                        <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                        <h4 className="text-medium font-montserrat text-[#5BD8A3] bg-[#5BD8A336] w-24 h-8 px-1 rounded py-1 mb-2">Brief Intro</h4>
                        <div className="text-gray-800 text-sm font-montserrat leading-relaxed space-y-4">
                            <p>{selectedMember.intro}</p>
                        </div>
                        <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                        
                        <div className="mt-2">
                            <h4 className="text-medium font-montserrat text-[#5BD8A3] bg-[#5BD8A336] w-40 h-8 px-1 rounded py-1 mb-2">Social Media Links</h4>
                            <h4 className="text-medium font-montserrat text-gray-600 mb-1">I am available on this platform you can check all details with go through this links.</h4>

                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="text-[#824AD8] font-montserrat hover:underline text-lg"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="text-[#824AD8] font-montserrat hover:underline text-lg"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="#"
                                    className="text-[#824AD8] font-montserrat hover:underline text-lg"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
