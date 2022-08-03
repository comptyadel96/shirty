import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa"
function Footer() {
  return (
    <div className="flex flex-col select-none   items-center flex-wrap bg-gray-900 max-w-full mt-auto md:p-4">
      <div className="flex flex-row w-full flex-wrap justify-evenly">
        <div className="flex flex-col mx-3 ">
          <p className="text-[#50d6d7] md:text-xl">Shirty</p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            à propos
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Résponsabilité sociale
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Vendez vos oeuvres
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            emplois
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Remise étudiants
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Connectez-vous
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Inscrivez-vous
          </p>
        </div>
        {/* 2 */}
        <div className="flex flex-col mx-3 ">
          <p className="text-[#50d6d7] md:text-xl">Aide</p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Livraison
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Retours
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Service d'aide
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Ligne de conduite
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Droits d'auteurs
          </p>
          <p className="text-white cursor-pointer hover:text-yellow-500 my-1">
            Contact
          </p>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center">
          <p className="text-[#50d6d7] md:text-xl">Réseaux sociaux</p>
          <div className="flex items-start mt-2 flex-col">
            <p className="text-white flex my-1 cursor-pointer hover:text-blue-400">
              <FaFacebook className=" mx-1  text-2xl " /> facebook
            </p>
            <p className="text-white flex my-1 cursor-pointer hover:text-pink-400">
              <FaInstagram className=" mx-1  text-2xl " />
              instagram
            </p>
            <p className="text-white flex my-1 cursor-pointer hover:text-blue-700">
              <FaLinkedin className="mx-1  text-2xl " /> linkedIn
            </p>
            <p className="text-white flex my-1 cursor-pointer hover:text-red-400">
              <FaPinterest className=" mx-1  text-2xl  " /> pinterest
            </p>
            <p className="text-white flex my-1 cursor-pointer hover:text-red-700">
              <FaYoutube className=" mx-1  text-2xl " /> youtube
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full border-t-2 border-b-2 border-t-gray-700 border-b-gray-700 py-2">
        <p className="text-white text-2xl">shirty</p>
        <div className="flex items-center">
          <p className="text-gray-400 mx-2 cursor-pointer hover:text-white">Conditions d'utilisation</p>
          <p className="text-gray-400 mx-2 cursor-pointer hover:text-white"> Politique de confidentialité</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
