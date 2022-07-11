import React, { useRef, useState } from "react"

function NormalPicker({ values = [], onItemClick }) {
  const [defaultValue, setDefaultValue] = useState(null)
  const valuesRef = useRef(null)
  const showValues = () => {
    const showArr = ["max-w-96", "max-h-96", "md:px-2", "md:py-1"]
    const hideArr = ["max-h-0", "max-w-0"]
    if (valuesRef.current.classList.contains("max-h-0")) {
      showArr.map((clas) => valuesRef.current.classList.add(clas))
      hideArr.map((clas) => valuesRef.current.classList.remove(clas))
    } else {
      showArr.map((clas) => valuesRef.current.classList.remove(clas))
      hideArr.map((clas) => valuesRef.current.classList.add(clas))
    }
  }
  return (
    <div
      onClick={showValues}
      className="relative bg-white md:px-2  rounded-md shadow-lg italic"
    >
      {defaultValue ? (
        <p className="text-sm font-semibold text-gray-700 cursor-pointer md:px-2 ">
          {defaultValue}
        </p>
      ) : (
        <p className="text-sm font-semibold text-gray-700 cursor-pointer md:px-2 ">
          Choisir...
        </p>
      )}

      <div
        ref={valuesRef}
        className="absolute overflow-hidden shadow-lg  md:-left-20 top-0 flex flex-col items-center bg-white  max-h-0 max-w-0 transition-all duration-300  "
      >
        {values.map((item) => (
          <p
            key={item.name}
            className="text-sm font-semibold text-gray-700 cursor-pointer md:px-2 hover:bg-yellow-100 md:my-1 "
            onClick={() => {
              onItemClick(item.value)
              setDefaultValue(item.name)
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default NormalPicker
