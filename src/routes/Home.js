import React, { useState, useEffect } from "react"

import AuthContext from "../utils/AuthContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Profile"
import Footer from "../components/Footer"
import WelcomeScreen from "./WelcomeScreen"

function Home() {
  const [currUser, setCurrUser] = useState(null)
  const fetchUserDetails = async () => {
    fetch(`${process.env.REACT_APP_URL_CURRENT_USER_GOOGLE}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          return null
        }
      })
      .then((data) => {
        if (data) {
          setCurrUser(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchUserDetails()
  }, [])

  return (
    <AuthContext.Provider value={{ currUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default Home
