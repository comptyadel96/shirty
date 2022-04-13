import React from "react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import {
  IoIosArrowDropright,
  IoIosArrowDropleft
} from "react-icons/io"
import ProfilCard from "./ProfilCard"
const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: `t-shirt num:${ind + 1}` }))
function ScrollDesigners() {
  const [items] = React.useState(getItems)
  const handleClick = () => {}
  return (
    <div className="w-full   relative z-20 bg-white my-2">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        scrollContainerClassName="z-40 md:overflow-x-hidden"
        transitionDuration={700}
      >
        {items.map(({ id }) => (
          <ProfilCard itemId={id} key={id} onClick={handleClick} />
        ))}
      </ScrollMenu>
    </div>
  )
}
function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <IoIosArrowDropleft
      className={
        !isFirstItemVisible
          ? "cursor-pointer bg-white text-gray-800  absolute top-1/2 left-4  z-50  md:text-4xl rounded-full  transition-all duration-500"
          : "opacity-0 cursor-default -z-10 "
      }
      onClick={() => scrollPrev()}
    />
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <IoIosArrowDropright
      onClick={() => scrollNext()}
      className={
        !isLastItemVisible
          ? "cursor-pointer bg-white text-gray-800 absolute top-1/2 right-5  z-50 md:text-4xl rounded-full  transition-all duration-500 "
          : "opacity-0 cursor-default -z-10"
      }
    />
  )
}

export default ScrollDesigners
