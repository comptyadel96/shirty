import React, { useRef, useContext } from "react"
import { MdShoppingCart } from "react-icons/md"
import { ImEarth } from "react-icons/im"
import AuthContext from "../utils/AuthContext"
import { useNavigate } from "react-router-dom"
function Navbar() {
  const user = useContext(AuthContext)

  const langRef = useRef(null)
  const toggleLang = () => {
    if (langRef.current.classList.contains("max-h-0")) {
      langRef.current.classList.add("h-auto")
      langRef.current.classList.remove("max-h-0")
    } else {
      langRef.current.classList.remove("h-auto")
      langRef.current.classList.add("max-h-0")
    }
  }

  const navigate = useNavigate()
  return (
    <div className=" lg:flex lg:items-center lg:justify-between bg-white  shadow-lg p-1 absolute top-0  w-full  hidden z-50 transition-all duration-700">
      {/* brand */}
      <div
        className="inline-flex items-center ml-3 cursor-pointer "
        onClick={() => {
          navigate("/")
        }}
      >
        <img alt="brand" src="/images/shirty-brand.png" className="md:h-6" />
        <p className="md:ml-2 text-xl font-semibold text-gray-700">Shirty </p>
      </div>

      {/* nav elements */}
      <ul className="flex items-center p-0 justify-start  mr-5 relative  ">
        <li  onClick={() => {
            navigate("/getShirt")
          }}className="mx-1 cursor-pointer text-xl text-gray-700 hover:text-rose-600 px-2 py-1">
          Découvrez nos produits
        </li>
        <li
          onClick={() => {
            navigate("/makeShirt")
          }}
          className="mx-1 cursor-pointer text-xl text-gray-700 hover:text-rose-600 px-2 py-1"
        >
          Commancez le design
        </li>
        {!user.currUser ? (
          <li
            className="mx-1 cursor-pointer text-xl text-gray-700 hover:text-rose-600 px-2 py-1 "
            onClick={() => navigate("/login")}
          >
            Se connecter
          </li>
        ) : (
          <li
            className="mx-1 cursor-pointer text-xl text-gray-700 hover:text-rose-600 px-2 py-1 "
            onClick={() => navigate("/profile")}
          >
            Profil
          </li>
        )}
        <li
          onClick={() => navigate("/adminDashboard")}
          className="mx-1 cursor-pointer text-xl text-gray-700 hover:text-rose-600 px-2 py-1"
        >
          Admin dashboard
        </li>

        <MdShoppingCart className="text-xl text-gray-700 cursor-pointer mx-3 transition-all duration-700 hover:translate-x-3 hover:text-red-400 " />
        <div
          className="relative"
          onMouseEnter={toggleLang}
          onMouseLeave={toggleLang}
        >
          <ImEarth className="text-xl  cursor-pointer mx-3 transition-all duration-700 hover:rotate-180 hover:text-blue-400 " />
          <div
            className="absolute left-2 bottom-auto overflow-y-hidden  px-1 max-h-0 bg-black "
            ref={langRef}
          >
            <p className="block text-white cursor-pointer hover:text-red-600">
              Fr
            </p>
            <p className="block text-white cursor-pointer hover:text-red-600">
              EN
            </p>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
