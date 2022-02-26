import React from "react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
const getItems = () =>
  Array(15)
    .fill(0)
    .map((_, ind) => ({ id: `t-shirt num:${ind + 1}` }))

function HorizontalScroll() {
  const [items, setItems] = React.useState(getItems)

  const handleClick = () => {}

  return (
    <div className="md:w-2/3 w-full h-fit relative">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        scrollContainerClassName=" my-8 overflow-x-hidden"
      >
        {items.map(({ id }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
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
          ? "cursor-pointer bg-black text-white absolute top-1/2 -left-14 md:text-4xl rounded-full"
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
          ? "cursor-pointer bg-black text-white absolute top-1/2 -right-14 md:text-4xl rounded-full "
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
      className="mx-1 py-2 px-4 cursor-pointer md:w-48 hover:scale-110 transition-all duration-500"
      tabIndex={0}
    >
      <img src="/images/shirt-purple.png" alt="shirt" className="max-h-fit" />

      <p className="text-center">{title}</p>
    </div>
  )
}

export default HorizontalScroll
