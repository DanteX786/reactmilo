//import { useState } from 'react'
//import viteLogo from '/img/vite.svg'
//import './shared/styles/index.css'
import { Header } from "./features/layout/components/Header"
import { Content } from './features/layout/components/Content'
import { Footer } from "./features/layout/components/Footer"
import { Props } from "./features/layout/components/Props"
import { Article } from "./features/layout/components/Article"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Content></Content>}></Route>
        <Route path="/Props" element={<Props></Props>}></Route>
        <Route path="/Article" element={<Article></Article>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}


export default App
