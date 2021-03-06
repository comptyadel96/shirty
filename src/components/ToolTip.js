import React from "react"

function ToolTip({ text, style }) {
  return (
    <div
      style={style}
      className="absolute  flex -top-7  z-50 right-0 bg-yellow-300 md:px-2 py-1 cursor-default"
    >
      <p className="text-xs font-semibold text-gray-600 whitespace-nowrap">
        {text}
      </p>
    </div>
  )
}

export default ToolTip
