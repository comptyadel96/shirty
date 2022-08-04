import React, { useContext } from "react"
import Faq from "../components/Faq"
import HorizontalScroll from "../components/HorizontalScroll"
import ScrollDesigners from "../components/ScrollDesigners"
import AuthContext from "../utils/AuthContext"

function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  // const ImageRef = useRef(null)

  return (
    <div className="flex flex-col select-text h-full bg-white overflow-hidden">
      {/* section descriptive desktop */}
      <div className="md:mt-20 lg:flex lg:items-center hidden relative">
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
            <button className=" animate-bounceSlow hover:animate-none  self-start mt-10 px-2 hover:px-5  md:py-2 md:text-xl shadow-lg rounded-full bg-gray-800 text-white  transition-all duration-500 hover:rounded-full">
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
          <button className="self-start sm:mt-10 mt-5 px-2  sm:py-2 py-1 sm:text-xl text-lg shadow-lg rounded-full bg-gray-800 text-white">
            Commancer le design
          </button>
        </div>
      </div>

      <p className="md:mt-10 mt-5 mb-3 ml-4 md:text-4xl font-semibold">
        Pourquoi choisir Shirty ?{" "}
      </p>
      {/* aventages */}
      <div className="flex items-center justify-evenly flex-wrap relative  md:py-5  md:mx-20 mb-20 ">
        <div className="absolute -bottom-20 w-full h-1/2 bg-[#f3cb65]/50"></div>
        <div className="flex flex-col bg-white rounded-2xl drop-shadow-lg md:px-2 py-3 ">
          <img src="/images/boxy2.png" alt="" className="md:max-h-60" />
          <p className="text-gray-800 font-bold text-center md:text-xl md:my-3">
            L'originalité
          </p>
          <p className="max-w-xs mx-auto text-center text-gray-500 font-semibold ">
            Quand vous aurez terminer la personalisation, vous aurez un model
            unique qui reflaitera votre personalité et votre style{" "}
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-2xl drop-shadow-lg md:px-2 py-3 ">
          <img src="/images/mockup1.png" alt="" className="md:max-h-60" />
          <p className="text-gray-800 font-bold text-center md:text-xl md:my-3">
            Pas de minimum de commande
          </p>
          <p className="max-w-xs mx-auto text-center text-gray-500 font-semibold ">
            Acheter seulement la quantité requise pour votre buisness, sans
            augmentation des tarifs
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-2xl drop-shadow-lg md:px-2 py-3 ">
          <img src="/images/wallet.png" alt="" className="md:max-h-60" />
          <p className="text-gray-800 font-bold text-center md:text-xl md:my-3">
            Epargner votre porte monnaie
          </p>
          <p className="max-w-xs mx-auto text-center text-gray-500 font-semibold ">
            Jusqu'a 4 fois moins chére que les magasins pour la meme qualité de tissu
          </p>
        </div>
      </div>

      {/* section design desktop */}
      <div className="lg:flex lg:items-center  lg:flex-wrap  sm:my-10 sm:mx-7  w-fit  relative hidden">
        <div className="flex items-center  md:py-6   relative ">
          <img
            src="/images/baby3.png"
            alt=""
            className="max-h-[45rem] object-cover "
          />
          <div className="flex flex-col items-center self-start  md:ml-10 md:mt-20">
            {/* title */}
            <p className="md:mb-4 text-gray-800 font-semibold  text-5xl   max-w-md leading-relaxed">
              Tous est question de{" "}
              <span className="bg-gray-800 text-white md:px-2 ">
                créativité{" "}
              </span>
            </p>
            <p className="lg:text-3xl text-gray-800 lg:max-w-2xl  p-3 rounded-lg min-w-[350px] ">
              Libérez votre créativité et faite un design original grâce au
              outils de shirty ajouter du texte, une image ou une simple forme
              géometrique , rajouter des filtres et régler la taille de votre
              design afin qu'il soit parfait pour vos prochains clients ou pour
              vous même
            </p>
          </div>
        </div>
      </div>
      {/* section design mobile */}
      <div className="lg:hidden flex flex-col items-center md:flex-row mt-10">
        <img src="/images/ill2-mob.png" alt="" className="max-w-sm" />
        <div className="flex flex-col items-center self-start text-center mx-auto ">
          {/* title */}
          <p className="md:mb-4 text-gray-800 font-semibold   md:text-3xl text-2xl  max-w-xs">
            Tous est question de <br />
            <span className="bg-gray-800 text-white md:px-2">créativité </span>
          </p>
          <p className="md:text-2xl text-gray-800 max-w-xs ">
            Libérez votre créativité et faite un design original grâce au outils
            de shirty ajouter du texte, une image ou une simple forme
            géometrique , rajouter des filtres et régler la taille de votre
            design afin qu'il soit parfait pour vos prochains clients ou pour
            vous même
          </p>
        </div>
      </div>
      {/* shop desktop  */}
      <div className="lg:flex w-full   relative hidden">
        <img
          src="/images/shop.png"
          alt=""
          className="xl:max-w-[55rem] max-w-[48rem] ml-auto -mr-3"
        />
        <div className="flex flex-col  absolute xl:left-28 left-7 bottom-24 xl:bottom-5 xl:px-3 rounded-xl ">
          <p className="xl:text-6xl self-start  text-4xl font-semibold text-white bg-gray-800 xl:px-2 px-1 pb-2 xl:mb-14 mb-5">
            Ce que vous aimer porter
          </p>
          <p className="xl:text-4xl text-2xl mx-auto  md:max-w-xl">
            Que vous soyez un designer professionelle, un débutant ou que vous
            voulez juste faire plaisir à un proche, nous vous proposons une
            large sélection de produits que vous pouvez modifier à vos goûts et
            envie.
          </p>
          <button className="bg-gray-800 md:my-3 max-w-fit self-end text-xl z-40 text-white px-4 py-1 rounded-full">
            Découvrir
          </button>
        </div>
      </div>

      {/* aventages */}
      <div className="flex items-center flex-wrap xl:py-5 py-3 justify-evenly relative bg-gray-50 md:mt-5  md:py-2 md:px-3 overflow-hidden  mb-2 ">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1438 320"
          className="md:absolute md:bottom-0 md:animate-chariot md:h-auto md:w-[150%] w-0 h-0 "
        >
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,32L6.2,80C12.3,128,25,224,37,256C49.2,288,62,256,74,234.7C86.2,213,98,203,111,197.3C123.1,192,135,192,148,170.7C160,149,172,107,185,101.3C196.9,96,209,128,222,144C233.8,160,246,160,258,138.7C270.8,117,283,75,295,58.7C307.7,43,320,53,332,101.3C344.6,149,357,235,369,245.3C381.5,256,394,192,406,165.3C418.5,139,431,149,443,149.3C455.4,149,468,139,480,144C492.3,149,505,171,517,176C529.2,181,542,171,554,176C566.2,181,578,203,591,186.7C603.1,171,615,117,628,128C640,139,652,213,665,250.7C676.9,288,689,288,702,256C713.8,224,726,160,738,133.3C750.8,107,763,117,775,149.3C787.7,181,800,235,812,245.3C824.6,256,837,224,849,186.7C861.5,149,874,107,886,117.3C898.5,128,911,192,923,202.7C935.4,213,948,171,960,160C972.3,149,985,171,997,170.7C1009.2,171,1022,149,1034,138.7C1046.2,128,1058,128,1071,122.7C1083.1,117,1095,107,1108,133.3C1120,160,1132,224,1145,234.7C1156.9,245,1169,203,1182,165.3C1193.8,128,1206,96,1218,85.3C1230.8,75,1243,85,1255,101.3C1267.7,117,1280,139,1292,128C1304.6,117,1317,75,1329,96C1341.5,117,1354,203,1366,229.3C1378.5,256,1391,224,1403,186.7C1415.4,149,1428,107,1434,85.3L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"
          ></path>
        </svg> */}
        <div className="md:my-2 my-1 bg-white flex  flex-col items-center  px-2 py-1 rounded-lg md:py-2 drop-shadow-lg">
          <img
            src="/icons/speed-command.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold">Gagner du temps</p>
          <p className="md:max-w-[260px]   md:text-base text-sm text-gray-800 text-center ">
            Vous n'aurez plus a attendre des jours pour recevoir votre produit
          </p>
        </div>

        <div className="md:my-2 my-1 bg-white flex  flex-col items-center  px-2 py-1 rounded-lg md:py-2 drop-shadow-lg">
          <img
            src="/icons/shirt-star.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold">ça a du style</p>
          <p className="md:max-w-[260px]   md:text-base text-sm text-gray-800 text-center ">
            Une impression qui vous garantira la réussite de votre produit
          </p>
        </div>
        <div className="md:my-2 my-1 bg-white flex  flex-col items-center  px-2 py-1 rounded-lg md:py-2 drop-shadow-lg">
          <img
            src="/icons/echange.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold">Aucun risque</p>
          <p className="md:max-w-[260px]   md:text-base text-sm text-gray-800 text-center ">
            Payer une fois que votre commande vous sera livrer
          </p>
        </div>
        <div className="md:my-2 my-1 bg-white flex  flex-col items-center  px-2 py-1 rounded-lg md:py-2 drop-shadow-lg  ">
          <img
            src="/icons/box-secured.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold">C'est costaud</p>
          <p className="md:max-w-[260px]   md:text-base text-sm text-gray-800 text-center ">
            Livraison sûr, votre produit vous sera livrer intacte
          </p>
        </div>

        <div className="md:my-2 my-1 bg-white flex  flex-col items-center  px-2 py-1 rounded-lg md:py-2 drop-shadow-lg">
          <img src="/icons/shop.png" alt="" className="md:max-h-20 max-h-20" />
          <p className="md:text-lg font-semibold">Vous avez le choix</p>
          <p className="md:max-w-[260px]   md:text-base text-sm text-gray-800 text-center ">
            Large sélection de produits pour votre plus grand plaisir
          </p>
        </div>
      </div>
      {/* offres */}
      <div className="flex md:flex-row flex-wrap flex-col items-center md:ml-20">
        <p className="py-1 md:px-2 px-1 m-1 text-center text-gray-800 md:text-sm text-xs font-semibold rounded-sm bg-[#f3cb65]/40 max-w-fit ">
          Découvrez aussi nos remises exclusives pour les étudiants et les
          commerçants{" "}
        </p>
        <p className="py-1 md:px-2 px-1 m-1 text-center text-gray-800 md:text-sm text-xs font-semibold rounded-sm bg-[#ebb8d9]/40 max-w-fit ">
          Des codes promotionnels qui vous permettront d'économiser jusqu'à 25%
        </p>
        <p className="py-1 md:px-2 px-1 m-1 text-center text-gray-800 md:text-sm text-xs font-semibold rounded-sm bg-[#50d6d7]/50 max-w-fit ">
          Pas de minimum de commande
        </p>
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
