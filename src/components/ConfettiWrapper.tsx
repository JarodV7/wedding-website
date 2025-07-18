import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useLocation } from 'react-router-dom';

export default function ConfettiWrapper() {
  const { width, height } = useWindowSize();
  const location = useLocation();

  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (location.state?.fromRSVP) {
      setShowConfetti(true);
      setTimeout(() => setFadeOut(true), 3000);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, [location.state]);

  if (!showConfetti) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-[9999] pointer-events-none transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Confetti width={width} height={height} numberOfPieces={400} recycle={false} />
    </div>
  );
}
