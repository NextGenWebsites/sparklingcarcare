import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import Package from './Pages/Package'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import ServicePage from './Pages/ServicePage'
import Footer from './components/Footer'
import { AnimatePresence, motion } from 'framer-motion'
import OpeningHours from './components/OpeningHours '

// Wrapper component for the page transitions
const PageTransition = ({ children }) => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="page-wrapper"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <OpeningHours />
        <div className="relative overflow-hidden">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/packages" element={<Package />} />
              <Route path="/services" element={<ServicePage />} />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App