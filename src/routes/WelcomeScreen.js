import React, { useRef, useContext } from "react"
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineArrowRight,
  AiFillCloseCircle,
  AiFillTwitterCircle,
} from "react-icons/ai"
import Faq from "../components/Faq"
import HorizontalScroll from "../components/HorizontalScroll"
import Navbar from "../components/Navbar"
import ScrollDesigners from "../components/ScrollDesigners"
import AuthContext from "../utils/AuthContext"

function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  const navRef = useRef(null)
  const connectRef = useRef(null)
  const ImageRef = useRef(null)

  const onClickConnect = () => {
    connectRef.current.classList.toggle("hidden")
  }
  const socialAuth = async (url) => {
    window.open(url, "_self")
  }

  return (
    <div className="flex flex-col select-none w-screen h-full bg-white overflow-hidden box-border">
      <Navbar navRef={navRef} onPressConnect={onClickConnect} />
      {/* modal container */}
      <div
        className="hidden fixed h-full w-screen bg-transparentblack z-50"
        ref={connectRef}
      >
        {/* modal contents */}
        <div className="flex flex-col   z-50  items-center md:w-1/2 mx-auto md:mt-32 md:py-3 border-double border-8 border-gray-800 bg-yellow-200 relative ">
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

      <div className="relative w-screen max-h-screen box-border  ">
        <img
          alt="header shirt"
          src="/images/home.jpg"
          className="max-h-screen  brightness-50  w-screen"
          ref={ImageRef}
        />
        <div className=" flex flex-col items-center flex-wrap absolute left-1/4  top-20   h-fit w-fit">
          {/* title */}
          <p className="select-none self-start md:mb-4    text-rose-500  md:text-6xl">
            Personalisez votre style
          </p>
          <div className=" flex items-center   ">
            <p className="text-white select-none   md:text-4xl md:max-w-2xl">
              Une solution simple pour créer et vendre des produits engageants
            </p>
          </div>
          <button className=" items-center flex md:bottom-36 right-20 hover:px-5 hover:border-none md:py-2 md:text-2xl mt-4  border-b  hover:bg-tranparentWhite text-white  transition-all duration-700 hover:rounded-full">
            Commancer le design
            <AiOutlineArrowRight className="ml-1 translate-y-1" />
          </button>
        </div>
      </div>

      {/* vidéo descriptive */}
      <div className="mx-auto  flex items-center flex-col md:justify-evenly md:flex-row flex-wrap  md:mb-10  w-screen relative ">
        <div className="flex flex-col items-center max-w-2xl md:py-6   ">
          <p className="md:text-4xl  text-gray-700 md:mb-4">
            C'est ici que tous commance...
          </p>
          <img
            src="/images/siseaux.png"
            alt="siseaux"
            className="md:max-h-32"
          />
          <p className="text-gray-400  rounded-full text-center md:p-2  md:text-xl select-none md:max-w-3xl ">
            Découvrez comment vous pouvez créer et vendre vos produits en
            quelque minutes avec une courte vidéo déscriptive .
          </p>
        </div>

        <div className="flex items-center flex-col  md:w-124  py-3">
          <video src="/video/Shivers.mp4" autoPlay controls muted />
        </div>
      </div>

      {/* section pour découvir  */}
      <div className=" md:mx-auto  md:py-10 flex flex-col md:flex-row items-center justify-evenly   md:w-11/12 my-5  h-fit relative">
        <div className="flex flex-col items-center md:p-5 ">
          <p className="md:text-3xl font-semibold text-gray-700 md:mb-2">
            Tous ce dont vous avez révez de porter
          </p>
          <p className="md:text-2xl     text-gray-400 md:my-1 md:max-w-2xl md:text-center">
            Venez découvrir des produits exclusifs , pour tous les gouts et les
            couleurs ! découvrez aussi la nouvelle collection "mouha rass tota"
          </p>
          <button className="bg-rose-500 md:my-3 z-40 text-white px-6 py-2  hover:bg-rose-600 rounded-full">
            Découvrir
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-evenly md:w-1/2 ">
          <img
            src="/images/gold.jpg"
            alt="shirt"
            className="md:max-h-52 mx-2"
          />
          <img
            src="/images/shirt1.jpg"
            alt="shirt"
            className="md:max-h-52 mx-2"
          />
          <img
            src="/images/shirt2.jpg"
            alt="shirt"
            className="md:max-h-52 mx-2"
          />
          <img
            src="/images/shirt3.jpg"
            alt="shirt"
            className="md:max-h-52 mx-2"
          />
        </div>
      </div>
      {/* lancez vos oeuvres */}
      <div className="md:py-1 flex flex-col md:flex-row items-center justify-evenly flex-wrap w-full my-5 h-fit ">
        <div className="flex flex-col items-center  md:p-5">
          <p className="md:text-3xl font-semibold text-gray-700 md:mb-4">
            On mise tous sur le désign
          </p>
          <p className="md:text-2xl md:text-center text-gray-400 md:max-w-4xl">
            Que vous soyez un designer professionelle , un débutant ou que vous
            voulez juste faire plaisir à un proche , nous vous proposons une
            large sélection de produits que vous pouvez modifier à vos goûts et
            envie.
          </p>
          <button className="md:mt-4 bg-rose-500 text-white px-6 py-2 hover:bg-rose-600 rounded-full">
            Lancez vos oeuvres
          </button>
        </div>

        <img
          src="/images/workHard.jpg"
          alt="shirt no:2"
          className="md:max-h-80"
        />
      </div>

      {/* section produits à la une */}
      <div className="mx-auto w-full  flex flex-col items-center">
        <p className="md:text-3xl self-start md:ml-3  md:my-1 text-rose-500 ">
          Produits à la une :
        </p>
        <HorizontalScroll />
        <div className="flex w-full flex-wrap justify-evenly bg-gray-800 ">
          <div className=" p-2 text-center self-start md:ml-4">
            <p className="text-white md:max-w-md md:text-lg  ">
              Vous trouverez içi les produits les plus visités et les mieux
              notées par les utilisateurs , pourquoi ne pas essayer d'apporter
              votre touche personnelle et nous montrer de quoi vous êtes capable
              ?
            </p>
          </div>
          <div className=" p-2 text-center self-start md:ml-4">
            <p className="text-white md:max-w-md md:text-lg  ">
              Vous trouverez içi les produits les plus visités et les mieux
              notées par les utilisateurs , pourquoi ne pas essayer d'apporter
              votre touche personnelle et nous montrer de quoi vous êtes capable
              ?
            </p>
          </div>
        </div>
      </div>
      {/* section designer en vedette */}
      <p className="text-3xl text-gray-700 self-start md:ml-3 font-semibold md:mt-5">
        Désigners en vedette
      </p>
      {/* designers en vedette  */}
      <div className="w-full mx-auto  my-2 flex items-center">
        <ScrollDesigners />
      </div>
      {/* section de FAQ */}
      <div className="self-start md:ml-5">
        <Faq />
      </div>

      {currUser.currUser && (
        <p className="text-gray-900 text-4xl"> {currUser.currUser.name} </p>
      )}
    </div>
  )
}

export default WelcomeScreen
