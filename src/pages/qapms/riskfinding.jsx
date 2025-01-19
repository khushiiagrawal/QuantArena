import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormComponent = () => {
    const [outcomeType, setOutcomeType] = useState('');
    const [title, setTitle] = useState('');
    const [severity, setSeverity] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [referenceSection, setReferenceSection] = useState('');
    const [description, setDescription] = useState('');
    const [severityRationale, setSeverityRationale] = useState('');
    const [mitigationSuggestions, setMitigationSuggestions] = useState('');

    const [formData, setFormData] = useState([]);
    const [filesPerPage, setFilesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const handleSelect = (setter) => (value) => {
        setter(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            srNo: formData.length + 1,
            outcomeType,
            title,
            description,
            referenceSection,
            severity,
            severityRationale,
            mitigationSuggestions,
        };
        setFormData([...formData, newEntry]);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < Math.ceil(formData.length / filesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const Dropdown = ({ label, options, selected, onSelect }) => {
        Dropdown.propTypes = {
            label: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired,
                    label: PropTypes.string.isRequired,
                })
            ).isRequired,
            selected: PropTypes.string,
            onSelect: PropTypes.func.isRequired,
        };
    
        return (
            <div className="relative inline-block w-full">
                <button
                    className="mt-2 text-black dark:text-white focus:outline-none border rounded px-4 py-4 text-left w-full inline-flex items-center bg-gray-200 dark:bg-gray-700 hover:border-white dark:hover:border-gray-500"
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === label ? null : label);
                    }}
                >
                    {selected || label}
                    <span>
                        <svg
                            className={`ml-1 w-4 h-4 transform ${openDropdown === label ? "rotate-180" : "rotate-0"} transition-transform`}
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
                {openDropdown === label && (
                    <div className="absolute left-0 mt-2 shadow focus:outline-none border w-full z-10 bg-white dark:bg-gray-800 text-black dark:text-white shadow-gray-500">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#9E6AED]"
                                onClick={() => {
                                    onSelect(option.value);
                                    setOpenDropdown(null);
                                }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full font-montserrat min-h-[50vh] bg-white dark:bg-gray-900">
            <div className="mt-8 text-left text-xl font-montserrat font-semibold w-full text-gray-900 dark:text-white">
                Update Risk Findings 
            </div>
            <form className="rounded-lg w-auto p-6 mt-4 bg-white dark:bg-gray-800" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Outcome Type */}
                    <div>
                        <label htmlFor="outcomeType" className="block text-lg font-medium font-montserrat text-black dark:text-white">
                            Outcome Type<span className='text-red-500'>*</span>
                        </label>
                        <Dropdown
                            label="Select Outcome Type"
                            options={[
                                { value: 'Required Action Item', label: 'Required Action Item' },
                                { value: 'Limitation', label: 'Limitation' },
                                { value: 'Recommendation', label: 'Recommendation' },
                                { value: 'Observation', label: 'Observation' },
                            ]}
                            selected={outcomeType}
                            onSelect={handleSelect(setOutcomeType)}
                        />
                    </div>

                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium font-montserrat text-gray-800 dark:text-white">
                            Title<span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="mt-2 focus:outline-none border rounded px-4 h-14 py-3 text-left w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:border-white dark:hover:border-gray-500"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-lg font-medium font-montserrat text-gray-800 dark:text-white">
                            Description<span className='text-red-500'>*</span>
                        </label>
                        <textarea
                            id="description"
                            className="mt-2 focus:outline-none border rounded px-4 py-3 h-14 text-left w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:border-white dark:hover:border-gray-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                            placeholder="Enter description"
                        ></textarea>
                    </div>

                    {/* Reference Section */}
                    <div>
                        <label htmlFor="referenceSection" className="block text-lg font-medium font-montserrat text-gray-800 dark:text-white">
                            Reference section of the review report
                        </label>
                        <textarea
                            id="referenceSection"
                            className="mt-2 focus:outline-none border rounded px-4 py-3 h-14 text-left w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:border-white dark:hover:border-gray-500"
                            rows="3"
                            placeholder="Enter rationale"
                            value={referenceSection}
                            onChange={(e) => setReferenceSection(e.target.value)}
                        ></textarea>
                    </div>

                    {['Required Action Item', 'Limitation'].includes(outcomeType) && (
                        <React.Fragment>
                            {/* Severity */}
                            <div>
                                <label htmlFor="severity" className="block text-lg font-medium font-montserrat text-gray-800 dark:text-white">
                                    Severity<span className='text-red-500'>*</span>
                                </label>
                                <Dropdown
                                    label="Select Severity"
                                    options={[
                                        { value: 'low', label: 'Low' },
                                        { value: 'medium', label: 'Medium' },
                                        { value: 'high', label: 'High' },
                                    ]}
                                    selected={severity}
                                    onSelect={handleSelect(setSeverity)}
                                />
                            </div>
                    
                            {/* Severity Rationale */}
                            <div>
                                <label htmlFor="severityRationale" className="block text-lg font-medium font-montserrat text-gray-800 dark:text-white">
                                    Severity Rationale<span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    id="severityRationale"
                                    className="mt-2 focus:outline-none border rounded px-4 py-3 h-14 text-left w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:border-white dark:hover:border-gray-500"
                                    rows="3"
                                    placeholder="Enter rationale"
                                    value={severityRationale}
                                    onChange={(e) => setSeverityRationale(e.target.value)}
                                ></textarea>
                            </div>
                    
                            {/* Mitigation Suggestions */}
                            <div className="md:col-span-2">
                                <label htmlFor="mitigationSuggestions" className="block text-lg font-medium font-montserrat text-gray-800 dark:text-white">
                                    Mitigation Suggestions
                                </label>
                                <textarea
                                    id="mitigationSuggestions"
                                    className="mt-2 focus:outline-none border rounded px-4 py-3 h-14 text-left w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:border-white dark:hover:border-gray-500"
                                    rows="3"
                                    placeholder="Enter suggestions"
                                    value={mitigationSuggestions}
                                    onChange={(e) => setMitigationSuggestions(e.target.value)}
                                ></textarea>
                            </div>
                        </React.Fragment>
                    )}

                    <div className="flex justify-left space-x-4 mt-6">
                        <button
                            type="button"
                            className="py-2 px-10 border rounded focus:outline-none bg-white dark:bg-gray-800 border-[#5BD8A3] text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:border-[#8FF2C8]"
                        >
                            Save
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-10 rounded border focus:outline-none bg-[#5BD8A3] text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:border-white hover:bg-[#8FF2C8]"
                        >
                            Submit
                        </button>
                    </div>
                
                </div>
            </form>
            {formData && formData.length > 0 && (
                <RiskFindingsTable
                    formData={formData}
                    currentPage={currentPage}
                    handlePrevClick={handlePrevClick}
                    handleNextClick={handleNextClick}
                    filesPerPage={filesPerPage}
                    setFilesPerPage={setFilesPerPage}
                />
            )}
        </div>
    );
};

 const RiskFindingsTable = ({ formData, currentPage, handlePrevClick, handleNextClick, filesPerPage, setFilesPerPage }) => {
    return (
        <>
            <div className="text-left text-lg font-montserrat font-semibold w-full mt-12 text-gray-900 dark:text-white">
                Risk Findings
            </div>
            <div className="overflow-x-auto">
                <table className="w-full mt-6 min-w-[1000px]">
                    <thead>
                        <tr className=" border font-montserrat text-black dark:text-white font-normal border-[#AFAFAF] dark:border-gray-700 bg-[#F7F1FF] dark:bg-gray-800">
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Sr. No.</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Outcome Type</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Title</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Description</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Reference Section</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Severity</th>
                            <th className="font-montserrat font-normal p-2 border-b border-[#AFAFAF] dark:border-gray-700">Severity Rationale</th>
                            <th className="font-montserrat font-normal p-2 border-b border-r border-[#AFAFAF] dark:border-gray-700">Mitigation Suggestions</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {formData.length === 0
                            ? Array.from({ length: filesPerPage }).map((_, index) => (
                                <tr key={index}>
                                    <td className="border-b border-l text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                    <td className="border-b border-r text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">-</td>
                                </tr>
                            ))
                            : formData
                                .slice((currentPage - 1) * filesPerPage, currentPage * filesPerPage)
                                .map((document, index) => (
                                    <tr key={index}>
                                        <td className="border-b border-l p-6 text-center text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.srNo}
                                        </td>
                                        <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.outcomeType}
                                        </td>
                                        <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.title}
                                        </td>
                                        <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.description}
                                        </td>
                                        <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.referenceSection}
                                        </td>
                                        <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.severity}
                                        </td>
                                        <td className="border-b text-center p-6 text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.severityRationale}
                                        </td>
                                        <td className="border-b border-r p-6 text-center text-black dark:text-white border-gray-300 dark:border-gray-700">
                                            {document.mitigationSuggestions}
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between font-montserrat items-center mt-4">
                <span className="cursor-pointer text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600" onClick={handlePrevClick}>&laquo; Prev</span>
                <div className="flex space-x-2">
                    <span className="w-8 h-8 text-center p-1 rounded-full bg-[#C9AEF2] text-gray-800 dark:text-gray-900">{currentPage}</span>
                    <span className="w-8 h-8 border text-center p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-[#C9AEF2] dark:border-gray-500">{currentPage + 1}</span>
                </div>
                <span className="cursor-pointer text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600" onClick={handleNextClick}>Next &raquo;</span>
            </div>
            <div className="flex justify-end mt-4">
                <label className="mr-2 mt-1 text-gray-700 dark:text-gray-300">Rows per page:</label>
                <select
                    className="border focus:outline-none rounded py-1 bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:border-gray-700 dark:hover:border-gray-500"
                    value={filesPerPage}
                    onChange={(e) => setFilesPerPage(Number(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </>
    );
};

RiskFindingsTable.propTypes = {
    formData: PropTypes.arrayOf(
        PropTypes.shape({
            srNo: PropTypes.number.isRequired,
            outcomeType: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            referenceSection: PropTypes.string.isRequired,
            severity: PropTypes.string,
            severityRationale: PropTypes.string,
            mitigationSuggestions: PropTypes.string,
        })
    ).isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
    filesPerPage: PropTypes.number.isRequired,
    setFilesPerPage: PropTypes.func.isRequired,
};

export { RiskFindingsTable };
export default FormComponent;
