import React, { useState } from "react"
import ReactSlider from "react-slider"
function MySlider({ step = 1, min, max, onChange, defaultValue = 1 }) {
  const [currentValue, setCurrentValue] = useState(0)
  return (
    <div className="w-full flex items-center">
      {" "}
      <ReactSlider
        className="w-3/4 mb-2"
        thumbClassName="w-3 h-3 rounded-full border border-black bg-red-400 cursor-pointer "
        trackClassName=" h-3 bg-white rounded-full border border-gray-400"
        marks={5}
        // markClassName="rounded-full w-2 h-2 bg-black"
        onChange={(e) => {
          onChange(e)
          setCurrentValue(e)
        }}
        defaultValue={defaultValue}
      />
      <p className="text-gray-500 font-semibold text-sm ml-3">{currentValue}% </p>
    </div>
  )
}

export default MySlider
