import React from 'react'
import { Routes, Route } from "react-router-dom"
import Sidebar from '../layout/Sidebar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MyFiles from '../pages/MyFiles'
import Public from '../pages/Public'
import Register from '../pages/Register'

const Main: React.FC<any> = () => {
  return (
    <Sidebar>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/files/my" element={<MyFiles/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/files' element={<Public />} />
        </Routes>
    </Sidebar>
  )
}

export default Main