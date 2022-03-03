import React, { useRef, useContext } from "react"
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  // AiFillMail,
  AiFillCloseCircle,
  AiFillTwitterCircle,
} from "react-icons/ai"
import HorizontalScroll from "../components/HorizontalScroll"
import Navbar from "../components/Navbar"
import AuthContext from "../utils/AuthContext"

function WelcomeScreen() {
  const currUser = useContext(AuthContext)
  //   console.log(currUser.currUser)
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

  return (
    <div className="flex flex-col w-screen h-full bg-gray-50 overflow-hidden box-border">
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
          <p className="select-none self-start md:mb-4  font-title  text-pink-500  md:text-8xl">
            Personalisez votre style
          </p>
          <div className=" flex items-center   ">
            <p className="text-white select-none font-title  md:text-6xl md:max-w-2xl">
              Une solution simple pour créer et vendre des produits engageants
            </p>
          </div>
        </div>
        <button className="absolute md:bottom-36 right-20 md:px-5 md:py-2 md:text-3xl mt-4 rounded-lg bg-white hover:bg-pink-600 text-pink-600 hover:text-white transition-all duration-700 hover:rounded-full">
          Commancer le design
        </button>
      </div>

      <div className="w-full relative  lg:max-h-64">
        <p className="absolute left-1/2 font-body top-7 text-center md:text-5xl text-pink-500 -translate-x-1/2">
          Avec shirty créer , trouvez , vendez et acheter
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FCE7F3"
            fillOpacity="1"
            d="M0,32L60,64C120,96,240,160,360,170.7C480,181,600,139,720,122.7C840,107,960,117,1080,128C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* vidéo descriptive */}
      <div className="mx-auto bg-rose-100 shadow-lg flex items-center flex-col md:justify-evenly md:flex-row flex-wrap md:p-8 md:mb-10  w-screen relative ">
        <div className="absolute left-4 bottom-1 inline-flex items-center">
          <div className="h-5 w-5 lg:w-16 lg:h-16 opacity-60  bg-pink-400 mx-1"></div>
          <div className="h-5 w-5 lg:w-16 lg:h-16 opacity-60 rounded-full bg-purple-400 mx-1"></div>
          <div className="h-5 w-5 lg:w-16 lg:h-16 opacity-60 rounded-full bg-yellow-400 mx-1"></div>
        </div> 
        <div className="flex flex-col items-center">
          <p className="md:text-5xl font-body text-pink-700 md:mb-14">C'est ici que tous commance...</p>
          <p className="text-pink-400 bg-white rounded-full text-center md:p-2 font-semibold md:text-2xl select-none md:max-w-3xl ">
            Découvrez comment vous pouvez créer et vendre vos produits en
            quelque minutes avec une courte vidéo déscriptive .
          </p>
        </div>

        <div className="flex items-center flex-col  px-6 py-3">
          <video src="/video/Shivers.mp4" autoPlay controls muted />
        </div>
      </div>

      {/* section pour découvir  */}
      <div className="bg-white shadow-xl select-none  md:py-24 flex flex-col md:flex-row items-center justify-evenly   md:w-full my-8  h-fit relative">
        {/* svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 w-full "
        >
          <path
            fill="#9333EA"
            fillOpacity=".08"
            d="M0,256L6.7,240C13.3,224,27,192,40,186.7C53.3,181,67,203,80,208C93.3,213,107,203,120,197.3C133.3,192,147,192,160,165.3C173.3,139,187,85,200,69.3C213.3,53,227,75,240,96C253.3,117,267,139,280,154.7C293.3,171,307,181,320,181.3C333.3,181,347,171,360,181.3C373.3,192,387,224,400,240C413.3,256,427,256,440,250.7C453.3,245,467,235,480,197.3C493.3,160,507,96,520,106.7C533.3,117,547,203,560,218.7C573.3,235,587,181,600,154.7C613.3,128,627,128,640,138.7C653.3,149,667,171,680,165.3C693.3,160,707,128,720,96C733.3,64,747,32,760,48C773.3,64,787,128,800,133.3C813.3,139,827,85,840,64C853.3,43,867,53,880,90.7C893.3,128,907,192,920,218.7C933.3,245,947,235,960,218.7C973.3,203,987,181,1000,181.3C1013.3,181,1027,203,1040,202.7C1053.3,203,1067,181,1080,160C1093.3,139,1107,117,1120,117.3C1133.3,117,1147,139,1160,128C1173.3,117,1187,75,1200,96C1213.3,117,1227,203,1240,245.3C1253.3,288,1267,288,1280,256C1293.3,224,1307,160,1320,117.3C1333.3,75,1347,53,1360,53.3C1373.3,53,1387,75,1400,112C1413.3,149,1427,203,1433,229.3L1440,256L1440,0L1433.3,0C1426.7,0,1413,0,1400,0C1386.7,0,1373,0,1360,0C1346.7,0,1333,0,1320,0C1306.7,0,1293,0,1280,0C1266.7,0,1253,0,1240,0C1226.7,0,1213,0,1200,0C1186.7,0,1173,0,1160,0C1146.7,0,1133,0,1120,0C1106.7,0,1093,0,1080,0C1066.7,0,1053,0,1040,0C1026.7,0,1013,0,1000,0C986.7,0,973,0,960,0C946.7,0,933,0,920,0C906.7,0,893,0,880,0C866.7,0,853,0,840,0C826.7,0,813,0,800,0C786.7,0,773,0,760,0C746.7,0,733,0,720,0C706.7,0,693,0,680,0C666.7,0,653,0,640,0C626.7,0,613,0,600,0C586.7,0,573,0,560,0C546.7,0,533,0,520,0C506.7,0,493,0,480,0C466.7,0,453,0,440,0C426.7,0,413,0,400,0C386.7,0,373,0,360,0C346.7,0,333,0,320,0C306.7,0,293,0,280,0C266.7,0,253,0,240,0C226.7,0,213,0,200,0C186.7,0,173,0,160,0C146.7,0,133,0,120,0C106.7,0,93,0,80,0C66.7,0,53,0,40,0C26.7,0,13,0,7,0L0,0Z"
          ></path>
        </svg>

        <div className="flex flex-wrap items-center justify-evenly md:w-1/2 bg-white">
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

        <div className="flex flex-col items-center bg-purple-100 md:p-5 shadow-lg rounded-3xl border">
          <p className="md:text-5xl font-semibold text-purple-600 md:mb-4">
            Tous ce dont vous avez révez de porter
          </p>
          <p className="md:text-2xl bg-white rounded-lg py-2 px-2  text-purple-500 md:my-3 md:max-w-2xl md:text-center">
            Venez découvrir des produits exclusifs , pour tous les gouts et les
            couleurs ! découvrez aussi la nouvelle collection "mouha rass tota"
          </p>
          <button className="bg-purple-400 md:mb-3 z-40 text-white px-6 py-2 hover:bg-purple-600 rounded-full">
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
      {currUser.currUser && (
        <p className="text-white text-4xl"> {currUser.currUser.name} </p>
      )}
    </div>
  )
}

export default WelcomeScreen
