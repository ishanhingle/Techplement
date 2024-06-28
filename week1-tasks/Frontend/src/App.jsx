import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Signin from './pages/Signin'
import AddQuote from './pages/AddQuote'
import Signup from './pages/Signup'
import Search from './pages/Search'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<AddQuote/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
      
    </>
  )
}

export default App
