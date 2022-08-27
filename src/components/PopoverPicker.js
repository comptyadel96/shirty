import React, { useCallback, useRef, useState } from "react"
import { HexColorPicker, HexColorInput } from "react-colorful"

import useClickOutside from "./useClickOutside"

export const PopoverPicker = ({
  onChange,
  currentColor,
  currentBorder,
  isBorder = false,
}) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)
  const [color, setColor] = useState("#000000")
  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="relative  shadow-xl ml-1">
      <div
        className="lg:w-7 lg:h-7 w-4 h-4 rounded-lg  border-[1px] border-[#50d6d7] cursor-pointer z-0"
        style={{
          background:
            !isBorder && currentColor
              ? currentColor
              : isBorder
              ? currentBorder
              : color,
        }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="absolute left-0 rounded-lg z-50" ref={popover}>
          <HexColorPicker
            color={color}
            onChange={(e) => {
              onChange(e)
              setColor(e)
            }}
            
          />
          <HexColorInput
            placeholder="#fffff"
            color={color}
            onChange={(e) => {
              setColor(e)
              onChange(e)
            }}
            className="uppercase px-3 py-1 w-[60%] font-semibold bg-white text-gray-700 mt-3 border placeholder:text-cyan-400 outline-none rounded-lg focus:border-red-500"
          />
        </div>
      )}
    </div>
  )
}
