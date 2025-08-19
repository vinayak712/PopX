import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="flex items-end justify-center h-screen bg-gray-50 pb-6">
      <div className=" relative flex flex-col justify-end w-full h-[600px] max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200 m-4">
                <Link to="/accS">
          <button className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600 transition">
            Settings
          </button>
        </Link>

        <h1 className="text-4xl text-purple-700 animate-pulse mb-4 text-center font-bold">
          Welcome to PopX
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. FaloLorem ipsum dolor sit amet consectetur, adipisicing elit. Falo
        </p>
        <Link to='/signup'>
          <button className="w-full h-[56px] bg-blue-800 text-white text-2xl font-semibold rounded-xl mb-4 hover:bg-blue-700 transition">
          Create Account
        </button>
        </Link>
        <button className="w-full h-[56px] bg-purple-200 text-purple-800 text-xl rounded-xl hover:bg-purple-300 transition">
         <Link to='/login'> Already Registered? Login</Link>
        </button>
          
      </div>
    </div>
  )
}

export default Home
