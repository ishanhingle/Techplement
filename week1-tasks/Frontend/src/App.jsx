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
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signin' element={<Signup/>}/>
        <Route path='/add' element={<AddQuote/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
