import React, { useRef, useContext } from "react"
import Faq from "../components/Faq"
import HorizontalScroll from "../components/HorizontalScroll"
import ScrollDesigners from "../components/ScrollDesigners"
import AuthContext from "../utils/AuthContext"

function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  const ImageRef = useRef(null)

  return (
    <div className="flex flex-col select-none  h-full bg-white overflow-hidden box-border">
      <div className="relative w-screen max-h-screen box-border  ">
        <img
          alt="header shirt"
          src="/images/home.jpg"
          className="max-h-screen  brightness-50  w-screen"
          ref={ImageRef}
        />
        <div className=" flex flex-col items-center flex-wrap absolute md:left-1/4  md:top-20 top-4 left-7   h-fit w-fit">
          {/* title */}
          <p className="select-none self-start md:mb-4    text-rose-500  md:text-6xl text-3xl">
            Personalisez votre style
          </p>
          <div className=" flex items-center   ">
            <p className="text-white select-none   md:text-4xl md:max-w-2xl">
              Une solution simple pour créer et vendre des produits engageants
            </p>
          </div>
        </div>
        <button className=" items-center flex absolute md:bottom-11 md:right-12 bottom-5 right-5 hover:px-5  md:py-2 md:text-xl mt-4    hover:bg-tranparentWhite text-white  transition-all duration-700 hover:rounded-full">
          Commancer le design
        </button>
      </div>

      {/* vidéo descriptive */}
      <div className="mx-auto  flex items-center flex-col md:justify-evenly md:flex-row flex-wrap  md:mb-10  w-screen relative ">
        <div className="flex flex-col items-center max-w-2xl md:py-6  ">
          <p className="md:text-4xl text-2xl mb-2 mt-5  text-gray-700 md:mb-4 md:mt-3">
            C'est ici que tous commance...
          </p>
          <img
            src="/images/shirty-logo.png"
            alt="siseaux"
            className="max-h-72"
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
          <p className="md:text-2xl text-center    text-gray-400 md:my-1 md:max-w-2xl md:text-center">
            Venez découvrir des produits exclusifs , pour tous les gouts et les
            couleurs ! découvrez aussi la nouvelle collection "mouha rass balota"
          </p>
          <button className="bg-rose-500 md:my-3 text-xl z-40 text-white px-4 py-1  hover:bg-rose-600 rounded-full">
            Découvrir
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-evenly md:w-1/2 ">
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
          <p className="md:text-2xl md:text-center text-gray-400 md:max-w-2xl">
            Que vous soyez un designer professionelle , un débutant ou que vous
            voulez juste faire plaisir à un proche , nous vous proposons une
            large sélection de produits que vous pouvez modifier à vos goûts et
            envie.
          </p>
          <button className="md:mt-4 bg-rose-500 text-white text-xl px-4 py-2 hover:bg-rose-600 rounded-full">
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
        <p className="md:text-3xl self-start md:ml-3  md:my-1 text-gray-700 font-semibold ">
          Produits à la une :
        </p>
        <HorizontalScroll />
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

      <Faq />

      {currUser.currUser && (
        <p className="text-gray-900 text-4xl"> {currUser.currUser.name} </p>
      )}
    </div>
  )
}

export default WelcomeScreen
