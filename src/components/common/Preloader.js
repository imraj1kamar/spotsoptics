'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Session me ek baar dekhne ke baad baar-baar delay na kare
    if (typeof window !== 'undefined' && sessionStorage.getItem('spot_preloader_shown')) {
      setIsLoading(false);
      return;
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('spot_preloader_shown', 'true');
    }

    // Fast 400ms display, fir 300ms smooth fade-out (Total ~700ms)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 400);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style>{`
        @keyframes spotSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
        style={{
          zIndex: 99999,
          backgroundColor: 'rgba(35, 32, 32, 0.96)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          overflow: 'hidden',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          opacity: isFading ? 0 : 1,
          transform: isFading ? 'translateY(-100%)' : 'translateY(0)',
          pointerEvents: isFading ? 'none' : 'auto'
        }}
      >
        {/* Custom Glowing Optics Spinner */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '3px solid rgba(255, 255, 255, 0.05)',
            borderTop: '3px solid var(--primary-blue, #3b82f6)',
            borderRight: '3px solid var(--primary-blue, #3b82f6)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            marginBottom: '24px',
            animation: 'spotSpin 0.8s linear infinite'
          }}
        />

        {/* Premium Gradient Title */}
        <h4
          className="fw-bold text-uppercase"
          style={{
            margin: 0,
            letterSpacing: '5px',
            background: 'linear-gradient(90deg, #ffffff, #93c5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: 'opacity 0.2s ease',
            opacity: isFading ? 0 : 1
          }}
        >
          SpotOptics
        </h4>
      </div>
    </>
  );
}
