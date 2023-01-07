// eslint-disable-next-line no-unused-vars
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    
    <>
    {
      loading ?
      <div className='loading__container'>
      <svg viewBox="0 0 50 50" className="loading__svg">
        <circle cx="25" cy="25" r="20" />
      </svg>
      </div>
      :
    
    <><Header /><main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Testimonials />
            <Contact />

          </main><Footer /><ScrollUp /></>
}
    </>
  )
}

export default App;
