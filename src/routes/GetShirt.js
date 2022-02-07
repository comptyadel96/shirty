import React, { useState, useEffect } from "react"
import { fabric } from "fabric"
function GetShirt() {
  const [canvas, setCanvas] = useState(null)
  const [shirt, setShirt] = useState(null)
  const [shirtLogo, setShirtLogo] = useState(null)
  const [shirtText, setShirtText] = useState(null)
  const [oneLink, setOneLink] = useState(false)
  
  const getShirt = async () => {
    await fetch(
      `${process.env.REACT_APP_URL}/shirts/61fd39b55772ee72c9b901c2`,
      {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    ) // get shirt
      .then((res) => res.json())
      .then((shirt) => setShirt(shirt))
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
      fabric.loadSVGFromString(shirt.canvas, function (objects) {
        if (objects.length < 2) {
          setOneLink(true)
        }
        fabric.util.groupSVGElements(objects[0])
        setShirtLogo(objects[0])
        setShirtText(objects[1])
        console.log(objects.length)
        objects.map((obj) => {
          obj.set({
            scaleX: 1,
            scaleY: 1,
          })
          canvas.centerObject(obj)
          canvas.add(obj)
        canvas.renderAll()
        })
      })
    }
  }, [canvas, shirt])

  const exportLogo = () => {
    // export logo
    const dataURL = shirtLogo.toDataURL({
      format: "png",
      quality: 1,
    })
    const link = document.createElement("a")
    link.download = `${new Date().toISOString()}-logo.png`
    link.href = dataURL
    link.click()
  }
  const exportText = () => {
    // export text
    const dataURL = shirtText.toDataURL({
      format: "png",
      quality: 1,
    })
    const link = document.createElement("a")
    link.download = `${new Date().toISOString()}-text.png`
    link.href = dataURL
    link.click()
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <canvas
        id="shirt-canvas"
        height="800px"
        width="1000px"
        className="border-2 border-red-400 border-double "
      />
      {!oneLink ? (
        <>
          <button
            className="rounded-full px-4 py-1 bg-purple-500 text-white"
            onClick={exportLogo}
          >
            télécharger le premier élément
          </button>
          <button onClick={exportText}>télécharger le deuxiéme élément</button>
        </>
      ) : (
        <button>télécharger l'élément</button>
      )}
    </div>
  )
}

export default GetShirt
