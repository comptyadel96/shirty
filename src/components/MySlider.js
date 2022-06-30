import React from "react"
import ReactSlider from "react-slider"
function MySlider({ step = 1, min, max, onChange }) {
  return (
 
    <ReactSlider
      className="w-96 bg-black flex flex-col items-center max-w-sm"
      thumbClassName="w-6 h-6 rounded-md bg-red-400 self-center"
      trackClassName="bg-white h-full max-w-lg bg-blue-300"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      onChange={onChange}
      value={0}
    />
  )
}

export default MySlider
