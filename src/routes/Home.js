import React, { useRef } from "react"
import {
  AiOutlineVideoCamera,
  // AiOutlineArrowLeft,
  // AiOutlineArrowRight,
} from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
import Navbar from "../components/Navbar"
function Home() {
  const navRef = useRef(null)
 
  const ImageRef = useRef(null)
  window.onscroll = function () {
    if (
      window.scrollY >=
      ImageRef.current.offsetTop + ImageRef.current.offsetHeight - 20
    ) {
      // style the hole navbar
      navRef.current.classList.remove("bg-transparentblack")
      navRef.current.classList.remove("py-2")
      navRef.current.classList.add("bg-purple-600")
    } else {
      navRef.current.classList.remove("bg-purple-600")
      navRef.current.classList.add("bg-transparentblack")
      navRef.current.classList.add("py-2")
    }
  }

  return (
    <div className="flex flex-col items-center w-screen h-full bg-gray-50 overflow-hidden">
      <Navbar navRef={navRef}  />
      <img
        alt="header shirt"
        src="/images/home.jpg"
        className="max-h-screen bg-red-300  w-full"
        ref={ImageRef}
      />
      {/* title */}
      {/* <p className="absolute top-8 text-center inset-0 text-white md:text-5xl">
          Titre ici
        </p>
        <p className="text-white absolute inset-0 mx-auto md:top-1/3 md:text-3xl max-w-xl">
          Mouha yasket yasket ou ki yahder il dit la merde .... zadlou rabi fe
          tol ou na9aslou mla3kel ! lhamdoulleh li rassi kbir ou fertass khir
          men rassi sghir et vide de bons sens .
        </p> */}
      {/* <AiOutlineArrowLeft
          className="absolute top-1/2 -left-14 -translate-y-1/2 bg-purple-300  text-purple-600 rounded-full cursor-pointer hover:scale-75  transition-all duration-500"
          size={50}
        />
        <AiOutlineArrowRight
          className="absolute top-1/2 -right-14 -translate-y-1/2 bg-purple-300 text-purple-600  rounded-full cursor-pointer hover:scale-75  transition-all duration-500 "
          size={50}
        /> */}

      {/* vidéo descriptive */}
      <div className="skew-x-[25deg] bg-pink-500 mb-4 mt-11 px-3 py-4">
        <p className="md:text-7xl  text-white -skew-x-[25deg]   ">
          Vidéo déscriptive
        </p>
      </div>
      <div className="flex items-center flex-col md:justify-evenly md:flex-row flex-wrap md:p-8 md:mb-10 md:w-3/4 w-full mx-8  h-fit shadow-xl border ">
        <p className="text-gray-700 font-semibold ">
          bréve description de la vidéo ici .....
        </p>
        <div className="h-72 w-96 flex items-center flex-col  shadow-lg px-6 py-3 rounded-lg ">
          <p className="text-gray-700 font-bold md:text-xl ">Vidéo ici </p>
          <AiOutlineVideoCamera className="text-pink-600" size="200" />
        </div>
      </div>
      {/* section pour découvir  */}
      <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap  md:w-3/4 my-8 border h-fit bg-white">
        <FaPhotoVideo size={400} className="text-blue-500" />
        <button className="bg-purple-400 text-white px-6 py-2 hover:bg-purple-600 rounded-full">
          Découvrir
        </button>
      </div>
      {/* lancez vos oeuvres */}
      <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap  md:w-3/4 my-8 border h-fit bg-white">
        <button className="bg-pink-400 text-white px-6 py-2 hover:bg-pink-600 rounded-full">
          Lancez vos oeuvres
        </button>
        <FaPhotoVideo size={400} className="text-blue-500" />
      </div>

      {/* Produits à la une */}
      <div className="flex items-center flex-nowrap overflow-x-auto snap-x snap-mandatory bg-black md:py-7 relative w-3/4 ">
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article1
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article2
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article3
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article4
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article5
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article6
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article7
          </p>
        </div>
        <div className="h-52 w-52 bg-white shadow-lg md:mx-7 flex-shrink-0 snap-center">
          <p className="text-center text-gray-700 md:text-xl font-semibold">
            article8
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
