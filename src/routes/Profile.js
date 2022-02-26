import React, { useState, useEffect } from "react"
import axios from "axios"
function Profile() {
  const [user, setUser] = useState({})
  const fetchUserInfos = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_CURRENT_USER}`
    )
    setUser(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    fetchUserInfos()
  }, [])
  if (user) {
    return (
      <div className="flex flex-col items-center">
        <p>nom: {user.name} </p>
        <p>email:{user.email} </p>
        <p>photo de profil:</p>
        <p>numéro de téléphone:</p>
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

export default Profile
