import React, { useRef, useContext } from "react"
import { MdShoppingCart } from "react-icons/md"
import { ImEarth } from "react-icons/im"
import AuthContext from "../utils/AuthContext"
import { useNavigate } from "react-router-dom"
function Navbar({ navRef, onPressConnect }) {
  const user = useContext(AuthContext)
  console.log(user)
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
    <div
      className=" md:flex md:items-center md:justify-between md:flex-wrap bg-white  shadow-lg p-1 absolute top-0  w-full hidden z-50 transition-all duration-700"
      ref={navRef}
    >
      {/* brand */}
      <div
        className="inline-flex items-center ml-3 cursor-pointer"
        onClick={() => {
          navigate("/")
        }}
      >
        <img alt="brand" src="/images/shirty-brand.png" className="md:h-9" />
        <p className="md:ml-5 text-2xl font-semibold text-gray-700">
          Shirty{" "}
        </p>
      </div>

      {/* nav elements */}
      <ul className="flex items-center justify-evenly  mr-8 relative">
        <li className="mx-5 cursor-pointer text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full px-2 py-1">
          Découvrez nos produits
        </li>
        <li className="mx-5 cursor-pointer text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full px-2 py-1">
          Commancez le design
        </li>
        {!user.currUser ? (
          <li
            className="mx-5 cursor-pointer text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full px-2 py-1 "
            onClick={onPressConnect}
          >
            Se connecter
          </li>
        ) : (
          <li
            className="mx-5 cursor-pointer text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full px-1 "
            onClick={() => navigate("/profile")}
          >
            Profil
          </li>
        )}
        <li
          onClick={() => navigate("/adminDashboard")}
          className="mx-5 cursor-pointer text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full px-2 py-1"
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
