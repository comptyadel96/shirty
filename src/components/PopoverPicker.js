import React, { useCallback, useRef, useState } from "react"
import { HexColorPicker, HexColorInput } from "react-colorful"

import useClickOutside from "./useClickOutside"

export const PopoverPicker = ({ onChange }) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)
  const [color, setColor] = useState("#000000")
  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="relative z-50 shadow-xl">
      <div
        className="w-7 h-7 rounded-md  border-[3px] border-white cursor-pointer z-50"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div
          className="absolute top-[calc(100% + 20px)] left-0 rounded-lg"
          ref={popover}
        >
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
            onChange={(e) => setColor(e)}
            className="uppercase px-3 py-1 w-[60%] font-semibold bg-white text-gray-700 mt-3 border placeholder:text-cyan-400 outline-none rounded-lg focus:border-red-500"
          />
        </div>
      )}
    </div>
  )
}
