import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner'
import CTABanner from './components/CTABanner'
import Features from './components/Features'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Pricing from './components/Pricing'
import Process from './components/Process'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer/>
    
      <Header></Header>
      <Banner/>
      <Features/>
      <MainSection/>
      <Process/>
      <Pricing/>
      <CTABanner/>
    </>
  )
}

export default App
