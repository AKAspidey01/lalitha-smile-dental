import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import Home from './components/Home/Home'
import ServicesList from './components/ServicesList/ServicesList'
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' Component={Home} exact={true}/>
        <Route path='/services' Component={ServicesList} exact={true}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
