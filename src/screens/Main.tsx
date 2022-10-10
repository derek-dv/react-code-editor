import React from 'react'
import { Routes, Route } from "react-router-dom"
import Sidebar from '../layout/Sidebar'
import Home from '../pages/Home'
import MyFiles from '../pages/MyFiles'

const Main: React.FC<any> = () => {
  return (
    <Sidebar>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/files/mine" element={<MyFiles/>} />
        </Routes>
    </Sidebar>
  )
}

export default Main