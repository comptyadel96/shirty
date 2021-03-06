import React, { useState, useEffect } from "react"
import { fabric } from "fabric"
function GetShirt() {
  const [canvas, setCanvas] = useState(null)
  const [shirt, setShirt] = useState(null)
  // const [shirtLogo, setShirtLogo] = useState(null)
  // const [shirtText, setShirtText] = useState(null)
  // const [oneLink, setOneLink] = useState(false)

  const getShirt = async () => {
    await fetch(
      `${process.env.REACT_APP_URL}/shirts/6283ad3d9b21c24cea9e0dc3`,
      {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    ) // get shirt
      .then((res) => res.json())
      .then((shirt) => {
        setShirt(shirt)
        console.log(shirt)
      })
  }
  useEffect(() => {
    getShirt()
    const canvas = new fabric.Canvas("shirt-canvas", {
      selectionColor: "rgba(0,0,0,.5)",
      selectionLineWidth: 3,
    })
    setCanvas(canvas)
    canvas.renderAll()
  }, [])
  useEffect(() => {
    if (canvas && shirt) {
      fabric.loadSVGFromString(shirt.canvas, function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options)
        canvas.add(obj).renderAll()
        console.log(obj)
      })
    }
  }, [canvas, shirt])

  // const exportLogo = () => {
  //   // export logo
  //   const dataURL = shirtLogo.toDataURL({
  //     format: "png",
  //     quality: 1,
  //   })
  //   const link = document.createElement("a")
  //   link.download = `${new Date().toISOString()}-logo.png`
  //   link.href = dataURL
  //   link.click()
  // }
  // const exportText = () => {
  //   // export text
  //   const dataURL = shirtText.toDataURL({
  //     format: "png",
  //     quality: 1,
  //   })
  //   const link = document.createElement("a")
  //   link.download = `${new Date().toISOString()}-text.png`
  //   link.href = dataURL
  //   link.click()
  // }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <canvas
        id="shirt-canvas"
        height="800px"
        width="1000px"
        className="border-2 border-red-400 border-double "
      />
      {/* {!oneLink ? (
        <>
          <button
            className="rounded-full px-4 py-1 bg-purple-500 text-white"
            onClick={exportLogo}
          >
            t??l??charger le premier ??l??ment
          </button>
          <button onClick={exportText}>t??l??charger le deuxi??me ??l??ment</button>
        </>
      ) : (
        <button>t??l??charger l'??l??ment</button>
      )} */}
    </div>
  )
}

export default GetShirt
