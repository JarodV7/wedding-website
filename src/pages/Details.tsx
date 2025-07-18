import React from 'react';

export default function Details() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Wedding Details</h2>
        <p className="mb-4 indent-6">Join us for the wedding ceremony at Whispering Pines Estate.</p>
        <p className="mb-4 indent-6">Saturday, May 23, 2026 at 4:00 PM</p>
        <p className="mb-4 indent-6">
          <a href="https://www.google.com/maps/dir/?api=1&destination=Whispering+Pines+Estate" target="_blank" rel="noreferrer" className="text-primary underline">
            Get Directions to Whispering Pines Estate
          </a>
        </p>
      </div>
    </section>
  );
}