import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, onClose, onNavigate }) {
  const [touchStartX, setTouchStartX] = useState(null);
  const isOpen = activeIndex !== null && images && images.length > 0;
  const imageCount = images ? images.length : 0;

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % imageCount);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + imageCount) % imageCount);
      }
    },
    [isOpen, activeIndex, imageCount, onClose, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const currentImage = images[activeIndex];


  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        onNavigate((activeIndex + 1) % images.length); // Swipe left -> next
      } else {
        onNavigate((activeIndex - 1 + images.length) % images.length); // Swipe right -> prev
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 5, 7, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'calc(1.2rem + var(--safe-top))',
        paddingBottom: 'calc(1.2rem + var(--safe-bottom))',
        paddingLeft: 'max(1rem, var(--safe-left))',
        paddingRight: 'max(1rem, var(--safe-right))',
        animation: 'fadeIn 0.3s ease-out',
        touchAction: 'pan-y',
      }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
          gap: '1rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ minWidth: 0 }}>
          <span
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-sans)',
              display: 'block',
            }}
          >
            {currentImage.category || 'Gallery'}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
              color: '#ffffff',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {currentImage.title}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
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
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Center Stage */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '1rem 0',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow (Desktop / Tablet) */}
        <button
          onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
          aria-label="Previous Image"
          className="lightbox-nav-arrow left"
          style={{
            position: 'absolute',
            left: '0.5rem',
            zIndex: 10,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 15, 20, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Display Image */}
        <div
          style={{
            maxHeight: '70vh',
            maxWidth: '92%',
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
              maxHeight: '70vh',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '2px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              animation: 'fadeIn 0.35s ease-out',
            }}
          />
        </div>

        {/* Right Arrow (Desktop / Tablet) */}
        <button
          onClick={() => onNavigate((activeIndex + 1) % images.length)}
          aria-label="Next Image"
          className="lightbox-nav-arrow right"
          style={{
            position: 'absolute',
            right: '0.5rem',
            zIndex: 10,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 15, 20, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Mobile Controls & Hint */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-mobile-controls" style={{ display: 'none', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
            aria-label="Previous"
            className="btn-secondary"
            style={{ padding: '0.5rem 1.2rem', minHeight: '38px', fontSize: '0.72rem' }}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <button
            onClick={() => onNavigate((activeIndex + 1) % images.length)}
            aria-label="Next"
            className="btn-secondary"
            style={{ padding: '0.5rem 1.2rem', minHeight: '38px', fontSize: '0.72rem' }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>

        <div
          style={{
            textAlign: 'center',
            color: 'var(--text-dim)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Swipe left / right or use ← / → to navigate
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .lightbox-nav-arrow {
            display: none !important;
          }
          .lightbox-mobile-controls {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
