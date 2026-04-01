import './App.css'
import Banner from './components/Banner'
import CTABanner from './components/CTABanner'
import Features from './components/Features'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Pricing from './components/Pricing'
import Process from './components/Process'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <ToastContainer/>
    
      <Header cartCount={cartItems.length}></Header>
      <Banner/>
      <Features/>
      <MainSection cartItems={cartItems} setCartItems={setCartItems}/>
      <Process/>
      <Pricing/>
      <CTABanner/>
      <Footer/>
    </>
  )
}

export default App
