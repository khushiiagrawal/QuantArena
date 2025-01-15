import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Req = () => {
    const [isRequestAccess, setIsRequestAccess] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen font-montserrat w-screen">
            {isResetPassword ? (
                <>
                    <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                        <div className="w-full md:w-3/4 p-4 md:p-8">
                            <h2 className="text-2xl text-black font-semibold mb-8 md:mb-16">Logo</h2>
                            <div className='mb-8 md:mb-16'>
                                <h3 className="text-3xl text-black font-montserrat font-semibold mb-2">
                                    Reset Password
                                </h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Enter your new password.
                                </p>
                                <form>
                                    <div className="mb-4 relative">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            New Password<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                            placeholder="Enter your new password"
                                            required
                                        />
                                        <span
                                            className="absolute right-2 top-3 cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    <div className="mb-4 relative">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Confirm Password<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="w-full border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                            placeholder="Confirm your new password"
                                            required
                                        />
                                        <span
                                            className="absolute right-2 top-3 cursor-pointer"
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#5BD8A3] text-white font-medium py-3 mb-2 hover:bg-green-200"
                                    >
                                        Reset Password
                                    </button>
                                </form>
                                <span
                                    className="mt-4 text-[#9E6AED] bg-white cursor-pointer"
                                    onClick={() => setIsResetPassword(false)}
                                >
                                    Back to Login
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#9E6AED] flex items-center justify-center py-0 md:py-4">
                        <h1 className="text-white text-5xl font-montserrat text-semibold text-center">
                            QuantArena Project <br />Management System
                        </h1>
                    </div>
                </>
            ) : isForgotPassword ? (
                <>
                    <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                        <div className="w-full md:w-3/4 p-4 md:p-8">
                            <h2 className="text-2xl text-black font-semibold mb-8 md:mb-16">Logo</h2>
                            <div className='mb-8 md:mb-16'>
                                <h3 className="text-3xl text-black font-montserrat font-semibold mb-2">
                                    Forgot Password
                                </h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Enter your email address to reset your password.
                                </p>
                                <form onSubmit={(e) => { e.preventDefault(); setIsResetPassword(true); }}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Email Address<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#5BD8A3] text-white font-medium py-3 mb-2 hover:bg-green-200"
                                    >
                                        Reset Password
                                    </button>
                                </form>
                                <span
                                    className="mt-4 text-[#9E6AED] bg-white cursor-pointer"
                                    onClick={() => setIsForgotPassword(false)}
                                >
                                    Back to Login
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#9E6AED] flex items-center justify-center py-0 md:py-4">
                        <h1 className="text-white text-5xl font-montserrat text-semibold text-center">
                            QuantArena Project <br />Management System
                        </h1>
                    </div>
                </>
            ) : isRequestAccess ? (
                <>
                    <div className="w-full md:w-1/2 bg-[#9E6AED] flex items-center justify-center py-8 md:py-4">
                        <h1 className="text-white text-5xl font-montserrat mt-9 text-semibold text-center">
                            QuantArena Project <br />Management System
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                        <div className="w-full md:w-3/4 p-4 md:p-8">
                            <h2 className="text-2xl text-black font-semibold mb-8 md:mb-16">Logo</h2>
                            <h3 className="text-3xl text-black font-montserrat font-semibold mb-2">
                                Request Access
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet duis risus.
                            </p>
                            <div className="flex border w-full border-gray-300 bg-white overflow-hidden mb-6">
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
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full text-black border-gray-600 focus:outline-none border bg-white px-2 py-3 focus:ring-2 "
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
                                        className="w-full border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
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
                                        className="w-full border-gray-600 border text-black bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                        placeholder="Enter project ID"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#5BD8A3] text-white font-medium py-3 hover:bg-green-200"
                                >
                                    Request Access
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                        <div className="w-full md:w-3/4 p-4 md:p-8">
                            <h2 className="text-2xl text-black font-semibold mb-8 md:mb-16">Logo</h2>
                            <div className='mt-8 md:mt-24'>
                                <h3 className="text-3xl text-black font-montserrat font-semibold mb-2">
                                    Sign In to QAPMS
                                </h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet duis risus.
                                </p>
                                <div className="flex border w-full border-gray-300 bg-white overflow-hidden mb-4">
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
                                <form onSubmit={handleLogin}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Email Address<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Password<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full border-gray-600 border text-black bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                            placeholder="Enter your password"
                                            required
                                        />
                                        <span
                                            className="absolute right-2 top-3 cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                        <label
                                            className="block text-[#9E6AED] cursor-pointer text-sm font-sm mt-2 mb-2"
                                            onClick={() => setIsForgotPassword(true)}
                                        >
                                            Forgot password?
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#5BD8A3] text-white font-medium py-3 hover:bg-green-200"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#9E6AED] flex items-center justify-center py-8 md:py-4">
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
