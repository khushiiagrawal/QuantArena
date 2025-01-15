import React from "react";
import Footer from "../../../landing-page/components/footer";

const FinancialAnalytics = () => {
    const cards = [
        {
            title: "Financial Forecasting",
            what: `Financial forecasting involves predicting the future financial performance as well as financial position of any organization by analyzing various micro as well as macro-economic factors such as past trends, current market conditions and anticipated changes with the help of different statistical tools and techniques.`,
            why: `Financial forecasting empowers organizations to make data-driven decisions, navigate through uncertainty, mitigate risk and ultimately achieve sustainable growth. It is crucial for businesses which want to achieve long term success.`,
        },
        {
            title: "ETL (Extract, Transform, Load) Services",
            what: `ETL (Extract, Transform, Load) is the process of extracting data from multiple sources, transforming it into a consistent, usable format, and loading it into a target system (such as a data warehouse).\n
            The Extract step involves collecting raw data from various sources (e.g., databases, or flat files). The Transform step cleans and formats the data, while the Load step stores the processed data in a centralized system.`,
            why: `ETL enables businesses to consolidate and prepare data for analysis, ensuring it is accurate, consistent, and easily accessible. It simplifies data handling and enhances decision-making.\n
            ETL is critical for creating a unified data repository, eliminating data silos, and ensuring data readiness for analytics. It improves workflow efficiency and supports real-time and batch processing.`,
        },
        {
            title: "Financial Statements Preparation",
            what: `Financial statements preparation includes the preparation of annual financial statements as well as quarterly statements, namely Balance Sheet, Statement of Profit and Loss and Cash Flow Statements, by processing data from Trial Balance or any other format and segregating them into different ledger heads ultimately present them as per relevant standards of Financial Reporting Framework.`,
            why: `The governing companies/ taxation law in any country in the world require organization/ individuals to prepare their financial statements in order to get a clear picture in a well-presented form. Moreover, credit institutions also require these statements prepared solely on projections while applying any type of credit with them. Well prepared financial statements do not just look good while presenting but also help to attract investors, institutions and/or any present/future stakeholder.`,
        },
        {
            title:`Financial Statements Analysis`,
            what:`Financial statements analysis means the analysis of financial statements (i.e. Balance Sheet, Statement of Profit and Loss and Cash Flow Statements) with the help of various analytical tools and techniques such as ratio analysis, trend analysis, cash flow analysis, etc.`,
            why:`Financial statement analysis helps to gain a deeper understanding of a business’s financial performance. It also assists in making informed decisions, regarding its liquidity, solvency and efficiency, by both the business and the stakeholder. Businesses can asses risk and gain a comprehensive understanding where they are standing financially.`,

        },
        {
            title:`Financial Management`,
            what:`Financial management is an umbrella term which has several branches. To summarize, it involves the activities which are concerned with forecasting, planning, organizing, directing, co-ordinating and controlling financial resources of a business. It is also referred to as “science of money management”. In short, financial management can be described by two aspects – Procurement of funds and Utilization of funds.`,
            why:`Financial management is the key to successful business operations. Money is to an enterprise, what battery is to an electric vehicle. The importance of financial management involves taking care not to over invest in assets, balancing cash-outflows with cash-inflows, setting revenue targets and increasing profit, managing working capital, planning optimized taxes and so on.`,

        },
    ];

    return (
        <div>
            <div className="bg-[#D2D2D2] min-h-screen flex flex-col w-screen font-montserrat">
                <div className="bg-[#9E6AED] px-4 py-4">
                    <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">Services {">"} Analytics {">"} Financial Analytics</div>
                    <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">Financial Analytics</h1>
                </div>
                <div className="flex-1 overflow-x-auto">
                <div className="min-w-full flex md:grid md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-6">
                        {/* Column Headings */}
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
                        {/* Card Content */}
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
        <Footer />
    </div>
    );
};

export default FinancialAnalytics;
