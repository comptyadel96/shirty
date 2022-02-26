import React, { useRef } from "react"
import { MdShoppingCart } from "react-icons/md"
import { ImEarth } from "react-icons/im"

function Navbar({ navRef, onPressConnect }) {
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

  return (
    <div
      className=" md:flex md:items-center md:justify-between md:flex-wrap bg-transparentblack py-2 shadow-lg  fixed top-0 w-screen hidden z-50 transition-all duration-700"
      ref={navRef}
    >
      {/* brand */}
      <div className="inline-flex items-center ml-3">
        <img alt="brand" src="/images/shirty-brand.png" className="md:h-9" />
        <p className="md:ml-5 text-2xl font-semibold text-white font-body">
          Shirty{" "}
        </p>
      </div>

      {/* nav elements */}
      <ul className="flex items-center justify-evenly  mr-8 relative">
        <li
          className="mx-5 cursor-pointer text-2xl text-white hover:text-yellow-500 font-body"
          data-color="hover:text-yellow-500"
        >
          Découvrez nos produits
        </li>
        <li
          className="mx-5 cursor-pointer text-2xl text-white hover:text-yellow-500 font-body"
          data-color="hover:text-yellow-500"
        >
          Commancez le design
        </li>
        <li
          className="mx-5 cursor-pointer text-2xl text-white hover:text-yellow-500 font-body"
          data-color="hover:text-yellow-500"
          onClick={onPressConnect}
        >
          Se connecter
        </li>

        <MdShoppingCart className="text-xl text-white cursor-pointer mx-3 transition-all duration-700 hover:translate-x-3 hover:text-red-400 " />
        <div
          className="relative"
          onMouseEnter={toggleLang}
          onMouseLeave={toggleLang}
        >
          <ImEarth className="text-xl text-white cursor-pointer mx-3 transition-all duration-700 hover:rotate-180 hover:text-blue-400 " />
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
