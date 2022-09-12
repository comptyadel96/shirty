import React, { useRef, useContext } from "react"
import { MdShoppingCart } from "react-icons/md"
import { ImEarth } from "react-icons/im"
import { MdOutlineMenu } from "react-icons/md"
import AuthContext from "../utils/AuthContext"
import { useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5"
function Navbar() {
  const user = useContext(AuthContext)

  const langRef = useRef(null)
  const burgerMenu = useRef(null)
  const toggleLang = () => {
    if (langRef.current.classList.contains("max-h-0")) {
      langRef.current.classList.add("h-auto")
      langRef.current.classList.remove("max-h-0")
    } else {
      langRef.current.classList.remove("h-auto")
      langRef.current.classList.add("max-h-0")
    }
  }
  const toggleBurgerMenu = () => {
    let showArr = ["max-h-[1000px]", "w-full", "transition-all", "duration-700"]
    if (burgerMenu.current.classList.contains("max-h-0")) {
      showArr.map((clas) => burgerMenu.current.classList.add(clas))
      burgerMenu.current.classList.remove("max-h-0")
    } else {
      burgerMenu.current.classList.remove("max-h-[1000px]")
      burgerMenu.current.classList.add("max-h-0")
    }
  }
  const navigate = useNavigate()
  return (
    <>
      {/* horizontal navbar */}
      <div className=" lg:flex lg:items-center  lg:justify-between fixed bg-white  shadow-md py-4  top-0  w-full  hidden z-50 transition-all duration-700">
        {/* brand */}
        <div
          className="inline-flex items-center ml-3 cursor-pointer "
          onClick={() => {
            navigate("/")
          }}
        >
          <img alt="brand" src="/images/logo2.png" className="md:h-10" />
          <p className="md:ml-2 text-2xl font-bold text-gray-900">Shirty </p>
        </div>
        {/* search bar */}
        <div className="inline-flex  items-center justify-between relative border xl:w-[38%] w-[27%]  rounded-md pl-1  ">
          <input
            type="text"
            className=" py-1 outline-none w-full   "
            placeholder="Rechercher un article"
          />
          <div className="bg-gray-100 hover:bg-gray-200 h-full border-l">
            <IoSearch
              size={39}
              className="cursor-pointer text-gray-700 px-2  "
            />
          </div>
        </div>

        {/* nav elements */}
        <ul className="flex items-center p-0 justify-start  mr-5 relative h-full ">
          <li
            onClick={() => {
              navigate("/shop")
            }}
            className="mx-2 cursor-pointer text-lg text-black hover:text-cyan-600  font-semibold "
          >
            Découvrez nos produits
          </li>
          <li
            onClick={() => {
              navigate("/makeShirt")
            }}
            className="mx-2 cursor-pointer text-lg text-black hover:text-cyan-600  font-semibold"
          >
            Commancez le design
          </li>
          {!user.currUser ? (
            <li
              className="mx-2 cursor-pointer text-lg text-black hover:text-cyan-600  font-semibold"
              onClick={() => navigate("/login")}
            >
              Se connecter
            </li>
          ) : (
            <li
              className="mx-2 cursor-pointer text-lg text-black hover:text-cyan-600  font-semibold"
              onClick={() => navigate("/profile")}
            >
              Profil
            </li>
          )}
          {user.currUser && user.currUser.isAdmin && (
            <li
              onClick={() => navigate("/adminDashboard")}
              className="mx-2 cursor-pointer text-lg text-black hover:text-cyan-600  font-semibold"
            >
              Admin dashboard
            </li>
          )}

          <MdShoppingCart className="text-xl  cursor-pointer" />
          <div
            className="relative"
            onMouseEnter={toggleLang}
            onMouseLeave={toggleLang}
          >
            <ImEarth className="text-xl  cursor-pointer ml-2 " />
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

      {/* mobile navbar */}
      <div className="lg:hidden bg-white px-3 py-2 flex  items-center shadow-lg  fixed top-0 z-50  w-full ">
        {/* brand */}
        <div
          className="inline-flex items-center  cursor-pointer "
          onClick={() => {
            navigate("/")
          }}
        >
          <img alt="brand" src="/images/logo2.png" className="h-10" />
          <p className="ml-1 text-2xl font-bold text-gray-900">Shirty </p>
        </div>
        <MdOutlineMenu
          size={36}
          className="absolute right-5 z-40"
          onClick={toggleBurgerMenu}
        />
        <div
          className="absolute left-0 bg-white max-h-0  block overflow-hidden shadow-xl"
          ref={burgerMenu}
          style={{
            bottom:
              user.currUser && user.currUser.isAdmin ? "-128px" : "-100px",
          }}
        >
          <p
            className="font-semibold text-lg text-center my-1"
            onClick={() => {
              navigate("/makeShirt")
            }}
          >
            Commancer le design
          </p>
          <p
            className="font-semibold text-lg text-center my-1"
            onClick={() => {
              navigate("/shop")
            }}
          >
            Découvrez nous produits
          </p>
          {!user.currUser ? (
            <p
              className="font-semibold text-lg text-center my-1"
              onClick={() => navigate("/login")}
            >
              Se connecter/S'inscrire
            </p>
          ) : (
            <p
              className="font-semibold text-lg text-center my-1"
              onClick={() => navigate("/profile")}
            >
              Profil
            </p>
          )}
          {user.currUser && user.currUser.isAdmin && (
            <p className="font-semibold text-lg text-center my-1">
              Admin dashbord
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
