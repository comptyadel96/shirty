import React from "react"

function ProfilCard({ name, profilPic,coverPic, onClick }) {
  return (
    <div className="flex flex-col items-center md:my-5  border shadow-xl mx-1 border-gray-200 md:max-w-xs md:pb-2 relative">
      <div className="h-56">
         <img
        alt="couverture du designer"
        src="/images/cover-user.jpg"
        className="h-full object-cover"
      />
      </div>
     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 p-2 rounded-full bg-white">
        <img
          src="/images/girl.jpg"
          alt="user tof"
          className="md:h-20 md:w-20 rounded-full  "
        />
      </div>
      <div className="flex flex-col items-center md:mt-2">
        <p className="md:my-3 font-body font-semibold text-xl text-gray-700">Mart kouceila</p>
        <button className="rounded-full font-semibold bg-gray-200 md:px-3 md:py-1  hover:bg-gray-300 text-gray-700">
          Voir la boutique
        </button>
      </div>
    </div>
  )
}

export default ProfilCard
