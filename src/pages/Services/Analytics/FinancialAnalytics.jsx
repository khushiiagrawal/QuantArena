import React from "react";


const FinancialAnalytics = () => {
    const cards = [
        {
            title: "Financial Forecasting",
            what: `Financial forecasting involves predicting the future financial performance as well as financial position of any organization by analyzing various micro as well as macro-economic factors such as past trends, current market conditions and anticipated changes with the help of different statistical tools and techniques.`,
            why: `Financial forecasting empowers organizations to make data-driven decisions, navigate through uncertainty, mitigate risk and ultimately achieve sustainable growth. It is crucial for businesses which want to achieve long term success.`,
        },
        {
            title: "Financial Statements Preparation",
            what: `Financial statements preparation includes the preparation of annual financial statements as well as quarterly statements, namely Balance Sheet, Statement of Profit and Loss and Cash Flow Statements, by processing data from Trial Balance or any other format and segregating them into different ledger heads ultimately present them as per relevant standards of Financial Reporting Framework.`,
            why: `The governing companies/ taxation law in any country in the world require organization/ individuals to prepare their financial statements in order to get a clear picture in a well-presented form. Moreover, credit institutions also require these statements prepared solely on projections while applying any type of credit with them. Well prepared financial statements do not just look good while presenting but also help to attract investors, institutions and/or any present/future stakeholder.`,
        },
        {
            title:`Financial Statements Analysis`,
            what:`Financial statements analysis means the analysis of financial statements (i.e. Balance Sheet, Statement of Profit and Loss and Cash Flow Statements) with the help of various analytical tools and techniques such as ratio analysis, trend analysis, cash flow analysis etc.`,
            why:`Financial statement analysis helps to gain a deeper understanding of a business’s financial performance. It also assists in making informed decisions, regarding its liquidity, solvency and efficiency, by both the business and the stakeholder. Businesses can asses risk and gain a comprehensive understanding where they are standing financially.`,

        },
        {
            title:`Financial Management`,
            what:`Financial management is an umbrella term which has several branches. To summarize, it involves the activities which are concerned with forecasting, planning, organizing, directing, co-ordinating and controlling financial resources of a business. It is also referred to as “science of money management”. In short, financial management can be described by two aspects – Procurement of funds and Utilization of funds.`,
            why:`Financial management is the key to successful business operations. Money is to an enterprise, what battery is to an electric vehicle. The importance of financial management involves taking care not to over invest in assets, balancing cash-outflows with cash-inflows, setting revenue targets and increasing profit, managing working capital, planning optimized taxes and so on.`,

        },
    ];

    return (
        <div className="bg-[#D2D2D2] min-h-screen flex flex-col font-montserrat overflow-x-hidden">
            <div className="bg-[#9E6AED] px-4 py-4">
                <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">
                    Services {">"} Analytics {">"} Financial Analytics
                </div>
                <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">
                    Financial Analytics
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

export default FinancialAnalytics;