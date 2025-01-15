import React from "react";
import Footer from "../../../landing-page/components/footer";

const DataManagement = () => {
    const cards = [
        {
            title: "Data cleaning, integration and transformation",
            what: `Data Cleaning involves identifying and rectifying errors, inconsistencies, and inaccuracies in your data. This includes removing duplicates, filling missing values, correcting errors, and standardizing formats to ensure data quality and reliability.\n
            Data Transformation is the process of converting data into a consistent and usable format for analysis. This includes standardizing units, normalizing data, aggregating information, and restructuring datasets for specific business needs.\n
            Data Integration is the process of combining data from multiple sources (databases, flat files, etc.) into a unified and consistent format. It allows you to create a centralized data system for easier access and analysis.`,
            why: `Clean data ensures accurate analysis and decision-making. Poor-quality data can lead to incorrect insights, wasted resources, and flawed strategies. Clean data enhances trust, improves operational efficiency, and enables confident decision-making.\n
            Transformed data makes analysis easier and more efficient. It ensures compatibility across systems, improves data usability, and enables seamless integration with advanced analytical tools and models.\n
            Integrated data provides a holistic view of your business operations, enabling better insights and strategic planning. It eliminates data silos, ensures consistency, and simplifies workflows, leading to improved collaboration and faster decision-making.`,
        },
        {
            title: "ETL (Extract, Transform, Load) Services",
            what: `ETL (Extract, Transform, Load) is the process of extracting data from multiple sources, transforming it into a consistent, usable format, and loading it into a target system (such as a data warehouse).\n
            The Extract step involves collecting raw data from various sources (e.g., databases, or flat files). The Transform step cleans and formats the data, while the Load step stores the processed data in a centralized system.`,
            why: `ETL enables businesses to consolidate and prepare data for analysis, ensuring it is accurate, consistent, and easily accessible. It simplifies data handling and enhances decision-making.\n
            ETL is critical for creating a unified data repository, eliminating data silos, and ensuring data readiness for analytics. It improves workflow efficiency and supports real-time and batch processing.`,
        },
        {
            title: "Real-time data processing",
            what: `Real-Time Data Processing is the ability to process and analyze data as it is generated or received, with minimal delay. This involves capturing, filtering, and analyzing data streams instantly to produce actionable insights.\n
            It uses technologies such as stream processing frameworks and event-driven architectures to ensure data is processed continuously without waiting for batch updates.`,
            why: `Real-time processing allows businesses to respond immediately to critical events, such as fraud detection, system alerts, or customer interactions, improving agility and decision-making.\n
            It is crucial for industries where timely actions matter, such as finance, healthcare, e-commerce, and IoT. It improves operational efficiency, enhances user experience, and provides a competitive advantage.`,
        },
    ];

    return (
        <div>
            <div className="bg-[#D2D2D2] min-h-screen flex flex-col w-screen font-montserrat">
                <div className="bg-[#9E6AED] px-4 py-4">
                    <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">Services {">"} Analytics {">"} Data Management</div>
                    <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">Data Management and Processing</h1>
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

export default DataManagement;
