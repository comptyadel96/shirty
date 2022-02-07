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
    <div className="flex flex-col md:flex-row justify-evenly items-center flex-wrap bg-gray-800 w-full mt-auto md:p-5">
      {/* 1 */}
      <div className="flex flex-col ">
        <p className="text-pink-800 md:text-4xl">Shirty</p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          à propos
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Résponsabilité sociale
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Vendez vos oeuvres
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          emplois
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Remise étudiants
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Connectez-vous
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Inscrivez-vous
        </p>
      </div>
      {/* 2 */}
      <div className="flex flex-col ">
        <p className="text-pink-800 md:text-4xl">Aide</p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Livraison
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Retours
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Service d'aide
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Ligne de conduite
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Droits d'auteurs
        </p>
        <p className="text-white cursor-pointer hover:text-yellow-500">
          Contact
        </p>
      </div>
      {/* 3 */}
      <div className="flex flex-col items-center">
        <p className="text-pink-700 md:text-4xl">Réseaux sociaux</p>
        <div className="flex items-center mt-2">
          <FaFacebook className="text-white mx-1 text-2xl cursor-pointer hover:text-blue-400" />
          <FaInstagram className="text-white mx-1 text-2xl cursor-pointer hover:text-pink-400" />
          <FaLinkedin className="text-white mx-1 text-2xl cursor-pointer hover:text-blue-700" />
          <FaPinterest className="text-white mx-1 text-2xl cursor-pointer hover:text-red-400" />
          <FaYoutube className="text-white mx-1 text-2xl cursor-pointer hover:text-red-700" />
        </div>
      </div>
    </div>
  )
}

export default Footer