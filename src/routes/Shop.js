import React, { useRef } from "react"
import { IoSearch, IoFilterSharp } from "react-icons/io5"

import {
  FiChevronDown,
  //  FiChevronUp
} from "react-icons/fi"
function Shop() {
  const leftBarRef = useRef(null)
  const dateRef = useRef(null)
  const noteRef = useRef(null)
  const prixRef = useRef(null)
  const couleurRef = useRef(null)
  const toggleLeftMenu = (ref) => {
    const showArr = [
      "shadow-md",
      "lg:px-4",
      "lg:py-2",
      "lg:my-5",
      "ml-3",
      "max-w-xs",
      "border",
    ]
    if (ref.current.classList.contains("max-w-0")) {
      ref.current.classList.remove("max-w-0")
      showArr.map((clas) => ref.current.classList.add(clas))
    } else {
      showArr.map((clas) => ref.current.classList.remove(clas))
      ref.current.classList.add("max-w-0")
    }
  }
  const toggleFilter = (ref) => {
    const showArr = [
      "lg:px-2",
      "max-h-auto",
      "flex",
      "flex-wrap",
      "justify-evenly",
      "max-h-[30rem]",
    ]
    if (ref.current.classList.contains("max-h-0")) {
      ref.current.classList.remove("max-h-0")
      showArr.map((clas) => ref.current.classList.add(clas))
    } else {
      showArr.map((clas) => ref.current.classList.remove(clas))
      ref.current.classList.add("max-h-0")
    }
  }
  return (
    <div className="h-full w-full flex flex-col lg:mt-20 mt-16">
      {/* search bar */}
      <div className="inline-flex mx-auto items-center justify-between relative border shadow-md my-3 rounded-md px-3 py-2 lg:w-[30%] w-[80%]">
        <input
          type="text"
          className="px-2 py-2 outline-none rounded-md  w-[80%] "
          placeholder="Rechercher un article"
        />
        <IoSearch
          size={50}
          className="cursor-pointer h-full text-gray-700 px-2 py-1 rounded-xl border bg-gray-100 hover:bg-gray-200 "
        />
      </div>
      {/* carrousel */}
      <div className="lg:mb-20 lg:mt-6 relative max-w-fit mx-auto">
        <img
          src="/images/shop-1.png"
          alt="summer collection"
          className="lg:max-w-[85%] object-cover mx-auto"
        />
      </div>
      {/* toggle left bar */}
      <div
        className="flex items-center ml-10 cursor-pointer px-2 py-1 border max-w-fit"
        onClick={() => toggleLeftMenu(leftBarRef)}
      >
        <IoFilterSharp />
        <p className="text-xl font-semibold ml-2">Filtres</p>
      </div>
      <div className="w-full  flex">
        {/* left-bar search and filters */}
        <div
          ref={leftBarRef}
          className="flex flex-col bg-white overflow-hidden  shadow-md lg:px-4 lg:py-2 lg:my-5 ml-3  max-w-xs border transition-all duration-500"
        >
          {/* filtres */}
          <p className="font-semibold lg:text-xl mb-2">Filtres produits</p>

          <div className="flex flex-col flex-wrap py-1 ">
            <div
              onClick={() => toggleFilter(dateRef)}
              className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent font-semibold cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-center w-full">
                <p className="lg:text-xl">Date de publication </p>
                <FiChevronDown className="ml-auto" />
              </div>

              <div
                className="flex flex-wrap justify-evenly lg:px-2 w-full transition-all duration-500 max-h-0  bg-white"
                ref={dateRef}
              >
                <p className="cursor-pointer border px-2 py-1 my-1 shadow-md rounded-lg hover:text-cyan-600">
                  Ce mois
                </p>
                <p className="cursor-pointer border px-2 py-1 my-1 shadow-md rounded-lg hover:text-cyan-600">
                  3 derniers mois
                </p>
                <p className="cursor-pointer border px-2 py-1 my-1 shadow-md rounded-lg hover:text-cyan-600">
                  6 derniers mois
                </p>
                <p className="cursor-pointer border px-2 py-1 my-1 shadow-md rounded-lg hover:text-cyan-600">
                  Cette année
                </p>
              </div>
            </div>
            <div
              onClick={() => toggleFilter(noteRef)}
              className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent font-semibold cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-center w-full">
                <p className="lg:text-xl">Note du produit </p>
                <FiChevronDown className="ml-auto" />
              </div>
              <div
                className="flex flex-wrap justify-evenly lg:px-2 w-full transition-all duration-500 font-thin  bg-white max-h-0"
                ref={noteRef}
              >
                <p className="flex items-center border font-semibold px-2 shadow-md my-1 rounded-md w-full">
                  Toutes
                </p>
                <p className="flex items-center border border-transparent px-2 py-1 shadow-md my-1 rounded-md text-xs hover:border-gray-300">
                  <img src="/icons/2-5.png" alt="stars" className="h-4 mr-1" />2
                  étoiles
                </p>
                <p className="flex items-center border border-transparent px-2 py-1 shadow-md my-1 rounded-md text-xs hover:border-gray-300">
                  <img src="/icons/3-5.png" alt="stars" className="h-4 mr-1" />3
                  étoiles
                </p>
                <p className="flex items-center border border-transparent px-2 py-1 shadow-md my-1 rounded-md text-xs hover:border-gray-300">
                  <img src="/icons/4-5.png" alt="stars" className="h-4 mr-1" />4
                  étoiles
                </p>
                <p className="flex items-center border border-transparent px-2 py-1 shadow-md my-1 rounded-md text-xs hover:border-gray-300">
                  <img src="/icons/5-5.png" alt="stars" className="h-4 mr-1" />5
                  étoiles
                </p>
              </div>
            </div>
            <div
              onClick={() => toggleFilter(prixRef)}
              className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent font-semibold cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-center w-full">
                <p className="lg:text-xl">Prix du produit</p>
                <FiChevronDown className="ml-auto" />
              </div>
              <div
                className="flex flex-wrap justify-evenly lg:px-2 w-full transition-all duration-500  bg-white max-h-0"
                ref={prixRef}
              >
                <p className="px-2 py-1 my-1 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:text-cyan-600">
                  Afficher Tous les prix
                </p>
                <p className="px-2 py-1 my-1 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:text-cyan-600">
                  1500 da - 3000 da
                </p>
                <p className="px-2 py-1 my-1 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:text-cyan-600">
                  3000 da - 5000 da
                </p>
                <p className="px-2 py-1 my-1 rounded-lg shadow-md border border-transparent hover:border-gray-300 hover:text-cyan-600">
                  5000 da - 8000 da
                </p>
              </div>
            </div>
          </div>
          {/* couleur */}
          <div
            onClick={() => toggleFilter(couleurRef)}
            className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent font-semibold cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
          >
            <div className="flex items-center w-full">
              <p className="lg:text-xl">Couleur produit</p>
              <FiChevronDown className="ml-auto" />
            </div>
            <div
              className="flex flex-wrap justify-evenly lg:px-2 w-full transition-all duration-500 max-h-0  bg-white"
              ref={couleurRef}
            >
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Noir</p>{" "}
                <div className="h-4 w-4 rounded-full ml-1 bg-black" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Gris</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-gray-300" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Blanc</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-white border border-black" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Rouge</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-red-600" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Bleu</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-blue-500" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Vert</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-green-500" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Orange</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-orange-400" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Violet</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-violet-500" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Marron</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-yellow-700" />
              </div>
              <div className="font-semibold inline-flex items-center mx-2 my-1 cursor-pointer">
                <p>Rose</p>
                <div className="h-4 w-4 rounded-full ml-1 bg-pink-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap "></div>
          <p className="font-semibold lg:text-xl my-2">Taille</p>
          <div className="flex flex-wrap items-center py-1">
            <button className="font-semibold mx-2 py-1 px-3 bg-white border rounded-lg hover:shadow-lg">
              S
            </button>
            <button className="font-semibold mx-2 py-1 px-2 bg-white border rounded-lg hover:shadow-lg">
              M
            </button>
            <button className="font-semibold mx-2 py-1 px-3 bg-white border rounded-lg hover:shadow-lg">
              L
            </button>
            <button className="font-semibold mx-2 py-1 px-2 bg-white border rounded-lg hover:shadow-lg">
              XL
            </button>
          </div>
        </div>
        {/* t-shirts section */}
        <div className="flex self-start flex-wrap w-[77%] ml-10 bg-white my-6 justify-evenly ">
          <div className="flex flex-col  shadow-md border lg:py-3 lg:px-2 lg:mx-2">
            <img
              src="/images/white.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <div className="mx-auto">
              <p className="font-semibold text-2xl my-2 w-full text-center bg-gray-100 ">
                T shirt blanc
              </p>

              <p className="font-semibold lg:text-xl my-1">
                Prix: 1500 <span className="text-red-600">Da</span>
              </p>
              <div className="flex items-center">
                <img src="/icons/4-5.png" alt="" className="max-h-6" />
                <p className="text-gray-400 ml-1"> (15) </p>
              </div>
              <div className="flex items-center flex-wrap my-1">
                <img
                  src="/images/catty.jpg"
                  alt="profil pic"
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold ml-1">Adel boullif </p>
              </div>
              <p className="font-semibold">
                Publié le:
                <span className="text-gray-500 text-sm">03/09/2022</span>
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col  shadow-md border lg:py-3 lg:px-2  lg:mx-2">
            <img
              src="/images/black.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <div className="mx-auto">
              <p className="font-semibold text-2xl my-2 w-full text-center bg-gray-100 ">
                T shirt noir
              </p>
              <p className="font-semibold lg:text-xl my-1">
                Prix: 1500 <span className="text-red-600">Da</span>
              </p>
              <div className="flex items-center">
                <img src="/icons/1-5.png" alt="" className="max-h-6" />
                <p className="text-gray-400 ml-1"> (12) </p>
              </div>
              <div className="flex items-center flex-wrap my-1">
                <img
                  src="/images/catty.jpg"
                  alt="profil pic"
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold ml-1">Mohamed labani</p>
              </div>
              <p className="font-semibold">
                Publié le:
                <span className="text-gray-500 text-sm">03/09/2022</span>
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col  shadow-md border lg:py-3 lg:px-2  lg:mx-2">
            <img
              src="/images/green.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <div className="mx-auto">
              <p className="font-semibold text-2xl my-2 w-full text-center bg-gray-100">
                T shirt vert
              </p>

              <p className="font-semibold lg:text-xl my-1">
                Prix: 1500 <span className="text-red-600">Da</span>
              </p>
              <div className="flex items-center">
                <img src="/icons/2-5.png" alt="" className="max-h-6" />
                <p className="text-gray-400 ml-1"> (8) </p>
              </div>
              <div className="flex items-center flex-wrap my-1">
                <img
                  src="/images/catty.jpg"
                  alt="profil pic"
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold ml-1">Meriem belaib </p>
              </div>
              <p className="font-semibold">
                Publié le:
                <span className="text-gray-500 text-sm">03/09/2022</span>
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col  shadow-md border lg:py-3 lg:px-2 ">
            <img
              src="/images/purple.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <div className="mx-auto">
              <p className="font-semibold text-2xl my-2 w-full text-center bg-gray-100">
                T shirt violet
              </p>

              <p className="font-semibold lg:text-xl my-1">
                Prix: 1500 <span className="text-red-600">Da</span>
              </p>
              <div className="flex items-center">
                <img src="/icons/3-5.png" alt="" className="max-h-6" />
                <p className="text-gray-400 ml-1"> (23) </p>
              </div>
              <div className="flex items-center flex-wrap my-1">
                <img
                  src="/images/catty.jpg"
                  alt="profil pic"
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold ml-1">Yanis touahri </p>
              </div>
              <p className="font-semibold">
                Publié le:
                <span className="text-gray-500 text-sm">03/09/2022</span>
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col  shadow-md border lg:py-3 lg:px-2 ">
            <img src="/images/red.jpg" alt="tshirt" className="max-h-[14rem]" />
            <div className="mx-auto">
              <p className="font-semibold text-2xl my-2 w-full text-center bg-gray-100">
                T shirt rouge
              </p>

              <p className="font-semibold lg:text-xl my-1">
                Prix: 1500 <span className="text-red-600">Da</span>
              </p>
              <div className="flex items-center">
                <img src="/icons/5-5.png" alt="" className="max-h-6" />
                <p className="text-gray-400 ml-1"> (12) </p>
              </div>
              <div className="flex items-center flex-wrap my-1">
                <img
                  src="/images/catty.jpg"
                  alt="profil pic"
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold ml-1">Beltoum abdellah </p>
              </div>
              <p className="font-semibold">
                Publié le:
                <span className="text-gray-500 text-sm">03/09/2022</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="flex items-center justify-evenly my-3 mx-auto w-[60%]">
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold bg-sky-500 text-white">
          1
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          2
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          3
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          4
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          5
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          6
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          7
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          8
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          9
        </button>
        <button className="px-3 py-1 border shadow-md rounded-lg font-semibold">
          10
        </button>
      </div>
    </div>
  )
}

export default Shop
