import React, { useState, useEffect } from "react"

import AuthContext from "../utils/AuthContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Profile"
import Footer from "../components/Footer"
import WelcomeScreen from "./WelcomeScreen"
import AdminDashboard from "./AdminDashboard"
import Error from "./Error"
import Login from "./Login"
import Navbar from "../components/Navbar"
import MakeShirt from "./MakeShirt"
import GetShirt from "./GetShirt"

function Home() {
  const [currUser, setCurrUser] = useState(null)
  // const [hasGoogleAccount, setHasGoogleAccount] = useState(false)
  // const [hasFacebookAccount, setHasFacebookAccount] = useState(false)
  const fetchUserGoogle = async () => {
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
          // setHasGoogleAccount(true)
          return res.json()
        } else {
          return null
        }
      })
      .then((data) => {
        if (data) {
          setCurrUser(data)
          console.log(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const fetchUserFacebook = async () => {
    fetch(`${process.env.REACT_APP_URL_CURRENT_USER_FACEBOOK}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          // setHasFacebookAccount(true)
          return res.json()
        } else {
          return null
        }
      })
      .then((data) => {
        if (data) {
          setCurrUser(data)
          console.log(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchUserGoogle()
    fetchUserFacebook()
  }, [])

  return (
    <AuthContext.Provider value={{ currUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/makeShirt" element={<MakeShirt />} />
          <Route path="getShirt" element={<GetShirt />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default Home
