import React, { useState } from "react"
import ReactSlider from "react-slider"
function MySlider({ step = 1, min, max, onChange, defaultValue = 1 }) {
  const [currentValue, setCurrentValue] = useState()
  return (
    <>
      {" "}
      <ReactSlider
        className="w-3/4 self-start mb-2"
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
      <p>{currentValue} </p>
    </>
  )
}

export default MySlider
