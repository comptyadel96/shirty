import React, { useEffect, useRef, useState, Suspense } from "react"
import { fabric } from "fabric"
import shirtsArray from "../components/Shirts"
import ClipArt from "./ClipArt"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {
  BiText,
  BiPhotoAlbum,
  BiPaint,
  BiCool,
  BiTrim,
  BiShapeTriangle,
} from "react-icons/bi"
import {
  MdTextFields,
  MdFormatStrikethrough,
  MdFormatColorText,
  MdTexture,
  MdLightMode,
  MdFilterDrama,
  MdPhotoFilter,
  MdRemoveCircle,
} from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import {
  BsTextCenter,
  BsTextIndentLeft,
  BsTextIndentRight,
} from "react-icons/bs"
import { ImBold, ImItalic, ImTextWidth, ImTextHeight } from "react-icons/im"
import { GoTextSize } from "react-icons/go"
import Picker from "emoji-picker-react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Svgs from "../components/Svgs"
import MySlider from "../components/MySlider"
import MyPicker from "../components/MyPicker"
import ToolTip from "../components/ToolTip"
import NormalPicker from "../components/NormalPicker"
import ModelDraco from "../components/ModelDraco"

// import axios from "axios"

var FontFaceObserver = require("fontfaceobserver")
function MakeShirt() {
  const canvasRef = useRef(null)
  const imageRef = useRef(null)
  const textAreaRef = useRef(null)
  const textAreaContainer = useRef(null)
  const textOptionsRef = useRef(null)
  const clipartRef = useRef(null)
  const emojiRef = useRef(null)
  const shapesRef = useRef(null)
  const shapeControllerRef = useRef(null)
  const drawingRef = useRef(null)
  const optionsContainerRef = useRef(null)
  const [canvas, setCanvas] = useState(null)
  const [image, setImage] = useState(null)
  const [hasUploadImage, setHasUploadImage] = useState(false)
  const [shirtId, setShirtId] = useState(shirtsArray[0])
  const [text, setText] = useState("")
  const [hasRoundImage, setHasRoundImage] = useState(false)
  const [strokeVal, setStrokeVal] = useState(0)
  const [isDrawing, setIsDrawing] = useState(false)

  // initialize canvas and image objects on mount
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      selectionColor: "rgba(0,0,0,.5)",
      selectionLineWidth: 3,
      preserveObjectStacking: true,
    })
    // canvas.freeDrawingBrush.color = "black"
    // canvas.freeDrawingBrush.strokeLineCap = "round"
    // canvas.freeDrawingBrush.width = 2

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
    const styleAdd = ["w-full", "h-full", "relative"]
    const styleRemove = ["hidden"]
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
  // remove emoji picker
  const removeEmoji = () => {
    const styleRemove = ["hidden"]
    const styleAdd = ["w-full", "h-full", "relative"]
    styleRemove.map((style) => emojiRef.current.classList.add(style))
    styleAdd.map((style) => emojiRef.current.classList.remove(style))
  }
  // let user upload his image (logo) on the shirt
  const handleImageChange = (e) => {
    // console.log(e)
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
      "bg-white",
      "md:px-4",
      "md:pt-7",
      "md:pb-4",
      "shadow-lg",
      "mx-auto",
      "relative",
      "rounded-md",
    ]
    const classArray2 = ["hidden"]
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
      "md:w-auto",
      "md:h-auto",
      "bg-white",
      "md:px-4",
      "md:py-8",
      "rounded-md",
    ]
    const classArray2 = ["hidden"]
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
    // new fabric.Path.fromObject()

    if (text !== "" && text != null) {
      let myText = new fabric.IText(text, {
        editable: true,
        pathStartOffset: 1,
        textAlign: "center",
        stroke: 0,
      })
      canvas.centerObject(myText)
      canvas.add(myText)
      canvas.renderAll()
      textAreaRef.current.value = ""
    }
  }
  
  // make active object in front of other objects (text above images etc ...)
  canvas &&
    canvas.on("object:moving", function (event) {
      event.target.bringToFront()
      canvas.renderAll()
    })

  // text character spacing
  const textChar = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("charSpacing", e.target.value * 3)
    }

    canvas.renderAll()
  }
  // text line height
  const textHeight = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("lineHeight", e.target.value / 10)
    }
    canvas.renderAll()
  }
  // text transform to wave
  const textwave = () => {
    if (canvas && canvas.getActiveObject()) {
      const wavePath =
        "M0.14,12.29c35.93-10.77,89.31-20.23,143,0.5c35.88,13.85,46.39,31.34,75,42c34.67,12.92,91.63,14.2,186-48"

      var path = new fabric.Path(wavePath, {
        strokeWidth: 1,
        stroke: "yellow",
        fill: "transparent",
        scaleX: 1,
        excludeFromExport: true,
      })

      canvas.getActiveObject().set("path", path)
      canvas.getActiveObject().set("textAlign", "start")
      canvas.renderAll()
    }
  }
  const textcircle = () => {
    if (canvas && canvas.getActiveObject()) {
      var circlePath = "M 75 0 A 10 10 0 0 1 75 -150 A 1 1 0 0 1 75 0 Z"
      var path = new fabric.Path(circlePath, {
        strokeWidth: 1,
        stroke: "yellow",
        fill: "transparent",
        scaleX: 1,
        excludeFromExport: true,
      })
      canvas.getActiveObject().set("textAlign", "center")
      canvas.getActiveObject().set("path", path)
      canvas.renderAll()
    }
  }
  const textAscend = () => {
    if (canvas && canvas.getActiveObject()) {
      var upPath = "M0.3,38.7c0,0,103-62,130-28"
      // "M0.25,58.49c19.95-11.37,43.65-23.23,71-34c28.09-11.07,54.18-18.68,77-24"
      var path = new fabric.Path(upPath, {
        strokeWidth: 1,
        stroke: "yellow",
        fill: "transparent",
        scaleX: 1,
        excludeFromExport: true,
      })
      canvas.getActiveObject().set("path", path)
      canvas.renderAll()
    }
  }
  // text arc
  const textArc = () => {
    "M0.3,18.7L24.2,0.9C30.9,38.7,57.9,66,88.9,66.3c31.4,0.3,59.1-27.1,65.8-65.4c6.9,3,13.7,5.9,20.6,8.9"

    if (canvas && canvas.getActiveObject()) {
      var upPath =
        "M0.3,18.7L24.2,0.9C30.9,38.7,57.9,66,88.9,66.3c31.4,0.3,59.1-27.1,65.8-65.4c6.9,3,13.7,5.9,20.6,8.9"
      // "M0.3,10.84l13.35-9.95c3.72,21.1,18.77,36.31,36.05,36.5c17.52,0.19,32.95-15.1,36.72-36.5c3.83,1.66,7.66,3.32,11.49,4.98"

      var path = new fabric.Path(upPath, {
        strokeWidth: 1,
        stroke: "yellow",
        fill: "transparent",
        width: 700,
        excludeFromExport: true,
      })
      canvas.getActiveObject().set("textAlign", "center")
      canvas.getActiveObject().set("path", path)
      canvas.getActiveObject().set("charSpacing", 73 * 3)
      canvas.renderAll()
    }
  }
  //  remove text path
  const removePathStroke = () => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("path", null)
    }
    canvas.renderAll()
  }
  // remove text path from canvas
  const removePath = () => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().path.strokeWidth = 0
    }
    canvas.renderAll()
  }
  // text align
  const textAlign = (value) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("textAlign", value)
    }
    canvas.renderAll()
  }
  // change text  font
  const textFontHandler = (val) => {
    var font = new FontFaceObserver(val)
    font.load().then(() => {
      if (canvas && canvas.getActiveObject()) {
        canvas.getActiveObject().set("fontFamily", val)
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
  //  send canvas to backend
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
  const textWeightHandler = () => {
    if (canvas && canvas.getActiveObject()) {
      const btn = document.getElementById("text-weight")
      if (btn.classList.contains("bg-white")) {
        canvas.getActiveObject().set("fontWeight", "bold")
        btn.classList.remove("bg-white")
        btn.classList.add("bg-blue-400")
      } else {
        btn.classList.remove("bg-blue-400")
        btn.classList.add("bg-white")
        canvas.getActiveObject().set("fontWeight", "normal")
      }
    }
    canvas.renderAll()
  }
  // change text style
  const textStyleHandler = () => {
    if (canvas && canvas.getActiveObject()) {
      const btn = document.getElementById("text-style")
      if (btn.classList.contains("bg-white")) {
        canvas.getActiveObject().set("fontStyle", "italic")
        btn.classList.remove("bg-white")
        btn.classList.add("bg-rose-400")
      } else {
        btn.classList.remove("bg-rose-400")

        btn.classList.add("bg-white")
        canvas.getActiveObject().set("fontStyle", "normal")
      }
    }
    canvas.renderAll()
  }
  // change text underline
  const textUnderlineHandler = () => {
    if (canvas && canvas.getActiveObject()) {
      const btn = document.getElementById("text-underline")
      if (btn.classList.contains("bg-white")) {
        canvas.getActiveObject().set("underline", true)
        btn.classList.remove("bg-white")
        btn.classList.add("bg-rose-400")
      } else {
        btn.classList.remove("bg-rose-400")

        btn.classList.add("bg-white")
        canvas.getActiveObject().set("underline", false)
      }
    }
    canvas.renderAll()
  }
  // change text strike
  const textStrikeHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("linethrough", e.target.checked)
      const btn = document.getElementById("text-strike")
      if (btn.classList.contains("bg-white")) {
        canvas.getActiveObject().set("linethrough", true)
        btn.classList.remove("bg-white")
        btn.classList.add("bg-rose-400")
      } else {
        btn.classList.remove("bg-rose-400")

        btn.classList.add("bg-white")
        canvas.getActiveObject().set("linethrough", false)
      }
    }
    canvas.renderAll()
  }
  // make text overline
  const textOverlineHandler = () => {
    if (canvas && canvas.getActiveObject()) {
      const btn = document.getElementById("text-overline")
      if (btn.classList.contains("bg-white")) {
        canvas.getActiveObject().set("overline", true)
        btn.classList.remove("bg-white")
        btn.classList.add("bg-rose-400")
      } else {
        btn.classList.remove("bg-rose-400")

        btn.classList.add("bg-white")
        canvas.getActiveObject().set("overline", false)
      }
    }
    canvas.renderAll()
  }

  // change text stroke color
  const textStrokeColorHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("stroke", e.target.value)
      //
    }
    canvas.renderAll()
  }
  //  text stroke width
  const textStrokeWidth = (val) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("strokeWidth", val / 40)
      setStrokeVal(val)
    }
    canvas.renderAll()
  }
  // text opacity
  const textOpacity = (e) => {
    // console.log(e.target.type)
    if (canvas && canvas.getActiveObject()) {
      e.target.type === "number" &&
        canvas.getActiveObject().set("opacity", e.target.value / 100)
    }
    canvas.renderAll()
  }
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
          " relative  flex flex-col   items-center flex-wrap  rounded-lg w-full  "
        toggleMenu(textOptionsRef)
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
      "bg-white",

      "md:py-2",
      "max-w-rightBar",
      "relative",
      "shadow-lg",
      "md:ml-2",
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
      "bg-white",

      "md:py-2",
      "max-w-rightBar",
      "relative",
      "shadow-lg",
      "md:ml-2",
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
  const filterBrightnessHandler = (value) => {
    const prevFilter = [...image.filters]
    prevFilter
      .map((filter) => (filter.brightness = 0))
      .filter((obj) => obj.brightness !== 0)
    image.filters.push(
      new fabric.Image.filters.Brightness({
        brightness: value / 200,
      })
    )
    image.applyFilters()
    canvas.renderAll()
  }

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

  const filterNoiseHandler = (value) => {
    const prevFilter = [...image.filters]
    prevFilter
      .map((filter) => (filter.noise = 0))
      .filter((obj) => obj.noise !== 0)

    image.filters.push(new fabric.Image.filters.Noise({ noise: value * 2 }))

    image.applyFilters()
    canvas.renderAll()
  }
  const filterBlackAndWhiteHandler = () => {
    image.filters = []
    image.filters.push(new fabric.Image.filters.BlackWhite())
    image.applyFilters()
    canvas.renderAll()
  }

  const filterSaturation = (value) => {
    const prevFilter = [...image.filters]
    prevFilter
      .map((filter) => (filter.saturation = 0))
      .filter((obj) => obj.saturation !== 0)
    image.filters.push(
      new fabric.Image.filters.Saturation({ saturation: value / 25 })
    )
    image.applyFilters()
    canvas.renderAll()
  }
  //  remove all filters
  const removeFilters = () => {
    image.filters = []
    image.applyFilters()
    canvas.renderAll()
  }
  const roundImage = () => {
    const clipPath = new fabric.Circle({
      radius: image.width < image.height ? image.width / 2 : image.height / 2,
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
      img: "/images/grisatre.png",
    },
    {
      name: "Sepia",
      effect: () => {
        filterSepiaHandler()
      },
      img: "/images/sepia.png",
    },
    {
      name: "Inverser",
      effect: () => {
        filterInvertHandler()
      },
      img: "/images/inverser.png",
    },

    {
      name: "Noir et blanc",
      effect: () => {
        filterBlackAndWhiteHandler()
      },
      img: "/images/blackWhite.png",
    },
  ]

  const drawingColorHandler = (e) => {
    if (canvas) {
      canvas.freeDrawingBrush.color = e.target.value
    }
  }
  const drawingWidthHandler = (value) => {
    if (canvas) {
      canvas.freeDrawingBrush.width = value / 4
    }
  }
  function brushesHandler(value) {
    canvas.freeDrawingBrush = new fabric[value](canvas)
  }
  const removeOutline = () => {
    textAreaRef.current.classList.add("outline-none")
  }
  // show clip art container
  const addClipart = () => {
    const styleArray = [
      "overflow-auto",
      "max-h-full",
      "relative",
      "w-full",
      "bg-[#eee]",
    ]
    clipartRef.current.classList.remove("hidden")
    styleArray.map((clas) => clipartRef.current.classList.add(clas))
  }
  // add the clip art image to the canvas
  const addClipImg = (url) => {
    new fabric.Image.fromURL(url, (img) => {
      img.scaleToWidth(100)
      canvas.centerObject(img)
      canvas.add(img)
    })

    canvas.renderAll()
  }

  // add gradient to objects
  const addGradient = () => {
    var gradient = new fabric.Gradient({
      type: "linear",
      gradientUnits: "percentage",
      coords: { x1: 0, y1: 0, x2: 1, y2: 0 },
      colorStops: [
        { offset: 0, color: "red" },
        { offset: 1, color: "blue" },
      ],
    })
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("fill", gradient)
    }
    canvas.renderAll()
  }
  //   show shapes container
  const showShapes = () => {
    const removeStyle = ["hidden"]
    const addStyle = ["flex", "flex-col", "items-center", "relative"]
    removeStyle.map((clas) => shapesRef.current.classList.remove(clas))
    addStyle.map((clas) => shapesRef.current.classList.add(clas))
  }

  // shapes options :
  const shapesColor = (e) => {
    canvas.getActiveObject().set("fill", e.target.value)
    canvas.renderAll()
  }
  const shapesCornerColor = (e) => {
    canvas.getActiveObject().set("stroke", e.target.value)
    canvas.renderAll()
  }
  const shapesCornerWidth = (value) => {
    canvas.getActiveObject().set("strokeWidth", Math.floor(value) / 20)
    canvas.renderAll()
  }
  const shapesOpacity = (value) => {
    canvas.getActiveObject().set("opacity", value / 10)
    canvas.renderAll()
  }

  // toggle shapes controller
  canvas &&
    canvas.on("mouse:down", function (e) {
      const showArray = [
        "flex",
        "flex-col",
        "items-center",
        "bg-white",
        "shadow-lg",
        "border",
        "md:p-2",
        "md:mb-4",
        "absolute",
        "top-8",
        "-left-80",
        "max-w-rightBar",
      ]

      const target = e.target.type

      if (e.target && (target === "path" || target === "polygon")) {
        showArray.map((clas) => shapeControllerRef.current.classList.add(clas))
        shapeControllerRef.current.classList.remove("hidden")
      } else {
        showArray.map((clas) =>
          shapeControllerRef.current.classList.remove(clas)
        )

        shapeControllerRef.current.classList.add("hidden")
      }
    })
  //  add svg shape
  const addSvg = (url) => {
    fabric.loadSVGFromURL(url, (result) => {
      let shape = result[0]
      canvas.add(shape)
      shape.scaleToWidth(100)
      canvas.centerObject(shape)
      canvas.renderAll()
    })
  }

  // display options according to the user click options
  const toggleMenu = (currentRef) => {
    let menuRefs = [
      textAreaContainer,
      clipartRef,
      emojiRef,
      shapesRef,
      shapeControllerRef,
      textOptionsRef,
      drawingRef,
    ]
    let otherRef = menuRefs.filter((ref) => ref !== currentRef)
    currentRef === drawingRef
      ? (canvas.isDrawingMode = true)
      : (canvas.isDrawingMode = false)
    otherRef.map((ref) => ref.current.classList.add("hidden"))
    currentRef.current.classList.remove("hidden")

    const showArr = [
      "md:h-128",
      "select-none",
      "max-w-rightBar",
      "flex",
      "flex-col",
      "items-center",
      "bg-white",
      "z-50",
      "overflow-visible",
      "border-2",
      "ml-auto",
      "mr-2",
      "md:px-2",
      "md:pt-2",
      "shadow-xl",
      "transition-all",
      "duration-700",
    ]
    const hideArr = ["max-w-0", "max-h-0", "border-2", "overflow-hidden"]

    showArr.map((clas) => optionsContainerRef.current.classList.add(clas))
    hideArr.map((clas) => optionsContainerRef.current.classList.remove(clas))
  }

  // show free drawing options
  const showDrawingOptions = () => {
    const showArray = [
      "flex",
      "flex-col",
      "items-center",
      "w-full",
      "min-w-full",
      "md:mx-2",
    ]
    showArray.map((clas) => drawingRef.current.classList.add(clas))
    drawingRef.current.classList.remove("hidden")
  }
  return (
    <div className="flex flex-col md:pt-20 bg-[#fffaf1] ">
      <div
        id="controller"
        className="flex items-center md:ml-14 md:mr-12 mt-5 p-2   md:mb-2 "
      >
        {/* add design */}
        {!image && (
          <div className="flex flex-col  items-center flex-wrap bg-white px-2 py-1 border border-gray-400 rounded-md mx-2">
            <div className="inline-flex items-center md:mb-1">
              <BiPhotoAlbum className="text-gray-600 text-3xl" />
              <p className="font-semibold text-gray-800">
                Ajouter votre Design
              </p>{" "}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className=" text-sm text-gray-400 file:mr-4 file:py-1 file:px-1 file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 cursor-pointer"
            />
          </div>
        )}

        {/* add text */}
        {!text && (
          <button
            onClick={() => {
              insertText()
            }}
            className="mr-2 my-2 bg-white hover:shadow-md text-gray-500 border border-gray-400 py-1 px-2 rounded-md"
          >
            <BiText className="mx-auto text-3xl" />
            <p className="font-semibold text-gray-800">Ajouter du texte </p>
          </button>
        )}

        <div className="flex items-center my-2 ">
          <button
            className="md:px-2 bg-white text-gray-700 border border-gray-400 py-1 px-2 rounded-md hover:shadow-md"
            onClick={() => {
              canvas.isDrawingMode = true
              setIsDrawing(true)
              showDrawingOptions()
              toggleMenu(drawingRef)
            }}
          >
            <BiPaint className="mx-auto text-3xl text-gray-500" />
            <p className="font-semibold text-gray-800">Dessiner </p>
          </button>

          {/* add Emoji */}
          <button
            onClick={() => {
              showEmoji()
              toggleMenu(emojiRef)
            }}
            className="md:px-2 bg-white  text-gray-700 border border-gray-400 py-1 px-2 rounded-md hover:shadow-md md:ml-2"
          >
            <BiCool className="mx-auto text-3xl text-gray-500" />
            <p className="font-semibold text-gray-800">Ajouter des emoji </p>
          </button>

          {/* clip art */}
          <button
            onClick={() => {
              addClipart()
              toggleMenu(clipartRef)
            }}
            className="md:ml-2 my-2 bg-white hover:shadow-md text-gray-500 border border-gray-400 py-1 px-2 rounded-md"
          >
            <BiTrim className="mx-auto text-3xl" />
            <p className="font-semibold text-gray-800">Ajouter un clipArt </p>
          </button>
          {/* shapes */}
          <button
            onClick={() => {
              showShapes()
              toggleMenu(shapesRef)
            }}
            className="md:ml-2 my-2 bg-white hover:shadow-md text-gray-500 border border-gray-400 py-1 px-2 rounded-md"
          >
            <BiShapeTriangle className="mx-auto text-3xl" />
            <p className="font-semibold text-gray-800">Formes géométriques </p>
          </button>
          <button
            onClick={addGradient}
            className="md:ml-2 my-2 bg-white hover:shadow-md text-gray-500 border border-gray-400 py-1 px-2 rounded-md"
          >
            appliquer gradient
          </button>
        </div>
      </div>
      <div className="flex items-center flex-wrap md:mb-10   md:max-h-128 md:pb-10 md:pt-3">
        {/* image controller */}
        {hasUploadImage && (
          <div ref={imageRef} className="hidden">
            <div className="inline-flex md:mt-2 bg-[#eee] md:pb-1 md:px-2 md:py-1 self-start ml-2">
              <p className="font-semibold text-gray-800">Filtres image</p>
              <BiPhotoAlbum className="text-gray-600 text-3xl" />
            </div>
            {/* filtre */}
            <div className="flex flex-col  mb-2 bg-[#eee] md:p-2 mx-2 ">
              <p className="self-start font-semibold text-sm">
                Matrice de couleurs
              </p>
              <div className="flex items-center flex-wrap  ">
                {filterArray.map((filter) => (
                  <div className="flex flex-col items-center" key={filter.name}>
                    <img
                      src={filter.img}
                      key={filter.name}
                      alt=""
                      onClick={filter.effect}
                      className="h-16 cursor-pointer hover:scale-150 md:m-2 transition-all duration-500 "
                    />
                    <p className="text-xs font-semibold italic">
                      {filter.name}{" "}
                    </p>
                  </div>
                ))}
                <div className="flex flex-col items-center relative">
                  <div
                    onMouseOver={() => {
                      document
                        .getElementById("removeFilters")
                        .classList.remove("hidden")
                    }}
                    onMouseLeave={() => {
                      document
                        .getElementById("removeFilters")
                        .classList.add("hidden")
                    }}
                    onClick={removeFilters}
                    className=" flex items-center justify-center rounded-full md:w-7 md:h-7 relative cursor-pointer bg-white border-2 md:mt-1 hover:scale-150 transition-all duration-300"
                  >
                    <MdRemoveCircle className="md:text-2xl" />
                  </div>
                  <div className="hidden w-full" id="removeFilters">
                    <ToolTip
                      text={"Enlever les filtres"}
                      style={{ right: 0, left: 0, width: "120px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center  self-start  relative w-full ">
                <p className="self-start font-semibold text-sm">filtres</p>
                <div
                  className="inline-flex items-center md:my-1 w-full"
                  onMouseOver={() => {
                    document.getElementById("noise").classList.remove("hidden")
                  }}
                  onMouseLeave={() => {
                    document.getElementById("noise").classList.add("hidden")
                  }}
                >
                  <MdTexture className="text-xl mr-1" />

                  <div className="w-4/5 relative">
                    <MySlider
                      max={350}
                      min={0}
                      step={10}
                      onChange={(val) => {
                        filterNoiseHandler(val)
                      }}
                    />{" "}
                    {/* tooltip */}
                    <div className="hidden" id="noise">
                      <ToolTip
                        text={"noise"}
                        style={{ right: "5px", top: "-10px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="inline-flex items-center md:my-1 relative w-full"
                  onMouseOver={() => {
                    document
                      .getElementById("brightness")
                      .classList.remove("hidden")
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("brightness")
                      .classList.add("hidden")
                  }}
                >
                  <MdLightMode className="text-xl mr-1" />
                  <div className="w-4/5 relative">
                    <MySlider
                      max={40}
                      min={0}
                      onChange={(val) => {
                        filterBrightnessHandler(val)
                      }}
                    />
                  </div>
                  {/* tooltip */}
                  <div className="hidden" id="brightness">
                    <ToolTip
                      text={"luminosité"}
                      style={{ right: "10px", top: "0px" }}
                    />
                  </div>
                </div>

                <div
                  onMouseOver={() => {
                    document
                      .getElementById("saturation")
                      .classList.remove("hidden")
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("saturation")
                      .classList.add("hidden")
                  }}
                  className="inline-flex items-center md:my-1 relative w-full"
                >
                  <MdFilterDrama className="text-xl mr-1" />
                  <div className="w-4/5 relative">
                    <MySlider
                      max={10}
                      min={0}
                      onChange={(val) => {
                        filterSaturation(val)
                      }}
                    />
                    {/* tooltip */}
                    <div className="hidden" id="saturation">
                      <ToolTip text={"saturation"} />
                    </div>
                  </div>
                </div>
              </div>
              {/* couleur */}
              <div className="flex items-center my-2 relative">
                <MdPhotoFilter className="text-xl" />
                <p className="text-sm mx-1">Filtre couleur</p>
                <div className="rounded-full overflow-hidden  w-5 h-5">
                  <input
                    type="color"
                    onChange={filterColorHandler}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {!hasRoundImage ? (
                <button
                  onClick={roundImage}
                  className="md:px-2  rounded-lg bg-white text-yellow-600 border border-yellow-500 hover:bg-yellow-100 hover:text-gray-700  "
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
          </div>
        )}
        <div className="px-4 m-5 mx-auto">
          <canvas
            ref={canvasRef}
            height="500px"
            width="500px"
            className="border-2  border-gray-400 border-dashed   "
          />
        </div>
        <div className="mr-6 h-96">
          <Canvas className=" h-96   cursor-move">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <ModelDraco />
            </Suspense>
          </Canvas>
        </div>

        {/*text input */}
        <div ref={textAreaContainer} className="hidden">
          <IoCloseSharp
            onClick={removeTextContainer}
            className="absolute right-2 top-1 cursor-pointer z-20 text-2xl text-gray-400 hover:text-gray-600"
          />
          <textarea
            ref={textAreaRef}
            onChange={(e) => setText(e.target.value)}
            className="bg-gray-50 border-2 border-gray-200 text-gray-700 md:py-3 md:px-3 placeholder:text-gray-400"
            placeholder="entrer votre texte ici"
            onFocus={removeOutline}
          />
          <button
            onClick={addText}
            className="bg-gray-50 md:px-2 font-semibold text-gray-400 border border-gray-400 mt-2 rounded-md hover:bg-gray-400 hover:text-white"
          >
            Ajouter le texte
          </button>
        </div>
        {/* options container */}
        <div
          ref={optionsContainerRef}
          className="max-w-0 max-h-0 border-2 overflow-hidden transition-all duration-700"
        >
          {/* custom emoji */}
          <div className="hidden overflow-hidden" ref={emojiRef}>
            <IoCloseSharp
              onClick={removeEmoji}
              className="absolute right-0 -top-6 cursor-pointer z-20 text-2xl text-red-500"
            />
            <Picker
              onEmojiClick={onEmojiClick}
              groupNames={groupNames}
              disableSearchBar
              disableAutoFocus
            />
          </div>

          {/* text options */}
          <div
            id="text-options"
            className="hidden relative "
            ref={textOptionsRef}
          >
            <div className="inline-flex items-center md:pb-2 bg-[#eee] self-start mt-2 ">
              <MdTextFields className="md:text-2xl text-gray-600" />
              <p className="text-gray-700 font-semibold text-md ml-1 px-2">
                Options texte
              </p>
            </div>
            {/* color */}
            <div className="flex items-center justify-between self-start w-full bg-[#eee]">
              <div className="flex flex-col items-center  md:ml-2">
                <p className="text-gray-800 mr-1 font-semibold text-sm  ">
                  Couleur du texte
                </p>
                <div className="rounded-full w-5 h-5 overflow-hidden self-start mt-1 bg-white border-2 border-black">
                  <input
                    className="cursor-pointer"
                    type="color"
                    onChange={textColorHandler}
                  />
                </div>
              </div>
              {/* opacity */}
              <div className="inline-flex items-center">
                <p className="md:mr-2 text-xs font-semibold text-gray-700">
                  opacité
                </p>
                <input
                  type="number"
                  className="md:w-16 shadow-md md:mr-2 rounded-md text-gray-500"
                  placeholder="100%"
                  min={0}
                  max={100}
                  onChange={textOpacity}
                  defaultValue={100}
                />
              </div>
            </div>

            {/* text stroke color */}
            <div className=" flex items-center self-start  md:mt-1  w-full bg-[#eee] md:py-2">
              <div className="rounded-full w-5 h-5 ml-2 overflow-hidden self-end mb-1 shadow-lg border-2 border-black">
                <input
                  type="color"
                  className="cursor-pointer "
                  onChange={textStrokeColorHandler}
                />
              </div>
              <div className="flex flex-col items-center md:ml-2  w-3/4 mx-2">
                <p className="text-gray-800 mr-1 font-semibold  text-sm self-start">
                  Taille du contour
                </p>
                <MySlider
                  onChange={(newVal) => {
                    textStrokeWidth(newVal)
                  }}
                />
              </div>
              <p className="text-gray-500 font-semibold text-sm md:mr-6">
                {" "}
                {strokeVal}%{" "}
              </p>
            </div>

            {/* font size */}
            <div className="flex items-center my-1 bg-[#eee] px-2 py-2 self-start ">
              <p className="text-gray-700 text-sm mr-2 font-semibold">
                Taille du texte
              </p>
              <GoTextSize className="text-xl mr-2" />
              <input
                type="number"
                onChange={textSizeHandler}
                min={5}
                max={100}
                defaultValue={30}
                className="text-md font-semibold text-gray-800 text-center bg-white w-16 pr-1 "
              />
            </div>

            <div className="flex items-center justify-around flex-wrap w-full  bg-[#eee] md:py-2 md:px-2 ">
              {/* font style */}
              <div
                onMouseOver={() =>
                  document.getElementById("police").classList.remove("hidden")
                }
                onMouseLeave={() =>
                  document.getElementById("police").classList.add("hidden")
                }
                className="relative"
              >
                <MyPicker onItemClick={textFontHandler} />
                {/* tooltip */}
                <div className="hidden" id="police">
                  <ToolTip text={"Police du texte"} />
                </div>
              </div>

              {/* font weight */}
              <div
                onMouseOver={() =>
                  document.getElementById("bold").classList.remove("hidden")
                }
                onMouseLeave={() =>
                  document.getElementById("bold").classList.add("hidden")
                }
                className="bg-white relative md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md"
                id="text-weight"
                onClick={textWeightHandler}
              >
                <ImBold className="text-gray-600" />
                {/* tooltip */}
                <div className="hidden" id="bold">
                  <ToolTip text={"gras"} />
                </div>
              </div>
              {/* font italic */}
              <div
                onMouseOver={() =>
                  document.getElementById("italic").classList.remove("hidden")
                }
                onMouseLeave={() =>
                  document.getElementById("italic").classList.add("hidden")
                }
                className="bg-white relative md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md"
                id="text-style"
                onClick={textStyleHandler}
              >
                <ImItalic className="text-gray-600" />
                {/* tooltip */}
                <div className="hidden" id="italic">
                  <ToolTip text={"italic"} />
                </div>
              </div>
              {/* font underline */}
              <div
                onMouseOver={() =>
                  document
                    .getElementById("textUnderline")
                    .classList.remove("hidden")
                }
                onMouseLeave={() =>
                  document
                    .getElementById("textUnderline")
                    .classList.add("hidden")
                }
                className="bg-white relative md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md"
                id="text-underline"
                onClick={textUnderlineHandler}
              >
                <MdFormatColorText className="text-gray-600 text-xl" />
                {/* tooltip */}
                <div className="hidden" id="textUnderline">
                  <ToolTip text={"souligner"} />
                </div>
              </div>
              {/* font overline */}
              <div
                onMouseOver={() =>
                  document
                    .getElementById("textOverline")
                    .classList.remove("hidden")
                }
                onMouseLeave={() =>
                  document
                    .getElementById("textOverline")
                    .classList.add("hidden")
                }
                className="bg-white relative md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1"
                id="text-overline"
                onClick={textOverlineHandler}
              >
                <img
                  src="/images/overline.png"
                  alt="overline text"
                  className="max-h-6"
                />
                {/* tooltip */}
                <div className="hidden" id="textOverline">
                  <ToolTip text={"surligner"} />
                </div>
              </div>
              {/* font strike */}
              <div
                onMouseOver={() =>
                  document
                    .getElementById("textThrough")
                    .classList.remove("hidden")
                }
                onMouseLeave={() =>
                  document.getElementById("textThrough").classList.add("hidden")
                }
                className="bg-white relative md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1"
                id="text-strike"
                onClick={textStrikeHandler}
              >
                <MdFormatStrikethrough className="text-gray-600 text-xl" />
                {/* tooltip */}
                <div className="hidden" id="textThrough">
                  <ToolTip text={"barré le texte"} />
                </div>
              </div>
              {/* line height */}
              <div className="bg-white flex items-center md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1 relative">
                <ImTextHeight className="text-gray-600 text-xl mr-2" />
                <input
                  type="number"
                  onChange={textHeight}
                  className="bg-white  ml-1 md:w-14 text-gray-400 font-semibold "
                  defaultValue={11}
                  min={7}
                  max={25}
                />
              </div>
              {/* char spacing */}
              <div className="bg-white flex items-center md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1 relative">
                <ImTextWidth className="text-gray-600 text-xl mr-2" />
                <input
                  type="number"
                  onChange={textChar}
                  className="bg-white  ml-1 md:w-14 text-gray-400 font-semibold"
                  defaultValue={25}
                  min={0}
                  max={200}
                />
              </div>
            </div>
            {/* text transformations */}
            <div className="flex flex-col items-center bg-[#eeee] md:p-2 mt-1 w-full ">
              <p className="text-sm font-semibold text-gray-700 self-start mb-2">
                Transformations du texte
              </p>
              <div className="flex items-center flex-wrap ">
                {/* circle */}
                <div
                  className="bg-white shadow-lg md:px-2 md:py-1 cursor-pointer mr-1"
                  onClick={textwave}
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m16.33,17.15c0.0833,-0.15818 0.1804,-0.30876 0.29,-0.45l0,-0.15c-1.27,0.34 -1.9,0.53 -3.17,0.92l0,0.15c0.0784,0.09476 0.1292,0.20926 0.1468,0.33097c0.0177,0.1217 0.0015,0.24592 -0.0468,0.35903c-0.59,2.29 -0.89,3.44 -1.48,5.74c-0.8,-2.22 -1.2,-3.32 -2,-5.52l-1.14,0.41c-0.8,2.77 -1.19,4.15 -2,6.94c-0.57,-1.88 -0.87,-2.82 -1.48,-4.69c-0.03414,-0.12703 -0.04287,-0.25955 -0.02571,-0.38996c0.01716,-0.13042 0.05988,-0.25616 0.12571,-0.37004l0,-0.15c-1.23,0.51 -1.85,0.77 -3.1,1.33l0,0.14c0.10684,0.07088 0.20141,0.1587 0.28,0.26c0.07117,0.11758 0.13143,0.24143 0.18,0.37c1.23,3.67 1.84,5.52 3.08,9.24l1.53,-0.6c0.8,-2.83 1.19,-4.25 2,-7.06c0.79,2.25 1.19,3.38 2,5.65c0.62,-0.21 0.93,-0.31 1.55,-0.5c1.24,-4.61 1.87,-6.9 3.11,-11.46c0.0335,-0.17117 0.0838,-0.33863 0.15,-0.5z"></path>
                      <path d="m21.61,15.38l-1.32,0.29l-1,0.24l-0.8,0.2l0,0.15c0.0586,0.02814 0.1104,0.06864 0.1518,0.1187c0.0414,0.05006 0.0715,0.1085 0.0882,0.1713c0.0501,0.1629 0.0501,0.3371 0,0.5c-1.28,4.08 -1.88,6.15 -3.1,10.33c-0.1062,0.3399 -0.2722,0.6582 -0.49,0.94l0,0.15c1.24,-0.36 1.86,-0.53 3.09,-0.84l0,-0.15c-0.0733,-0.0933 -0.1307,-0.198 -0.17,-0.31c-0.0348,-0.1141 -0.0348,-0.2359 0,-0.35l0.39,-1.44c1.47,-0.37 2.21,-0.54 3.68,-0.85l0.4,1.2c0.0397,0.1099 0.0397,0.2301 0,0.34c-0.0524,0.1383 -0.1159,0.272 -0.19,0.4l0,0.15c1.24,-0.25 1.86,-0.37 3.1,-0.58l0,-0.15c-0.2204,-0.1957 -0.3888,-0.4431 -0.49,-0.72c-1.31,-3.94 -1.98,-5.91 -3.34,-9.79zm-1.3,3.55c0.53,1.51 0.79,2.27 1.32,3.79c-1.06,0.23 -1.59,0.35 -2.64,0.61l1.32,-4.4z"></path>
                      <path d="m30.87,14c0.0764,0.10347 0.1278,0.22329 0.15,0.35c0.0064,0.13521 -0.0105,0.27052 -0.05,0.4c-0.77,2.63 -1.16,3.91 -1.92,6.54l-1.94,-6c-0.0449,-0.1248 -0.062,-0.25791 -0.05,-0.39c0.0163,-0.13751 0.068,-0.26845 0.15,-0.38l0,-0.2c-1.29,0.19 -1.93,0.3 -3.21,0.54l0,0.15c0.2304,0.18877 0.4036,0.43813 0.5,0.72c1.38,4 2.08,6 3.46,10c0.86,-0.12 1.29,-0.18 2.15,-0.28c1.34,-4.39 2.07,-6.56 3.44,-10.87c0.1099,-0.31832 0.2834,-0.61093 0.51,-0.86l0,-0.14c-1.27,0.08 -1.91,0.14 -3.19,0.27l0,0.15z"></path>
                      <path d="m42.39,22.29c-0.1388,0.15022 -0.3052,0.27242 -0.49,0.36c-0.173,0.0883 -0.366,0.12967 -0.56,0.12c-1.51,0 -2.27,0 -3.79,0l0,-3c0.87,0 1.3,0 2.17,0c0.1875,0.00416 0.3731,0.03791 0.55,0.1c0.1826,0.07064 0.3517,0.17211 0.5,0.3l0.15,0l0,-2.79l-0.15,0c-0.1515,0.11821 -0.3201,0.21262 -0.5,0.28c-0.1756,0.06705 -0.3621,0.10096 -0.55,0.1c-0.87,0 -1.3,0 -2.17,0l0,-2.23c1.42,0 2.12,0 3.53,0c0.1948,0.00377 0.3863,0.05163 0.56,0.14c0.1799,0.0874 0.3452,0.20209 0.49,0.34l0.17,0l0,-2.58c-1.85,-0.05 -2.85,-0.05 -4.75,-0.05l-0.73,0l-1.21,0.11l-0.79,0l0,0.19c0.12,0.14291 0.2147,0.30524 0.28,0.48c0.0688,0.17858 0.1027,0.36866 0.1,0.56l0,9.06c0.0025,0.1946 -0.0314,0.3879 -0.1,0.57c-0.0693,0.1852 -0.1635,0.3602 -0.28,0.52l0,0.14l0.79,0l1.21,-0.05l0.73,0c2,0 3,0 5,0l0,-2.66l-0.16,-0.01z"></path>
                    </g>
                  </svg>
                </div>
                {/* ascendent */}
                <div
                  className="bg-white shadow-lg md:px-2 md:py-1 cursor-pointer mr-1"
                  onClick={textAscend}
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m12.87,26.085c0.40826,-0.2412 0.76778,-0.5566 1.06,-0.93c0.66333,-0.858 1.01589,-1.9156 1,-3c0.05117,-0.49657 -0.01239,-0.99826 -0.18577,-1.46638c-0.17338,-0.46812 -0.45195,-0.89018 -0.81423,-1.23362c-0.42059,-0.29192 -0.89847,-0.49104 -1.40191,-0.58414c-0.50343,-0.0931 -1.02091,-0.07806 -1.51809,0.04414c-1.06,0.17 -1.59,0.23 -2.66,0.33l-0.68,0.06c-0.56,0 -0.84,0.05 -1.4,0.07l-0.92,0l0,0.16c0.13593,0.16647 0.24708,0.35172 0.33,0.55c0.06879,0.20282 0.1026,0.41585 0.1,0.63l0,10c0.00186,0.2108 -0.03195,0.4204 -0.1,0.62c-0.0753,0.2111 -0.18699,0.4074 -0.33,0.58l0,0.17l0.92,0c0.64,0 1,0 1.6,-0.08l0.94,-0.09l0,-0.16c-0.14602,-0.1496 -0.2615,-0.3262 -0.34,-0.52c-0.08131,-0.1965 -0.12213,-0.4074 -0.12,-0.62l0,-3.53c0.77,-0.07 1.15,-0.12 1.92,-0.22c0.7,1.85 1,2.76 1.76,4.58c1.2,-0.21 1.8,-0.34 3,-0.61l0,-0.17c-0.26459,-0.1907 -0.47206,-0.45 -0.6,-0.75l-1.56,-3.83zm-4.52,-4.46c0.94,-0.09 1.4,-0.15 2.34,-0.29c0.19763,-0.04344 0.40192,-0.04725 0.60104,-0.01121c0.19911,0.03605 0.3891,0.11124 0.55896,0.22121c0.14935,0.14719 0.26373,0.32604 0.3347,0.52335c0.07096,0.19732 0.0967,0.40806 0.0753,0.61665c0.01351,0.4456 -0.13181,0.8816 -0.41,1.23c-0.3067,0.325 -0.71669,0.5336 -1.16,0.59c-0.94,0.13 -1.4,0.19 -2.34,0.28l0,-3.16z"></path>
                      <path d="m17.35,17.585l-0.92,0.24l0,0.16c0.1323,0.13759 0.2405,0.29648 0.32,0.47c0.0739,0.19136 0.1112,0.39488 0.11,0.6l0,10c-0.0023,0.2244 -0.0394,0.447 -0.11,0.66c-0.0824,0.2215 -0.1897,0.4328 -0.32,0.63l0,0.16l0.92,-0.23l1.59,-0.43l0.93,-0.25l0,-0.18c-0.1377,-0.1331 -0.2466,-0.2931 -0.32,-0.47c-0.0829,-0.1854 -0.1239,-0.3869 -0.12,-0.59l0,-10c0.0019,-0.22199 0.0425,-0.44195 0.12,-0.65c0.0782,-0.2264 0.1858,-0.44157 0.32,-0.64l0,-0.15l-0.93,0.25l-1.59,0.42z"></path>
                      <path d="m28.28,20.785c-0.6714,-0.30038 -1.3717,-0.53157 -2.09,-0.69c-0.5477,-0.11653 -1.0834,-0.28392 -1.6,-0.5c-0.41,-0.19 -0.62,-0.45 -0.62,-0.78c0.0095,-0.15095 0.0532,-0.29777 0.1277,-0.42941c0.0744,-0.13165 0.1778,-0.24468 0.3023,-0.33059c0.3918,-0.27767 0.833,-0.47792 1.3,-0.59c0.408,-0.10951 0.8277,-0.16994 1.25,-0.18c0.3756,-0.01404 0.7515,0.01617 1.12,0.09c0.235,0.03653 0.4598,0.12168 0.66,0.25l0.21,0l0,-2.71c-0.4295,-0.07074 -0.8651,-0.09754 -1.3,-0.08c-0.6258,0.01708 -1.2472,0.11112 -1.85,0.28c-1.2731,0.27933 -2.4455,0.90183 -3.39,1.8c-0.7002,0.71374 -1.0978,1.67022 -1.11,2.67c-0.0392,0.55363 0.1091,1.10435 0.4212,1.56334c0.312,0.459 0.7695,0.79952 1.2988,0.96666c0.5957,0.20547 1.208,0.35937 1.83,0.46c0.6182,0.11902 1.2128,0.3386 1.76,0.65c0.1838,0.0954 0.3384,0.2387 0.4476,0.4147c0.1091,0.176 0.1687,0.3782 0.1724,0.5853c-0.006,0.1994 -0.06,0.3945 -0.1575,0.5686c-0.0975,0.1741 -0.2356,0.3221 -0.4025,0.4314c-0.4507,0.327 -0.9599,0.5646 -1.5,0.7c-0.6201,0.1772 -1.2683,0.2349 -1.91,0.17c-0.5912,-0.071 -1.1642,-0.2507 -1.69,-0.53l-0.22,0.06l0,2.8c0.2543,0.1042 0.5253,0.1618 0.8,0.17c0.4591,0.0397 0.9209,0.0397 1.38,0c0.5307,-0.0404 1.0563,-0.1308 1.57,-0.27c1.3301,-0.315 2.5542,-0.9736 3.55,-1.91c0.3952,-0.3667 0.7109,-0.8106 0.9277,-1.3043c0.2167,-0.4937 0.3298,-1.0266 0.3323,-1.5657c0.0254,-0.6003 -0.1165,-1.19577 -0.41,-1.72c-0.2922,-0.45823 -0.7131,-0.82002 -1.21,-1.04z"></path>
                      <path d="m39.51,22.685c-0.1544,0.16746 -0.3372,0.3063 -0.54,0.41c-0.1906,0.1055 -0.4025,0.167 -0.62,0.18c-1.3946,0.0458 -2.7844,0.1861 -4.16,0.42l0,-3.31c0.95,-0.15 1.42,-0.21 2.37,-0.3c0.2053,-0.02027 0.4126,0.00012 0.61,0.06c0.2007,0.05447 0.3879,0.1498 0.55,0.28l0.16,0l0,-3.1l-0.16,0c-0.1691,0.14046 -0.3536,0.26123 -0.55,0.36c-0.1925,0.09004 -0.3987,0.14749 -0.61,0.17c-0.95,0.09 -1.42,0.15 -2.37,0.29l0,-2.45c1.2799,-0.21729 2.5727,-0.35091 3.87,-0.4c0.2127,-0.01729 0.4262,0.0206 0.62,0.11c0.1963,0.08931 0.3783,0.20726 0.54,0.35l0.18,0l0,-2.84c-1.7463,0.00081 -3.4894,0.15137 -5.21,0.45c-0.32,0 -0.48,0.07 -0.8,0.13c-0.52,0.09 -0.79,0.13 -1.32,0.24l-0.87,0.18l0,0.17c0.1384,0.13834 0.2443,0.30571 0.31,0.49c0.0739,0.19136 0.1112,0.39488 0.11,0.6l0,10c-0.0015,0.2212 -0.0387,0.4406 -0.11,0.65c-0.0707,0.2214 -0.1753,0.4306 -0.31,0.62l0,0.16l0.87,-0.18l1.28,-0.27l0.8,-0.13c1.8156,-0.3187 3.6567,-0.4693 5.5,-0.45l0,-2.89l-0.14,0z"></path>
                    </g>
                  </svg>
                </div>

                {/* Arc */}
                <div
                  className="bg-white shadow-lg md:px-2 md:py-1 cursor-pointer mr-1"
                  onClick={textArc}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59.79 20.42"
                    width={45}
                    height={45}
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          d="M10.91,5.47a19.86,19.86,0,0,1,2,2,5.9,5.9,0,0,1,1.73,3.36,3.43,3.43,0,0,1-1.25,3.07A4,4,0,0,1,10,14.93a6.65,6.65,0,0,1-3.6-2.37A17.86,17.86,0,0,1,5,10.73ZM7.25,11.25a5.21,5.21,0,0,0,.48.59c1.28,1.48,2.82,1.76,4.2.54s1.13-2.54,0-3.87a4.67,4.67,0,0,0-.72-.7Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M14.73,17.08c-.34.62.14,1.38.89,1.88a5.61,5.61,0,0,0,1.63.77l-.49,1.2A6.26,6.26,0,0,1,14.62,20c-1.76-1.17-2.12-2.85-1.11-4.37a3.07,3.07,0,0,1,4.38-.85,2.73,2.73,0,0,1,.69,4.05,2.7,2.7,0,0,1-.44.53Zm2.71.24a1.1,1.1,0,0,0-.32-1.58,1.26,1.26,0,0,0-1.69.24Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M20.38,18.93c.22-.73.39-1.34.51-1.84l1.54.46-.17.82h0A2.13,2.13,0,0,1,24.4,18a1.77,1.77,0,0,1,1.32,1.53h0a2.52,2.52,0,0,1,1-.49A2.24,2.24,0,0,1,28,19.1c1.1.33,1.81,1.37,1.27,3.15l-1,3.22-1.77-.53.9-3c.27-.87.08-1.43-.52-1.61a1,1,0,0,0-1.08.37,1.61,1.61,0,0,0-.21.44l-1,3.19-1.77-.53.93-3c.24-.81.06-1.37-.53-1.55a1,1,0,0,0-1.1.4,1.27,1.27,0,0,0-.21.42l-1,3.18-1.76-.53Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M31.16,25.53l.32-5.87,1.91.11-.33,5.86Zm2.39-7.41a.94.94,0,0,1-1.09.87.92.92,0,0,1-.95-1,.94.94,0,0,1,1.07-.88A1,1,0,0,1,33.55,18.12Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M43.14,24.38a4.94,4.94,0,0,1-1.76.64c-2,.38-3.49-.57-3.83-2.36s.61-3.31,2.94-3.74a4.74,4.74,0,0,1,1.59,0l0,1.43a2.68,2.68,0,0,0-1.18,0,1.63,1.63,0,1,0,.64,3.18,3.18,3.18,0,0,0,1.15-.43Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M44.35,16.14a1,1,0,0,1-.66,1.23.94.94,0,1,1,.66-1.23ZM45,23.9l-2-5.53,1.8-.64,2,5.53Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M47.13,19c-.45-.85-.71-1.33-1-1.75l1.46-.75.59,1,0,0a1.85,1.85,0,0,1,.93-2,2,2,0,0,1,.38-.15l.81,1.57a2.12,2.12,0,0,0-.51.2,1.23,1.23,0,0,0-.76,1.47c0,.11.09.21.14.32l1.37,2.63-1.69.89Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M57.57,16.61A4.84,4.84,0,0,1,56.29,18c-1.62,1.24-3.37,1.06-4.48-.39s-.94-3.22.95-4.66a5.14,5.14,0,0,1,1.4-.75l.6,1.3a2.66,2.66,0,0,0-1,.54,1.57,1.57,0,0,0-.38,2.32,1.61,1.61,0,0,0,2.38.23,3.37,3.37,0,0,0,.83-.9Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M52.84,9.4,54.16,8l6.2,6L59,15.35Z"
                          transform="translate(-4.95 -5.21)"
                        />
                        <path
                          d="M60.86,9.67c.62.34,1.39-.13,1.9-.88a5.35,5.35,0,0,0,.78-1.62l1.2.5a6.28,6.28,0,0,1-1,2.13c-1.19,1.75-2.87,2.1-4.38,1.07a3.06,3.06,0,0,1-.82-4.38,2.74,2.74,0,0,1,4.06-.66,2.71,2.71,0,0,1,.53.45ZM61.13,7a1.09,1.09,0,0,0-1.58.31A1.27,1.27,0,0,0,59.78,9Z"
                          transform="translate(-4.95 -5.21)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                {/* circle */}
                <div
                  className="bg-white shadow-lg md:px-2 md:py-1 cursor-pointer mr-1"
                  onClick={textcircle}
                >
                  <svg height={45} width={45}>
                    <g>
                      <path d="m10.06951,24.085c-0.07339,-0.3799 -0.18392,-0.7517 -0.33,-1.11c-0.09958,-0.2624 -0.23777,-0.5084 -0.41,-0.73l0,-0.07l-1.86,0.37l0.07,0.34l0.06,0c0.18487,0.1245 0.33604,0.2928 0.44,0.49c0.17265,0.311 0.29101,0.6492 0.35,1c0.07082,0.35 0.04665,0.7125 -0.07,1.05c-0.12528,0.3373 -0.34375,0.632 -0.63,0.85c-0.37348,0.2659 -0.80579,0.4375 -1.26,0.5c-0.4512,0.0999 -0.91879,0.0999 -1.37,0c-0.35818,-0.0816 -0.68483,-0.2657 -0.94,-0.53c-0.24524,-0.284 -0.40781,-0.6299 -0.47,-1c-0.05957,-0.3307 -0.05957,-0.6693 0,-1c0.01787,-0.19 0.07581,-0.374 0.17,-0.54l0,-0.38l-1.88,0.37l0,0.09c-0.04485,0.2543 -0.06826,0.5118 -0.07,0.77c0.00462,0.39 0.04817,0.7786 0.13001,1.16c0.09338,0.7118 0.37662,1.3854 0.82,1.95c0.45426,0.4954 1.04628,0.8437 1.69999,1c0.36262,0.0933 0.73558,0.1403 1.11,0.14c0.39664,0.0313 0.79545,0.0212 1.19,-0.03c0.72745,-0.1292 1.41329,-0.431 2,-0.88c0.53898,-0.4064 0.94036,-0.9683 1.15,-1.61c0.22939,-0.7112 0.26392,-1.4709 0.1,-2.2z"></path>
                      <path d="m2.47952,18.835c0.11019,-0.0349 0.22451,-0.0551 0.34,-0.06c0.10859,-0.0248 0.2214,-0.0248 0.32999,0l5.94,1.46c0.1078,0.0225 0.20988,0.0667 0.3,0.13c0.09596,0.0693 0.18325,0.1499 0.26,0.24l0.29,0.08l0.57001,-2.34l-0.29,-0.07c-0.10324,0.0508 -0.21526,0.0814 -0.33001,0.09c-0.1091,0.0199 -0.22089,0.0199 -0.33,0l-5.97,-1.42c-0.10708,-0.0297 -0.20847,-0.077 -0.3,-0.14c-0.09281,-0.0695 -0.17677,-0.1501 -0.25,-0.24l-0.31999,-0.11l-0.58,2.32l0.29,0.08l0.05,-0.02z"></path>
                      <path d="m4.72951,12.235c0.10947,-0.0153 0.22054,-0.0153 0.33,0c0.10825,0.0407 0.20947,0.0981 0.3,0.17l4.77,3.87c0.08858,0.0686 0.16325,0.1534 0.22,0.25c0.06026,0.0943 0.10105,0.1997 0.12,0.31l0,0.06l0.24,0.19l1.51,-1.89l-0.23,-0.19l-0.06,0c-0.11239,0.0207 -0.2276,0.0207 -0.34,0c-0.11119,-0.029 -0.21398,-0.0838 -0.3,-0.16l-1.56,-1.3l0.58,-0.71l3,1l1.31,-1.63l-0.24,-0.2l-0.07,0c-0.1911,0.0414 -0.3889,0.0414 -0.58,0l-2.46,-0.8c0.0448,-0.23118 0.0448,-0.46882 0,-0.7c-0.10739,-0.65863 -0.46582,-1.25003 -1,-1.65c-0.51736,-0.46322 -1.1964,-0.70393 -1.89,-0.67c-0.33963,0.051 -0.66539,0.17034 -0.95758,0.35081c-0.2922,0.18048 -0.54476,0.41833 -0.74242,0.69919l-2.25,2.81l0.24,0.19l0.06,0zm2.39,-0.78l0.8,-1c0.12974,-0.17839 0.32306,-0.30011 0.54,-0.34c0.11518,-0.00699 0.23056,0.00983 0.33895,0.0494c0.1084,0.03957 0.20747,0.10105 0.29105,0.1806c0.18278,0.13176 0.30805,0.32862 0.35,0.55c0.00594,0.1097 -0.0105,0.21947 -0.04832,0.32261c-0.03782,0.10315 -0.09623,0.19753 -0.17168,0.27739l-0.8,1l-1.3,-1.04z"></path>
                      <path d="m20.12951,9.615l0.05,-0.07l-0.73,-1.77l-0.32,0.13l0,0.07c-0.0824,0.20719 -0.2167,0.3897 -0.39,0.53c-0.2716,0.24149 -0.5828,0.43432 -0.92,0.57c-0.3159,0.13143 -0.6602,0.17963 -1,0.14c-0.3694,-0.04503 -0.7172,-0.19809 -1,-0.44c-0.3268,-0.30011 -0.5829,-0.66897 -0.75,-1.08c-0.1754,-0.428 -0.2605,-0.88759 -0.25,-1.35c0.0125,-0.35796 0.127,-0.70491 0.33,-1c0.219,-0.28985 0.5129,-0.51456 0.85,-0.65c0.3153,-0.14217 0.6545,-0.22359 1,-0.24c0.2167,-0.02278 0.4356,0.0046 0.64,0.08l0.06,0l0.31,-0.13l-0.79,-1.77l-0.1,0c-0.2552,0.00379 -0.5096,0.03056 -0.76,0.08c-0.3851,0.07954 -0.7606,0.20023 -1.12,0.36c-0.6758,0.26823 -1.269,0.7097 -1.72,1.28c-0.4193,0.54076 -0.6635,1.19667 -0.7,1.88c-0.0238,0.75956 0.1232,1.51477 0.43,2.21c0.2793,0.68714 0.7099,1.30242 1.26,1.8c0.5128,0.44309 1.1469,0.72181 1.82,0.8c0.1398,0.00981 0.2802,0.00981 0.42,0c0.5849,-0.00686 1.1626,-0.1292 1.7,-0.36c0.3521,-0.14688 0.6874,-0.33127 1,-0.55c0.2496,-0.14105 0.4785,-0.31605 0.68,-0.52z"></path>
                      <path d="m26.43951,8.125l-0.37,0c-0.0922,0.09498 -0.2006,0.17285 -0.32,0.23c-0.0931,0.04667 -0.1959,0.07066 -0.3,0.07l-2,-0.18l0.49,-5.34c0.0124,-0.11299 0.0392,-0.2239 0.08,-0.33c0.0516,-0.10077 0.1154,-0.19481 0.19,-0.28l0,-0.29l-2.27,-0.23l0,0.3c0.0559,0.0976 0.0996,0.20172 0.13,0.31c0.0194,0.1125 0.0194,0.2275 0,0.34l-0.55,6.09c-0.0086,0.11474 -0.0392,0.22676 -0.09,0.33c-0.0481,0.10282 -0.1122,0.19734 -0.19,0.28l0,0.3l5,0.46l0.2,-2.06z"></path>
                      <path d="m32.81951,11.835l-0.27,-0.18l-0.06,0c-0.1187,0.02481 -0.2413,0.02481 -0.36,0c-0.1075,-0.00382 -0.2117,-0.03854 -0.3,-0.1l-2.01,-1.29l1,-1.44l1.09,0.71c0.0923,0.06274 0.1734,0.14048 0.24,0.23c0.063,0.09153 0.1103,0.19292 0.14,0.3l0,0.05l0.25,0.17l1.21,-1.83l-0.25,-0.17l-0.05,0c-0.1162,0.01485 -0.2338,0.01485 -0.35,0c-0.1072,-0.0189 -0.2093,-0.05976 -0.3,-0.12l-1.08,-0.71l0.66,-1l1.84,1.19c0.0878,0.06136 0.1626,0.13954 0.22,0.23c0.0592,0.10426 0.1062,0.21499 0.14,0.33l0,0.06l0.27,0.17l1.13,-1.66l-4.45,-3l-0.16,0.25l0,0.05c0.0152,0.11282 0.0152,0.22718 0,0.34c-0.0258,0.11154 -0.0734,0.21688 -0.14,0.31l-3.41,5.14c-0.0633,0.09474 -0.1408,0.17908 -0.23,0.25c-0.0902,0.06758 -0.1918,0.11839 -0.3,0.15l-0.05,0l-0.17,0.25l4.59,3l1.16,-1.68z"></path>
                      <path d="m42.91951,18.985c-0.1395,-0.7143 -0.4636,-1.3797 -0.94,-1.93c-0.4616,-0.4964 -1.0602,-0.8445 -1.72,-1c-0.7438,-0.1694 -1.5162,-0.1694 -2.26,0c-0.7308,0.1362 -1.4173,0.4485 -2,0.91c-0.5312,0.4181 -0.9248,0.9859 -1.13,1.63c-0.2064,0.7099 -0.2237,1.4614 -0.05,2.18c0.0823,0.3767 0.1994,0.745 0.35,1.1c0.1086,0.257 0.2498,0.499 0.42,0.72l0.06,0.07l1.85,-0.4l-0.08,-0.35l-0.06,0c-0.1906,-0.1208 -0.3458,-0.2899 -0.45,-0.49c-0.1821,-0.3086 -0.3074,-0.6472 -0.37,-1c-0.0773,-0.3482 -0.06,-0.7107 0.05,-1.05c0.1183,-0.341 0.3339,-0.64 0.62,-0.86c0.3532,-0.2699 0.7638,-0.4547 1.2,-0.54c0.4513,-0.0992 0.9187,-0.0992 1.37,0c0.3787,0.067 0.7277,0.2485 1,0.52c0.2468,0.2648 0.4132,0.5942 0.48,0.95c0.0836,0.3264 0.104,0.6659 0.06,1c-0.0177,0.218 -0.0825,0.4295 -0.19,0.62l0.07,0.33l1.87,-0.41l0,-0.09c0.0457,-0.254 0.0658,-0.512 0.06,-0.77c-0.0284,-0.3865 -0.0988,-0.7687 -0.21,-1.14z"></path>
                      <path d="m42.50951,25.875c-0.1049,0.0483 -0.2159,0.0819 -0.33,0.1c-0.1086,0.0248 -0.2214,0.0248 -0.33,0l-6,-1.35c-0.1095,-0.0267 -0.2142,-0.0706 -0.31,-0.13c-0.0928,-0.0695 -0.1768,-0.1501 -0.25,-0.24l-0.29,-0.07l-0.53,2.35l0.29,0.07c0.1045,-0.0515 0.2155,-0.0885 0.33,-0.11c0.1091,-0.0199 0.2209,-0.0199 0.33,0l6,1.35c0.111,0.0223 0.2164,0.0665 0.31,0.13c0.0948,0.0631 0.1792,0.1407 0.25,0.23l0.29,0.07l0.55,-2.36l-0.29,-0.06l-0.02,0.02z"></path>
                      <path d="m40.38951,32.525c-0.1154,0.0031 -0.2304,-0.0138 -0.34,-0.05c-0.1082,-0.0316 -0.2098,-0.0824 -0.3,-0.15l-4.84,-3.74c-0.0893,-0.0708 -0.1669,-0.1552 -0.23,-0.25c-0.062,-0.0971 -0.1029,-0.2061 -0.12,-0.32l-0.26,-0.24l-1.48,1.92l0.24,0.18l0.05,0c0.1158,-0.0206 0.2342,-0.0206 0.35,0c0.1051,0.0317 0.2034,0.0825 0.29,0.15l1.6,1.23l-0.57,0.73l-3,-1l-1.28,1.65l0.24,0.2l0.08,0c0.1979,-0.041 0.4021,-0.041 0.6,0l2.46,0.76c-0.0448,0.2345 -0.0448,0.4755 0,0.71c0.1117,0.6488 0.47,1.2293 1,1.62c0.4697,0.3951 1.0568,0.6236 1.67,0.65l0.27,0c0.3391,-0.0589 0.6628,-0.1858 0.9515,-0.3732c0.2887,-0.1873 0.5365,-0.4311 0.7285,-0.7168l2.21,-2.86l-0.24,-0.19l-0.08,0.09zm-2.38,0.82l-0.79,1c-0.0601,0.0921 -0.1379,0.1714 -0.2289,0.2332c-0.0909,0.0618 -0.1933,0.1049 -0.3011,0.1268c-0.2321,0.0095 -0.4586,-0.0732 -0.63,-0.23c-0.0936,-0.0608 -0.1738,-0.14 -0.2357,-0.2329c-0.0619,-0.0928 -0.1042,-0.1973 -0.1243,-0.3071c-0.0118,-0.2229 0.0635,-0.4416 0.21,-0.61l0.78,-1l1.32,1.02z"></path>
                      <path d="m30.61951,34.695c-0.5106,-0.4291 -1.137,-0.6971 -1.8,-0.77c-0.7279,-0.0636 -1.4595,0.0676 -2.12,0.38c-0.3514,0.1483 -0.6866,0.3326 -1,0.55c-0.2279,0.1617 -0.436,0.3496 -0.62,0.56l-0.06,0.07l0.77,1.73l0.32,-0.14l0,-0.07c0.0835,-0.2068 0.2135,-0.3916 0.38,-0.54c0.2637,-0.227 0.5604,-0.4125 0.88,-0.55c0.3141,-0.1382 0.6585,-0.1933 1,-0.16c0.3705,0.0408 0.7196,0.1944 1,0.44c0.3362,0.2921 0.5998,0.6584 0.77,1.07c0.1975,0.4156 0.2999,0.8699 0.3,1.33c-0.0061,0.3575 -0.1174,0.7053 -0.32,1c-0.2136,0.2958 -0.5041,0.5275 -0.84,0.67c-0.315,0.146 -0.6538,0.2341 -1,0.26c-0.2192,0.02 -0.4401,-0.0038 -0.65,-0.07l-0.06,0l-0.31,0.14l0.77,1.75l0.12,0c0.2528,-0.0069 0.5042,-0.0404 0.75,-0.1c0.3779,-0.087 0.7463,-0.2109 1.1,-0.37c0.6713,-0.2809 1.2573,-0.7325 1.7,-1.31c0.4034,-0.5495 0.6301,-1.2087 0.65,-1.89c0.0164,-0.7599 -0.1445,-1.5132 -0.47,-2.2c-0.2723,-0.6852 -0.7043,-1.2955 -1.26,-1.78z"></path>
                      <path d="m18.74951,37.015l0.32,0l0.05,-0.05c0.0897,-0.103 0.1984,-0.1879 0.32,-0.25c0.0931,-0.0467 0.1959,-0.0707 0.3,-0.07l2,0.15l-0.39,5.34c-0.01,0.1134 -0.037,0.2246 -0.08,0.33c-0.0504,0.1023 -0.1107,0.1994 -0.18,0.29l0,0.29l2.36,0.18l0,-0.31c-0.0697,-0.0926 -0.1207,-0.1979 -0.15,-0.31c-0.0201,-0.1091 -0.0201,-0.2209 0,-0.33l0.44,-6.11c0.0113,-0.1099 0.0382,-0.2177 0.08,-0.32c0.0481,-0.1028 0.1122,-0.1973 0.19,-0.28l0,-0.3l-5.05,-0.37l-0.21,2.12z"></path>
                      <path d="m12.28951,33.435l0.28,0.17l0.06,0c0.1192,-0.0198 0.2408,-0.0198 0.36,0c0.1103,0.0056 0.2172,0.0401 0.31,0.1l2,1.28l-0.92,1.46l-1.1,-0.69c-0.0892,-0.0626 -0.1698,-0.1366 -0.24,-0.22c-0.0716,-0.0914 -0.1228,-0.1971 -0.15,-0.31l-0.26,-0.16l-1.17,1.76l0.25,0.16c0.1158,-0.0206 0.2342,-0.0206 0.35,0c0.1066,0.0153 0.2088,0.0528 0.3,0.11l1.1,0.7l-0.65,1l-1.82,-1.15c-0.09547,-0.0552 -0.17478,-0.1345 -0.23,-0.23c-0.06085,-0.0999 -0.10794,-0.2075 -0.14,-0.32l0,-0.06l-0.27,-0.17l-1.11,1.72l4.5,2.85l0.16,-0.26c-0.0194,-0.1125 -0.0194,-0.2275 0,-0.34c0.0304,-0.1083 0.0741,-0.2124 0.13,-0.31l3.27,-5.17c0.0633,-0.0947 0.1409,-0.1791 0.23,-0.25c0.0909,-0.0688 0.1922,-0.1228 0.3,-0.16l0.05,0l0.16,-0.25l-4.65,-2.94l-1.1,1.68z"></path>
                    </g>
                  </svg>
                </div>
                {/* text align options */}
                <div className="flex items-center justify-around w-full my-2">
                  {/* text align left */}
                  <div
                    onClick={() => textAlign("left")}
                    onMouseOver={() =>
                      document
                        .getElementById("alignLeft")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("alignLeft")
                        .classList.add("hidden")
                    }
                    className="bg-white flex items-center md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1 relative"
                  >
                    <BsTextIndentRight className="text-gray-600 text-xl" />
                    {/* tooltip */}
                    <div className="hidden" id="alignLeft">
                      <ToolTip text={"aligner a gauche"} />
                    </div>
                  </div>
                  {/* text align center */}
                  <div
                    onClick={() => textAlign("center")}
                    onMouseOver={() =>
                      document
                        .getElementById("center")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document.getElementById("center").classList.add("hidden")
                    }
                    className="bg-white flex items-center md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1 relative"
                  >
                    <BsTextCenter className="text-gray-600 text-xl" />
                    {/* tooltip */}
                    <div className="hidden" id="center">
                      <ToolTip text={"centrer"} />
                    </div>
                  </div>
                  {/* text align right */}
                  <div
                    onClick={() => textAlign("right")}
                    onMouseOver={() =>
                      document
                        .getElementById("alignRight")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("alignRight")
                        .classList.add("hidden")
                    }
                    className="bg-white flex items-center md:px-4 md:py-1 shadow-md border cursor-pointer rounded-md md:mt-1 relative"
                  >
                    <BsTextIndentLeft className="text-gray-600 text-xl" />
                    {/* tooltip */}
                    <div className="hidden" id="alignRight">
                      <ToolTip text={"aligner a droite"} />
                    </div>
                  </div>
                </div>
                <button
                  onClick={removePathStroke}
                  className="bg-white px-2 text-gray-700 text-sm font-semibold shadow-md mt-2 rounded-md py-1 hover:text-red-600"
                >
                  Annuler la transformation
                </button>
                <button
                  onClick={removePath}
                  className="bg-white px-2 text-gray-700 text-sm font-semibold shadow-md mt-2 rounded-md py-1 hover:text-green-600 ml-1"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>

          {/* clip art container */}
          <div ref={clipartRef} className="hidden">
            {ClipArt.map((sectionImages) => (
              <div className="flex flex-col" key={sectionImages.groupeTitle}>
                <p className="text-center font-semibold text-gray-700">
                  {sectionImages.groupeTitle}
                </p>
                <div className="flex justify-evenly items-center  flex-wrap bg-white">
                  {sectionImages.url.map((img) => (
                    <LazyLoadImage
                      src={img}
                      className=" md:h-14 m-2 cursor-pointer  hover:scale-150 transition-all duration-700"
                      onClick={() => addClipImg(img)}
                      key={img}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* shapes container */}
          <div className="hidden" ref={shapesRef}>
            <p className="text-center md:text-md font-semibold text-gray-700 bg-[#eee] self-start md:p-1">
              Formes géometrique basique
            </p>

            <div className="flex flex-wrap  items-center justify-around overflow-auto h-120 bg-[#eee] md:px-2 md:max-w-sm">
              {Svgs.map((svg) => (
                <div
                  onClick={() => {
                    addSvg(svg.svgSrc)
                  }}
                  className="cursor-pointer bg-white md:p-2 mx-1 hover:scale-150 transition-all duration-500"
                  key={svg.name}
                >
                  <img
                    src={svg.url}
                    alt={svg.name}
                    className="md:w-10 mx-auto"
                  />
                  <p className="text-gray-600 text-xs font-semibold text-center">
                    {svg.name}
                  </p>
                </div>
              ))}
            </div>
            {/* shapes options */}
            <div className="hidden" ref={shapeControllerRef}>
              <p className="self-start bg-[#eee] md:p-2 text-sm font-semibold italic">
                Options forme géometrique
              </p>
              <div className="flex flex-col bg-[#eee] md:p-1 w-full text-xs font-semibold">
                <div className="inline-flex items-center my-1">
                  <p className="mr-2">Couleur</p>
                  <div className="rounded-full w-5 h-5 overflow-hidden">
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                      <input
                        type="color"
                        onChange={shapesColor}
                        className="mb-1 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center my-1 w-full">
                  <p className="mr-1">Bordure</p>
                  <div className="w-full">
                    <MySlider
                      min={0}
                      max={20}
                      onChange={(val) => shapesCornerWidth(val)}
                    />
                  </div>
                </div>

                <div className="inline-flex items-center my-1 w-full">
                  <p className="mr-1">Couleur de la bordure</p>
                  <div className="rounded-full overflow-hidden h-5 w-5">
                    <input
                      type="color"
                      onChange={shapesCornerColor}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center my-1 w-full">
                  <p className="mr-1">Opacité</p>
                  <div className="w-full">
                    <MySlider
                      min={0}
                      max={10}
                      onChange={(e) => shapesOpacity(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* drawing mode  */}
          <div ref={drawingRef} className="hidden">
            <p className="bg-[#eee] md:p-2 self-start italic font-semibold">
              Mode dessin libre
            </p>
            <div className="flex flex-col bg-[#eee] md:p-2 w-full">
              {/* type de crayon */}
              <div className="flex items-center max-w-xs ">
                <p className="text-sm font-semibold italic mr-2">Mode</p>
                <NormalPicker
                  values={[
                    { value: "PencilBrush", name: "Crayon" },
                    { value: "SprayBrush", name: "Spray" },
                    { value: "CircleBrush", name: "Circle" },
                  ]}
                  onItemClick={brushesHandler}
                />
              </div>

              {/* couleur */}
              <div className="inline-flex my-1">
                <p className="mr-1 font-semibold ">Couleur</p>
                <div className="rounded-full w-5 h-5 overflow-hidden border-2 border-black">
                  <input
                    className="cursor-pointer"
                    type="color"
                    onChange={drawingColorHandler}
                  />
                </div>
              </div>
              {/* taille */}
              <div className="inline-flex my-1 items-center">
                <p className="mr-1 font-semibold  text-sm">Taille</p>
                <div className="w-full">
                  <MySlider max={10} onChange={drawingWidthHandler} />
                </div>
              </div>

              {isDrawing ? (
                <button
                  onClick={() => {
                    canvas.isDrawingMode = false
                    setIsDrawing(false)
                  }}
                  className="bg-rose-500 hover:bg-rose-600 text-white md:px-2  mb-1 rounded-full"
                >
                  Quitter le mode dessin libre
                </button>
              ) : (
                <button
                  onClick={() => {
                    canvas.isDrawingMode = true
                    setIsDrawing(true)
                  }}
                  className="bg-gray-700 hover:bg-gray-900 text-white md:px-2  mb-1 rounded-full"
                >
                  Reprendre le mode dessin libre
                </button>
              )}
            </div>
          </div>
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
