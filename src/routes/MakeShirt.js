import React, { useEffect, useRef, useState } from "react"
import { fabric } from "fabric"
import shirtsArray from "../components/Shirts"
// import axios from "axios"
var FontFaceObserver = require("fontfaceobserver")
function MakeShirt() {
  const canvasRef = useRef(null)
  const imageRef = useRef(null)
  const [canvas, setCanvas] = useState(null)
  const [image, setImage] = useState(null)
  const [hasUploadImage, setHasUploadImage] = useState(false)
  const [shirtId, setShirtId] = useState(shirtsArray[0])
  const [text, setText] = useState(null)
  const [isDrawing, setIsDrawing] = useState(false)
  // initialize canvas and image objects on mount
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      selectionColor: "rgba(0,0,0,.5)",
      selectionLineWidth: 3,
    })
    canvas.freeDrawingBrush.color = "black"
    canvas.freeDrawingBrush.strokeLineCap = "round"
    canvas.freeDrawingBrush.width = 2

    setCanvas(canvas)
    canvas.renderAll()
  }, [])

  // load image on mount and set image object on state change (for re-render)

  useEffect(() => {
    canvas && canvas.clear()
    if (canvas && shirtId) {
      let tshirt = new fabric.Image(shirtId, {
        selectable: false,
        hasControls: false,
        excludeFromExport: true,
        hoverCursor: "default",
        absolutePositioned: true,
      })
      tshirt.scaleToWidth(canvas.width)
      tshirt.scaleToHeight(canvas.height)
      canvas.centerObject(tshirt)
      // setShirt(tshirt)
      canvas.add(tshirt)
      canvas.renderAll()
    }
  }, [canvas, shirtId])

  // let user upload his image (logo) on the shirt
  const handleImageChange = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      setHasUploadImage(true)
      const imgObj = new Image()
      imgObj.src = e.target.result
      imgObj.onload = () => {
        const image = new fabric.Image(imgObj)
        image.scaleToWidth(100)
        image.set({
          top: 100,
          left: canvas.width / 3,
        })
        // canvas.centerObject(image)
        canvas.add(image)
        setImage(image)

        canvas.renderAll()
      }
    }
    canvas.renderAll()
  }

  // function to add text
  function insertText() {
    var text = new fabric.IText("Text", {
      fontSize: 30,
      editable: true,
      statefullCache: true,
    })
    canvas.centerObject(text)

    setText(text)
    canvas.add(text)
    canvas.renderAll()
  }
  // change text  font
  const textFontHandler = (e) => {
    var font = new FontFaceObserver(e.target.value)
    font.load().then(() => {
      if (canvas && canvas.getActiveObject()) {
        canvas.getActiveObject().set("fontFamily", e.target.value)
      }
      canvas.renderAll()
    })
  }
  // export  canvas to png
  const exportCanvas = () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    })
    const link = document.createElement("a")
    link.download = `canvas${Math.floor(Math.random() * 10000)}.png`
    link.href = dataURL
    link.click()
  }

  // const sendCanvas = async () => {
  //   const dataURL = canvas.toDataURL({
  //     format: "png",
  //     quality: 1,
  //   })
  //   var byMakeShirtring = atob(dataURL.split(",")[1])

  //   // separate out the mime component
  //   var mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0]

  //   // write the bytes of the string to an ArrayBuffer
  //   var ab = new ArrayBuffer(byMakeShirtring.length)

  //   // create a view into the buffer
  //   var ia = new Uint8Array(ab)

  //   // set the bytes of the buffer to the correct values
  //   for (var i = 0; i < byMakeShirtring.length; i++) {
  //     ia[i] = byMakeShirtring.charCodeAt(i)
  //   }

  //   // write the ArrayBuffer to a blob
  //   var blob = new Blob([ab], { type: mimeString })
  //   blob.name = "canvas.png"
  //   console.log(blob)

  //   const formData = new FormData()
  //   formData.append("shirtTof", blob, "canvas.png")
  //   await axios.post("http://localhost:5000/api/admin/shirtPhoto", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  // }

  //  serialize canvas to svg  and send it to the server to save it in the database (for the admin)
  const serializeCanvas = async () => {
    let myCanvas = canvas.toSVG()
    let myData = {
      canvas: myCanvas,
      title: "title22",
    }
    await fetch(`${process.env.REACT_APP_URL}/shirts`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  // group svg elements
  // const groupCanvasElements = () => {
  //   let group = new fabric.Group([text, image])
  //   canvas.remove(image)
  //   canvas.remove(text)
  //   canvas.add(group)
  //   canvas.renderAll()

  // }
  // change text style color
  const textColorHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("fill", e.target.value)
    }
    canvas.renderAll()
  }
  // change font size
  const textSizeHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("fontSize", e.target.value)
    }
    canvas.renderAll()
  }

  // change text weight
  const textWeightHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("fontWeight", e.target.value)
    }
    canvas.renderAll()
  }
  // change text style
  const textStyleHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("fontStyle", e.target.value)
    }
    canvas.renderAll()
  }
  // change text underline
  const textUnderlineHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("underline", e.target.checked)
    }
    canvas.renderAll()
  }
  // change text strike
  const textStrikeHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("linethrough", e.target.checked)
    }
    canvas.renderAll()
  }
  // make text overline
  const textOverlineHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("overline", e.target.checked)
    }
    canvas.renderAll()
  }

  // change text stroke color
  const textStrokeColorHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("stroke", e.target.value)
    }
    canvas.renderAll()
  }

  // delete object from canvas
  const deleteObject = () => {
    if (canvas && canvas.getActiveObjects().length === 0) {
      alert("Vous n'avez pas sélectionné d'objet(s) à supprimer")
    }
    if (canvas && canvas.getActiveObject()) {
      if (canvas.getActiveObject().type === "image") {
        setImage(null)
        setHasUploadImage(false)
      }
      if (canvas.getActiveObject().type === "i-text") {
        setText(null)
        document.querySelector("#text-options").className += " hidden"
      }
      canvas.getActiveObjects().forEach((object) => {
        canvas.remove(object)
      })
      canvas.renderAll()
    }
  }
  // if the user click on the text input we show him the text options
  canvas &&
    canvas.on("mouse:down", function (e) {
      if (e.target && e.target.type === "i-text") {
        document.querySelector("#text-options").className =
          "my-6 flex flex-col items-center flex-wrap "
      }
    })
  // if the user click on the shirt we hide the text options
  canvas &&
    canvas.on("mouse:up", function (e) {
      if (e.target.type !== "i-text") {
        document.querySelector("#text-options").className += " hidden"
      }
    })

  if (image !== null && imageRef.current) {
    imageRef.current.classList = "my-6 flex flex-col items-center flex-wrap"
    imageRef.current.classList -= " hidden"
  } else if (image === null && imageRef.current) {
    imageRef.current.classList += " hidden"
    imageRef.current.classList -= " my-6 flex flex-col items-center flex-wrap"
  }

  // filter images

  const filterColorHandler = (e) => {
    image.filters = []
    image.filters.push(
      new fabric.Image.filters.BlendColor({
        color: e.target.value,
        mode: "multiply",
      })
    )
    image.applyFilters()
    canvas.renderAll()
  }
  // const filterBrightnessHandler = (e) => {
  //   image.filters = []
  //   image.filters.push(
  //     new fabric.Image.filters.Brightness({
  //       brightness: e.target.value,
  //     })
  //   )
  //   image.applyFilters()
  //   canvas.renderAll()
  // }

  const filterSepiaHandler = () => {
    image.filters = []
    image.filters.push(new fabric.Image.filters.Sepia())
    image.applyFilters()
    canvas.renderAll()
  }
  const filterGrayscaleHandler = () => {
    image.filters = []
    image.filters.push(new fabric.Image.filters.Grayscale())
    image.applyFilters()
    canvas.renderAll()
  }
  const filterInvertHandler = () => {
    image.filters = []
    image.filters.push(new fabric.Image.filters.Invert())
    image.applyFilters()
    canvas.renderAll()
  }
  const filterPixelateHandler = (e) => {
    image.filters = []
    image.filters.push(
      new fabric.Image.filters.Pixelate({ blocksize: e.target.value })
    )
    image.applyFilters()
    canvas.renderAll()
  }
  const filterNoiseHandler = (e) => {
    image.filters = []
    image.filters.push(
      new fabric.Image.filters.Noise({ noise: e.target.value })
    )
    image.applyFilters()
    canvas.renderAll()
  }
  const filterBlackAndWhiteHandler = () => {
    image.filters = []
    image.filters.push(new fabric.Image.filters.BlackWhite())
    image.applyFilters()
    canvas.renderAll()
  }
  const roundImage = () => {
    const clipPath = new fabric.Circle({
      radius: image.width / 2,
      originX: "center",
      originY: "center",
    })
    image.set({ clipPath })
    canvas.renderAll()
  }
  const filterArray = [
    {
      name: "grisatre",
      effect: () => {
        filterGrayscaleHandler()
      },
    },
    {
      name: "sepia",
      effect: () => {
        filterSepiaHandler()
      },
    },
    {
      name: "inverser",
      effect: () => {
        filterInvertHandler()
      },
    },

    {
      name: "Noir et blanc",
      effect: () => {
        filterBlackAndWhiteHandler()
      },
    },
  ]

  const drawingColorHandler = (e) => {
    if (canvas) {
      canvas.freeDrawingBrush.color = e.target.value
    }
  }
  const drawingWidthHandler = (e) => {
    if (canvas) {
      canvas.freeDrawingBrush.width = e.target.value
    }
  }
  function brushesHandler(e) {
    canvas.freeDrawingBrush = new fabric[e.target.value](canvas)
  }

  function loadPattern(url) {
    if (canvas && canvas.getActiveObject()) {
      fabric.util.loadImage(url, function (img) {
        canvas.getActiveObject().set(
          "fill",
          new fabric.Pattern({
            source: img,
            repeat: "repeat",
          })
        )
        shape.set(
          "fill",
          new fabric.Pattern({
            source: img,
            repeat: "repeat",
          })
        )
        canvas.renderAll()
      })
    }
  }
  const handleImageText = (e) => {
    loadPattern("../images/" + e.target.value)
    canvas.renderAll()
  }
  var shape = new fabric.Rect({
    width: 200,
    height: 100,
    left: 10,
    top: 300,
  })
  const handleShape = (e) => {
    if (canvas) {
      canvas.add(shape)
    }
    canvas.renderAll()
  }
  return (
    <div className="flex flex-col md:pt-20 ">
      <div className="flex items-center flex-wrap">
        <canvas
          ref={canvasRef}
          height="500px"
          width="500px"
          className="border-2 border-gray-400 border-dashed mx-2 md:ml-11 "
        />
        {/* controllers */}
        <div
          id="controller"
          className="flex divide-y-2 divide-gray-300 flex-col items-center md:ml-14 md:mr-12 mt-5 p-2 bg-gray-100 rounded-2xl transition-all duration-1000 border "
        >
          {/* add logo */}
          {!image && (
            <div className="flex flex-col items-center flex-wrap">
              <p className="font-bold text-gray-800 mb-2">Ajouter votre logo</p>
              <input
                type="file"
                onChange={handleImageChange}
                className=" text-sm font-semibold text-rose-600 file:mr-4 file:py-2 file:px-1 file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-violet-100 file:text-violet-700 hover:file:bg-violet-200 cursor-pointer"
              />
            </div>
          )}
          <button onClick={handleShape}>ajouter rectangle</button>
          {/* text options */}
          <div
            id="text-options"
            className="hidden transition-all duration-1000"
          >
            {/* color */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">
                Couleur du text
              </p>
              <input type="color" onChange={textColorHandler} />
            </div>
            {/* text stroke color */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">
                Couleur du contour
              </p>
              <input type="color" onChange={textStrokeColorHandler} />
            </div>

            {/* font size */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">
                Taille du text
              </p>
              <input
                type="number"
                onChange={textSizeHandler}
                min={30}
                max={100}
                defaultValue={30}
                className="text-md font-semibold text-gray-800 text-center bg-amber-200"
              />
            </div>
            {/* font style */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">
                Police du text
              </p>
              <select
                onChange={textFontHandler}
                className="bg-violet-300 text-white"
              >
                <option value="Festive">Festive</option>
                <option value="Monoton">Monoton</option>
                <option value="ZCOOL KuaiLe">ZCOOL-KuaiLe</option>
                <option value="Fredericka the Great">
                  Fredericka the Great
                </option>
                <option value="Blaka">blaka</option>
                <option value="Fascinate Inline">Fascinate</option>
                <option value="Orbitron">Orbitron</option>
                <option value="Press Start 2P">Press Start 2P</option>
                <option value="Blaka Hollow">Blaka Hollow</option>
                <option value="Monofett">Monofett</option>
                <option value="IM Fell English SC">IM Fell English SC</option>
                <option value="VT323">VT323</option>
                <option value="Henny Penny">Henny Penny</option>
                <option value="Rubik Glitch">Rubik Glitch</option>
                <option value="Rubik Wet Paint">Rubik Wet Paint</option>
                <option value="Rubik Moonrocks">Rubik Moonrocks</option>
                <option value="Rubik Microbe">Rubik Microbe</option>
                <option value="Rubik Puddles">Rubik Puddles</option>
                <option value="Bungee Shade">Bungee Shade</option>
              </select>
            </div>
            {/* font weight */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">Poid du text</p>
              <select
                onChange={textWeightHandler}
                className="bg-red-300 text-white"
              >
                <option value="normal">normal</option>
                <option value="bold">gras</option>
              </select>
            </div>
            {/* font style */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">Style du text</p>
              <select
                onChange={textStyleHandler}
                className="text-white bg-green-400"
              >
                <option value="normal">normal</option>
                <option value="italic">italique</option>
              </select>
            </div>
            {/* font underline */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">
                souligner le text
              </p>
              <input type="checkbox" onChange={textUnderlineHandler} />
            </div>
            {/* font overline */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">
                surligner le text
              </p>
              <input type="checkbox" onChange={textOverlineHandler} />
            </div>
            {/* font strike */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-800 mr-1 font-semibold ">barré le text</p>
              <input type="checkbox" onChange={textStrikeHandler} />
            </div>
            {/* background image */}
            <select onChange={handleImageText}>
              <option value="girl.jpg">alger</option>
              <option value="shirt-pink.png">france</option>
            </select>
          </div>
          {/* image controller */}
          {hasUploadImage && (
            <div ref={imageRef} className="hidden">
              {/* filtre */}
              <div className="flex flex-col items-center my-2 mx-4  md:px-2">
                <p className="font-semibold">
                  Appliquer un filtre a votre image
                </p>
                <div className="flex items-center flex-wrap">
                  {filterArray.map((filter) => (
                    <button
                      key={filter.name}
                      onClick={filter.effect}
                      className=" text-gray-800 bg-white my-1 px-2 py-1 rounded-lg mr-2 border"
                    >
                      {filter.name}
                    </button>
                  ))}
                  <div className="inline-flex">
                    <p className="text-gray-800 font-semibold mr-1">noise</p>{" "}
                    <input
                      onChange={filterNoiseHandler}
                      type="range"
                      step={5}
                      min={0}
                      max={250}
                      defaultValue={0}
                    />
                  </div>
                  <div className="inline-flex">
                    <p className="text-gray-800 font-semibold mr-1 ml-1">
                      Pixeliser
                    </p>
                    <input
                      type="range"
                      onChange={filterPixelateHandler}
                      min={0}
                      max={50}
                      defaultValue={0}
                    />
                  </div>
                </div>
              </div>
              {/* couleur */}
              <div className="flex items-center my-2 mx-4">
                <p>couleur d'arriére plan</p>
                <input type="color" onChange={filterColorHandler} />
              </div>

              <button
                onClick={roundImage}
                className="md:px-2 md:py-1 rounded-xl bg-rose-600 text-white"
              >
                Arroundir l'image
              </button>
            </div>
          )}

          {/* add text */}
          {!text && (
            <button
              onClick={insertText}
              className="mr-5 my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
            >
              Ajouter du text
            </button>
          )}
          {/* delete object */}
          <div className="flex items-center my-2 mx-4">
            <button
              className="text-red-600 bg-white border rounded-full py-1 px-2 mt-2 hover:text-white hover:bg-red-500"
              onClick={deleteObject}
            >
              Supprimer
            </button>
          </div>
          <button
            className="md:px-2 bg-amber-400  hover:bg-amber-500 rounded-md text-white"
            onClick={() => {
              setIsDrawing(true)((canvas.isDrawingMode = true))
            }}
          >
            Dessiner
          </button>

          {isDrawing && (
            <div className="flex flex-col items-center bg-gray-200 my-2 px-2">
              {/* type de crayon */}
              <select onChange={brushesHandler} className="bg-white">
                <option value="PencilBrush">crayon</option>
                <option value="SprayBrush">spray</option>
                <option value="CircleBrush">circle</option>
              </select>
              {/* couleur */}
              <div className="inline-flex my-1">
                <p className="mr-1">couleur du dessin</p>{" "}
                <input type="color" onChange={drawingColorHandler} />
              </div>
              {/* taille */}
              <div className="inline-flex my-1">
                <p className="mr-1">taille du crayon</p>
                <input
                  type="range"
                  defaultValue={1}
                  step={1}
                  onChange={drawingWidthHandler}
                />
              </div>

              <button
                onClick={() => {
                  setIsDrawing(false)((canvas.isDrawingMode = false))
                }}
              >
                Terminer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* let user select the shirt */}
      <div className="flex justify-evenly flex-wrap">
        {shirtsArray.map((shirt) => (
          <img
            src={shirt}
            alt="shirt"
            style={{
              height: "200px",
              width: "200px",
              cursor: "pointer",
              margin: "10px 20px",
            }}
            onClick={() => {
              setShirtId(shirt)
              setImage(null)
              setText(null)
            }}
            id={shirt}
            key={shirt}
          />
        ))}
      </div>
      {/* download the canvas */}
      <button
        className="bg-red-500 md:px-2 md:py-1 w-auto mx-auto text-white my-5"
        onClick={exportCanvas}
      >
        importer le canvas en png
      </button>
      {/* groupe canvas elements */}
      {/* <button className="bg-green-400 text-white" onClick={groupCanvasElements}>
        grouper les elements
      </button> */}
      {/* <button className="bg-red-500 w-1/4 mx-auto text-white" onClick={sendCanvas}>envoyer l'image du canvas au serveur</button> */}

      <button
        className="bg-green-400 rounded-full py-1 px-3 mx-auto my-5 text-white max-w-md"
        onClick={serializeCanvas}
      >
        envoyer le canvas au serveur
      </button>
    </div>
  )
}

export default MakeShirt
