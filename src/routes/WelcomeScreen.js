import React, { useContext } from "react"
import Faq from "../components/Faq"
import HorizontalScroll from "../components/HorizontalScroll"
import ScrollDesigners from "../components/ScrollDesigners"
import AuthContext from "../utils/AuthContext"

function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  // const ImageRef = useRef(null)

  return (
    <div className="flex flex-col select-none h-full bg-white overflow-hidden box-border">
      {/* <div className="pb-5 bg-[url('http://alciontechnologie.net/assets/img/shape/1.jpg')] relative w-screen box-border border ">
        <div className="md:mx-40 md:mt-20 md:pb-6 rounded-2xl flex md:pt-5 justify-around flex-wrap  ">
          <div className="flex flex-col items-center flex-wrap h-fit w-fit">
            
            <p className="select-none self-start md:mb-4    text-rose-600  md:text-4xl text-2xl md:max-w-md">
              Créez et vendez des produits personnalisés en ligne
            </p>
            <div className=" flex items-center">
              <p className="text-gray-800 select-none   md:text-2xl md:max-w-md">
                Une solution simple pour créer et vendre des produits engageants
                en quelques étapes seulement, laissez exprimer vos idées et vos
                envies.
              </p>
            </div>
            <button className="self-start mt-10 px-2 hover:px-5  md:py-1 md:text-xl shadow-lg shadow-rose-300 rounded-full bg-rose-500 hover:bg-rose-600 text-white  transition-all duration-500 hover:rounded-full">
              Commancer le design
            </button>
          </div>
          <img
            src="/images/welcome-tof.png"
            alt="welcome shirt illustration"
            className="md:max-h-96  md:mr-12"
          />
        </div>
      </div> */}

      <div className="bg-white   md:mt-20 flex items-center">
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
            <button className="self-start mt-10 px-2 hover:px-5  md:py-2 md:text-xl shadow-lg rounded-full bg-white text-gray-800  transition-all duration-500 hover:rounded-full">
              Commancer le design
            </button>
          </div>
        </div>
      </div>

      {/* section design descriptive */}
      <div className="flex items-center  flex-wrap  md:my-10 shadow-lg self-start md:ml-7 border">
        <div className="flex items-center  md:py-6   relative ">
          <img
            src="/images/baby3.png"
            alt=""
            className="max-h-[45rem] object-cover "
          />
          <div className="flex flex-col items-center self-start  md:ml-10 md:mt-20">
            {/* title */}
            <p className="md:mb-4 text-gray-800 font-semibold  md:text-5xl text-2xl  md:max-w-xs md:leading-relaxed">
              Tous est question de <span className="bg-[#50d6d7] md:px-2 ">créativité </span> 
            </p>
            <p className="md:text-2xl text-gray-800 md:max-w-md  absolute bottom-40 right-9 ">
            Liberez votre créativité et faite un design original grace au outils
            de shirty ajouter du texte , une image ou une simple forme
            géometrique , rajouter des filtres et regler la taille de votre
            design afin qu'il soit parfait pour vos prochain clients ou pour
            vous méme .
          </p>
          </div>
          
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
            couleurs ! découvrez aussi la nouvelle collection "Shirtsy"
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
