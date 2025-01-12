import { useState } from 'react';

const Req = () => {
    const [isRequestAccess, setIsRequestAccess] = useState(true);

    return (
        <div className="flex h-screen w-screen">
            {/* Conditionally render sections based on isRequestAccess */}
            {isRequestAccess ? (
                <>
                    {/* Left Section */}
                    <div className="w-1/2 bg-[#9E6AED] flex items-center justify-center">
                        <h1 className="text-white text-5xl font-montserrat text-semibold text-center">
                            QuantArena Project <br />Management System
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/2 bg-white flex items-center justify-center">
                        <div className="w-3/4">
                            {/* Logo */}
                            <h2 className="text-2xl text-black font-semibold mb-16">Logo</h2>

                            {/* Request Access Section */}
                            <h3 className="text-3xl text-black font-montserrat font-semibold mb-2">
                                Request Access
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet duis risus.
                            </p>
                            {/* Tabs */}
                            <div className="flex border w-3/4 border-gray-300 bg-white overflow-hidden mb-6">
                                <button
                                    className={`flex-1 bg-white hover:border-[#9B9AEC] border font-medium py-2 px-4 border-b-4 focus:outline-none ${
                                        isRequestAccess ? 'text-[#9E6AED] border-[#9E6AED]' : 'text-gray-500 border-transparent'
                                    }`}
                                    onClick={() => setIsRequestAccess(true)}
                                >
                                    Request Access
                                </button>
                                <button
                                    className={`flex-1 bg-white font-medium hover:border-[#9B9AEC] border py-2 px-4 border-b-4 focus:outline-none ${
                                        !isRequestAccess ? 'text-[#9E6AED] border-[#9E6AED]' : 'text-gray-500 border-transparent'
                                    }`}
                                    onClick={() => setIsRequestAccess(false)}
                                >
                                    Login
                                </button>
                            </div>

                            {/* Form */}
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-3/4 text-black border-gray-600 focus:outline-none border bg-white p-2 focus:ring-2 "
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-3/4 border-gray-600 text-black border bg-white p-2 focus:ring-2 focus:outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Project ID<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-3/4 border-gray-600 border text-black bg-white p-2 focus:ring-2 focus:outline-none"
                                        placeholder="Enter project ID"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-3/4 bg-[#5BD8A3] text-white font-medium py-3 hover:bg-green-200"
                                >
                                    Request Access
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Left Section */}
                    <div className="w-1/2 bg-white flex items-center justify-center">
                        <div className="w-3/4">
                            {/* Logo */}
                            <h2 className="text-2xl text-black font-semibold mb-16">Logo</h2>

                            {/* Login Section */}
                            <div className='mb-16'>
                            <h3 className="text-3xl text-black font-montserrat font-semibold mb-2">
                               Sign In to QAPMS
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet duis risus.
                            </p>
                            {/* Tabs */}
                            <div className="flex border w-3/4 border-gray-300 bg-white overflow-hidden mb-6">
                                <button
                                    className={`flex-1 bg-white hover:border-[#9B9AEC] border font-medium py-2 px-4 border-b-4 focus:outline-none ${
                                        isRequestAccess ? 'text-[#9E6AED] border-[#9E6AED]' : 'text-gray-500 border-transparent'
                                    }`}
                                    onClick={() => setIsRequestAccess(true)}
                                >
                                    Request Access
                                </button>
                                <button
                                    className={`flex-1 bg-white font-medium hover:border-[#9B9AEC] border py-2 px-4 border-b-4 focus:outline-none ${
                                        !isRequestAccess ? 'text-[#9E6AED] border-[#9E6AED]' : 'text-gray-500 border-transparent'
                                    }`}
                                    onClick={() => setIsRequestAccess(false)}
                                >
                                    Login
                                </button>
                            </div>
                            

                            {/* Form */}
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-3/4 border-gray-600 text-black border bg-white p-2 focus:ring-2 focus:outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Password<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="w-3/4 border-gray-600 border text-black bg-white p-2 focus:ring-2 focus:outline-none"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-3/4 bg-[#5BD8A3] text-white font-medium py-3 hover:bg-green-200"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/2 bg-[#9E6AED] flex items-center justify-center">
                        <h1 className="text-white text-5xl font-montserrat text-semibold text-center">
                            QuantArena Project <br />Management System
                        </h1>
                    </div>
                    
                </>
            )}
            
        </div>
        
    );
};

export default Req;
