import { useState } from "react";
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
        <div className="w-full font-montserrat min-h-[50vh] bg-white">
            <div className="mt-10 text-left text-xl font-montserrat font-semibold w-full text-gray-900">
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
                            className="flex items-center text-lg cursor-pointer text-purple-600"
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
                    className="py-2 px-10 border rounded focus:outline-none bg-white border-[#5BD8A3] text-black hover:text-gray-700 hover:border-[#8FF2C8]"
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        handleSave();
                        handleSubmit();
                    }}
                    className="py-2 px-10 rounded border focus:outline-none bg-[#5BD8A3] text-black hover:text-gray-700 hover:border-white hover:bg-[#8FF2C8]"
                >
                    Submit
                </button>
            </div>

            {/* Uploaded Documents Table */}
            <div className="mt-12 overflow-x-auto">
                <div className="relative inline-block">
                    <button
                        className="focus:outline-none border rounded px-4 py-2 text-left w-50 inline-flex items-center bg-[#9E6AED] text-white hover:border-white"
                        onClick={(e) => {
                            e.stopPropagation();
                            setDefaultValue(defaultValue === "show" ? "" : "show");
                        }}
                    >
                        {defaultValue && defaultValue !== "show" ? defaultValue : "Select"}
                        <span>
                            <svg
                                className={`ml-1 md:ml-2 w-4 h-4 transform ${defaultValue === "show" ? "rotate-180" : "rotate-0"} transition-transform`}
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
                        <div className="absolute left-0 mt-2 shadow focus:outline-none border w-60 z-10 bg-white text-black shadow-gray-500">
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
                <div className="text-left text-lg font-montserrat font-semibold w-full mt-12 text-gray-900">
                    Document Details
                </div>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="border text-black font-montserrat font-normal border-[#AFAFAF] bg-[#F7F1FF]">
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Sr. No.</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Document Name</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Description</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Document</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Remarks</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Upload Time</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF]">Uploaded by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedDocuments.length === 0 ? (
                            Array.from({ length: filesPerPage }).map((_, index) => (
                                <tr key={index}>
                                    <td className="border-b border-l  p-6 text-center text-black border-gray-300">
                                        {index + 1}
                                    </td>
                                    <td className="border-b p-6 text-center text-black border-gray-300">-</td>
                                    <td className="border-b  p-6 text-center text-black border-gray-300">-</td>
                                    <td className="border-b  p-6 text-center text-black border-gray-300">-</td>
                                    <td className="border-b  p-6 text-center text-black border-gray-300">-</td>
                                    <td className="border-b  p-6 text-center text-black border-gray-300">-</td>
                                    <td className="border-b  p-6 border-r text-center text-black border-gray-300">-</td>
                                </tr>
                            ))
                        ) : (
                            uploadedDocuments
                            .slice((currentPage - 1) * filesPerPage, currentPage * filesPerPage)
                            .map((document, index) => (
                                <tr key={index}>
                                    <td className="border text-center text-black border-gray-300">
                                        {document.srNo}
                                    </td>
                                    <td className="border text-center text-black border-gray-300">{document.name}</td>
                                    <td className="border text-center text-black border-gray-300">{document.description}</td>
                                    <td className="border text-center text-black border-gray-300">
                                        {document.attachmentURL && (
                                            <a href={document.attachmentURL} download={document.attachmentName} className="hover:underline text-[#9E6AED] hover:text-[#9E6AED]">
                                                <img src={docImage} alt="doc" className="h-12 w-12 m-2 inline-block" />
                                                Download
                                            </a>
                                        )}
                                    </td>
                                    <td className="border text-center text-black border-gray-300">{document.remarks}</td>
                                    <td className="border text-center text-black border-gray-300">{document.uploadTime}</td>
                                    <td className="border text-center text-black border-gray-300">User</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <div className="flex justify-between font-montserrat items-center mt-4">
                    <span className="cursor-pointer text-purple-600 hover:text-purple-800" onClick={handlePrevClick}>&laquo; Prev</span>
                    <div className="flex space-x-2">
                        <span className="w-8 h-8 text-center p-1 rounded-full bg-[#C9AEF2] text-gray-800">{currentPage}</span>
                        <span className="w-8 h-8 border text-center p-1 rounded-full bg-gray-100 text-gray-800 border-[#C9AEF2]">{currentPage + 1}</span>
                    </div>
                    <span className="cursor-pointer text-purple-600 hover:text-purple-800" onClick={handleNextClick}>Next &raquo;</span>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <label className="mr-2 mt-1 text-gray-700">Rows per page:</label>
                <select
                    className="border focus:outline-none rounded py-1 bg-white text-black border-gray-300 hover:border-gray-700"
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

export default UploadDocuments;
