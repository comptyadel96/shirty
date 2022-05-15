import React from "react"
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai"
function Login() {
  const socialAuth = async (url) => {
    window.open(url, "_self")
  }
  return (
    <div className="flex flex-col   z-50  items-center md:w-1/2 mx-auto md:mt-32 md:py-3  relative ">
      <img src="/images/login.png" alt="login illustration" className="h-96" />
      <p className="font-semibold text-gray-700 md:mb-2 md:text-xl">
        Connectez-vous avec :
      </p>
      <div className="inline-flex items-center w-full  justify-evenly">
        {/* facebook */}
        <button
          onClick={() =>
            socialAuth("http://localhost:5000/api/shirty/auth/facebook")
          }
          className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold cursor-pointer hover:bg-blue-600 bg-blue-500 md:px-6 md:py-1"
        >
          <AiFillFacebook className="mr-2" size={24} /> Facebook
        </button>
        {/* google */}
        <button
          onClick={() =>
            socialAuth("http://localhost:5000/api/shirty/auth/google")
          }
          className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold cursor-pointer hover:bg-orange-600 bg-orange-400 md:px-6 md:py-1"
        >
          <AiFillGoogleCircle className="mr-2" size={24} /> Google
        </button>
        {/* twitter */}
        <button className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold cursor-pointer hover:bg-sky-600 bg-sky-400 md:px-6 md:py-1">
          <AiFillTwitterCircle className="mr-2" size={24} /> Twitter
        </button>
      </div>
    </div>
  )
}

export default Login
