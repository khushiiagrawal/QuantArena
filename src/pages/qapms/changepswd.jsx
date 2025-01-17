import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Handle password change logic here
        console.log("Password changed successfully");
    };

    return (
        
            <div className="w-full  min-h-screen bg-white flex flex-col md:flex-row items-center justify-center">
                <div className="w-full min-h-screen md:w-1/2 bg-[#9E6AED] flex items-center justify-center py-0 md:py-4">
                    <h1 className="text-white text-5xl font-montserrat text-semibold text-center">
                        QuantArena Project <br />Management System
                    </h1>
                </div>
                <div className="w-full min-h-screen md:w-1/2 px-4 md:p-12 ml-10 mx-auto ">
                    <div>
                        <h3 className="text-3xl text-black font-montserrat mt-48 items-center font-semibold mb-2">
                            Change Password
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Use this space to change your new password
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-8 relative">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    New Password<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-3/4 border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                    placeholder="Enter your new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="absolute md:right-44 right-28  top-11 text-black cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <div className="mb-8 relative">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Confirm Password<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="w-3/4 border-gray-600 text-black border bg-white px-2 py-3 focus:ring-2 focus:outline-none"
                                    placeholder="Confirm your new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="absolute md:right-44 right-28 top-11 text-black cursor-pointer"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="w-3/4 bg-[#5BD8A3] text-white font-medium py-3 mb-2 border hover:border-white hover:focus:outline-none focus:outline-none hover:bg-green-200"
                            >
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
       
    );
};

export default ChangePassword;