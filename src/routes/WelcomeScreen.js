import React, { useContext } from "react"
import Faq from "../components/Faq"
import HorizontalScroll from "../components/HorizontalScroll"
// import ScrollDesigners from "../components/ScrollDesigners"
import AuthContext from "../utils/AuthContext"
// import { EyeDropper } from "react-eyedrop"
// import { ImEyedropper } from "react-icons/im"
function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  // const [hasClickedDropper, setHasClickedDropper] = useState(false)
  // const CustomButton = ({ onClick }) => (
  //   <button
  //     className="flex flex-col items-center mx-auto"
  //     onClick={() => {
  //       onClick()
  //       setHasClickedDropper(!hasClickedDropper)
  //     }}
  //   >
  //     <div
  //       className={` rounded-full p-2 ${
  //         hasClickedDropper ? "bg-gray-300" : "bg-white"
  //       }`}
  //     >
  //       <ImEyedropper className="text-xl text-gray-600" />
  //     </div>
  //   </button>
  // )
  return (
    <div className="flex flex-col select-text h-full lg:bg-[#f7f7f7] bg-white overflow-hidden">
      {/* section descriptive desktop */}
      <div className="lg:mt-20 lg:mb-10 lg:flex lg:items-center hidden relative bg-white xl:mx-10 border ">
        <div className="relative mx-auto  md:py-2">
          <img
            alt=""
            src="/images/baby2.png"
            className=" max-h-[45rem] object-cover "
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
            <div className=" flex items-center md:mt-6 md:px-3 md:py-2 bg-white rounded-lg ">
              <p className="text-gray-800 md:text-2xl md:max-w-md">
                Une solution simple pour créer et vendre des produits engageants
                en quelques étapes seulement, laissez exprimer vos idées et vos
                envies.
              </p>
            </div>
            <button className="animate-bounceSlow hover:animate-none  self-start mt-10 px-2 hover:px-5  md:py-2 md:text-xl shadow-lg rounded-full bg-gray-800 text-white  transition-all duration-500 hover:rounded-full">
              Commancer le design
            </button>
          </div>
        </div>
      </div>
      {/* <EyeDropper
        // once={!hasClickedDropper}
        wrapperClasses="p-0"
        customComponent={CustomButton}
        onChange={({ rgb, hex }) => {
          console.log(hex, rgb)
        }}
        onPickEnd={() => {
          console.log("picked")
          setHasClickedDropper(!hasClickedDropper)
        }}
      />
      <button
        onClick={() => localStorage.setItem("saw-tuto", false)}
        className="max-w-fit px-2 bg-amber-400"
      >
        supprimer local storage
      </button> */}
      {/* section descriptive mobile */}
      <div className="lg:hidden mx-auto mt-16 relative ">
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
            <p className="text-gray-800 select-none   sm:text-2xl text-lg sm:max-w-sm max-w-xs">
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
      {/* little separator */}
      <div className="lg:flex lg:flex-row md:border flex-col lg:items-center lg:flex-wrap lg:mt-10 mt-2 lg:max-w-fit lg:mx-auto  bg-white px-4 lg:py-10 justify-evenly shadow-lg">
        {/* card 1 */}
        <div className="flex flex-col lg:items-center lg:my-0 my-4 xl:mx-2 lg:mx-1 lg:border-r-4 lg:border-l-0 border-l-4 border-dotted border-gray-800 pr-2">
          <h1 className="text-3xl font-bold text-center ">
            Shirty{" "}
            <span className="lg:text-2xl font-semibold">c'est quoi ? </span>{" "}
          </h1>
          <p className="xl:max-w-sm lg:max-w-[20rem] max-w-[17rem] text-gray-800  leading-6 text-center mx-auto font-semibold">
            Shirty est un service d'imprimerie a la demmande en ligne qui vous
            permettra de commander votre produit personalisé et de créer et
            vendre votre propre marque sur toute la gamme de nos produits
          </p>
        </div>
        {/* card 2*/}
        <div className="flex flex-col lg:items-center lg:my-0 my-4 xl:mx-2 lg:mx-1 border-r-4 border-dotted border-gray-800 pr-2">
          <h1 className="text-3xl font-bold text-center ">
            +4 ans{" "}
            <span className="lg:text-xl font-semibold">d'éxperience</span>{" "}
          </h1>
          <p className="xl:max-w-sm lg:max-w-[20rem] max-w-[17rem] text-gray-800  leading-6 text-center mx-auto font-semibold">
            Nous vous garantissons un service à la fois rapide et fiable peut
            importe la taille ou le type de votre commande
          </p>
        </div>
        {/* card 3*/}
        <div className="flex flex-col lg:items-center lg:my-0 my-4 xl:mx-2 lg:mx-1 lg:border-r-4 lg:border-l-0 border-l-4 border-dotted border-gray-800 pr-2">
          <h1 className="text-3xl font-bold text-center ">
            +de 200{" "}
            <span className="lg:text-xl font-semibold">commandes/jour</span>{" "}
          </h1>
          <p className="xl:max-w-sm lg:max-w-[20rem] max-w-[17rem] text-gray-800  leading-6 text-center mx-auto font-semibold">
            Plus de 26 entreprises nous font confiance sur tous le térritoire
            national
          </p>
        </div>
      </div>
      {/* section design desktop */}
      <div className="lg:flex lg:items-center   bg-white shadow-md border lg:flex-wrap  sm:mb-10 lg:pb-20 mt-20 relative hidden mx-10">
        <div className="flex items-center justify-around  w-full md:py-3 relative">
          <img
            src="/images/design-desktop.png"
            alt=""
            className="xl:max-h-[43rem] lg:max-h-[40rem] object-cover border-r-4 border-gray-800 pr-2 border-dotted "
          />
          <div className="flex flex-col self-start md:mt-10 ml-2">
            {/* title */}
            <p className="md:mb-4 text-gray-800 font-semibold  text-5xl   max-w-md leading-relaxed border-b-4 border-gray-800">
              Tous est question de{" "}
              <span className="bg-gray-800 text-white md:px-2 ">
                créativité{" "}
              </span>
            </p>
            <p className="lg:text-3xl text-gray-800 lg:max-w-2xl p-3 rounded-md  bg-white">
              Libérez votre créativité et faite un design original grâce au
              outils de shirty ajouter du texte, une image ou une simple forme
              géometrique, rajouter des filtres et régler la taille de votre
              design afin qu'il soit parfait pour vos prochains clients ou pour
              vous même
            </p>
          </div>
        </div>
      </div>
      {/* section design mobile */}
      <div className="lg:hidden flex flex-col items-center md:flex-row mt-10 mb-7">
        <img src="/images/ill2-mob.png" alt="" className="max-w-sm" />
        <div className="flex flex-col items-center self-start text-center mx-auto ">
          {/* title */}
          <p className="md:mb-4 text-gray-800 font-semibold leading-9  md:text-3xl text-2xl  max-w-xs">
            Tous est question de{" "}
            <span className="bg-gray-800 text-white rounded-sm px-2 mt-1">
              créativité{" "}
            </span>
          </p>
          <p className="md:text-2xl text-lg text-gray-800 max-w-xs md:mt-0 mt-3 ">
            Libérez votre créativité et faite un design original grâce au outils
            de shirty ajouter du texte, une image ou une simple forme
            géometrique , rajouter des filtres et régler la taille de votre
            design afin qu'il soit parfait pour vos prochains clients ou pour
            vous même
          </p>
        </div>
      </div>
      {/* deparator1 */}
      <div className="lg:max-w-[97%] max-w-full lg:flex flex-wrap lg:mx-10 bg-gray-800 lg:text-white  py-3 my-5 items-center justify-evenly  overflow-visible">
        <div className="flex items-center lg:flex-row flex-col my-2 mx-1">
          <div className="flex flex-col max-w-fit mx-auto">
            <img
              src="/icons/no-download.png"
              alt=""
              className="max-w-[90px] mx-auto"
            />
            <p className="ml-2 font-semibold lg:text-md text-lg text-center lg:max-w-md  lg:text-white lg:bg-transparent text-gray-800 bg-white lg:mt-0 mt-3 mb-1">
              Pas besoin de télécharger quoi que ce soit
            </p>
            <p className="lg:text-sm text-md lg:max-w-xs ml-2 mx-auto text-center text-white">
              Le design ce fait en ligne et en quelques minutes avec les outils
              de personalisation shirty{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center lg:my-2 my-6 mx-1">
          <div className="flex flex-col max-w-fit mx-auto">
            <img
              src="/icons/pre-design.png"
              alt=""
              className="max-w-[120px] mx-auto"
            />
            <p className="ml-2 font-semibold lg:text-md text-lg text-center lg:max-w-md  lg:text-white lg:bg-transparent text-gray-800 bg-white lg:mt-0 mt-3 mb-1">
              Designs déja préts pour vos modifications
            </p>
            <p className="lg:text-sm text-md lg:max-w-xs ml-2 mx-auto text-center text-white">
              Plusieurs élements déja mis en place pour vous aider a démmarer
            </p>
          </div>
        </div>
        <div className="flex items-center lg:my-2 my-6 mx-1">
          <div className="flex flex-col max-w-fit mx-auto">
            <img
              src="/icons/paiment.png"
              alt=""
              className="max-w-[120px] mx-auto"
            />
            <p className="ml-2 font-semibold lg:text-md text-lg text-center lg:max-w-md  lg:text-white lg:bg-transparent text-gray-800 bg-white lg:mt-0 mt-3 mb-1">
              Rémuneration pour vos oeuvres
            </p>
            <p className="lg:text-sm text-md lg:max-w-xs ml-2 mx-auto text-center text-white">
              Vous pouvez acheter votre produit et aussi le vendre sur notre
              site
            </p>
          </div>
        </div>
      </div>
      {/* shop desktop  */}
      <div className="lg:flex w-full max-w-[95%] bg-white lg:mt-16 relative hidden lg:py-8 lg:px-5 mx-auto">
        <div className="flex flex-col bg-[#50d6d7] lg:w-[30%] overflow-visible ">
          <p className="xl:text-5xl xl:min-w-[36rem] lg:max-w-md lg:min-w-[28rem] text-4xl font-semibold text-white bg-gray-800 xl:px-2 px-1 pb-2 xl:mb-14 xl:mt-10 mb-5">
            Ce que vous aimer porter
          </p>
          <p className="xl:text-4xl text-2xl xl:ml-[6rem] lg:ml-[3rem] bg-white drop-shadow-lg rounded-xl xl:max-w-xl xl:min-w-[36rem] lg:max-w-md lg:min-w-[28rem] xl:p-4 lg:p-2">
            Que vous soyez un designer professionelle, un débutant ou que vous
            voulez juste faire plaisir à un proche, nous vous proposons une
            large sélection de produits que vous pouvez modifier à vos goûts et
            vos envies
          </p>
          <button className="bg-gray-800 xl:mt-20 lg:mt-10 xl:mr-10   max-w-fit self-end  text-xl z-40 text-white px-4 py-1 rounded-full">
            Découvrir
          </button>
        </div>
        <img
          src="/images/shop-desktop.png"
          alt=""
          className="xl:max-h-[45rem] max-h-[40rem] ml-auto mr-10"
        />
      </div>
      {/* shop mobile */}
      <div className="flex flex-col items-center lg:hidden mt-2 mb-14">
        <img src="/images/shop-mobile.png" alt="" className="max-w-sm" />
        <p className="text-2xl font-semibold bg-gray-800 text-white  px-3 pb-2  mt-10 mb-3 rounded-md">
          Ce que vous aimer porter
        </p>
        <p className=" max-w-xs text-lg text-center">
          Que vous soyez un designer professionelle, un débutant ou que vous
          voulez juste faire plaisir à un proche, nous vous proposons une large
          sélection de produits que vous pouvez modifier à vos goûts et vos
          envies
        </p>
      </div>
      {/* aventages */}
      <div className="flex items-center flex-wrap  justify-evenly relative bg-gray-800 md:px-3 overflow-hidden  mb-2 ">
        <div className="my-2 flex md:mx-1  flex-col items-center  px-2  rounded-lg  drop-shadow-lg">
          <img
            src="/icons/speed-command.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold text-amber-200">
            Gagner du temps
          </p>
          <p className=" xl:max-w-[220px] lg:max-w-[190px] md:max-w-[160px] max-w-[160px]   md:text-base text-sm text-white text-center ">
            Vous n'aurez plus a attendre des jours pour recevoir votre produit
          </p>
        </div>

        <div className="my-2 flex md:mx-1  flex-col items-center  px-2  rounded-lg  drop-shadow-lg">
          <img
            src="/icons/shirt-star.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold text-amber-200">
            ça a du style
          </p>
          <p className=" xl:max-w-[220px] lg:max-w-[190px] md:max-w-[160px] max-w-[160px]   md:text-base text-sm text-white text-center ">
            Une impression qui vous garantira la réussite de votre produit
          </p>
        </div>
        <div className="my-2 flex md:mx-1  flex-col items-center  px-2  rounded-lg  drop-shadow-lg">
          <img
            src="/icons/echange.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold text-amber-200">
            Aucun risque
          </p>
          <p className=" xl:max-w-[220px] lg:max-w-[190px] md:max-w-[160px] max-w-[160px]   md:text-base text-sm text-white text-center ">
            Payer une fois que votre commande vous sera livrer
          </p>
        </div>
        <div className="my-2 flex md:mx-1  flex-col items-center  px-2  rounded-lg  drop-shadow-lg  ">
          <img
            src="/icons/box-secured.png"
            alt=""
            className="md:max-h-20 max-h-20"
          />
          <p className="md:text-lg font-semibold text-amber-200">
            C'est costaud
          </p>
          <p className=" xl:max-w-[220px] lg:max-w-[190px] md:max-w-[160px] max-w-[160px]   md:text-base text-sm text-white text-center ">
            Livraison sûr, votre produit vous sera livrer intacte
          </p>
        </div>

        <div className="my-2 flex md:mx-1  flex-col items-center  px-2  rounded-lg  drop-shadow-lg">
          <img src="/icons/shop.png" alt="" className="md:max-h-20 max-h-20" />
          <p className="md:text-lg font-semibold text-amber-200">
            Vous avez le choix
          </p>
          <p className=" xl:max-w-[220px] lg:max-w-[190px] md:max-w-[160px] max-w-[160px]   md:text-base text-sm text-white text-center ">
            Large sélection de produits pour votre plus grand plaisir
          </p>
        </div>
      </div>

      {/* section produits à la une */}
      <div className="mx-auto w-full  flex flex-col items-center my-10 ">
        <p className="md:text-3xl  self-start md:ml-3  md:my-1 text-gray-800 font-semibold ">
          Produits à la une :
        </p>
        <HorizontalScroll />
      </div>

      {/* offres exclusives*/}
      <div className="flex flex-col  bg-neutral-600 lg:mb-10  lg:pb-10 pb-5 relative">
        <div className="absolute top-0 bg-gray-800 h-[2.4rem] w-full" />
        <h1 className="lg:text-5xl text-3xl font-bold  text-white bg-cyan-400/10 w-full text-center py-2 z-40 lg:mb-4">
          Remise Speciales{" "}
        </h1>
        <div className="flex md:flex-row flex-wrap flex-col items-center justify-evenly lg:mt-4">
          {/* etudiants */}
          <div className="flex  flex-col bg-white p-2 border shadow-md md:my-0 my-3 rounded-r-3xl">
            <img
              src="/images/etudiants.jpg"
              alt=""
              className="xl:max-w-sm  max-w-[20rem] brightness-70 rounded-tr-3xl"
            />
            <div className="flex flex-col items-center ">
              <h2 className="font-bold lg:text-3xl text-xl mb-3 bg-[#50d6d7] text-gray-800 w-full text-center">
                Etudiants
              </h2>
              <p className="max-w-xs text-center text-lg font-semibold">
                En tant qu'étudiant vous pouvez profiter d'une remise sur tous
                nos produits + livraison gratuite pour votre premiére commande
              </p>
            </div>
          </div>
          <div className="lg:flex items-center hidden relative animate-spinSlow ">
            <div className="w-1 h-48 bg-white absolute left-1/2 -translate-x-[50%] rounded-md " />
            <div className="w-48 h-1 bg-white absolute left-1/2 -translate-x-[50%] rounded-md " />
          </div>
          {/* commercants */}
          <div className="flex  flex-col bg-white p-2 border shadow-md md:my-0 my-3">
            <img
              src="/images/commercants.jpg"
              alt=""
              className="xl:max-w-sm  max-w-[20rem] brightness-70"
            />
            <div className="flex flex-col items-center ">
              <h2 className="font-bold lg:text-3xl text-xl mb-3 bg-[#f3cb65] text-gray-800 w-full text-center">
                Commerçants
              </h2>
              <p className="max-w-xs text-center text-lg font-semibold">
                Si vous gérer un commerce vous bénéficierez aussi d'une remise
                jusqu'a 25% + livraison gratuite pour toute commande qui dépasse
                10 piéces
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* aventages */}
      <p className=" text-gray-800 md:mt-10 mt-5 lg:mb-8 mb-1  ml-4 xl:text-5xl lg:text-4xl text-2xl font-semibold  ">
        Pourquoi choisir Shirty ?{" "}
      </p>
      {/* aventages */}
      <div className="flex md:flex-row flex-col items-center   justify-evenly flex-wrap relative  md:py-5    mb-20 ">
        <div className="md:absolute md:-bottom-20  md:w-full md:h-1/2 h-0 w-0  bg-gray-800"></div>
        <div className="flex flex-col items-center bg-white rounded-2xl md:ml-0  drop-shadow-lg md:mb-0 mb-4 cursor-default hover:scale-125 hover:z-50 hover:translate-x-20 transition-all duration-500 md:px-2 py-3 ">
          <img
            src="/images/boxy2.png"
            alt=""
            className="xl:max-w-sm lg:max-w-[19rem] md:max-w-[14rem] max-w-[16rem]  "
          />
          <p className="text-gray-800 font-bold text-center xl:max-w-sm  max-w-[15rem] xl:text-xl xl:my-3 my-2">
            L'originalité
          </p>
          <p className="xl:max-w-xs lg:max-w-[15rem] md:max-w-[13rem] max-w-[14rem] mx-auto text-center text-gray-500 font-semibold ">
            Quand vous aurez terminer la personalisation, vous aurez un model
            unique qui reflaitera votre personalité et votre style{" "}
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl md:ml-0  drop-shadow-lg  mb-4 cursor-default hover:scale-125 hover:z-50  transition-all duration-500 md:px-2 py-3 lg:mb-28 md:mb-20 ">
          <img
            src="/images/mockup1.png"
            alt=""
            className="xl:max-w-sm lg:max-w-[19rem] md:max-w-[14rem] max-w-[16rem]  "
          />
          <p className="text-gray-800 font-bold text-center xl:max-w-sm  max-w-[15rem] xl:text-xl xl:my-3 my-2">
            Pas de minimum de commande
          </p>
          <p className="xl:max-w-xs lg:max-w-[15rem] md:max-w-[13rem] max-w-[14rem] mx-auto text-center text-gray-500 font-semibold ">
            Acheter seulement la quantité requise pour votre buisness, sans
            augmentation des tarifs
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl md:ml-0  drop-shadow-lg md:mb-0 mb-4 cursor-default hover:scale-125 hover:z-50 hover:-translate-x-20 transition-all duration-500 md:px-2 py-3 ">
          <img
            src="/images/wallet.png"
            alt=""
            className="xl:max-w-sm lg:max-w-[19rem] md:max-w-[14rem] max-w-[16rem]  "
          />
          <p className="text-gray-800 font-bold text-center xl:max-w-sm  max-w-[15rem] xl:text-xl xl:my-3 my-2">
            Epargner votre porte monnaie
          </p>
          <p className="xl:max-w-xs lg:max-w-[15rem] md:max-w-[13rem] max-w-[14rem] mx-auto text-center text-gray-500 font-semibold ">
            Jusqu'a 4 fois moins cher que les magasins pour la meme qualité de
            tissu
          </p>
        </div>
        <p className="md:absolute md:mx-auto ml-auto mr-6 md:-bottom-5 md:text-3xl font-bold lg:text-white text-gray-800 ">
          Et bien plus encore ...
        </p>
      </div>
      {/* section designer en vedette */}
      {/* <p className="text-3xl text-gray-700 self-start md:ml-3 font-semibold md:mt-5">
        Désigners en vedette
      </p>
      <div className="w-full mx-auto  my-2 flex items-center">
        <ScrollDesigners />
      </div> */}
      {/* section de FAQ */}
      <Faq />
      {currUser.currUser && (
        <p className="text-gray-900 text-4xl"> {currUser.currUser.name} </p>
      )}
    </div>
  )
}

export default WelcomeScreen
