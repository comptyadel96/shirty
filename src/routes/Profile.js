import React, { useState, useEffect } from "react"

function Profile() {
  const [user, setUser] = useState(null)
  const fetchUserInfos = async () => {
    await fetch(`${process.env.REACT_APP_URL_CURRENT_USER_GOOGLE}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }).then((res) => res.json().then((data) => setUser(data)))
  }
  useEffect(() => {
    fetchUserInfos()
  }, [])
  if (user) {
    return (
      <div className="flex flex-col items-center h-screen">
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
