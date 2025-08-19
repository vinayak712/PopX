function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50  ">
      <div className="flex flex-col w-[400px] max-w-md p-8 bg-white rounded-3xl shadow-lg border border-gray-200 h-[600px] m-4  ">
        <h1 className="text-3xl font-bold mb-2  text-left">Signin to your <span className="text-purple-700 animate-pulse"> PopX</span> account</h1>
        <p className="text-gray-500 text-lg mb-8 text-left">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipisicing elit,
        </p>
        <div className="mb-4 "> 
                  <div className="relative">
                       <label htmlFor="email" className=" absolute -top-2 left-3 bg-white text-purple-700 font-medium mb-1  text-left px-3">Email Address</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
          />
         </div>
        </div>
        <div className="mb-6 ">
                  <div className="relative">
                      <label htmlFor="password" className="absolute -top-2 left-3 bg-white text-purple-700 font-medium mb-1  text-left px-3">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
          />
          </div>
        </div>
        <button
          className="w-full h-[56px] bg-gray-300 text-gray-600 text-lg font-semibold rounded-lg hover:bg-gray-400 transition"
        >
          Login
              </button>
              <p className="text-xl m-4">Don't have account <span className="text-purple-700 hover:text-purple-500">Create Account</span></p>
      </div>
    </div>
  )
}

export default Signup