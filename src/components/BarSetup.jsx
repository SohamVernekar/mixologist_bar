import React from 'react';
import { ASSETS } from '../data/siteData';
import { Wine, Layers, Flame, ShieldCheck, GlassWater } from 'lucide-react';

export default function BarSetup() {
  const setupFeatures = [
    {
      icon: <Wine size={18} />,
      title: 'Artisan Glassware',
      desc: 'Crystal coupes, faceted rocks glasses, and sculpted highballs matched to each signature cocktail.',
    },
    {
      icon: <Layers size={18} />,
      title: 'Bespoke Bar Architecture',
      desc: 'Custom physical bar facades styled to seamlessly harmonize with the luxury ambiance of your venue.',
    },
    {
      icon: <Flame size={18} />,
      title: 'Curated Ice & Botanicals',
      desc: 'Diamond-clear stamped ice blocks, dehydrated citrus wheels, and hand-torched aromatics.',
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Complete Station Protocol',
      desc: 'Surgical cleanliness, high-speed rails, premium spirit inventory management, and zero service bottlenecks.',
    },
  ];

  return (
    <section
      id="bar-setup"
      style={{
        backgroundColor: '#07070a',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div className="eyebrow">
            <span className="gold-accent-dot" />
            <span>EVENT BAR ARCHITECTURE</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 5vw, 4.2rem)',
              lineHeight: 1.08,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.02em',
              marginBottom: '1.2rem',
            }}
          >
            THE BAR BECOMES{' '}
            <span className="text-gold-gradient">
              PART OF THE CELEBRATION.
            </span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: '640px',
            }}
          >
            We build an architectural focal point where guests gather, converse, and experience luxury hospitality in full view.
          </p>
        </div>

        {/* 2-Column Editorial Grid: True 3:4 Aspect Ratio Image Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="barsetup-grid"
        >
          {/* Left: Complete 3:4 Portrait Image (100% VISIBLE) */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative',
            }}
            className="barsetup-img-col"
          >
            <div
              className="glass-panel img-container"
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                aspectRatio: '3 / 4',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(212, 175, 55, 0.1)',
              }}
            >
              <img
                src={ASSETS.barSetup}
                alt="Mixologist Barz luxury event bar setup and presentation"
                className="img-cinematic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
                loading="lazy"
              />

              {/* Bottom Caption Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '1.5rem',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(7, 7, 9, 0.85) 60%, rgba(7, 7, 9, 0.98) 100%)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    fontWeight: '700',
                    display: 'block',
                    marginBottom: '0.2rem',
                  }}
                >
                  Physical Bar Staging
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    color: '#ffffff',
                    fontWeight: '600',
                  }}
                >
                  Complete Modular Setup &amp; Styling
                </h4>
              </div>
            </div>
          </div>

          {/* Right: 4 Detailed Feature Blocks */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
            }}
            className="barsetup-features-col"
          >
            {setupFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.8rem',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {feat.icon}
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    color: '#ffffff',
                    fontWeight: '600',
                    marginBottom: '0.65rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {feat.title}
                </h4>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    lineHeight: '1.6',
                    color: 'var(--text-muted)',
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .barsetup-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .barsetup-img-col, .barsetup-features-col {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 600px) {
          .barsetup-features-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
