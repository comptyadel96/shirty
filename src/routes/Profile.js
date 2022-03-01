import React, { useState, useEffect } from "react"

function Profile() {
  const [user, setUser] = useState({})
  const fetchUserInfos = async () => {
    const userObject = await fetch(
      `${process.env.REACT_APP_URL_CURRENT_USER_GOOGLE}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      }
    )
    setUser(userObject.json())
    console.log(user)
  }
  useEffect(() => {
    fetchUserInfos()
  }, [])
  if (user) {
    return (
      <div className="flex flex-col items-center">
        {/* <p>nom: {user.name} </p>
        <p>email:{user.email} </p>
        <p>photo de profil:</p>
        <p>numéro de téléphone:</p> */}
        {user && <p>{user.name} </p>}
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

export default Profile
