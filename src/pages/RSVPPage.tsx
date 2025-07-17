import React, { useState } from 'react';

interface RSVPPageProps {
  onSuccess: () => void;
}

const RSVPPage: React.FC<RSVPPageProps> = ({ onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (code === 'yes2026') {
      onSuccess();
    } else {
      setError('Invalid RSVP code. Try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-xl text-center w-80">
        <h1 className="text-3xl font-bold text-[#5c7340] mb-2">Elise & Caige</h1>
        <p className="mb-4">May 23, 2026</p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit();
          }}
          placeholder="Enter RSVP code"
          className="p-2 border rounded-md w-full max-w-xs text-center"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#6a8a4a] text-white px-4 py-2 rounded hover:bg-[#5c7340] transition"
        >
          RSVP to Enter
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default RSVPPage;