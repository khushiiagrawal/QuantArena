import { useState } from "react";


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
        <div className="min-h-screen w-screen bg-gray-200 flex flex-col items-start py-8 md:py-12 px-4 md:px-12">
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
                                    <div className="absolute ml-2 shadow shadow-gray-200  focus:outline-none bg-white text-black border mt-2 w-60">
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
                                        <div className="absolute ml-2 shadow shadow-gray bg-white text-black rounded border mt-2 w-60">
                                            {defaultValue === "Analytics" && (
                                                <>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Data Management and Processing")}
                                                    >
                                                        Data Management and Processing
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Data Analysis")}
                                                    >
                                                        Data Analysis
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Financial Analytics")}
                                                    >
                                                        Financial Analytics
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Enterprise Policy Development")}
                                                    >
                                                        Enterprise Policy Development
                                                    </div>
                                                </>
                                            )}
                                            {defaultValue === "Risk Management" && (
                                                <>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Model Review")}
                                                    >
                                                        Model Review
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Policy Review")}
                                                    >
                                                        Policy Review
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() => setDefaultValue("Enterprise Risk Framework")}
                                                    >
                                                        Enterprise Risk Framework
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
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
                                <label className="block mt-8 text-gray-700 mb-2" htmlFor="project-intro">
                                    Brief introduction of the project
                                </label>
                                <textarea
                                    id="project-intro"
                                    className="w-full bg-gray-100 border text-black focus:outline-none px-4 py-2"
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
                                    className="bg-[#5BD8A3] text-black px-8 py-2 rounded border hover:border-white  focus:outline-none hover:bg-[#7FEEBF]"
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
                                <label className="block mt-8 text-gray-700 mb-2" htmlFor="project-intro">
                                    Brief introduction of the project
                                </label>
                                <textarea
                                    id="project-intro"
                                    className="w-full bg-gray-100 border text-black focus:outline-none px-4 py-2"
                                    rows="4"
                                    value={intro}
                                    readOnly
                                ></textarea>
                            </div>
                        </div>
                        <UploadDocuments />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectId;



import docImage from "./pics/doc.png";
const UploadDocuments = () => {
    const [defaultValue, setDefaultValue] = useState("");
    const [documentName, setDocumentName] = useState("");
    const [documentDescription, setDocumentDescription] = useState("");
    const [remarks, setRemarks] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [uploadedDocuments, setUploadedDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filesPerPage, setFilesPerPage] = useState(5);

    const handleFileChange = (e) => {
        setAttachment(e.target.files[0]);
    };

    const handleSave = () => {
        if (!documentName || !documentDescription || !attachment) {
            alert("Please fill in all required fields and attach a file.");
            return;
        }

        const newDocument = {
            srNo: uploadedDocuments.length + 1,
            name: documentName,
            description: documentDescription,
            remarks: remarks || "N/A",
            attachmentName: attachment.name,
            attachmentURL: URL.createObjectURL(attachment),
            uploadTime: new Date().toLocaleString(),
        };

        setUploadedDocuments([...uploadedDocuments, newDocument]);

        // Reset fields
        setDocumentName("");
        setDocumentDescription("");
        setRemarks("");
        setAttachment(null);
    };

    const handleSubmit = () => {
        console.log("Submit clicked", { uploadedDocuments });
        // Handle submit logic (e.g., sending data to server)
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < Math.ceil(uploadedDocuments.length / filesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="w-full font-montserrat bg-white min-h-[50vh]">
            <div className="mt-10 text-left text-xl font-montserrat font-semibold underline text-gray-900 w-full">
                Upload Documents
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Document Name */}
                <div>
                    <label className="block text-lg font-medium font-montserrat text-gray-800">
                        Document Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
                        placeholder="Enter document name"
                        className="mt-2 h-14 block w-full p-2 border hover:border-gray-400 text-lg bg-gray-100 text-black border rounded shadow-sm focus:outline-none"
                        required
                    />
                </div>

                {/* Document Attachment */}
                <div>
                    <label className="block text-lg font-medium font-montserrat text-gray-800">
                        Document Attachment <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex justify-center h-14 border-2 border-dashed border-[#9E6AED] rounded-md cursor-pointer hover:bg-purple-50">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            id="file-upload"
                            required
                        />
                        <label
                            htmlFor="file-upload"
                            className="text-purple-600 flex items-center text-lg cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.5 10.5l-2.5 2.5m0 0l-2.5-2.5m2.5 2.5V6m-7 10.5a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0017.5 1h-10A2.5 2.5 0 005 3.5v13z"
                                />
                            </svg>
                            {attachment ? attachment.name : "Attachment"}
                        </label>
                    </div>
                </div>

                {/* Document Description */}
                <div>
                    <label className="block text-lg font-medium mt-4 font-montserrat text-gray-800">
                        Document Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={documentDescription}
                        onChange={(e) => setDocumentDescription(e.target.value)}
                        placeholder="Enter description"
                        className="mt-2 h-40 block w-full p-2 border hover:border-gray-400 text-lg text-start bg-gray-100 text-black border rounded shadow-sm focus:outline-none"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Remarks/Comments */}
                <div>
                    <label className="block text-lg font-medium mt-4 font-montserrat text-gray-800">
                        Remarks/Comments
                    </label>
                    <textarea
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        placeholder="Enter remarks/comments"
                        className="mt-2 h-40 block w-full p-2 border hover:border-gray-400 text-lg text-start bg-gray-100 text-black border rounded shadow-sm focus:outline-none"
                        rows="4"
                    ></textarea>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-left mt-6 gap-4">
                <button
                    onClick={handleSave}
                    className="py-2 px-10 bg-white border border-[#5BD8A3] text-black hover:text-gray-700 hover:border-[#8FF2C8] hover:focus:outline-none focus:outline-none rounded"
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        handleSave();
                        handleSubmit();
                    }}
                    className="py-2 px-10 bg-[#5BD8A3] text-black rounded border hover:text-gray-700 hover:border-white hover:bg-[#8FF2C8] focus:outline-none"
                >
                    Submit
                </button>
            </div>

            {/* Uploaded Documents Table */}
            <div className="mt-12 overflow-x-auto">
                <div className="relative inline-block">
                    <button
                        className="bg-[#9E6AED] text-white focus:outline-none border rounded hover:border-white px-4 py-2 text-left w-50 inline-flex items-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            setDefaultValue(defaultValue === "show" ? "" : "show");
                        }}
                    >
                        {defaultValue && defaultValue !== "show" ? defaultValue : "Select"}
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
                        <div className="absolute left-0 mt-2 shadow shadow-gray-500 focus:outline-none bg-white text-black border w-60 z-10">
                            <div
                                className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#9E6AED]"
                                onClick={() => setDefaultValue("Master Table")}
                            >
                                Master Table
                            </div>
                            <div
                                className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#9E6AED]"
                                onClick={() => setDefaultValue("Client Table")}
                            >
                                Client Data
                            </div>
                            <div
                                className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#9E6AED]"
                                onClick={() => setDefaultValue("QuantArena")}
                            >
                                QuantArena Data
                            </div>
                        </div>
                    )}
                </div>
                <table className="w-full mt-6">
                    <thead>
                        <tr className="bg-[#F7F1FF] border font-montserrat font-normal border-[#AFAFAF]">
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Sr. No.</th>
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Document Name</th>
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Description</th>
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Document</th>
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Remarks</th>
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Upload Time</th>
                            <th className="text-black font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Uploaded by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedDocuments.length === 0 ? (
                            Array.from({ length: filesPerPage }).map((_, index) => (
                                <tr key={index}>
                                    <td className="border-b border-l text-black border-gray-300 p-6 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border-b text-center text-black border-gray-300 p-2">-</td>
                                    <td className="border-b text-center text-black border-gray-300 p-2">-</td>
                                    <td className="border-b text-center text-black border-gray-300 p-2">-</td>
                                    <td className="border-b text-center text-black border-gray-300 p-2">-</td>
                                    <td className="border-b text-center text-black border-gray-300 p-2">-</td>
                                    <td className="border-b border-r text-center text-black border-gray-300 p-2">-</td>
                                </tr>
                            ))
                        ) : (
                            uploadedDocuments
                            .slice((currentPage - 1) * filesPerPage, currentPage * filesPerPage)
                            .map((document, index) => (
                                <tr key={index}>
                                    <td className="border text-black border-gray-300 p-8 text-center">
                                        {document.srNo}
                                    </td>
                                    <td className="border text-black border-gray-300 p-2">{document.name}</td>
                                    <td className="border text-black border-gray-300 p-2">{document.description}</td>
                                    <td className="border text-black border-gray-300 p-2">
                                        {document.attachmentURL && (
                                            <a href={document.attachmentURL} download={document.attachmentName} className="text-[#9E6AED] hover:text-[#9E6AED] hover:underline">
                                                <img src={docImage} alt="doc" className="h-12 w-12 m-2 inline-block" />
                                                Download
                                            </a>
                                        )
                                        
                                        
                                    }
                                    </td>
                                    <td className="border text-black border-gray-300 p-2">{document.remarks}</td>
                                    <td className="border text-black border-gray-300 p-2">{document.uploadTime}</td>
                                    <td className="border text-black border-gray-300 p-2">User</td>
                                </tr>
                                ))
                        )}
                    </tbody>
                </table>
                <div className="flex justify-between font-montserrat items-center mt-4">
                    <span className="text-purple-600 hover:text-purple-800 cursor-pointer" onClick={handlePrevClick}>&laquo; Prev</span>
                    <div className="flex space-x-2">
                        <span className="bg-[#C9AEF2] text-gray-800 w-8 h-8 text-center p-1 rounded-full">{currentPage}</span>
                        <span className="bg-gray-100 text-gray-800 w-8 h-8 border border-[#C9AEF2] text-center p-1 rounded-full">{currentPage + 1}</span>
                    </div>
                    <span className="text-purple-600 hover:text-purple-800 cursor-pointer" onClick={handleNextClick}>Next &raquo;</span>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <label className="mr-2 mt-1 text-gray-700">Rows per page:</label>
                <select
                    className="border border-gray-300 focus:outline-none bg-white text-black hover:border-gray-700 rounded p-1"
                    value={filesPerPage}
                    onChange={(e) => setFilesPerPage(Number(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    );
}
