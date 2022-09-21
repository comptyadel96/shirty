import React, { useEffect } from "react"

function Caroussel() {
  useEffect(() => {
    let slideIndex = 0
    showSlides()

    function showSlides() {
      let i
      let slides = document.getElementsByClassName("mySlides")
      for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none"
        slides[i].style.width = "0%"
        slides[i].style.opacity = "0"
      }
      slideIndex++
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      // slides[slideIndex - 1].style.display = "block"
      slides[slideIndex - 1].style.width = "100%"
      slides[slideIndex - 1].style.opacity = "1"
      setTimeout(showSlides, 4000) // Change image every 4 seconds
    }
  }, [])
  return (
    <div className="lg:mb-20 lg:mt-6 relative py-5 self-center  w-full lg:max-h-[35rem]  lg:min-h-[35rem] overflow-hidden ">
      <div className="mySlides  lg:max-h-[33rem] max-h-auto transition-opacity shadow-md max-w-fit mx-auto border">
        <img
          src="/images/shop-winter.png"
          alt="winter collection"
          className=" lg:max-h-[33rem]  object-cover mx-auto "
        />
      </div>
      <div className="mySlides  lg:max-h-[33rem] max-h-auto transition-opacity shadow-md max-w-fit mx-auto border">
        <img
          src="/images/shop-summer.png"
          alt="summer collection"
          className=" lg:max-h-[33rem]  object-cover mx-auto "
        />
      </div>
      {/* colorful image */}
      <div className="mySlides lg:max-h-[33rem] max-h-max  transition-opacity shadow-md max-w-fit mx-auto border">
        <img
          src="/images/colorful.png"
          alt="colorful collection"
          className=" lg:max-h-[33rem]  object-cover mx-auto "
        />
      </div>
    </div>
  )
}

export default Caroussel
