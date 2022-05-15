import React from "react"

function Error() {
  return (
    <div className="h-screen">
      <p className="font-semibold text-center md:text-3xl text-red-500 ">
        La page que vous rechercher n'est plus disponible, elle a peut-etre été
        déplacer ou supprimer !{" "}
      </p>
    </div>
  )
}

export default Error
