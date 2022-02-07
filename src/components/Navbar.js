import React from "react"
import { MdShoppingCart } from "react-icons/md"
import { ImEarth } from "react-icons/im"

function Navbar() {
  return (
    <div className=" md:flex md:items-center md:justify-between md:flex-wrap bg-white py-2 shadow-lg mb-8 fixed top-0 w-full hidden z-50">
      {/* brand */}
      <div className="inline-flex items-center ml-3">
        <img alt="brand" src="/images/shirty-brand.png" className="md:h-14" />
        <p className="md:ml-5 text-2xl font-semibold text-gray-700">Shirty </p>
      </div>

      {/* nav elements */}
      <ul className="flex items-center justify-evenly  mr-8 relative">
        <li className="mx-5 cursor-pointer text-xl text-gray-700 hover:text-red-400">
          Découvrez nos produits
        </li>
        <li className="mx-5 cursor-pointer text-xl text-gray-700 hover:text-red-400">
          Commancez le design
        </li>
        <li className="mx-5 cursor-pointer text-xl text-gray-700 hover:text-red-400">
          Se connecter
        </li>
        <MdShoppingCart className="text-xl cursor-pointer mx-3 transition-all duration-700 hover:translate-x-3 hover:text-red-400 " />
        <ImEarth className="text-xl cursor-pointer mx-3 transition-all duration-700 hover:rotate-180 hover:text-blue-400" />
        <div></div>
      </ul>
    </div>
  )
}

export default Navbar
