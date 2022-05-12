
import Form from './components/form'
import React from 'react'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addpage from './components/addpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/addpage" element={<Addpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
