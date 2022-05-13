import Form from './components/form'
import React from 'react'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addpage from './components/addpage'
import Notfound from './components/notfound'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/addpage" element={<Addpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
