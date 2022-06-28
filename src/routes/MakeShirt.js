import React, { useEffect, useRef, useState } from "react"
import { fabric } from "fabric"
import shirtsArray from "../components/Shirts"
import {
  BiText,
  BiPhotoAlbum,
  BiPaint,
  BiCool,
  BiXCircle,
} from "react-icons/bi"
import Picker from "emoji-picker-react"
// import axios from "axios"
import "../makeShirt.css"
var FontFaceObserver = require("fontfaceobserver")
function MakeShirt() {
  const canvasRef = useRef(null)
  const imageRef = useRef(null)
  const textAreaRef = useRef(null)
  const textAreaContainer = useRef(null)
  const emojiRef = useRef(null)
  const [canvas, setCanvas] = useState(null)
  const [image, setImage] = useState(null)
  const [hasUploadImage, setHasUploadImage] = useState(false)
  const [shirtId, setShirtId] = useState(shirtsArray[0])
  const [text, setText] = useState("")
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasRoundImage, setHasRoundImage] = useState(false)
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
  // custom delete icon on objects
  function deleteshape(eventData, transform) {
    var target = transform.target
    var canvas = target.canvas
    if (transform.target.type === "i-text") {
      setText(null)
    } else if (transform.target.type === "image") {
      setImage(null)
    }
    canvas.remove(target)
    canvas.requestRenderAll()
  }
  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var img = document.createElement("img")
    img.src = "https://www.freeiconspng.com/uploads/remove-icon-png-7.png"
    //   "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E"
    var size = this.cornerSize
    ctx.save()
    ctx.translate(left, top)
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
    ctx.drawImage(img, -size / 2, -size / 2, size, size)
    ctx.restore()
  }
  if (canvas) {
    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: 16,
      cursorStyle: "pointer",
      mouseUpHandler: deleteshape,
      render: renderIcon,
      cornerSize: 24,
    })
  }
  // custom emojis for the user
  const showEmoji = () => {
    const styleAdd = [
      "w-auto",
      "h-auto",
      "ml-20",
      "border",
      "border-gray-400",
      "transition-all",
      "duration-700",
    ]
    const styleRemove = ["h-0", "w-0"]
    styleRemove.map((style) => emojiRef.current.classList.remove(style))
    styleAdd.map((style) => emojiRef.current.classList.add(style))
  }
  const onEmojiClick = (event, emojiObject) => {
    let myEmoji = new fabric.Text(emojiObject.emoji, {
      scaleX: 4,
      scaleY: 4,
    })
    canvas.centerObject(myEmoji)
    canvas.add(myEmoji)
    canvas.renderAll()
  }
  // rename custom emoji in french
  let groupNames = {
    smileys_people: "Smileys",
    animals_nature: "Animeaux et nature",
    food_drink: "Nourriture et boissons",
    travel_places: "Voyage",
    activities: "Sport et Activités",
    objects: "Objets",
    symbols: "Symbols",
    flags: "Drapeaux",
    recently_used: "Récemment utilisé",
  }
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
    const classArray = [
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "md:ml-20",
      "md:w-auto",
      "md:h-auto",
      "bg-white",
      "md:px-4",
      "md:py-8",
      "shadow-md",
      "rounded-md",
      "border",
      "border-gray-400",
    ]
    const classArray2 = ["h-0", "w-0"]
    if (textAreaContainer.current) {
      classArray.map((clas) => {
        return textAreaContainer.current.classList.add(clas)
      })
      if (textAreaContainer.current) {
        classArray2.map((clas2) =>
          textAreaContainer.current.classList.remove(clas2)
        )
      }
    }
  }
  const removeTextContainer = () => {
    const classArray = [
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "md:ml-20",
      "md:w-auto",
      "md:h-auto",
      "bg-white",
      "md:px-4",
      "md:py-8",
      "shadow-md",
      "rounded-md",
      "border",
      "border-gray-400",
    ]
    const classArray2 = ["h-0", "w-0"]
    if (textAreaContainer.current) {
      classArray.map((clas) => {
        return textAreaContainer.current.classList.remove(clas)
      })
      if (textAreaContainer.current) {
        classArray2.map((clas2) =>
          textAreaContainer.current.classList.add(clas2)
        )
      }
    }
    setText(null)
  }
  const addText = () => {
    if (text !== "" && text != null) {
      let myText = new fabric.IText(text, {
        editable: true,
        statefullCache: true,
      })

      canvas.centerObject(myText)
      canvas.add(myText)
      canvas.renderAll()

      textAreaRef.current.value = ""
    }
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
  // const deleteObject = () => {
  //   if (canvas && canvas.getActiveObjects().length === 0) {
  //     alert("Vous n'avez pas sélectionné d'élement(s) à supprimer")
  //   }
  //   if (canvas && canvas.getActiveObject()) {
  //     if (canvas.getActiveObject().type === "image") {
  //       setImage(null)
  //       setHasUploadImage(false)
  //     }
  //     if (canvas.getActiveObject().type === "i-text") {
  //       setText(null)
  //       document.querySelector("#text-options").className += " hidden"
  //     }
  //     canvas.getActiveObjects().forEach((object) => {
  //       canvas.remove(object)
  //     })
  //     canvas.renderAll()
  //   }
  // }
  // delete objects on press delete key
  document.onkeydown = function (e) {
    let activeObj = canvas.getActiveObject()

    if (e.key === "Delete") {
      canvas.remove(activeObj)
      setText(null)
      document.querySelector("#text-options").className += " hidden"
      if (activeObj.type === "image") {
        setImage(null)
        setHasUploadImage(false)
      }
      canvas.getActiveObjects().forEach((object) => {
        canvas.remove(object)
        if (object.type === "image") {
          setImage(null)
          setHasUploadImage(false)
        }
      })
    }
  }
  // if the user click on the text input we show him the text options
  canvas &&
    canvas.on("mouse:down", function (e) {
      if (e.target && e.target.type === "i-text") {
        document.querySelector("#text-options").className =
          "my-6 flex bg-white  items-center flex-wrap border shadow-lg border-gray-400 rounded-lg md:mr-2 md:max-w-sm md:ml-auto md:mr-10 max-w-sm "
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
    const showArray = [
      "my-6",
      "flex",
      "flex-col",
      "items-center",
      "flex-wrap",
      "ml-20",
      "bg-white",
      "md:px-3",
      "md:py-2",
      "border",
      "max-w-sm",
    ]
    showArray.map((clas) => imageRef.current.classList.add(clas))
    imageRef.current.classList.remove("hidden")
  } else if (image === null && imageRef.current) {
    const showArray = [
      "my-6",
      "flex",
      "flex-col",
      "items-center",
      "flex-wrap",
      "ml-20",
      "bg-white",
      "md:px-3",
      "md:py-2",
      "border",
      "max-w-sm",
    ]
    imageRef.current.classList.add("hidden")
    showArray.map((clas) => imageRef.current.classList.remove(clas))
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
    setHasRoundImage(true)
  }
  const normalizImage = () => {
    const clipPath = new fabric.Rect({
      width: image.width,
      height: image.height,
      originX: "center",
      originY: "center",
      scaleX: 100,
    })
    image.set({ clipPath })
    canvas.renderAll()
    setHasRoundImage(false)
  }
  const filterArray = [
    {
      name: "Grisatre",
      effect: () => {
        filterGrayscaleHandler()
      },
    },
    {
      name: "Sepia",
      effect: () => {
        filterSepiaHandler()
      },
    },
    {
      name: "Inverser",
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
  const removeOutline = () => {
    textAreaRef.current.classList.add("outline-none")
  }

  return (
    <div className="flex flex-col md:pt-20  ">
      <div
        id="controller"
        className="flex items-center md:ml-14 md:mr-12 mt-5 p-2  border-t-2 border-b-2 md:mb-2 "
      >
        {/* add logo */}
        {!image && (
          <div className="flex flex-col items-center flex-wrap bg-white px-2 py-1 border border-gray-400 rounded-md mx-2">
            <div className="inline-flex items-center md:mb-1">
              <BiPhotoAlbum className="text-gray-600 text-3xl" />
              <p className="font-semibold text-gray-800">
                Ajouter votre Design
              </p>{" "}
            </div>

            <input
              type="file"
              onChange={handleImageChange}
              className=" text-sm text-gray-400 file:mr-4 file:py-1 file:px-1 file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 cursor-pointer"
            />
          </div>
        )}
        {/* controllers */}

        {/* add text */}
        {!text && (
          <button
            onClick={insertText}
            className="mr-5 my-2 bg-white hover:shadow-md text-gray-500 border border-gray-400 py-1 px-2 rounded-md"
          >
            <BiText className="mx-auto text-3xl" />
            <p className="font-semibold text-gray-800">Ajouter du texte </p>
          </button>
        )}

        <div className="flex items-center my-2 ">
          <button
            className="md:px-2 bg-white text-gray-700 border border-gray-400 py-1 px-2 rounded-md hover:shadow-md"
            onClick={() => {
              setIsDrawing(true)((canvas.isDrawingMode = true))
            }}
          >
            <BiPaint className="mx-auto text-3xl text-gray-500" />
            <p className="font-semibold text-gray-800">Dessiner </p>
          </button>
          {/* add Emoji */}
          <button
            onClick={showEmoji}
            className="md:px-2 bg-white text-gray-700 border border-gray-400 py-1 px-2 rounded-md hover:shadow-md md:ml-2"
          >
            <BiCool className="mx-auto text-3xl text-gray-500" />
            <p className="font-semibold text-gray-800">Ajouter des emoji </p>
          </button>
          {/* delete object */}
          {/* <button
            className="text-red-600 bg-white border rounded-full py-1 px-2 mt-2 md:ml-9 hover:text-white hover:bg-red-500"
            onClick={deleteObject}
          >
            Supprimer
          </button> */}
        </div>

        {isDrawing && (
          <div className="flex flex-col items-center bg-white border-2 border-gray-200 my-2 px-2 md:ml-4">
            {/* type de crayon */}
            <select
              onChange={brushesHandler}
              className="bg-white font-semibold text-gray-700"
            >
              <option value="PencilBrush">crayon</option>
              <option value="SprayBrush">spray</option>
              <option value="CircleBrush">circle</option>
            </select>
            {/* couleur */}
            <div className="inline-flex my-1">
              <p className="mr-1 font-semibold text-gray-700">
                couleur du dessin
              </p>{" "}
              <input type="color" onChange={drawingColorHandler} />
            </div>
            {/* taille */}
            <div className="inline-flex my-1">
              <p className="mr-1 font-semibold text-gray-700">
                taille du crayon
              </p>
              <input
                type="range"
                defaultValue={1}
                step={1}
                onChange={drawingWidthHandler}
                max={10}
              />
            </div>

            <button
              onClick={() => {
                setIsDrawing(false)((canvas.isDrawingMode = false))
              }}
              className="bg-gray-700 hover:bg-gray-900 text-white md:px-2 mb-1 rounded-md"
            >
              Terminer
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center flex-wrap bg-gray-50">
        <canvas
          ref={canvasRef}
          height="500px"
          width="500px"
          className="border-2 border-gray-400 border-dashed mx-2 md:ml-11 "
        />
        {/* add text */}
        <div
          ref={textAreaContainer}
          className="h-0 w-0 overflow-hidden transition-all duration-700 relative "
        >
          <BiXCircle
            onClick={removeTextContainer}
            className="absolute right-2 top-0 cursor-pointer z-20 text-2xl text-red-500"
          />
          <textarea
            ref={textAreaRef}
            onChange={(e) => setText(e.target.value)}
            className="bg-sky-50 border-2 border-sky-200 text-gray-700 md:py-3 md:px-3 placeholder:text-sky-400"
            placeholder="entrer votre texte ici"
            onFocus={removeOutline}
          />
          <button
            onClick={addText}
            className="bg-sky-50 md:px-2 font-semibold text-sky-400 border border-sky-400 mt-2 rounded-md hover:bg-sky-400 hover:text-white"
          >
            Ajouter le texte
          </button>
        </div>
        {/* image controller */}
        {hasUploadImage && (
          <div ref={imageRef} className="hidden">
            {/* filtre */}
            <div className="flex flex-col items-center my-2   md:px-2">
              <p className="font-semibold text-gray-700">
                Appliquer un filtre a votre image
              </p>
              <div className="flex items-center flex-wrap">
                {filterArray.map((filter) => (
                  <button
                    key={filter.name}
                    onClick={filter.effect}
                    className=" text-gray-800 bg-white my-1 px-2 py-1 rounded-lg mr-2 border hover:bg-red-600 hover:text-white"
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
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
                  min={1}
                  max={50}
                  defaultValue={0}
                />
              </div>
            </div>
            {/* couleur */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">couleur d'arriére plan</p>
              <input type="color" onChange={filterColorHandler} />
            </div>

            {!hasRoundImage ? (
              <button
                onClick={roundImage}
                className="md:px-2 md:py-1 rounded-lg bg-blue-400 text-white hover:bg-blue-500"
              >
                Arroundir l'image
              </button>
            ) : (
              <button
                onClick={normalizImage}
                className="md:px-2  rounded-xl bg-rose-500 text-white"
              >
                Annuler
              </button>
            )}
          </div>
        )}
        {/* custom emoji */}
        <div className="h-0 w-0 overflow-hidden" ref={emojiRef}>
          <Picker
            onEmojiClick={onEmojiClick}
            groupNames={groupNames}
            disableSearchBar
            disableAutoFocus
          />
        </div>
        {/* text options */}
        <div id="text-options" className="hidden">
          {/* color */}
          <div className="flex items-center my-2 mx-4">
            <p className="text-gray-800 mr-1 font-semibold ">Couleur du text</p>
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
            <p className="text-gray-800 mr-1 font-semibold ">Taille du text</p>
            <input
              type="number"
              onChange={textSizeHandler}
              min={30}
              max={100}
              defaultValue={30}
              className="text-md font-semibold text-gray-800 text-center border"
            />
          </div>
          {/* font style */}
          <div className="flex items-center my-2 mx-2">
            <p className="text-gray-800 mr-1 font-semibold ">Police</p>
            <select onChange={textFontHandler} className=" border bg-white ">
              <option value="Festive">Festive </option>
              <option value="Monoton">Monoton </option>
              <option value="ZCOOL KuaiLe">ZCOOL-KuaiLe </option>
              <option value="Fredericka the Great">Fredericka the Great</option>
              <option value="Blaka">blaka </option>
              <option value="Fascinate Inline">Fascinate </option>
              <option value="Orbitron">Orbitron </option>
              <option value="Press Start 2P">Press Start 2P </option>
              <option value="Blaka Hollow">Blaka Hollow </option>
              <option value="Monofett">Monofett </option>
              <option value="IM Fell English SC">IM Fell English SC </option>
              <option value="VT323">VT323 </option>
              <option value="Henny Penny">Henny Penny </option>
              <option value="Rubik Glitch">Rubik Glitch </option>
              <option value="Rubik Wet Paint">Rubik Wet Paint </option>
              <option value="Rubik Moonrocks">Rubik Moonrocks </option>
              <option value="Rubik Microbe">Rubik Microbe </option>
              <option value="Rubik Puddles">Rubik Puddles </option>
              <option value="Bungee Shade">Bungee Shade </option>
              <option value="Astloch">Astloch </option>
              <option value="Bungee Hairline">Bungee Hairline </option>
              <option value="Diplomata SC">Diplomata SC </option>
              <option value="Faster One">Faster One </option>
              <option value="Flavors">Flavors </option>
              <option value="Hanalei">Hanalei </option>
              <option value="Lacquer">Lacquer </option>
              <option value="Rock 3D">Rock 3D </option>
              <option value="Snowburst One">Snowburst One </option>
              <option value="Yuji Hentaigana Akebono">
                Yuji Hentaigana Akebono
              </option>
            </select>
          </div>
          {/* font weight */}
          <div className="flex items-center my-2 mx-4">
            <p className="text-gray-800 mr-1 font-semibold ">Poid du text</p>
            <select onChange={textWeightHandler} className="bg-white border ">
              <option value="normal">normal</option>
              <option value="bold">gras</option>
            </select>
          </div>
          {/* font style */}
          <div className="flex items-center my-2 mx-4">
            <p className="text-gray-800 mr-1 font-semibold ">Style du text</p>
            <select
              onChange={textStyleHandler}
              className="text-gray-700 bg-white border "
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
        </div>
        {/* instruction */}
        {/* <div className=" flex flex-col items-center border self-start md:mt-4 flex-wrap md:ml-auto md:mr-8 bg-blue-50 md:px-3 md:py-2">
          <div className="inline-flex items-center">
            <BiInfoCircle className="text-gray-500" size={40} />
            <p className="font-semibold md:text-lg text-gray-500">Infos</p>
          </div>
          <ul className="marker:text-red-400 marker:text-xl list-disc pl-5 space-y-3 text-slate-500 max-w-md">
            <li className="bg-white border-blue-200 border-2 border-dashed px-1 md:py-3">
              Ajouter votre design et texte personalisé 🎩
            </li>
            <li className="bg-white border-blue-200 border-2 border-dashed px-1 md:py-3">
              Double click sur le texte pour modifier le contenu ✏
            </li>
            <li className="bg-white border-blue-200 border-2 border-dashed px-1 md:py-3">
              Utiliser nos emojis pour donner plus de fun a votre design 😎
            </li>
            <li className="bg-white border-blue-200 border-2 border-dashed px-1 md:py-3">
              Ou bien dessiner directement sur le t-shirt 💎
            </li>
            <li className="bg-white border-blue-200 border-2 border-dashed px-1 md:py-3">
              <p className="">
                Vous pouvez supprimer n'importe quel element(s) en appuyant sur
                la touche "suppr" de votre clavier ou bien en appuyant sur
                l'icone qui apparait en haut adroite de chaque element{" "}
                <BiTrash />
              </p>
            </li>
          </ul>
        </div> */}
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
