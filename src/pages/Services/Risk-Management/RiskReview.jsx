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
        <div>
            <div className="bg-[#D2D2D2] min-h-screen flex flex-col w-auto font-montserrat">
                <div className="bg-[#9E6AED] px-4 py-4">
                <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">Services {">"} Risk Management {">"} Risk Review</div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat text-white font-semibold mt-1 px-4 sm:px-8 lg:px-12 py-2 text-left">Risk Review</h1>
                </div>
                <div className="flex-1 overflow-x-auto">
                    <div className="min-w-full flex md:grid md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-6">
                        <React.Fragment>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-semibold">Service Particulars</h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-bold">What is it?</h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-bold">Why is it important?</h3>
                            </div>
                        </React.Fragment>
                        {cards.map((card, index) => (
                            <React.Fragment key={index}>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl text-black font-semibold mb-4 text-center">{card.title}</h2>
                                </div>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <p className="text-gray-700 text-md p-2 text-justify text-center" style={{ whiteSpace: 'pre-line' }}>{card.what}</p>
                                </div>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <p className="text-gray-700 text-md p-2 text-justify text-center" style={{ whiteSpace: 'pre-line' }}>{card.why}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default RiskReview;
