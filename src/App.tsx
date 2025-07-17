import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import RSVPPage from './pages/RSVPPage';
import WeddingParty from './pages/WeddingParty';
import Details from './pages/Details';
import AboutUs from './pages/AboutUs';
import Travel from './pages/Travel';
import Registry from './pages/Registry';
import FAQ from './pages/FAQ';

function App() {
  //const [isRSVPed, setIsRSVPed] = useState(localStorage.getItem('rsvped') === 'true');
  const [isRSVPed, setIsRSVPed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRSVPSuccess = () => {
    //localStorage.setItem('rsvped', 'true');
    setIsRSVPed(true);
    navigate('/about');
  };

  return (
    <div className="relative bg-gradient-to-br from-[#dce7d6] via-[#fdf4c8] to-[#f7d6dc] min-h-screen font-serif text-[#2f3b2f]">
      <img src="/img/rose.svg" alt="rose" className="absolute top-4 right-4 w-40 opacity-10 pointer-events-none" />
      <img src="/img/couple.svg" alt="couple" className="absolute bottom-4 left-4 w-40 opacity-10 pointer-events-none" />
      {isRSVPed && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {!isRSVPed && <Route path="/" element={<RSVPPage onSuccess={handleRSVPSuccess} />} />}
          {isRSVPed ? (
            <>
              <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
              <Route path="/party" element={<PageWrapper><WeddingParty /></PageWrapper>} />
              <Route path="/details" element={<PageWrapper><Details /></PageWrapper>} />
              <Route path="/travel" element={<PageWrapper><Travel /></PageWrapper>} />
              <Route path="/registry" element={<PageWrapper><Registry /></PageWrapper>} />
              <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
              <Route path="*" element={<Navigate to="/about" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    style={{ padding: '1.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', maxWidth: '64rem', margin: '2rem auto 0 auto' }}
  >
    {children}
  </motion.div>
);

export default App;