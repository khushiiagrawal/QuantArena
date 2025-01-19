import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pdf from "./pics/pdf.png";

const Dashboard = () => {
    const [files, setFiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const filesPerPage = 5;
    const navigate = useNavigate();

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFiles([...files, file]);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < Math.ceil(files.length / filesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleProjectIdClick = () => {
        navigate(`/projectid`);
    };

    const indexOfLastFile = currentPage * filesPerPage;
    const indexOfFirstFile = indexOfLastFile - filesPerPage;
    const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

    return (
        <div className="min-h-screen w-screen bg-gray-200 dark:bg-gray-800 flex flex-col items-start py-8 md:py-12 px-4 md:px-12">
            <div className="flex justify-between w-full">
                <h3 className="text-left font-montserrat text-medium text-black dark:text-white mt-16">Dashboard</h3>
            </div>

            <div className="w-full max-w-8xl bg-white dark:bg-gray-900 shadow-md mt-8 min-h-[70vh] rounded-md p-4 md:p-7">
                <h1 className="text-xl text-black dark:text-white font-sm font-montserrat mb-4">Projects</h1>

                <div className="overflow-x-auto font-sm">
                    <table className="w-full table-auto h-[50vh] font-sm border-collapse">
                        <thead>
                            <tr className="bg-[#F7F1FF] dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-sm text-medium font-montserrat">
                                <th className="border px-2 md:px-4 py-2 text-left">Sr. No.</th>
                                <th className="border px-2 md:px-4 py-2 text-left">Project ID</th>
                                <th className="border px-2 md:px-4 py-2 text-left">Project Name</th>
                                <th className="border px-2 md:px-4 py-2 text-left">Organisation Name</th>
                                <th className="border px-2 md:px-4 py-2 text-left">Project Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentFiles.map((file, index) => (
                                <tr key={index}>
                                    <td className="border text-black dark:text-white px-2 md:px-4 py-2">{indexOfFirstFile + index + 1}</td>
                                    <td className="border text-black dark:text-white px-2 md:px-4 py-2 cursor-pointer text-blue-500" onClick={() => handleProjectIdClick(file.name)}>{file.name}</td>
                                    <td className="border text-black dark:text-white px-2 md:px-4 py-2">Project Name</td>
                                    <td className="border text-black dark:text-white px-2 md:px-4 py-2">Organisation Name</td>
                                    <td className="border text-black dark:text-white px-2 md:px-4 py-2">Project Type</td>
                                </tr>
                            ))}
                            {currentFiles.length < filesPerPage && (
                                <tr>
                                    <td colSpan="5" className="border px-4 py-8 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="bg-[#ECE1FB] dark:bg-gray-700 p-3 rounded-full cursor-pointer" onClick={() => document.getElementById('fileInput').click()}>
                                                <img src={pdf} alt="PDF Icon" className="h-10 w-10" />
                                            </div>
                                            <input type="file" id="fileInput" className="hidden" onChange={handleFileUpload} />
                                            <p className="mt-4 text-gray-500 dark:text-gray-300 cursor-pointer">Add files</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between font-montserrat items-center mt-4">
                    <span className="text-purple-600 dark:text-purple-400 hover:text-purple-800 cursor-pointer" onClick={handlePrevClick}>&laquo; Prev</span>
                    <div className="flex space-x-2">
                        <span className="bg-[#C9AEF2] dark:bg-purple-700 text-gray-800 dark:text-gray-200 w-8 h-8 text-center p-1 rounded-full">{currentPage}</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-8 h-8 border border-[#C9AEF2] text-center p-1 rounded-full">{currentPage + 1}</span>
                    </div>
                    <span className="text-purple-600 dark:text-purple-400 hover:text-purple-800 cursor-pointer" onClick={handleNextClick}>Next &raquo;</span>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
