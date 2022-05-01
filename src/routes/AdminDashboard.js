import React, { useRef } from "react"
import Navbar from "../components/Navbar"
import { IoMdArrowDropdownCircle } from "react-icons/io"
import { Shart } from "../components/Shart"
import { VerticalShart } from "../components/VerticalShart"

function AdminDashboard() {
  const walletRef = useRef(null)
  const dbRef = useRef(null)
  const statRef= useRef(null)
  const toggleSubMenu = (ref) => {
    // ref.current.classList.toggle("hidden")
    if (ref.current.classList.contains("max-h-0")) {
      ref.current.classList.remove("max-h-0")
      ref.current.classList.add("max-h-32")
    } else {
      ref.current.classList.add("max-h-0")
      ref.current.classList.remove("max-h-32")
    }
  }
  return (
    <div className="h-screen w-full box-border pt-11 bg-gray-100 select-none">
      <Navbar />
      <div className="w-full h-full flex ">
        {/* vertical menu */}
        <div className="flex flex-col justify-evenly  bg-white md:h-1/2  md:px-3 border-r-2 border-r-pink-400 border-b-2 border-b-pink-400  md:py-3 relative">
          <p className="cursor-pointer text-gray-700 md:text-xl hover:text-pink-400 my-2 flex items-center">
            Orders
          </p>
          {/* wallet */}
          <div className="w-full">
            <p
              onClick={() => toggleSubMenu(walletRef)}
              className="cursor-pointer text-gray-700 md:text-xl hover:text-pink-400 my-2 flex items-center"
            >
              Wallet <IoMdArrowDropdownCircle size={22} className="ml-1" />
            </p>
            <div
              className="max-h-0 overflow-hidden transition-all duration-700  w-full bg-gray-100 text-center"
              ref={walletRef}
            >
              <p className="font-semibold hover:bg-gray-300 cursor-pointer">
                entreprise
              </p>
              <p className="font-semibold hover:bg-gray-300 cursor-pointer">
                designers
              </p>
            </div>
          </div>
          {/* database */}
          <div className="w-full">
            <p
              onClick={() => toggleSubMenu(dbRef)}
              className="cursor-pointer text-gray-700 md:text-xl hover:text-pink-400 my-2 flex items-center"
            >
              DataBase <IoMdArrowDropdownCircle size={22} className="ml-1" />
            </p>
            <div
              className=" max-h-0 overflow-hidden transition-all duration-700  w-full bg-gray-100 text-center"
              ref={dbRef}
            >
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                designers
              </p>
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                clients
              </p>
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                artciles
              </p>
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                designs
              </p>
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                paiment
              </p>
            </div>
          </div>
          <p className="cursor-pointer text-gray-700 md:text-xl hover:text-pink-400 my-2 flex items-center">
            Client support
          </p>
          <p className="cursor-pointer text-gray-700 md:text-xl hover:text-pink-400 my-2 flex items-center">
            E-mail entreprise
          </p>
          {/* statistic */}
          <div className="w-full">
            <p
              onClick={() => toggleSubMenu(statRef)}
              className="cursor-pointer text-gray-700 md:text-xl hover:text-pink-400 my-2 flex items-center"
            >
              Statistics <IoMdArrowDropdownCircle size={22} className="ml-1" />
            </p>
            <div
              className=" max-h-0 overflow-hidden transition-all duration-700  w-full bg-gray-200 text-center"
              ref={statRef}
            >
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                site manager
              </p>
              <p className="font-semibold hover:bg-gray-300  cursor-pointer">
                Marketing
              </p>
            </div>
          </div>
        </div>
        {/* data */}
        <Shart/>
        <VerticalShart/>
      </div>
    </div>
  )
}

export default AdminDashboard
