import React from 'react';
import { ArrowRight, GlassWater } from 'lucide-react';
import { ASSETS, SITE_INFO } from '../data/siteData';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#070709',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Ambient Atmospheric Lighting & Backdrops */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(229, 152, 68, 0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 30, 47, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      <div className="section-container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Editorial 2-Column Split: True 3:4 Image Presentation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-split-grid"
        >
          {/* Left Column: Brand Typography & Action */}
          <div
            style={{
              gridColumn: 'span 7',
              zIndex: 3,
            }}
            className="hero-text-col"
          >
            {/* Minimal Luxury Eyebrow (No AI Sparkles) */}
            <div className="eyebrow animate-fade-in">
              <span className="gold-accent-dot" />
              <span>{SITE_INFO.heroEyebrow}</span>
            </div>

            {/* Editorial Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 6.8vw, 4.6rem)',
                lineHeight: 1.06,
                fontWeight: '700',
                letterSpacing: '0.03em',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
              className="animate-slide-up"
            >
              CRAFTED TO IMPRESS.{' '}
              <span
                className="text-gold-gradient"
                style={{ display: 'block', fontWeight: '800' }}
              >
                SERVED TO REMEMBER.
              </span>
            </h1>

            {/* Supporting Narrative */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.98rem, 2vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'rgba(230, 230, 242, 0.88)',
                maxWidth: '580px',
                marginBottom: '2.2rem',
                fontWeight: '400',
              }}
            >
              {SITE_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
              className="hero-buttons-wrap"
            >
              <a href="#enquiry" className="btn-primary">
                <span>PLAN YOUR EVENT</span>
                <ArrowRight size={15} />
              </a>

              <a href="#intro" className="btn-secondary">
                <span>EXPLORE THE EXPERIENCE</span>
              </a>
            </div>

            {/* Quick Editorial Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.6rem',
                maxWidth: '540px',
              }}
              className="hero-metrics"
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '2px',
                  padding: '0.85rem 0.75rem',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                    color: 'var(--gold-primary)',
                    fontWeight: '700',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  Bespoke
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    display: 'block',
                  }}
                >
                  Cocktail Menus
                </span>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '2px',
                  padding: '0.85rem 0.75rem',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                    color: 'var(--gold-primary)',
                    fontWeight: '700',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  Theatrical
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    display: 'block',
                  }}
                >
                  Live Mixology
                </span>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '2px',
                  padding: '0.85rem 0.75rem',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                    color: 'var(--gold-primary)',
                    fontWeight: '700',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  Global
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    display: 'block',
                  }}
                >
                  Destinations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete 3:4 Portrait Image Presentation (100% VISIBLE) */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-img-col"
          >
            {/* Luxury Gold Halo Effect behind the photo */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, transparent 60%, rgba(212, 175, 55, 0.15) 100%)',
                filter: 'blur(10px)',
                zIndex: 1,
              }}
            />

            {/* Container matching the natural 3:4 portrait aspect ratio */}
            <div
              className="glass-panel img-container"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '3 / 4',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(212, 175, 55, 0.12)',
              }}
            >
              <img
                src={ASSETS.hero}
                alt="Mixologist actively crafting cocktail"
                className="img-cinematic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
              />

              {/* Bottom Subtle Gradient Caption Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '1.25rem',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(7, 7, 9, 0.85) 60%, rgba(7, 7, 9, 0.98) 100%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-primary)',
                      fontWeight: '700',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Signature Barcraft
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(0.95rem, 3.2vw, 1.05rem)',
                      color: '#ffffff',
                      fontWeight: '600',
                    }}
                  >
                    Theatrical Pour &amp; Precision
                  </span>
                </div>

                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    flexShrink: 0,
                  }}
                >
                  <GlassWater size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-text-col, .hero-img-col {
            grid-column: span 12 !important;
          }
          .hero-img-col {
            margin-top: 0.5rem;
          }
        }
        @media (max-width: 480px) {
          .hero-buttons-wrap {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-buttons-wrap .btn-primary,
          .hero-buttons-wrap .btn-secondary {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
