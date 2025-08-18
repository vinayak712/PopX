function Home() {
  return (
    <div className="flex items-end justify-center h-screen bg-gray-50 pb-6">
      <div className="flex flex-col justify-end w-full h-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200 m-4">
        <h1 className="text-4xl text-purple-700 animate-pulse mb-4 text-center font-bold">
          Welcome to PopX
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. FaloLorem ipsum dolor sit amet consectetur, adipisicing elit. Falo
        </p>
        <button className="w-full h-[56px] bg-blue-800 text-white text-2xl font-semibold rounded-xl mb-4 hover:bg-blue-700 transition">
          Create Account
        </button>
        <button className="w-full h-[56px] bg-purple-200 text-purple-800 text-xl rounded-xl hover:bg-purple-300 transition">
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default Home
