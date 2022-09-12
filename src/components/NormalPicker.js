import React, { useRef, useState } from "react"
import { FiChevronRight, FiX } from "react-icons/fi"

function NormalPicker({ values = [], onItemClick, style, text }) {
  const [defaultValue, setDefaultValue] = useState(null)
  const valuesRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const showValues = () => {
    const showArr = ["max-w-[10rem]", "max-h-96", "md:py-1"]
    const hideArr = ["max-h-0", "max-w-0"]
    if (valuesRef.current.classList.contains("max-h-0")) {
      showArr.map((clas) => valuesRef.current.classList.add(clas))
      hideArr.map((clas) => valuesRef.current.classList.remove(clas))
      setIsOpen(true)
    } else {
      showArr.map((clas) => valuesRef.current.classList.remove(clas))
      hideArr.map((clas) => valuesRef.current.classList.add(clas))
      setIsOpen(false)
    }
  }

  return (
    <div
      onClick={showValues}
      className="relative  md:px-2 flex items-center w-[12rem] rounded-md"
    >
      {defaultValue ? (
        <p className="font-semibold cursor-pointer md:px-2 ">{defaultValue}</p>
      ) : (
        <p className="font-semibold cursor-pointer md:px-2 ">{text}</p>
      )}

      <div
        ref={valuesRef}
        style={style}
        className="absolute overflow-hidden shadow-md border bg-white md:-left-20 z-40 top-0 flex flex-col items-center  max-h-0 max-w-0 transition-all duration-500  "
      >
        {values.map((item) => (
          <p
            key={item.name}
            className="font-semibold  text-center w-[20rem] cursor-pointer md:px-2 hover:bg-yellow-300 md:my-1 "
            onClick={() => {
              onItemClick(item.value)
              setDefaultValue(item.name)
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
      {!isOpen ? (
        <FiChevronRight className="ml-auto" />
      ) : (
        <FiX className="ml-auto" />
      )}
    </div>
  )
}

export default NormalPicker
