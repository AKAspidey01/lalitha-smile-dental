import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import Home from './components/Home/Home'
import ServicesList from './components/ServicesList/ServicesList'
import "bootstrap-icons/font/bootstrap-icons.css";
import { LenisProvider } from './utils/LenisProvider'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Blog from './components/Blog/Blog'



function App() {

  return (
    <LenisProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' Component={Home} exact={true}/>
          <Route path='/about' Component={AboutUs} exact={true}/>
          <Route path='/services' Component={ServicesList} exact={true}/>
          <Route path='/contact' Component={ContactUs} exact={true}/>
          <Route path='/blog' Component={Blog} exact={true}/>
        </Routes>
        <Footer/>
      </Router>
    </LenisProvider>
  )
}

export default App
