import React, { useState } from 'react';
import { SIGNATURE_COCKTAILS_LIST } from '../data/siteData';
import { ArrowLeft, ArrowRight, GlassWater } from 'lucide-react';

export default function SignatureCocktails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCocktail = () => {
    setCurrentIndex((prev) => (prev === 0 ? SIGNATURE_COCKTAILS_LIST.length - 1 : prev - 1));
  };

  const nextCocktail = () => {
    setCurrentIndex((prev) => (prev === SIGNATURE_COCKTAILS_LIST.length - 1 ? 0 : prev + 1));
  };

  const current = SIGNATURE_COCKTAILS_LIST[currentIndex];

  return (
    <section
      id="cocktails"
      style={{
        backgroundColor: '#09090e',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <div className="eyebrow">
              <span className="gold-accent-dot" />
              <span>COCKTAIL SHOWCASE</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 5vw, 4.2rem)',
                lineHeight: 1.08,
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.02em',
              }}
            >
              SIGNATURE{' '}
              <span className="text-gold-gradient">CREATIONS.</span>
            </h2>
          </div>

          {/* Number Counter & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#ffffff',
                letterSpacing: '0.15em',
              }}
            >
              <span style={{ color: 'var(--gold-primary)', fontWeight: '700' }}>
                0{currentIndex + 1}
              </span>
              <span style={{ color: 'var(--text-muted)', margin: '0 0.4rem' }}>/</span>
              <span style={{ color: 'var(--text-muted)' }}>
                0{SIGNATURE_COCKTAILS_LIST.length}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <button
                onClick={prevCocktail}
                aria-label="Previous cocktail"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '2px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.04)',
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
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextCocktail}
                aria-label="Next cocktail"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '2px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.04)',
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
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Split Showcase Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center',
            backgroundColor: '#0c0c12',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
            position: 'relative',
          }}
          className="cocktail-showcase-box"
        >
          {/* Left Column: True 3:4 Aspect Ratio Cocktail Image */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="cocktail-img-wrap"
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '3 / 4',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.1)',
                position: 'relative',
                background: '#07070a',
              }}
            >
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  animation: 'fadeIn 0.6s ease-out',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(7, 7, 10, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '2px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-light)',
                  fontWeight: '600',
                }}
              >
                {current.vibe}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Selector */}
          <div
            style={{
              gridColumn: 'span 7',
            }}
            className="cocktail-info-wrap"
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                color: 'var(--gold-primary)',
                fontWeight: '700',
                letterSpacing: '0.18em',
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              SIGNATURE NO. 0{current.number}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: '700',
                letterSpacing: '0.03em',
                marginBottom: '1rem',
              }}
            >
              {current.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.4rem',
                fontStyle: 'italic',
                color: 'var(--gold-light)',
                lineHeight: 1.4,
                marginBottom: '1.5rem',
              }}
            >
              “{current.subtitle}”
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
                maxWidth: '560px',
              }}
            >
              {current.note} All signature cocktails are designed with artisanal cordials, freshly squeezed citrus, and crystal-clear ice for pristine flavor retention.
            </p>

            {/* Thumbnail Selectors */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {SIGNATURE_COCKTAILS_LIST.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Select ${item.title}`}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border:
                      index === currentIndex
                        ? '2px solid var(--gold-primary)'
                        : '1px solid rgba(255, 255, 255, 0.15)',
                    opacity: index === currentIndex ? 1 : 0.45,
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                    background: '#07070a',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cocktail-showcase-box {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
            gap: 2rem !important;
          }
          .cocktail-img-wrap, .cocktail-info-wrap {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
