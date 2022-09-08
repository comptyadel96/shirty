import React from "react"
import { AiFillApple, AiOutlineMail, AiOutlineLock } from "react-icons/ai"
function Login() {
  const socialAuth = async (url) => {
    window.open(url, "_self")
  }
  return (
    <div className="flex mx-auto md:mt-20 mb-[10%] md:py-3  ">
      <div className="flex flex-col items-center px-5 py-2 w-full  justify-evenly self-start">
        <p className="font-semibold  md:mb-2 md:text-xl text-center">
          Connectez-vous à votre compte Shirty :
        </p>
        {/* facebook */}
        <button
          onClick={() =>
            socialAuth("http://localhost:5000/api/shirty/auth/facebook")
          }
          className="inline-flex lg:w-72 my-1 border hover:bg-gray-100 shadow-md items-center rounded-sm text-gray-800 font-semibold cursor-pointer  md:px-6 md:py-2"
        >
          <svg
            role={"image"}
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="#358cde"
            focusable={false}
          >
            <path d="m23 12.0672c0-6.11224-4.9249-11.0672-11-11.0672-6.07514 0-11 4.95496-11 11.0672 0 5.524 4.02254 10.1025 9.2813 10.9328v-7.7337h-2.79301v-3.1991h2.79301v-2.43822c0-2.77373 1.6422-4.30584 4.1548-4.30584 1.2035 0 2.4623.21615 2.4623.21615v2.72358h-1.387c-1.3665 0-1.7926.85311-1.7926 1.72833v2.076h3.0507l-.4877 3.1991h-2.5631v7.7337c5.2588-.8303 9.2813-5.4088 9.2813-10.9328"></path>
          </svg>
          <p className="ml-2">Continuer avec Facebook</p>
        </button>
        {/* google */}
        <button
          onClick={() =>
            socialAuth("http://localhost:5000/api/shirty/auth/google")
          }
          className="inline-flex lg:w-72 my-1 items-center rounded-sm border hover:bg-gray-100 shadow-md text-gray-800 font-semibold cursor-pointer md:px-6 md:py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-6 w-6"
          >
            <defs>
              <path
                id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
              />
            </defs>
            <clipPath id="b">
              <use href="#a" overflow="visible" />
            </clipPath>
            <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
            <path
              clipPath="url(#b)"
              fill="#EA4335"
              d="M0 11l17 13 7-6.1L48 14V0H0z"
            />
            <path
              clipPath="url(#b)"
              fill="#34A853"
              d="M0 37l30-23 7.9 1L48 0v48H0z"
            />
            <path
              clipPath="url(#b)"
              fill="#4285F4"
              d="M48 48L17 24l-4-3 35-10z"
            />
          </svg>
          <p className="ml-2">Continuer avec Google</p>
        </button>
        <button className="inline-flex lg:w-72 my-1 items-center rounded-sm border hover:bg-gray-100 shadow-md text-gray-800 font-semibold cursor-pointer md:px-6 md:py-2">
          <AiFillApple size={26} />
          <p className="ml-2">Continuer avec Apple </p>
        </button>
        <div className="text-xs max-w-xs text-center mt-3 mb-4 font-semibold border-b-2 pb-8 relative">
          En vous inscrivant, vous acceptez nos Conditions d'utilisation et
          notre Politique de confidentialité.
          <p className="absolute left-1/2 translate-x-[-50%] -bottom-[12px] text-lg font-semibold bg-white px-2 ">ou</p>
        </div>
        {/* email - password */}
        <form className="mt-3">
          <div className="flex items-center px-3 py-2 border border-gray-800">
            <AiOutlineMail size={28} className="text-gray-500" />
            <input
              type="email"
              className="ml-1 placeholder:text-gray-800 placeholder:font-semibold outline-none"
              placeholder="Ex: personne@mail.com"
              required
            />
          </div>
          <div className="flex items-center px-3 py-2 border border-gray-800 mt-2">
            <AiOutlineLock size={28} className="text-gray-500" />
            <input
              type="password"
              className="ml-1 placeholder:text-gray-800 placeholder:font-semibold outline-none"
              placeholder="Mot de passe"
              required
            />
          </div>
          <button
            type="submit"
            className="lg:w-72 mt-3  rounded-sm  bg-cyan-500 hover:bg-cyan-600 font-semibold  md:px-6 md:py-2"
          >
            <p className="text-white text-center"> Se connecter </p>
          </button>
        </form>
        <p className="font-semibold mr-1 mt-3">
          Vous n'avez pas de compte ?{" "}
          <a
            href="#er"
            className="text-cyan-600 text-center border-b border-b-cyan-600"
          >
            inscriver vous
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
