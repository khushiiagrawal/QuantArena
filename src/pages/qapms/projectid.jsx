import { useState } from "react";

import UploadDocuments from "./uploaddocument";
import FormComponent, { RiskFindingsTable } from "./riskfinding";

const ProjectId = () => {
    const [defaultValue, setDefaultValue] = useState("");
    const [intro, setIntro] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (defaultValue === "") {
            alert("Please select a Project Type.");
            return;
        }
        if (intro.trim() === "") {
            alert("Please enter a brief introduction of the project.");
            return;
        }
        setSubmitted(true);
        console.log("Form submitted with intro:", intro);
    };

    return (
        <div className="min-h-screen w-screen bg-gray-200 dark:bg-gray-800 flex flex-col items-start py-8 md:py-12 px-4 md:px-12">
            <h3 className="text-left font-montserrat text-medium text-gray-600 dark:text-gray-300 mt-16">
                Dashboard {">"} <span className="text-black dark:text-white">Project ID</span>
            </h3>
            <div className="w-full max-w-8xl bg-white dark:bg-gray-900 shadow-md mt-8 min-h-[70vh] rounded-md p-4 md:p-7">
                <div className="flex flex-col space-y-4 items-center text-center mb-6">
                    <span className="bg-[#9E6AED] w-80 text-white px-4 py-2 items-center">
                        Project ID pr768956
                    </span>
                    <span className="bg-[#E8BF66] w-80 text-white px-4 py-2 items-center">
                        Project Name XYZ
                    </span>
                    <span className="bg-[#5BD8A3] w-80 text-white px-4 py-2 items-center">
                        Organisation Name xyz
                    </span>
                </div>
                {!submitted ? (
                    <>
                        <div className="space-y-4">
                            <div className="relative inline-block">
                                <button
                                    className="bg-[#9E6AED] text-white focus:outline-none border rounded hover:border-white px-4 py-2 text-left w-50 inline-flex items-center"
                                    onClick={() =>
                                        setDefaultValue(defaultValue === "show" ? "" : "show")
                                    }
                                >
                                    {`Project Type${defaultValue && defaultValue !== "show" ? ` - ${defaultValue}` : ""}`}
                                    <span>
                                        <svg
                                            className={`ml-1 md:ml-2 w-4 h-4 transform ${defaultValue === "show" ? "rotate-180" : "rotate-0"
                                                } transition-transform`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                                {defaultValue === "show" && (
                                    <div className="absolute ml-2 shadow shadow-gray-200 dark:shadow-gray-700 focus:outline-none bg-white dark:bg-gray-700 text-black dark:text-white border mt-2 w-60">
                                        <div
                                            className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#9E6AED]"
                                            onClick={() => setDefaultValue("Analytics")}
                                        >
                                            Analytics
                                        </div>
                                        <div
                                            className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#9E6AED]"
                                            onClick={() => setDefaultValue("Risk Management")}
                                        >
                                            Risk Management
                                        </div>
                                    </div>
                                )}
                                {(defaultValue === "Analytics" ||
                                    defaultValue === "Risk Management") && (
                                        <div className="absolute ml-2 shadow shadow-gray-200 dark:shadow-gray-700 bg-white dark:bg-gray-700 text-black dark:text-white rounded border mt-2 w-60">
                                            {defaultValue === "Analytics" && (
                                                <>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Data Management and Processing")}
                                                    >
                                                        Data Management and Processing
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Data Analysis")}
                                                    >
                                                        Data Analysis
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Financial Analytics")}
                                                    >
                                                        Financial Analytics
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Enterprise Policy Development")}
                                                    >
                                                        Enterprise Policy Development
                                                    </div>
                                                </>
                                            )}
                                            {defaultValue === "Risk Management" && (
                                                <>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Model Review")}
                                                    >
                                                        Model Review
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Policy Review")}
                                                    >
                                                        Policy Review
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Enterprise Risk Framework")}
                                                    >
                                                        Enterprise Risk Framework
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        onClick={() => setDefaultValue("Risk Review")}
                                                    >
                                                        Risk Review
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                            </div>
                            <div>
                                <label className="block mt-8 text-gray-700 dark:text-gray-300 mb-2" htmlFor="project-intro">
                                    Brief introduction of the project
                                </label>
                                <textarea
                                    id="project-intro"
                                    className="w-full bg-gray-100 dark:bg-gray-700 border text-black dark:text-white focus:outline-none px-4 py-2"
                                    placeholder="Enter brief intro"
                                    rows="4"
                                    value={intro}
                                    onChange={(e) => {
                                        setIntro(e.target.value);
                                        console.log(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className="bg-[#5BD8A3] text-black dark:text-white px-8 py-2 rounded border hover:border-white focus:outline-none hover:bg-[#7FEEBF]"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="space-y-4">
                            <div className="relative inline-block">
                                <button
                                    className="bg-[#9E6AED] text-white focus:outline-none border hover:border-white px-4 py-2 text-left w-50 inline-flex items-center"
                                    disabled
                                >
                                    {`Project Type - ${defaultValue}`}
                                </button>
                            </div>
                            <div>
                                <label className="block mt-8 text-gray-700 dark:text-gray-300 mb-2" htmlFor="project-intro">
                                    Brief introduction of the project
                                </label>
                                <textarea
                                    id="project-intro"
                                    className="w-full bg-gray-100 dark:bg-gray-700 border text-black dark:text-white focus:outline-none px-4 py-2"
                                    rows="4"
                                    value={intro}
                                    readOnly
                                ></textarea>
                            </div>
                        </div>
                        <UploadDocuments />
                        {(defaultValue === "Model Review" || defaultValue === "Policy Review") && (
                            <FormComponent />
                        )}
                        {(defaultValue === "Risk Review" || defaultValue === "Enterprise Risk Framework") && (
                            <RiskFindingsTable />
                        )}
                    
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectId;
