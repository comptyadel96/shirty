import React, { useState, useEffect} from "react"
// import AuthContext from "../utils/AuthContext"

function Profile() {
  // const currUser = useContext(AuthContext)
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
      res.json().then((data) => {
        setUser(data)
        console.log(data)
      })
    )
  }
  useEffect(() => {
    fetchUserInfos()
  }, [])
  if (user) {
    return (
      <div className="flex flex-col items-center h-screen mt-28">
        <button
          className="border md:px-2 md:py-2 text-white bg-red-500"
          onClick={() => console.log("disconnected")}
        >
          se deconnecter
        </button>
        <p>nom: {user.name} </p>
        <p>email:{user.email} </p>
        <p>
          photo de profil:
          <img
            src={`${user.profilPicture}`}
            className="h-48 w-48"
            alt="profil pic"
          />
        </p>
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

export default Profile
