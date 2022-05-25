import React, { useEffect, useRef, useState } from "react"
import { fabric } from "fabric"
import shirtsArray from "../components/Shirts"
// import axios from "axios"

function MakeShirt() {
  const canvasRef = useRef(null)
  const imageRef = useRef(null)
  const [canvas, setCanvas] = useState(null)
  const [image, setImage] = useState(null)
  const [shirtId, setShirtId] = useState(shirtsArray[0])
  const [text, setText] = useState(null)

  // const [isDrawing, setIsDrawing] = useState(false)
  // initialize canvas and image objects on mount
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      selectionColor: "rgba(0,0,0,.5)",
      selectionLineWidth: 3,
      // isDrawingMode: isDrawing,
    })
    canvas.freeDrawingBrush.color = "yellow"
    canvas.freeDrawingBrush.strokeLineCap = "round"
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
      textAlign: "justify-center",
      fontSize: 30,
      editable: true,
    })
    canvas.centerObject(text)

    setText(text)
    canvas.add(text)
    canvas.renderAll()
  }
  // change text  font
  const textFontHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("fontFamily", e.target.value)
    }
    canvas.renderAll()
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
  //  change text stroke width
  const textStrokeWidthHandler = (e) => {
    if (canvas && canvas.getActiveObject()) {
      canvas.getActiveObject().set("strokeWidth", e.target.value)
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
        document.querySelector("#controller").classList.remove("bg-yellow-400")
      }
    })
  // if the user click on the shirt we hide the text options
  canvas &&
    canvas.on("mouse:up", function (e) {
      if (e.target.type !== "i-text") {
        document.querySelector("#text-options").className += " hidden"
        document.querySelector("#controller").classList.add("bg-yellow-400")
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
  const imageGrayscale = () => {
    // image.filters.push(new fabric.Image.filters.Grayscale())
    // image.filters.push(new fabric.Image.filters.Invert())
    image.filters.push(
      new fabric.Image.filters.BlendColor({
        color: "purple",
        mode: "multiply",
      })
    )
    image.applyFilters()

    canvas.add(image)
    console.log(image == null)
  }
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
  const filterContrastHandler = (e) => {
    image.filters = []
    image.filters.push(
      new fabric.Image.filters.Contrast({
        contrast: e.target.value,
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
  // const filterNoiseHandler = (e) => {
  //   image.filters = []
  //   image.filters.push(
  //     new fabric.Image.filters.Noise({ noise: e.target.value })
  //   )
  //   image.applyFilters()
  //   canvas.renderAll()
  // }
  const filterPixelateHandler = (e) => {
    image.filters = []
    image.filters.push(new fabric.Image.filters.Pixelate({ blocksize: 8 }))
    image.applyFilters()
    canvas.renderAll()
  }
  // const filterTintHandler = (e) => {
  //   image.filters = []
  //   image.filters.push(
  //     new fabric.Image.filters.Tint({
  //       color: e.target.value,
  //       opacity: 0.5,
  //     })
  //   )
  //   image.applyFilters()
  //   canvas.renderAll()
  // }

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
          className="flex flex-col items-center md:ml-56 md:mr-16 mt-5 p-2 bg-yellow-400 rounded-2xl transition-all duration-1000 "
        >
          {/* add logo */}
          {!image && (
            <div className="flex flex-col items-center flex-wrap">
              <p className="font-bold text-yellow-700 mb-2">
                Ajouter votre logo
              </p>
              <input type="file" onChange={handleImageChange} />
            </div>
          )}
          {/* text options */}
          <div
            id="text-options"
            className="hidden transition-all duration-1000"
          >
            {/* color */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">couleur du text</p>
              <input type="color" onChange={textColorHandler} />
            </div>
            {/* text stroke color */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">couleur du contour</p>
              <input type="color" onChange={textStrokeColorHandler} />
            </div>
            {/* text stroke width */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">épaisseur du contour</p>
              <input
                type="range"
                onChange={textStrokeWidthHandler}
                max={3}
                defaultValue={0}
                min={0}
              />
            </div>

            {/* font size */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">taille du text</p>
              <input
                type="number"
                onChange={textSizeHandler}
                min={30}
                max={100}
                defaultValue={30}
              />
            </div>
            {/* font style */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">police du text</p>
              <select onChange={textFontHandler}>
                <option value="Festive">Festive</option>
                <option value="Monoton">Monoton</option>
                <option value="ZCOOL KuaiLe">ZCOOL-KuaiLe</option>
                <option value="Fredericka the Great">
                  Fredericka the Great
                </option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
            </div>
            {/* font weight */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">poid du text</p>
              <select onChange={textWeightHandler}>
                <option value="normal">normal</option>
                <option value="bold">gras</option>
              </select>
            </div>
            {/* font style */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">style du text</p>
              <select onChange={textStyleHandler}>
                <option value="normal">normal</option>
                <option value="italic">italique</option>
              </select>
            </div>
            {/* font underline */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">souligner le text</p>
              <input type="checkbox" onChange={textUnderlineHandler} />
            </div>
            {/* font overline */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">surligner le text</p>
              <input type="checkbox" onChange={textOverlineHandler} />
            </div>
            {/* font strike */}
            <div className="flex items-center my-2 mx-4">
              <p className="text-gray-700 mr-1">barré le text</p>
              <input type="checkbox" onChange={textStrikeHandler} />
            </div>
          </div>
          {/* image controller */}
          <div ref={imageRef} className="bg-gray-100 hidden">
            {/* filtre */}
            <div className="flex items-center my-2 mx-4">
              <p>appliquer un filtre a votre image</p>
              <select>
                <option value={null}>choisir...</option>
                <option onClick={filterGrayscaleHandler}>grayScale</option>
                <option onClick={filterSepiaHandler}>Sepia</option>
                <option onClick={filterPixelateHandler}>Pixeliser</option>
                <option onClick={filterInvertHandler}>
                  inverser les couleurs
                </option>
              </select>
            </div>
            {/* couleur */}
            <div className="flex items-center my-2 mx-4">
              <p>couleur du filtre</p>
              <input type="color" onChange={filterColorHandler} />
            </div>
            {/* contrast */}
            <div className="flex items-center my-2 mx-4">
              <p>contraste de l'image</p>
              <input
                min={0}
                max={50}
                type="range"
                onChange={filterContrastHandler}
                defaultValue={0}
              />
            </div>
          </div>

          {/* add text */}
          {!text && (
            <button
              onClick={insertText}
              className="mr-5 my-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Ajouter du text
            </button>
          )}
          {/* delete object */}
          <div className="flex items-center my-2 mx-4">
            <button
              className="text-red-600 bg-white rounded-full py-1 px-4 hover:text-white hover:bg-red-500"
              onClick={deleteObject}
            >
              Supprimer
            </button>
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
              height: "300px",
              width: "300px",
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
      {image != null && (
        <button onClick={imageGrayscale}>filtrer l'image</button>
      )}
    </div>
  )
}

export default MakeShirt
