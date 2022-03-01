import React from "react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
const getItems = () =>
  Array(15)
    .fill(0)
    .map((_, ind) => ({ id: `t-shirt num:${ind + 1}` }))

function HorizontalScroll() {
  const [items] = React.useState(getItems)

  const handleClick = () => {}

  return (
    <div className="md:w-2/3 w-full  relative z-20 my-5 ">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        scrollContainerClassName=" z-40 md:overflow-x-hidden"
        itemClassName="z-50  md:h-96 h-56 md:mx-4 mx-0 flex justify-center items-center "
        transitionDuration={700}
      >
        {items.map(({ id }) => (
          <Card
            itemId={id} 
            title={id}
            key={id}
            onClick={handleClick}
          />
        ))}
      </ScrollMenu>
    </div>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <AiOutlineArrowLeft
      className={
        !isFirstItemVisible
          ? "cursor-pointer bg-gray-700 text-white absolute top-1/2 -left-14 md:text-4xl rounded-full hover:scale-110 hover:-translate-x-3 transition-all duration-500"
          : "opacity-0 cursor-default -z-10"
      }
      onClick={() => scrollPrev()}
    />
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <AiOutlineArrowRight
      onClick={() => scrollNext()}
      className={
        !isLastItemVisible
          ? "cursor-pointer bg-gray-700 text-white absolute top-1/2 -right-14 md:text-4xl rounded-full hover:scale-110 hover:translate-x-3 transition-all duration-500 "
          : "opacity-0 cursor-default -z-10"
      }
    />
  )
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      className="py-2 px-4  md:w-48 z-50 "
    >
      <div
        className={
          visibility.isItemVisible(itemId)
            ? "hover:scale-150  z-50 md:transition-all cursor-pointer md:duration-700 w-40 md:scale-100 md:opacity-100  "
            : " md:transition-all md:duration-500  md:-scale-100 opacity-10 w-40 "
        }
      >
        <img src="/images/shirt-purple.png" alt="shirt" className="" />
        <p className="text-center text-yellow-400">{title}</p>
      </div>
    </div>
  )
}

export default HorizontalScroll
