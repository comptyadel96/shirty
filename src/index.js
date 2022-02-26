import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import reportWebVitals from "./reportWebVitals"
import Home from "./routes/Home"
// import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import MakeShirt from "./routes/MakeShirt"
// import GetShirt from "./routes/GetShirt"
import Profile from "./routes/Profile"
ReactDOM.render(
  <BrowserRouter>
    {/* <Navbar /> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
