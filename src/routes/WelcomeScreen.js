import React, { useContext } from "react"
import Faq from "../components/Faq"
import HorizontalScroll from "../components/HorizontalScroll"
import ScrollDesigners from "../components/ScrollDesigners"
import AuthContext from "../utils/AuthContext"

function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  // const ImageRef = useRef(null)

  return (
    <div className="flex flex-col select-none h-full bg-white overflow-hidden">
      {/* section descriptive desktop */}
      <div className="md:mt-20 lg:flex lg:items-center hidden border relative">
        {/* bg bubles */}
        
          <div className="h-20 w-20 rounded-full bg-red-400 absolute mix-blend-multiply bottom-9 right-10 animate-chariot animation-delay-4000 blur-sm"></div>
          <div className="h-20 w-20 rounded-full bg-blue-400 absolute mix-blend-multiply bottom-9 right-20 animate-chariot animation-delay-3000 blur-sm"></div>
          <div className="h-20 w-20 rounded-full bg-yellow-400 absolute mix-blend-multiply bottom-9 right-32 animate-chariot animation-delay-2000 blur-sm"></div>
        
        <div className="relative mx-auto  md:py-2">
          <img
            alt=""
            src="/images/baby2.png"
            className=" max-h-[45rem] object-cover"
          />
          {/* texte */}
          <div className="flex flex-col items-center flex-wrap h-fit w-fit absolute top-10 md:left-5">
            <p className="self-start md:mb-4 text-white font-thin  md:text-5xl text-2xl md:max-w-lg md:leading-snug ">
              Créez et vender des{" "}
              <span className="md:text-6xl text-gray-800 font-bold">
                produits personnalisés
              </span>{" "}
              en ligne
            </p>
            <div className=" flex items-center md:mt-6 md:px-3 md:py-2 bg-white rounded-lg skew-y-3">
              <p className="text-gray-800 select-none   md:text-2xl md:max-w-md">
                Une solution simple pour créer et vendre des produits engageants
                en quelques étapes seulement, laissez exprimer vos idées et vos
                envies.
              </p>
            </div>
            <button className="self-start mt-10 px-2 hover:px-5  md:py-2 md:text-xl shadow-lg rounded-full bg-yellow-300 text-gray-800  transition-all duration-500 hover:rounded-full">
              Commancer le design
            </button>
          </div>
        </div>
      </div>
      {/* section descriptive mobile */}
      <div className="lg:hidden mx-auto mt-16 relative">
        <img src="/images/ill1-mob.png" alt="" className="sm:max-h-full  " />
        {/* texte */}
        <div className="flex flex-col items-center flex-wrap h-fit w-fit absolute md:bottom-10 bottom-14 left-3">
          <p className="self-start sm:mb-4  mb-5 text-white font-thin  sm:text-5xl  text-3xl  sm:max-w-lg max-w-xs sm:leading-snug ">
            Créez et vender des {""}
            <span className="sm:text-6xl text-gray-800 font-bold">
              produits personnalisés
            </span>{" "}
            en ligne
          </p>
          <div className=" flex items-center sm:mt-6 px-3 sm:py-2 bg-white rounded-lg sm:skew-y-3">
            <p className="text-gray-800 select-none   sm:text-2xl text-md sm:max-w-sm max-w-xs">
              Une solution simple pour créer et vendre des produits engageants
              en quelques étapes seulement, laissez exprimer vos idées et vos
              envies.
            </p>
          </div>
          <button className="self-start sm:mt-10 mt-5 px-2 hover:px-5  sm:py-2 py-1 sm:text-xl text-lg shadow-lg rounded-full bg-yellow-300 text-gray-800  transition-all duration-500 hover:rounded-full">
            Commancer le design
          </button>
        </div>
      </div>
      {/* section design desktop */}
      <div className="lg:flex lg:items-center  lg:flex-wrap  sm:my-10  self-start sm:ml-7  hidden">
        <div className="flex items-center  md:py-6   relative ">
          <img
            src="/images/baby3.png"
            alt=""
            className="max-h-[45rem] object-cover "
          />
          <div className="flex flex-col items-center self-start  md:ml-10 md:mt-20">
            {/* title */}
            <p className="md:mb-4 text-gray-800 font-semibold  md:text-5xl text-2xl  md:max-w-xs md:leading-relaxed">
              Tous est question de{" "}
              <span className="bg-[#50d6d7] md:px-2 ">créativité </span>
            </p>
            <p className="lg:text-2xl text-gray-800 lg:max-w-xs  absolute bottom-16 right-24 ">
              Liberez votre créativité et faite un design original grace au
              outils de shirty ajouter du texte, une image ou une simple forme
              géometrique , rajouter des filtres et regler la taille de votre
              design afin qu'il soit parfait pour vos prochain clients ou pour
              vous méme
            </p>
          </div>
        </div>
      </div>
      {/* section design mobile */}
      <div className="lg:hidden flex flex-col items-center sm:flex-row mt-10 mx-4">
        <img src="/images/ill2-mob.png" alt="" className="max-w-sm" />
        <div className="flex flex-col items-center   md:ml-10 md:mt-20">
          {/* title */}
          <p className="md:mb-4 text-gray-800 font-semibold   text-2xl  max-w-xs leading-relaxed">
            Tous est question de{" "}
            <span className="bg-[#50d6d7] md:px-2 ">créativité </span>
          </p>
          <p className="text-lg text-gray-800 max-w-xs   ">
            Liberez votre créativité et faite un design original grace au outils
            de shirty ajouter du texte, une image ou une simple forme
            géometrique , rajouter des filtres et regler la taille de votre
            design afin qu'il soit parfait pour vos prochain clients ou pour
            vous méme
          </p>
        </div>
      </div>
      {/* shop desktop  */}
      <div className=" md:mx-auto  md:py-10 flex flex-col md:flex-row items-center justify-evenly   md:w-11/12 my-5  h-fit relative">
        <div className="flex flex-col items-center md:p-5 ">
          <p className="md:text-3xl font-semibold text-gray-700 md:mb-2">
            Tous ce dont vous avez révez de porter
          </p>
          <p className="md:text-2xl md:text-center text-gray-400 md:max-w-2xl">
            Que vous soyez un designer professionelle , un débutant ou que vous
            voulez juste faire plaisir à un proche , nous vous proposons une
            large sélection de produits que vous pouvez modifier à vos goûts et
            envie.
          </p>
          <button className="bg-rose-500 md:my-3 text-xl z-40 text-white px-4 py-1  hover:bg-rose-600 rounded-full">
            Découvrir
          </button>
        </div>
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
