import React, { useRef} from "react"
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  // AiFillMail,
  AiFillCloseCircle,
  AiFillTwitterCircle,
} from "react-icons/ai"

import Navbar from "../components/Navbar"
import HorizontalScroll from "../components/HorizontalScroll"

function Home() {
  // const [user, setUser] = useState({})
  const navRef = useRef(null)
  const connectRef = useRef(null)
  const ImageRef = useRef(null)
  window.onscroll = function () {
    if (
      window.scrollY >=
      ImageRef.current.offsetTop + ImageRef.current.offsetHeight - 20
    ) {
      // style the hole navbar
      // navRef.current.classList.remove("bg-transparentblack")
      navRef.current.classList.remove("py-2")
      // navRef.current.classList.add("bg-purple-900")
    } else {
      // navRef.current.classList.remove("bg-purple-900")
      // navRef.current.classList.add("bg-transparentblack")
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
  // const fetchUserInfos = async () => {
  //   const userObject = await fetch(
  //     `${process.env.REACT_APP_URL_CURRENT_USER_GOOGLE}`,
  //     {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     }
  //   )
  //   setUser(userObject.json())
  // }
  // useEffect(() => {
  //   fetchUserInfos()
  // }, [])
  return (
    <div className="flex flex-col w-screen h-full bg-gray-800 overflow-hidden box-border">
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
          className="max-h-screen  brightness-50  w-screen"
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
        <button className="absolute md:bottom-36 right-20 md:px-5 md:py-2 md:text-3xl mt-4 rounded-full bg-gray-800 hover:bg-gray-900 text-white">
          Commancer le design
        </button>
      </div>

      {/* vidéo descriptive */}

      <p className="md:text-5xl md:ml-7   text-yellow-500 select-none mb-5 md:mt-9 ">
        Pourquoi choisir Shirty ? <br />
      </p>

      <div className="mx-auto  flex items-center flex-col md:justify-evenly md:flex-row flex-wrap md:p-8 md:mb-10 md:w-3/4 w-full ">
        <p className="text-white font-semibold md:text-2xl select-none ">
          Découvrez comment vous pouvez créer et vendre vos produits en quelque
          minutes avec une courte vidéo déscriptive .
        </p>
        <div className="flex items-center flex-col  px-6 py-3">
          <video src="/video/Shivers.mp4" autoPlay controls muted />
        </div>
      </div>
      {/* section pour découvir  */}
      <div className=" bg-gray-900 md:ml-4 flex flex-col md:flex-row items-center justify-evenly flex-wrap  md:w-3/4 my-8 border h-fit">
        <img src="/images/gold.jpg" alt="shirt" className="md:max-h-120" />
        <div className="flex flex-col items-center">
          <p className="md:text-5xl font-semibold text-purple-600 md:mb-4">
            Tous ce dont vous avez révez de porter
          </p>
          <p className="md:text-2xl  text-white md:my-3 md:max-w-2xl md:text-center">
            Venez découvrir des produits exclusifs , pour tous les gouts et les
            couleurs ! découvrez aussi la nouvelle collection "mouha rass tota"
          </p>
          <button className="bg-purple-400 md:mb-3 text-white px-6 py-2 hover:bg-purple-600 rounded-full">
            Découvrir
          </button>
        </div>
      </div>
      {/* lancez vos oeuvres */}
      <div className="bg-gray-900 ml-auto md:mr-20 md:py-1 flex flex-col md:flex-row items-center justify-evenly flex-wrap  md:w-3/4 my-8 border h-fit ">
        <div className="flex flex-col items-center ">
          <p className="md:text-5xl font-semibold text-pink-500 md:mb-4">
            Tous commance par un désign
          </p>
          <p className="md:text-2xl md:text-center font-semibold text-white md:my-3 md:max-w-2xl">
            Que vous soyez un designer professionelle , un débutant ou que vous
            voulez juste faire plaisir à un proche , nous vous proposons une
            large sélection de produits que vous pouvez modifier à vos goûts et
            envie.
          </p>
          <button className="md:mt-12 bg-pink-400 text-white px-6 py-2 hover:bg-pink-600 rounded-full">
            Lancez vos oeuvres
          </button>
        </div>

        <img src="/images/workHard.jpg" alt="shirt no:2" />
      </div>

      {/* section produits à la une */}
      <div className="mx-auto w-full bg-gray-900 flex flex-col items-center">
        <p className="md:text-5xl md:mt-1 text-white">Produits à la une 🌟</p>
        <HorizontalScroll />
      </div>
    </div>
  )
}

export default Home
