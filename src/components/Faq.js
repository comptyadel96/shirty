import React, { useRef, useState} from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
function Faq() {
  const [faq1Clicked, setFaq1Clicked] = useState(false)
  const [faq2Clicked, setFaq2Clicked] = useState(false)
  const [faq3Clicked, setFaq3Clicked] = useState(false)
  const faq1 = useRef(null)
  const faq2 = useRef(null)
  const faq3 = useRef(null)
  const showSubFaq = (ref) => {
    if (ref.current.classList.contains("max-h-0")) {
      ref.current.classList.remove("max-h-0")
      ref.current.classList.add("h-auto")
    } else {
      ref.current.classList.remove("h-auto")
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
        className="relative md:px-2 md:py-1 text-center md:my-1    bg-white shadow-md border-2 rounded-full cursor-pointer md:max-w-sm"
      >
        <p className="flex items-center text-gray-700">
          Est-ce que mouha a une grosse bite ?{" "}
          {!faq1Clicked ? (
            <AiOutlineArrowDown className="ml-1" />
          ) : (
            <AiOutlineArrowUp className="ml-1" />
          )}
        </p>
        {/* response */}
        <div
          ref={faq1}
          className=" absolute top-9 left-0 z-50  bg-gray-800  cursor-default overflow-hidden max-h-0  "
        >
          <p className="text-white md:p-1 ">
            Non, il a avouer qu'il n'a pas de bite bien grosse , juste un 8
            centimétres 🥴
          </p>
        </div>
      </div>
      {/* question 2 */}
      <div
        onClick={() => {
          showSubFaq(faq2)
          setFaq2Clicked(!faq2Clicked)
        }}
        className="relative md:px-2 md:py-1 text-center md:my-1    bg-white shadow-md border-2 rounded-full cursor-pointer md:max-w-sm"
      >
        <p className="flex items-center text-gray-700">
          shirty pourra vous voler votre argent ?{" "}
          {!faq2Clicked ? (
            <AiOutlineArrowDown className="ml-1" />
          ) : (
            <AiOutlineArrowUp className="ml-1" />
          )}
        </p>
        {/* response */}
        <div
          ref={faq2}
          className=" absolute top-9 left-0 z-50  bg-gray-800  cursor-default overflow-hidden max-h-0   "
        >
          <p className="text-white md:p-1 ">
            oui , si notre buisness ne marchera pas comme prévu , le développeur
            pourra detourner les fonds afin de s'acheter chemma
          </p>
        </div>
      </div>
      {/* question 3 */}
      <div
        onClick={() => {
          showSubFaq(faq3)
          setFaq3Clicked(!faq3Clicked)
        }}
        className="relative md:px-2 md:py-1 text-center md:mb-28 mt-1   bg-white shadow-md border-2 rounded-full cursor-pointer md:max-w-sm"
      >
        <p className="flex items-center text-gray-700">
          shirty pourra vous voler votre argent ?{" "}
          {!faq3Clicked ? (
            <AiOutlineArrowDown className="ml-1" />
          ) : (
            <AiOutlineArrowUp className="ml-1" />
          )}
        </p>
        {/* response */}
        <div
          ref={faq3}
          className=" absolute top-9 left-0 z-50  bg-gray-800  cursor-default overflow-hidden max-h-0   "
        >
          <p className="text-white md:p-1 ">
            oui , si notre buisness ne marchera pas comme prévu , le développeur
            pourra detourner les fonds afin de s'acheter chemma
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq
