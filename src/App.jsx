import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OpeningHours from './components/OpeningHours'

import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import Package from './Pages/Package'
import ServicePage from './Pages/ServicePage'

// Smooth fade transition between pages
const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// ScrollToTop on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#0A0C10]">
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/packages" element={<Package />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <OpeningHours />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App