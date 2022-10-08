// import { useState } from 'react'

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import LeftBar from "./components/LeftBar"
import barData from "./data/leftBar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Academics from "./pages/Academics"
import Infrastructure from "./pages/Infrastructure"
import Faculty from "./pages/Faculty"
import Admission from "./pages/Admission"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

export default () => {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Header />
      <div className="drop-shadow-none bg-blue-50 flex flex-col lg:flex-row justify-between p-10 gap-14">
        <div className="order-2 lg:order-none flex flex-col sm:flex-row lg:flex-col gap-14 mx-auto">
          {/* <img src="/img/Logo.png" alt="school logo" className="m-auto" /> */}
          {barData.map((barD, index) => <LeftBar key={index} data={barD} />)}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  )
}
