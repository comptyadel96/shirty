import React, { useState } from "react"

function Pagination({
  items = ["1", "2", "3", "4", "666", "6", "7", "8", "9", "10"],
  itemPerPage = 2,
  onClickNext,
  onClickPrevious,
  onChange,
}) {
  // https://jsonplaceholder.typicode.com/posts
  const [currentPage, setCurrentPage] = useState(1)

  let totalPages = Math.ceil(items.length / itemPerPage)
  // const pagesArr = []
  // for (let index = 1; index <= totalPages; index++) {
  //   pagesArr.push(index)
  // }
  return (
    <div className=" flex items-center justify-evenly lg:px-2 lg:py-1 bg-white  relative w-1/3 self-end mb-5 mr-3">
      {/* prev and next buttons */}
      <div className="flex items-center w-72 ">
        {currentPage > 1 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1)
              onClickPrevious()
            }}
            className="p-2 bg-white font-semibold rounded-md border border-cyan-500 hover:text-cyan-500"
          >
            Page précedente
          </button>
        )}

        {currentPage < totalPages && (
          <button
            className="p-2 bg-cyan-500 font-semibold hover:bg-cyan-600 text-white rounded-md ml-auto border border-transparent"
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1)
                onClickNext()
              }
            }}
          >
            Page suivante
          </button>
        )}
      </div>
      <div className="flex items-center">
        <p className="text-sm font-semibold mr-2">Page</p>
        <input
          type="text"
          value={currentPage}
          className="w-10 outline-none border font-semibold border-cyan-500  rounded-md text-center mr-2"
          onChange={(e) => {
            let filteredInput = e.target.value.match(/[0-9]*/)
            setCurrentPage(Number(filteredInput))

            if (filteredInput > totalPages) {
              setCurrentPage(totalPages)
            }
          }}
          onKeyDown={(e) => {
            // prevent white Spaces input types
            const key = e.keyCode
            const keyCodes = [
              32, 160, 5760, 8192, 8192, 8194, 8195, 8196, 8197, 8198, 8199,
              8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
            ]
            if (keyCodes.some((val) => val === key)) {
              e.preventDefault()
            }

            if (e.key === "Enter") {
              console.log(e.target.value)
              setCurrentPage(e.target.value)
            }
          }}
        />
        <p className="text-sm font-semibold"> sur {totalPages} </p>
      </div>
    </div>
  )
}

export default Pagination
