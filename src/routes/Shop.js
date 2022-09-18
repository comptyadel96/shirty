import React, { useEffect, useRef, useState } from "react"
import { IoFilterSharp } from "react-icons/io5"
import { MdAddShoppingCart } from "react-icons/md"
import axios from "axios"
import {
  FiChevronDown,
  //  FiChevronUp
} from "react-icons/fi"
import { AiFillControl } from "react-icons/ai"
import NormalPicker from "../components/NormalPicker"
import Pagination from "../components/Pagination"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function Shop() {
  const leftBarRef = useRef(null)
  const dateRef = useRef(null)
  const noteRef = useRef(null)
  const prixRef = useRef(null)
  const couleurRef = useRef(null)
  const [shirts, setShirts] = useState([])
  const [itemsPerPage] = useState(10)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(10)
  const [productGenre, setProductGenre] = useState("T-shirts")
  const toggleLeftMenu = (ref) => {
    const showArr = ["lg:px-4", "lg:py-2", "lg:my-5", "ml-3", "max-w-xs"]
    if (ref.current.classList.contains("max-w-0")) {
      ref.current.classList.remove("max-w-0")
      showArr.map((clas) => ref.current.classList.add(clas))
    } else {
      showArr.map((clas) => ref.current.classList.remove(clas))
      ref.current.classList.add("max-w-0")
      ref.current.classList.remove("min-w-[20rem]")
    }
  }
  const toggleFilter = (ref) => {
    const showArr = [
      "lg:px-2",
      "max-h-auto",
      "flex",
      "flex-col",
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
  const getPosts = async () => {
    const items = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setShirts(items.data)
  }
  useEffect(() => {
    getPosts()
    let slideIndex = 0
    showSlides()

    function showSlides() {
      let i
      let slides = document.getElementsByClassName("mySlides")
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
      }
      slideIndex++
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block"
      setTimeout(showSlides, 4000) // Change image every 2 seconds
    }
  }, [])

  const showNextPage = () => {
    setStartIndex(startIndex + 10)
    setEndIndex(endIndex + 10)
  }
  const showPreviousPage = () => {
    setStartIndex(startIndex - 10)
    setEndIndex(endIndex - 10)
  }

  return (
    <div className="h-full w-full flex flex-col lg:mt-20 mt-16">
      {/* carrousel */}
      <div className="lg:mb-20 lg:mt-6 relative border py-5 self-center bg-gray-100 w-full ">
        <div className="mySlides  max-h-[33rem]">
          <img
            src="/images/shop-winter.png"
            alt="winter collection"
            className=" max-h-[33rem] object-cover mx-auto "
          />
        </div>
        <div className="mySlides  max-h-[33rem]">
          <img
            src="/images/shop-summer.png"
            alt="summer collection"
            className=" max-h-[33rem] object-cover mx-auto "
          />
        </div>
        {/* colorful image */}
        <div className="mySlides max-h-[33rem]">
          <img
            src="/images/colorful.png"
            alt="colorful collection"
            className=" max-h-[33rem] object-cover mx-auto "
          />
        </div>
      </div>
      <div className="flex items-center w-full">
        {/* toggle left bar */}
        <div
          className="flex items-center hover:shadow-md ml-10 cursor-pointer px-2 py-1 border max-w-fit"
          onClick={() => toggleLeftMenu(leftBarRef)}
        >
          <IoFilterSharp />
          <p className="text-xl font-semibold ml-2">Filtres</p>
        </div>
        {/* categories */}
        <div className="flex items-center hover:shadow-md ml-10 cursor-pointer  py-1 border max-w-fit">
          <AiFillControl size={26} className="ml-1 text-gray-800" />
          {/* <p className="text-xl font-semibold ml-2">Categories de produits</p> */}
          <NormalPicker
            values={[
              { name: "T-shirts", value: "T-shirts" },
              { name: "Polos", value: "Polos" },
              { name: "Sweat shirt", value: "Sweat shirt" },
              { name: "Vestes", value: "Vestes" },
              { name: "Casquettes", value: "Casquettes" },
              { name: "Bonnets", value: "Bonnets" },
              { name: "Sac à dos", value: "Sac à dos" },
            ]}
            onItemClick={(val) => {
              setProductGenre(val)
            }}
            style={{ position: "absolute", left: "103%", bottom: "auto" }}
            text="Categories produits"
          />
        </div>
      </div>
      {/* shop product */}
      <div className="flex items-center w-1/2  mx-auto  relative">
        <div className="w-1/2 h-[1px] bg-gray-800" />
        <p className="font-semibold text-2xl text-center mx-2 text-white px-2 rounded-md bg-gray-800">
          {productGenre}
        </p>
        <div className="w-1/2 h-[1px] bg-gray-800" />
      </div>
      <div className="w-full flex">
        {/* left-bar search and filters */}
        <div
          ref={leftBarRef}
          className="flex flex-col bg-white overflow-hidden   lg:py-2 lg:my-5 ml-3  max-w-xs min-w-[20rem] transition-all duration-500"
        >
          {/* filtres */}
          <p className="font-semibold  mb-2 text-white py-2 bg-gray-800 text-center">
            Filtres produits
          </p>

          <div className="flex flex-col flex-wrap py-1 ">
            <div
              onClick={() => toggleFilter(dateRef)}
              className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent font-semibold cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-center w-full">
                <p className="">Date de publication </p>
                <FiChevronDown className="ml-auto" />
              </div>

              <div
                className="flex  justify-evenly font-normal lg:px-2 w-full transition-all duration-500 max-h-0  bg-white"
                ref={dateRef}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="cursor-pointer px-2 py-1 my-1  hover:text-cyan-600 hover:translate-x-5 transition-transform duration-500">
                  Ce mois
                </p>
                <p className="cursor-pointer px-2 py-1 my-1  hover:text-cyan-600 hover:translate-x-5 transition-transform duration-500">
                  3 derniers mois
                </p>
                <p className="cursor-pointer px-2 py-1 my-1  hover:text-cyan-600 hover:translate-x-5 transition-transform duration-500">
                  6 derniers mois
                </p>
                <p className="cursor-pointer px-2 py-1 my-1  hover:text-cyan-600 hover:translate-x-5 transition-transform duration-500">
                  Cette année
                </p>
              </div>
            </div>
            {/* note */}
            <div
              onClick={() => toggleFilter(noteRef)}
              className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent font-semibold cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-center w-full">
                <p className="">Note du produit </p>
                <FiChevronDown className="ml-auto" />
              </div>
              <div
                className="flex flex-wrap justify-evenly lg:px-2 w-full transition-all duration-500 font-thin  bg-white max-h-0"
                ref={noteRef}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="flex items-center max-w-fit px-2  my-1 hover:text-cyan-500">
                  Tous afficher
                </p>
                <p className="flex items-center px-2 my-3 max-w-fit rounded-md text-xs hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  <img src="/icons/2-5.png" alt="stars" className="h-4 mr-1" />2
                  étoiles
                </p>
                <p className="flex items-center px-2 my-3 max-w-fit rounded-md text-xs hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  <img src="/icons/3-5.png" alt="stars" className="h-4 mr-1" />3
                  étoiles
                </p>
                <p className="flex items-center px-2 my-3 max-w-fit rounded-md text-xs hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  <img src="/icons/4-5.png" alt="stars" className="h-4 mr-1" />4
                  étoiles
                </p>
                <p className="flex items-center px-2 my-3 max-w-fit rounded-md text-xs hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  <img src="/icons/5-5.png" alt="stars" className="h-4 mr-1" />5
                  étoiles
                </p>
              </div>
            </div>
            {/* prix */}
            <div
              onClick={() => toggleFilter(prixRef)}
              className="flex flex-col items-center overflow-hidden lg:px-2 relative py-1  my-1 shadow-md border border-transparent cursor-pointer rounded-lg mx-1 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-center w-full">
                <p className="font-semibold">Prix du produit</p>
                <FiChevronDown className="ml-auto" />
              </div>
              <div
                className="flex flex-wrap justify-evenly lg:px-2 w-full transition-all duration-500  bg-white max-h-0"
                ref={prixRef}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="px-2 py-1 my-1 text-sm hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  Afficher Tous les prix
                </p>
                <p className="px-2 py-1 my-1 text-sm hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  1500 da - 3000 da
                </p>
                <p className="px-2 py-1 my-1 text-sm hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
                  3000 da - 5000 da
                </p>
                <p className="px-2 py-1 my-1 text-sm hover:text-cyan-500 hover:translate-x-5 transition-transform duration-500">
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
              <p className="">Couleur produit</p>
              <FiChevronDown className="ml-auto" />
            </div>
            <div
              className="flex flex-wrap  lg:px-2 w-full transition-all duration-500 max-h-0  bg-white"
              ref={couleurRef}
            >
              <div className="flex items-center flex-wrap">
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Noir</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-black" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Gris</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-gray-300" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Blanc</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-white border border-black" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Rouge</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-red-600" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Bleu</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-blue-500" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Vert</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-green-500" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Orange</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-orange-400" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Violet</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-violet-500" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Marron</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-yellow-700" />
                </div>
                <div className="font-semibold inline-flex max-w-fit  items-center mx-2 my-1 cursor-pointer">
                  <p>Rose</p>
                  <div className="h-4 w-4 rounded-full ml-1 bg-pink-400" />
                </div>
              </div>
            </div>
          </div>

          <p className="font-semibold  my-2 border-b-2 border-cyan-400 w-[14%]">
            Taille
          </p>
          <div className="flex flex-wrap items-center py-1">
            <button className="font-semibold mx-2 py-1 shadow-md border px-3 bg-white rounded-md hover:bg-gray-800 hover:text-cyan-400 hover:border-transparent">
              S
            </button>
            <button className="font-semibold mx-2 py-1 shadow-md border px-2 bg-white rounded-md hover:bg-gray-800 hover:text-cyan-400 hover:border-transparent">
              M
            </button>
            <button className="font-semibold mx-2 py-1 shadow-md border px-3 bg-white rounded-md hover:bg-gray-800 hover:text-cyan-400 hover:border-transparent">
              L
            </button>
            <button className="font-semibold mx-2 py-1 shadow-md border px-2 bg-white rounded-md hover:bg-gray-800 hover:text-cyan-400 hover:border-transparent">
              XL
            </button>
          </div>
          <p className="font-semibold  my-2 border-b-2 border-cyan-400 w-[14%]">
            Pour
          </p>
          <div className="flex flex-wrap justify-evenly">
            <p className="text-sm font-semibold cursor-pointer hover:text-cyan-500">
              Femmes
            </p>
            <p className="text-sm font-semibold cursor-pointer hover:text-cyan-500">
              Hommes
            </p>
            <p className="text-sm font-semibold cursor-pointer hover:text-cyan-500">
              Enfant
            </p>
          </div>
          <button className="bg-gray-800 px-2 text-white py-1 w-fit mt-10 ml-auto text-sm font-semibold rounded-full hover:text-cyan-400">
            Enlever tous les filtres
          </button>
        </div>
        {/* t-shirts section */}
        <div className="flex self-start flex-wrap ml-10 bg-white my-12 justify-evenly ">
          <div className="flex flex-col bg-white cursor-pointer border lg:py-3 lg:px-2 lg:mx-2 lg:my-2">
            {
              // (
              //   <img
              //     src="/images/white.jpg"
              //     alt="tshirt"
              //     className="max-h-[14rem]"
              //   />
              // ) ||
              <Skeleton
                className="h-[14rem] border border-gray-400"
                baseColor="#eeee"
                highlightColor="#ffff"
              />
            }
            <p className="ml-auto text-gray-400 font-semibold">t-shirt</p>
            <div className="mx-auto w-full">
              <p className=" text-2xl my-2 w-full text-center border-b pb-1 ">
                cotton blanc unis
              </p>

              <div className="flex items-center">
                <img src="/icons/4-5.png" alt="" className="max-h-4" />
                <p className="text-gray-400 ml-1"> (15) </p>
              </div>

              <div className="flex items-center justify-evenly mt-2">
                <p className="font-semibold my-1 lg:text-2xl ">
                  1500 <span className="text-cyan-500 text-lg">Da</span>
                </p>
                <MdAddShoppingCart
                  size={34}
                  className="px-1 text-white rounded-md bg-cyan-400 hover:bg-cyan-500"
                />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col bg-white  border border-black lg:py-3 lg:px-2  lg:mx-2 lg:my-2 relative">
            {/* new product span */}
            <span className="absolute top-2 left-2 px-2 bg-cyan-500 text-sm text-white rounded-full animate-pulse">
              Nouveau
            </span>
            <img
              src="/images/black.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <p className="ml-auto text-gray-400 font-semibold">t-shirt</p>
            <div className="mx-auto w-full">
              <p className=" text-2xl my-2 w-full text-center border-b  pb-1 ">
                cotton noir
              </p>

              <div className="flex items-center justify-end">
                <img src="/icons/4-5.png" alt="" className="max-h-4" />
                <p className="text-gray-400 ml-1"> (15) </p>
              </div>

              <div className="flex items-center justify-evenly mt-2 w-full">
                <p className="font-semibold my-1 lg:text-2xl ">
                  1500 <span className="text-cyan-500 text-lg">Da</span>
                </p>
                <MdAddShoppingCart
                  size={34}
                  className="px-1 text-white rounded-md bg-cyan-400 hover:bg-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col bg-white cursor-pointer border lg:py-3 lg:px-2  lg:mx-2 lg:my-2">
            <img
              src="/images/green.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <p className="ml-auto text-gray-400 font-semibold">t-shirt</p>
            <div className="mx-auto w-full">
              <p className=" text-2xl my-2 w-full text-center border-b pb-1 ">
                cotton vert
              </p>

              <div className="flex items-center">
                <img src="/icons/4-5.png" alt="" className="max-h-4" />
                <p className="text-gray-400 ml-1"> (15) </p>
              </div>

              <div className="flex items-center justify-evenly mt-2">
                <p className="font-semibold my-1 lg:text-2xl ">
                  1500 <span className="text-cyan-500 text-lg">Da</span>
                </p>
                <MdAddShoppingCart
                  size={34}
                  className="px-1 text-white rounded-md bg-cyan-400 hover:bg-cyan-500"
                />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col bg-white cursor-pointer border lg:py-3 lg:px-2 lg:mx-2 lg:my-2 ">
            <img
              src="/images/purple.jpg"
              alt="tshirt"
              className="max-h-[14rem]"
            />
            <p className="ml-auto text-gray-400 font-semibold">t-shirt</p>
            <div className="mx-auto w-full">
              <p className=" text-2xl my-2 w-full text-center border-b pb-1 ">
                polyster violet
              </p>

              <div className="flex items-center">
                <img src="/icons/4-5.png" alt="" className="max-h-4" />
                <p className="text-gray-400 ml-1"> (15) </p>
              </div>

              <div className="flex items-center justify-evenly mt-2">
                <p className="font-semibold my-1 lg:text-2xl ">
                  900 <span className="text-cyan-500 text-lg">Da</span>
                </p>
                <MdAddShoppingCart
                  size={34}
                  className="px-1 text-white rounded-md bg-cyan-400 hover:bg-cyan-500"
                />
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col bg-white cursor-pointer border lg:py-3 lg:px-2 lg:mx-2 lg:my-2">
            <img src="/images/red.jpg" alt="tshirt" className="max-h-[14rem]" />
            <p className="ml-auto text-gray-400 font-semibold">t-shirt</p>
            <div className="mx-auto w-full">
              <p className=" text-2xl my-2 w-full text-center border-b pb-1 ">
                cotton Rouge
              </p>

              <div className="flex items-center">
                <img src="/icons/4-5.png" alt="" className="max-h-4" />
                <p className="text-gray-400 ml-1"> (15) </p>
              </div>

              <div className="flex items-center justify-evenly mt-2">
                <p className="font-semibold my-1 lg:text-2xl ">
                  1500 <span className="text-cyan-500 text-lg">Da</span>
                </p>
                <MdAddShoppingCart
                  size={34}
                  className="px-1 text-white rounded-md bg-cyan-400 hover:bg-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      {/* <div className="flex items-center justify-evenly my-3 mx-auto w-[60%]">
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
      </div> */}
      <div className="flex flex-wrap justify-evenly border shadow-md mb-3 mx-5">
        {shirts.slice(startIndex, endIndex).map((shirt) => (
          <div
            className="flex flex-col items-center mx-2 border my-2 cursor-pointer overflow-hidden"
            key={shirt.id}
          >
            <p>{shirt.id} </p>
            <p className="max-w-[5rem]">{shirt.title} </p>
          </div>
        ))}
      </div>
      {shirts && (
        <Pagination
          items={shirts}
          itemPerPage={itemsPerPage}
          onClickNext={showNextPage}
          onClickPrevious={showPreviousPage}
        />
      )}
    </div>
  )
}

export default Shop
