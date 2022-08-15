import React, { useRef, useState } from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
function Faq() {
  const [faq1Clicked, setFaq1Clicked] = useState(false)
  const [faq2Clicked, setFaq2Clicked] = useState(false)
  const faq1 = useRef(null)
  const faq2 = useRef(null)

  const showSubFaq = (ref) => {
    if (ref.current.classList.contains("max-h-0")) {
      ref.current.classList.remove("max-h-0")
      ref.current.classList.add("max-h-96")
    } else {
      ref.current.classList.remove("max-h-96")
      ref.current.classList.add("max-h-0")
    }
  }

  return (
    <div className="flex flex-col items-center md:my-5 ">
      <p className="text-center text-gray-700 md:text-2xl">FAQ</p>
      {/* question 1 */}
      <div
        onClick={() => {
          showSubFaq(faq1)
          setFaq1Clicked(!faq1Clicked)
        }}
        className="md:px-3 md:py-1 text-center md:my-1  bg-white border-2 cursor-pointer rounded-2xl md:max-w-xs"
      >
        <p className="flex items-center text-gray-700 font-semibold">
          Est-ce que l'homme est intelligent ?{" "}
          {!faq1Clicked ? (
            <AiOutlineArrowDown className="ml-1" />
          ) : (
            <AiOutlineArrowUp className="ml-1" />
          )}
        </p>
        {/* response */}
        <div
          ref={faq1}
          className="max-h-0 overflow-hidden transition-all duration-700 text-center"
        >
          <p className="text-gray-600  md:py-1 max-w-[16rem]">
            Non, quelqu'un a essayer de draguer une fille en lui disant "you are
            like sugar" , elle a tous de suite lever les vitre de sa voiture et
            elle s'est barrer
          </p>
        </div>
      </div>

      {/* question 2 */}
      <div className=" flex flex-col  items-center md:px-3 md:py-1 md:my-1  bg-white border-2 cursor-pointer rounded-2xl md:max-w-sm">
        <p
          onClick={() => {
            showSubFaq(faq2)
            setFaq2Clicked(!faq2Clicked)
          }}
          className="flex items-center  text-gray-700 font-semibold"
        >
          Shirty pourra voler votre argent ?
          {!faq2Clicked ? (
            <AiOutlineArrowDown className="ml-1" />
          ) : (
            <AiOutlineArrowUp className="ml-1" />
          )}
        </p>
        <div
          className="max-h-0 overflow-hidden transition-all duration-700 text-center "
          ref={faq2}
        >
          <p className="text-gray-600  md:py-1 max-w-[16rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae ea ratione unde minus
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq
