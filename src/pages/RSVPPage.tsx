import React, { useState } from 'react';
import Confetti from 'react-confetti';

interface RSVPPageProps {
  onSuccess: () => void;
}

const RSVPPage: React.FC<RSVPPageProps> = ({ onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = () => {
  if (code === 'yes2026') {
    sessionStorage.setItem('fromRSVP', 'true'); // ✅ mark for next page
    onSuccess();
  } else {
    setError('Invalid RSVP code. Try again.');
  }
};

  return (
    <div className="relative bg-pastel bg-cover bg-center h-screen overflow-hidden">
      {success}
      <div className="absolute inset-0"></div>

      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center text-primary px-4 transition-opacity duration-1000 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-5xl font-playfair mb-2">Caige & Elise</h1>
        <p className="text-lg animate-pulse">May 23, 2026 • Whispering Pines Estate</p>

        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit();
          }}
          placeholder="Enter RSVP code"
          className={`mt-6 mb-3 px-4 py-2 rounded-lg bg-pastel/90 text-black placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-xs text-center transition transform ${
            error ? 'animate-shake' : ''
          }`}
        />

        <button
          onClick={handleSubmit}
          className="bg-primary text-pastel px-5 py-2 rounded-full hover:scale-105 transition shadow-md"
        >
          RSVP to Enter
        </button>

        {error && <p className="text-red-300 text-sm mt-2">{error}</p>}

        <button
          className="mt-4 text-sm text-pastel/80 underline hover:text-pastel"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? 'Hide Hint' : 'Forgot your RSVP code?'}
        </button>

        {showHint && (
          <div className="text-pastel text-sm mt-2 bg-pastel/10 p-2 rounded-md backdrop-blur-sm">
            Hint: It starts with "yes" and ends with the year...
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVPPage;
