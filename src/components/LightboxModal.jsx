import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, onClose, onNavigate }) {
  if (activeIndex === null || !images || images.length === 0) return null;

  const currentImage = images[activeIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    },
    [activeIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 5, 7, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        animation: 'fadeIn 0.3s ease-out',
      }}
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {currentImage.category || 'Gallery'}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              color: '#ffffff',
              fontWeight: '600',
            }}
          >
            {currentImage.title}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}
          >
            <strong style={{ color: '#ffffff' }}>0{activeIndex + 1}</strong> / 0{images.length}
          </span>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Center Stage with Nav Arrows */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '1.5rem 0',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow */}
        <button
          onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
          aria-label="Previous Image"
          style={{
            position: 'absolute',
            left: 0,
            zIndex: 10,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 15, 20, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--gold-primary)';
            e.currentTarget.style.color = 'var(--gold-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Display Image */}
        <div
          style={{
            maxHeight: '75vh',
            maxWidth: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            key={currentImage.id || activeIndex}
            src={currentImage.src}
            alt={currentImage.title}
            style={{
              maxHeight: '75vh',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '2px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              animation: 'fadeIn 0.35s ease-out',
            }}
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => onNavigate((activeIndex + 1) % images.length)}
          aria-label="Next Image"
          style={{
            position: 'absolute',
            right: 0,
            zIndex: 10,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 15, 20, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--gold-primary)';
            e.currentTarget.style.color = 'var(--gold-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Hint */}
      <div
        style={{
          textAlign: 'center',
          color: 'var(--text-dim)',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
        }}
      >
        Press ESC to close • Use ← / → to navigate
      </div>
    </div>
  );
}
