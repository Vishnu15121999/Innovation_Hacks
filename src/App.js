import React, { useRef } from 'react'
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './App.css';
import FinancialPage from './components/FinancialPage';
import Retail from './components/Retail';
import Logistic from './components/Logistic';
import Staffing from './components/Staffing';
import DigitalMarketting from './components/DigitalMarketting';
import Manufacturing from './components/Manufacturing';
import BookDemoPage from './components/BookDemoPage';
import BookDemoFinancial from './components/BookDemoFinancial';
import BookDemoRetail from './components/BookDemoRetail';
import BookDemoStaffing from './components/BookDemoStaffing';
import BookDemoDigital from './components/BookDemoDigital';
import BookDemoLogistic from './components/BookDemoLogistic';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

const App = () => {
  const careerFormRef=useRef();

  // const scrollToForm=()=>{
  //   careerFormRef.current.scrollIntoView({behavior:'smooth'})
  // }

  const scrollToForm = () => {
    if (careerFormRef.current) {
      careerFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header>
        <Header scrollToForm={scrollToForm}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/data-fusion' element={<LandingPage/>}/>
          <Route path='/finance' element={<FinancialPage/>}/>
          <Route path='retail' element={<Retail/>}/>
          <Route path='/logistic' element={<Logistic/>}/>
          <Route path='/staffing' element={<Staffing/>}/>
          <Route path='/digital-marketting' element={<DigitalMarketting/>}/>
          <Route path='/manufacturing' element={<Manufacturing/>}/>

          {/* --------------- Demo Request Pages ---------------- */}

          <Route path='/demo-request-df' element={<BookDemoPage/>}/>
          <Route path='/demo-request-fs' element={<BookDemoFinancial/>}/>
          <Route path='/demo-request-rl' element={<BookDemoRetail/>}/>
          <Route path='/demo-request-staffing' element={<BookDemoStaffing/>}/>
          <Route path='/demo-request-dm' element={<BookDemoDigital/>}/>
          <Route path='/demo-request-logistic' element={<BookDemoLogistic/>}/>

          {/* --------------- About US Page Routes --------------- */}

          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/aboutUs' element={<AboutUs scrollToForm={scrollToForm} careerFormRef={careerFormRef}/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App