import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import RSVPPage from './pages/RSVPPage';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details';
import WeddingParty from './pages/WeddingParty';
import Travel from './pages/Travel';
import Registry from './pages/Registry';
import FAQ from './pages/FAQ';
import PageTransition from './components/PageTransition';
import ConfettiWrapper from './components/ConfettiWrapper';
import { RouteProvider } from './RouteContext';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const location = useLocation();

  const handleRSVPSuccess = () => {
    setAuthenticated(true);
    setTimeout(() => setShowPages(true), 1800); // ⏱ wait for confetti (1.8s)
  };

  return (
    <RouteProvider>
    <div className="bg-pastel min-h-screen font-playfair overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <RSVPPage key="rsvp" onSuccess={handleRSVPSuccess} />
        ) : showPages ? (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
              <Route path="/details" element={<PageTransition><Details /></PageTransition>} />
              <Route path="/about" element={<><ConfettiWrapper /><PageTransition><AboutUs /></PageTransition></>} />
              <Route path="/party" element={<PageTransition><WeddingParty /></PageTransition>} />
              <Route path="/travel" element={<PageTransition><Travel /></PageTransition>} />
              <Route path="/registry" element={<PageTransition><Registry /></PageTransition>} />
              <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
              <Route path="*" element={<PageTransition><AboutUs /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
    </RouteProvider>
  );
}

export default App;
