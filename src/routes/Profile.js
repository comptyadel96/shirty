import React, { useState, useEffect } from "react"
// import AuthContext from "../utils/AuthContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
function Profile() {
  // const currUser = useContext(AuthContext)
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const fetchUserInfos = async () => {
    await fetch(`${process.env.REACT_APP_URL_CURRENT_USER_FACEBOOK}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }).then((res) =>
      res.json().then((user) => {
        setUser(user)
        console.log(user)
      })
    )
  }
  useEffect(() => {
    fetchUserInfos()
  }, [])
  const facebookLogout = async () => {
    window.open(
      "http://localhost:5000/api/shirty/auth/facebook/logout",
      "_self"
    )
  }
  const googleLogout = async () => {
    window.open("http://localhost:5000/api/shirty/auth/google/logout", "_self")
  }
  if (user) {
    return (
      <div className="flex flex-col  h-screen mt-20 white">
        <div className="flex flex-col  font-semibold bg-white max-w-fit lg:px-4 lg:py-2 lg:m-4 drop-shadow-md border border-gray-300 rounded-lg">
          <div className="flex flex-col items-center">
            <img
              src={`${user.profilPicture}`}
              className="h-20 w-20 rounded-full mr-2"
              alt="profil pic"
            />
            <p className="lg:text-2xl"> {user.name} </p>
          </div>
          <p className="font-normal text-gray-500">{user.email} </p>
          <div className="flex items-center">
            <p className="font-normal text-gray-500">créer le </p>{" "}
            <p className="font-normal text-gray-500 ml-1">
              {user.createdAt.split("").slice(0, 10)}{" "}
            </p>
          </div>{" "}
          <button
            className="border border-red-500 md:px-2 text-sm self-end my-3 text-red-500 bg-white max-w-fit rounded-lg hover:text-white hover:bg-red-500"
            onClick={() => {
              user.authProvider === "facebook"
                ? facebookLogout()
                : googleLogout()
            }}
          >
            Se déconnecter
          </button>
        </div>
      </div>
    )
  } else {
    return <div>chargement...</div>
  }
}

export default Profile
