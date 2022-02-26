import React, { useRef, useEffect } from "react"
import {
  AiOutlineVideoCamera,
  // AiOutlineArrowLeft,
  // AiOutlineArrowRight,
  AiFillFacebook,
  AiFillGoogleCircle,
  // AiFillMail,
  AiFillCloseCircle,
  AiFillTwitterCircle,
} from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
import Navbar from "../components/Navbar"
import axios from "axios"
import HorizontalScroll from "../components/HorizontalScroll"

function Home() {
  const navRef = useRef(null)
  const connectRef = useRef(null)
  const ImageRef = useRef(null)
  window.onscroll = function () {
    if (
      window.scrollY >=
      ImageRef.current.offsetTop + ImageRef.current.offsetHeight - 20
    ) {
      // style the hole navbar
      navRef.current.classList.remove("bg-transparentblack")
      navRef.current.classList.remove("py-2")
      navRef.current.classList.add("bg-purple-900")
    } else {
      navRef.current.classList.remove("bg-purple-900")
      navRef.current.classList.add("bg-transparentblack")
      navRef.current.classList.add("py-2")
    }
  }
  const onClickConnect = () => {
    connectRef.current.classList.toggle("hidden")
  }
  const socialAuth = async (url) => {
    window.open(url, "_self")
  }
  // test
  const fetchUserInfos = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_CURRENT_USER_GOOGLE}`
    )

    console.log(response)
  }
  useEffect(() => {
    fetchUserInfos()
  }, [])
  return (
    <div className="flex flex-col items-center w-screen h-full bg-gray-50 overflow-hidden box-border">
      <Navbar navRef={navRef} onPressConnect={onClickConnect} />
      {/* modal container */}
      <div
        className="hidden fixed h-full w-screen bg-transparentblack z-50"
        ref={connectRef}
      >
        {/* modal contents */}
        <div className="flex flex-col  z-50  items-center md:w-1/2 mx-auto md:mt-32 md:py-3 border-double border-8 border-gray-800 bg-yellow-200 relative ">
          <div
            className="absolute top-6 right-6 cursor-pointer z-50"
            onClick={onClickConnect}
          >
            <AiFillCloseCircle
              size={36}
              className="text-red-500 hover:text-red-700"
            />
          </div>

          <img
            src="/images/login.png"
            alt="login illustration"
            className="h-96"
          />
          <p className="font-semibold text-gray-700 md:mb-2 md:text-xl">
            Connectez-vous avec :
          </p>
          <div className="inline-flex items-center w-full  justify-evenly">
            {/* facebook */}
            <button
              onClick={() =>
                socialAuth("http://localhost:5000/api/shirty/auth/facebook")
              }
              className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold cursor-pointer hover:bg-blue-600 bg-blue-500 md:px-6 md:py-1"
            >
              {/* onClick={() =>
                socialAuth("http://localhost:5000/api/shirty/auth/facebook") */}
              <AiFillFacebook className="mr-2" size={24} /> Facebook
            </button>
            {/* google */}
            <button
              onClick={() =>
                socialAuth("http://localhost:5000/api/shirty/auth/google")
              }
              className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold cursor-pointer hover:bg-orange-600 bg-orange-400 md:px-6 md:py-1"
            >
              <AiFillGoogleCircle className="mr-2" size={24} /> Google
            </button>
            {/* twitter */}
            <button className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold cursor-pointer hover:bg-sky-600 bg-sky-400 md:px-6 md:py-1">
              <AiFillTwitterCircle className="mr-2" size={24} /> Twitter
            </button>
          </div>

          {/* <button className="inline-flex md:w-44 items-center rounded-sm text-white font-semibold mb-2 cursor-pointer hover:bg-gray-800 bg-gray-400 md:px-6 md:py-1">
            <AiFillMail className="mr-2" size={24} /> Email and password
          </button> */}
        </div>
      </div>

      <div className="relative w-screne max-h-screen box-border  ">
        <img
          alt="header shirt"
          src="/images/home.jpg"
          className="max-h-screen  brightness-30  w-screen"
          ref={ImageRef}
        />
        <div className=" flex flex-col items-center flex-wrap absolute left-1/2 -translate-x-1/2 top-20   h-fit w-fit">
          {/* title */}
          <p className="select-none self-start md:mb-4  font-title  text-yellow-500  md:text-8xl">
            Personalisez votre style
          </p>
          <div className=" flex items-center   ">
            <p className="text-white select-none font-title  md:text-6xl md:max-w-2xl">
              Une solution simple pour créer et vendre des produits engageants
            </p>
          </div>
        </div>
        <button className="absolute md:bottom-36 right-20 md:px-5 md:py-2 md:text-3xl mt-4 rounded-full bg-gray-700 hover:bg-gray-900 text-white">
          Commancer le design
        </button>
      </div>

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

      {/* <button onClick={fetchUserInfos}>voir mes infos du compte</button> */}
      <HorizontalScroll />
    </div>
  )
}

export default Home
