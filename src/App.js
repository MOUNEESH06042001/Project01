import React from 'react'
import Service from './Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Counter from './Counter'
import Usestate from './Usestate'
import Reducer from './Reducer'
import Callback from './Callback'
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about"element={<About/>}/>
        <Route path="contact"element={<Contact/>}/>
        <Route path="Service"element={<Service/>}/>
        <Route path="Counter"element={<Counter/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
  }
