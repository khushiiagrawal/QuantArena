import React from "react";

const DataAnalytics = () => {
    const cards = [
        {
            title: "Exploratory Analytics",
            what: `A large chunk of data is of no use until and unless it is summarized for the insights that you need, scenarios that you want to visualize, interdependencies of several factors that you want to understand. 
            Exploratory analytics gets all these done for you to enable you get an eagle’s eye view of the data.`,
            why: `Starting from ideating a business/process to implementing it, managing it, scaling it, exploratory analytics is your everyday partner in data-driven decision making. 
            Arbitrary decisions out of instinct is like tossing a coin and expecting a head assuming there are no other factors to be considered. Also, this is risky when there is money involved. 
            However, data driven decisioning at first helps you to understand whether the problem at hand is even a coin toss problem or a die rolling problem or a decahedron rolling problem etc. 
            It also enables you to take the best decision among many good decisions.`,
        },
        {
            title: "Statistical Modeling",
            what: `In many cases just an eagle’s eye view of the data is not sufficient for you when a view of the future is also required. It can be a supervised or an unsupervised learning problem.
             A predictive modeling with or without importance inferential aspects may be your need. All these are dependent on the problem statement, importance of the inferences that are needed to be made. 
             This also includes model ensembling where you don’t use just one but multiple models while exploiting their strengths and weaknesses.`,
            why: `Why taking decisions just based on the past when you can have an as close as possible look of the future. 
            While exploratory analytics can give you a holistic view of what has happened till the date of data availability, a statistical model can give you a view of what may happen. 
            It can also provide you with the chances of many possible occurrences. Statistical modeling also enables you to assess the scenarios like what may happen with 
            expected regime changes, landscape changes, market dynamics changes, regulatory policy changes that may affect your business/process.`,
        },
    ];

    return (
        <div className="bg-[#D2D2D2] min-h-screen flex flex-col font-montserrat overflow-x-hidden">
            <div className="bg-[#9E6AED] px-4 py-4">
                <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">
                    Services {">"} Analytics {">"} Data Analytics
                </div>
                <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">
                    Data Analytics
                </h1>
            </div>
            <div className="flex-1">
                <div className="grid grid-cols-3 gap-4 px-2 md:px-6 lg:px-16 py-6">
                    {/* Column Headings */}
                    <React.Fragment>
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-base md:text-xl text-black font-semibold break-words">Service Particulars</h3>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-base md:text-xl text-black font-bold break-words">What is it?</h3>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-base md:text-xl text-black font-bold break-words">Why is it important?</h3>
                        </div>
                    </React.Fragment>
                    {/* Card Content */}
                    {cards.map((card, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                                <h2 className="text-base md:text-xl text-black font-semibold mb-4 text-center break-words">
                                    {card.title}
                                </h2>
                            </div>
                            <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                                <p className="text-sm md:text-md text-gray-700 text-justify break-words" style={{ whiteSpace: "pre-line" }}>
                                    {card.what}
                                </p>
                            </div>
                            <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                                <p className="text-sm md:text-md text-gray-700 text-justify break-words" style={{ whiteSpace: "pre-line" }}>
                                    {card.why}
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataAnalytics;
