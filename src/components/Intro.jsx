import React from 'react';
import { ASSETS } from '../data/siteData';

export default function Intro() {
  return (
    <section
      id="intro"
      style={{
        position: 'relative',
        backgroundColor: '#070709',
        padding: '8.5rem 0 7.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Asymmetrical Editorial Composition Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="intro-editorial-grid"
        >
          {/* Left Column: Oversized Typography & Brand Philosophy */}
          <div
            style={{
              gridColumn: 'span 7',
              zIndex: 3,
            }}
            className="intro-text-col"
          >
            <div className="eyebrow">
              <span className="gold-accent-dot" />
              <span>THE EXPERIENCE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
                lineHeight: 1.05,
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.02em',
                marginBottom: '2rem',
              }}
            >
              MORE THAN{' '}
              <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
                A BAR.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                lineHeight: 1.45,
                color: '#e4e4ee',
                marginBottom: '2rem',
                fontWeight: '400',
                letterSpacing: '0.01em',
              }}
            >
              “Every event deserves more than drinks. From the first pour to the final garnish, we create a bar experience that becomes part of the celebration.”
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '3rem',
                maxWidth: '540px',
              }}
            >
              We blend artisanal mixology with theatrics, bespoke glassware, and thoughtful hospitality. Every menu is custom-conceived to mirror the mood of your celebration, leaving guests captivated from the first greeting to the midnight toast.
            </p>

            {/* Quick Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '2rem',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: 'var(--gold-primary)',
                    fontWeight: '700',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  100%
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#d0d0dc',
                  }}
                >
                  Custom Tailored Menus
                </span>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: 'var(--gold-primary)',
                    fontWeight: '700',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  Live
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#d0d0dc',
                  }}
                >
                  Theatrical Presentation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Imagery (True 4:3 Aspect Ratio) */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative',
              zIndex: 2,
            }}
            className="intro-img-col"
          >
            {/* Primary Overlapping Image */}
            <div
              className="glass-panel img-container"
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 25px rgba(212, 175, 55, 0.1)',
                backgroundColor: '#0c0c12',
              }}
            >
              <img
                src={ASSETS.experiences.jello}
                alt="Interactive artisan mixology creation"
                className="img-cinematic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '1.25rem',
                  background: 'linear-gradient(to top, rgba(7, 7, 9, 0.95), transparent)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    display: 'block',
                    marginBottom: '0.2rem',
                    fontWeight: '700',
                  }}
                >
                  Experiential Barcraft
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    color: '#ffffff',
                    fontWeight: '600',
                  }}
                >
                  Interactive Creations &amp; Infusions
                </h4>
              </div>
            </div>

            {/* Overlapping Accent Card */}
            <div
              className="glass-panel intro-overlap-card"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.5rem',
                padding: '1.2rem 1.5rem',
                borderRadius: '2px',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
                zIndex: 4,
                maxWidth: '240px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.88rem',
                  color: 'var(--gold-light)',
                  lineHeight: 1.35,
                  fontWeight: '600',
                }}
              >
                Uncompromising attention to detail in every pour.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .intro-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .intro-text-col, .intro-img-col {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 600px) {
          .intro-overlap-card {
            left: 0.75rem !important;
            bottom: -1rem !important;
            max-width: calc(100% - 1.5rem) !important;
            padding: 0.9rem 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
