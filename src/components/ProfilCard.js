import React from "react"

function ProfilCard({ name, profilPic,coverPic, onClick }) {
  return (
    <div className="flex flex-col items-center md:my-5 bg-gray-100 border shadow-xl ml-2 border-gray-200 md:max-w-sm md:pb-2 relative">
      <img
        alt="couverture du designer"
        src="/images/cover-user.jpg"
        className="h-1/5"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10 p-2 rounded-full bg-white">
        <img
          src="/images/girl.jpg"
          alt="user tof"
          className="md:h-20 md:w-20 rounded-full  "
        />
      </div>
      <div className="flex flex-col items-center md:mt-10">
        <p className="md:mb-2 font-body font-semibold text-xl text-red-700">Mart kouceila</p>
        <button className="rounded-full bg-orange-500 md:px-3 md:py-1  hover:bg-orange-700 text-white">
          Visiter la boutique
        </button>
      </div>
    </div>
  )
}

export default ProfilCard
