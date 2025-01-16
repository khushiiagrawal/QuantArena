import { useState } from "react";

const ProjectId = () => {
    const [defaultValue, setDefaultValue] = useState("");

    return (
        <div className="min-h-screen w-screen bg-gray-200 flex flex-col items-start py-8 md:py-12 px-4 md:px-20">
            <h3 className="text-left font-montserrat text-medium text-gray-600 mt-16">
                Dashboard {">"} <span className="text-black">Project ID</span>
            </h3>
            <div className="w-full max-w-8xl bg-white shadow-md mt-8 min-h-[70vh] rounded-md p-4 md:p-7">
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
                <div className="space-y-4"></div>
                <div className="space-y-4">
                    <div className="relative inline-block">
                        <button
                            className="bg-[#9E6AED] text-white px-4 py-2 text-left w-50 inline-flex items-center"
                            onClick={() =>
                                setDefaultValue(defaultValue === "show" ? "" : "show")
                            }
                        >
                            {`Project Type${defaultValue && defaultValue !== "show" ? ` - ${defaultValue}` : ""}`}
                            <span>
                                <svg
                                    className={`ml-1 md:ml-2 w-4 h-4 transform ${
                                        defaultValue === "show" ? "rotate-180" : "rotate-0"
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
                            <div className="absolute top-0 left-full ml-2 bg-white text-black border mt-2 w-40">
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => setDefaultValue("Analytics")}
                                >
                                    Analytics
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => setDefaultValue("Risk Management")}
                                >
                                    Risk Management
                                </div>
                            </div>
                        )}
                        {(defaultValue === "Analytics" ||
                            defaultValue === "Risk Management") && (
                                <div className="absolute top-0 left-full ml-2 bg-white text-black border mt-2 w-40">
                                    {defaultValue === "Analytics" && (
                                        <>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Data Management and Processing")}
                                            >
                                                Option 1
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Data Analysis")}
                                            >
                                                Option 2
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Financial Analytics")}
                                            >
                                                Option 3
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Enterprise Policy Development")}
                                            >
                                                Option 4
                                            </div>
                                        </>
                                    )}
                                    {defaultValue === "Risk Management" && (
                                        <>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Model Review")}
                                            >
                                                Option 5
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Policy Review")}
                                            >
                                                Option 6
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Enterprise Risk Framework")}
                                            >
                                                Option 7
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => setDefaultValue("Risk Review")}
                                            >
                                                Option 8
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="project-intro">
                            Brief introduction of the project
                        </label>
                        <textarea
                            id="project-intro"
                            className="w-full border rounded-lg px-4 py-2"
                            placeholder="Enter brief intro"
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <button className="bg-green-400 text-white px-6 py-2 rounded-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectId;
