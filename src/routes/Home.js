import React from "react"
import {
  AiOutlineVideoCamera,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
function Home() {
  return (
    <div className="flex flex-col items-center w-screen h-full  md:pt-20 md:pb-10">
      <div className="relative p-4">
        <img
          alt="header shirt"
          src="/images/shirt-pink.png"
          className="max-h-screen bg-red-300 brightness-75"
        />
        {/* title */}
        <p className="absolute top-8 text-center inset-0 text-white md:text-5xl">
          Titre ici
        </p>
        <p className="text-white absolute inset-0 mx-auto md:top-1/3 md:text-3xl max-w-xl">
          Mouha yasket yasket ou ki yahder il dit la merde .... zadlou rabi fe
          tol ou na9aslou mla3kel ! lhamdoulleh li rassi kbir ou fertass khir
          men rassi sghir et vide de bons sens .
        </p>
        <AiOutlineArrowLeft
          className="absolute top-1/2 -left-14 -translate-y-1/2 bg-purple-300  text-purple-600 rounded-full cursor-pointer hover:scale-75  transition-all duration-500"
          size={50}
        />
        <AiOutlineArrowRight
          className="absolute top-1/2 -right-14 -translate-y-1/2 bg-purple-300 text-purple-600  rounded-full cursor-pointer hover:scale-75  transition-all duration-500 "
          size={50}
        />
      </div>
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
        <button className="bg-purple-400 text-white px-6 py-2 hover:bg-purple-600">
          Découvrir
        </button>
      </div>
    </div>
  )
}

export default Home
