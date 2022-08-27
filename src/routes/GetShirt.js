import React, { useState, useEffect } from "react"
import { fabric } from "fabric"
function GetShirt() {
  const [canvas, setCanvas] = useState(null)
  const [shirt, setShirt] = useState(null)

  const getShirt = async () => {
    await fetch(
      `${process.env.REACT_APP_URL}/shirts/63047dbfee82c9debed2d3e9`,
      {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    ) // get shirt
      .then((res) => res.json())
      .then((shirt) => {
        setShirt(shirt)
        // console.log(shirt)
      })
  }
  useEffect(() => {
    getShirt()
    const canvas = new fabric.StaticCanvas("shirt-canvas", {
      selectionColor: "rgba(0,0,0,.5)",
      selectionLineWidth: 3,
    })
    setCanvas(canvas)
    canvas.renderAll()
  }, [])
  useEffect(() => {
    if (canvas && shirt) {
      fabric.loadSVGFromString(shirt.canvas, function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects)

        canvas.centerObject(obj)
        canvas.add(obj).renderAll()
       
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
        height="300px"
        width="210px"
        className="border-2 border-red-400 border-double "
      />
    </div>
  )
}

export default GetShirt
