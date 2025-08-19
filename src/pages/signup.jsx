function Signup() {
  return (
    <div className="flex justify-center items-center bg-gray-50 h-screen">
      <div className="flex justify-center items-center border border-gray-200 shadow-lg rounded-2xl bg-white flex-col w-[400px] max-w-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-left">Create your PopX account</h1>
        <form action="" className="w-full">
    
          {/* Full Name */}
          <div className="mb-4 relative">
            <label className="absolute -top-2 left-3 bg-white text-purple-700 font-medium px-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 relative">
            <label className="absolute -top-2 left-3 bg-white text-purple-700 font-medium px-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="Enter your PH No."
            />
          </div>

          {/* Email Address */}
          <div className="mb-4 relative">
            <label className="absolute -top-2 left-3 bg-white text-purple-700 font-medium px-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="absolute -top-2 left-3 bg-white text-purple-700 font-medium px-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="Enter your Password"
            />
          </div>

          {/* Company Name */}
          <div className="mb-4 relative">
            <label className="absolute -top-2 left-3 bg-white text-purple-700 font-medium px-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="Enter your company name"
            />
          </div>

          {/* Radio Buttons */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2 text-left">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="form-radio accent-purple-600 w-5 h-5"
                  defaultChecked
                  required
                />
                <span className="ml-2 text-gray-700 font-medium">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="form-radio accent-gray-400 w-5 h-5"
                  required
                />
                <span className="ml-2 text-gray-700 font-medium">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[56px] bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
