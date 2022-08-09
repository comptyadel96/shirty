import React, { useRef, useState } from "react"
import { ImFont } from "react-icons/im"
import { RiArrowDownSFill } from "react-icons/ri"
var FontFaceObserver = require("fontfaceobserver")

function MyPicker({ onItemClick }) {
  const fontsArray = [
    "Festive",
    "Monoton",
    "Fredericka the Great",
    "blaka",
    "Orbitron",
    "Press Start 2P",
    "Blaka Hollow",
    "Monofett",
    "IM Fell English SC",
    "VT323",
    "Henny Penny",
    "Rubik Glitch",
    "Rubik Wet Paint",
    "Rubik Moonrocks",
    "Rubik Microbe",
    "Rubik Puddles",
    "Bungee Shade",
    "Astloch",
    "Bungee Hairline",
    "Diplomata SC",
    "Faster One",
    "Flavors",
    "Hanalei",
    "Lacquer",
    "Rock 3D",
    "Snowburst One",
    "Yuji Hentaigana Akebono",
  ].sort()

  let [currentVal, setCurrVal] = useState(null)
  const fontsRef = useRef(null)

  const toggleFonts = () => {
    const showArr = [
      "flex",
      "flex-col",
      "items-center",
      "bg-white",
      "md:p-2",
      "absolute",
      "md:right-36",
      "md:-top-24",
      "overflow-auto",
      "h-96",
      "w-56",
      "shadow-lg",
      "border-2",
      "border-gray-200",
      "z-50",
    ]
    fontsArray.map(async (font) => {
      var fonts = new FontFaceObserver(font)
      await fonts.load()
    })

    if (fontsRef.current.classList.contains("hidden")) {
      showArr.map((clas) => fontsRef.current.classList.add(clas))
      fontsRef.current.classList.remove("hidden")
    } else {
      showArr.map((clas) => fontsRef.current.classList.remove(clas))
      fontsRef.current.classList.add("hidden")
    }
  }

  return (
    <div
      className="bg-white z-40 md:px-2 md:py-1 relative md:w-28 cursor-pointer border shadow-lg rounded-md "
      onClick={toggleFonts}
    >
      {currentVal ? (
        <p className="text-sm text-gray-600 font-semibold text-center truncate max-h-8 flex items-center">
          {currentVal} <RiArrowDownSFill className="ml-auto mr-2 text-lg" />
        </p>
      ) : (
        <p className="text-sm text-gray-600 text-center flex items-center">
          <ImFont className="ml-2" />{" "}
          <RiArrowDownSFill className="ml-auto mr-2 text-lg" />
        </p>
      )}
      <div className="hidden" ref={fontsRef}>
        {fontsArray.map((font) => (
          <p
            style={{
              fontFamily: font,
              backgroundColor: font === currentVal && "black",
              color: font === currentVal && "white",
            }}
            className={`text-gray-600 rounded-lg  cursor-pointer  md:my-2 bg-gray-50 hover:bg-gray-200 px-1 py-1`}
            key={font}
            onClick={() => {
              onItemClick(font)
              setCurrVal(font)
            }}
          >
            {font}
          </p>
        ))}
      </div>
    </div>
  )
}

export default MyPicker
