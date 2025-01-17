import React from "react";


const RiskReview = () => {
    const cards = [
        {
            title: "Specific Problem driven",
            what: `Many a times it may be the case that you may want to leverage our expertise pertaining to solution for a specific problem which may be related to one or more risk areas. The same is what the section wants to mean.For more details on ‘What it is?’, please refer to Services -> Risk Management -> Model Review and/or Policy Review and/or Enterprise Risk Framework.`,
            why: `Many a times it may be the case that you may want to leverage our expertise pertaining to solution for a specific problem which may be related to one or more risk areas. The same is what the section wants to mean. For more details on ‘Why is it important?’, please refer to Services -> Risk Management -> Model Review and/or Policy Review and/or Enterprise Risk Framework.`,
        },
        {
            title: "Specific Risk area driven",
            what: `Many a times it may be the case that you may want to leverage our expertise pertaining to solutions for a specific risk area. The same is what the section wants to mean. For more details on ‘What it is?’, please refer to Services -> Risk Management -> Model Review and/or Policy Review and/or Enterprise Risk Framework.`,
            why: `Many a times it may be the case that you may want to leverage our expertise pertaining to solutions for a specific risk area. The same is what the section wants to mean. For more details on ‘Why is it important?’, please refer to Services -> Risk Management -> Model Review and/or Policy Review and/or Enterprise Risk Framework.`,
        },
    ];

    return (
        <div className="bg-[#D2D2D2] min-h-screen flex flex-col font-montserrat overflow-x-hidden">
            <div className="bg-[#9E6AED] px-4 py-4">
                <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">
                    Services {">"} Risk Management {">"} Risk Review
                </div>
                <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">
                    Risk Review
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

export default RiskReview;