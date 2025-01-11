
function Req() {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-purple-500 flex items-center justify-center relative overflow-hidden">
        <h1 className="text-white text-4xl font-bold text-center">
          QuantArena Project Management System
        </h1>
        {/* Decorative Background Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-lg opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 left-32 w-8 h-8 bg-purple-400 rounded-full opacity-50"></div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-3/4">
          {/* Logo */}
          <h2 className="text-black text-xl font-bold mb-6">Logo</h2>

          {/* Heading */}
          <h2 className="text-gray-800 text-2xl font-bold">Request Access</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur. Imperdiet duis risus.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-6">
            <button className="text-purple-600 border-b-2 border-purple-600 pb-2 px-4 font-medium">
              Request Access
            </button>
            <button className="text-gray-500 pb-2 px-4 font-medium">Login</button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="absolute right-3 top-3 text-gray-400">📧</span>
              </div>
            </div>

            {/* Project ID Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Project ID<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Project ID"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="absolute right-3 top-3 text-gray-400">👁️</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 rounded hover:bg-green-600 transition"
            >
              Request Access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Req;
