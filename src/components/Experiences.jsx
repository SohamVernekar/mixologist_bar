import React from 'react';
import { ASSETS } from '../data/siteData';

export default function Experiences() {
  const experiencesList = [
    {
      title: 'Spiked Cocktail Caviars',
      tagline: 'Sensory Infusions',
      description:
        'Burst-in-the-mouth cocktail spheres featuring aged rum, gin botanicals, and citrus reductions crafted to elevate welcome toasts and hors d’oeuvres.',
      image: ASSETS.experiences.caviars,
      tag: 'Sensory Barcraft',
      aspectRatio: '4 / 3',
    },
    {
      title: 'Artisan Jello Creations',
      tagline: 'Gourmet Playfulness',
      description:
        'Layered, crystal-cut culinary jello shots infused with premium spirits, edible floral garnishes, and bespoke fruit reductions.',
      image: ASSETS.experiences.jello,
      tag: 'Interactive Shots',
      aspectRatio: '4 / 3',
    },
  ];

  return (
    <section
      id="experiences"
      style={{
        backgroundColor: '#08080c',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <div className="eyebrow">
            <span className="gold-accent-dot" />
            <span>SENSORY &amp; MOLECULAR CRAFT</span>
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
            MORE THAN{' '}
            <span className="text-gold-gradient">A DRINK.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: 'var(--gold-light)',
              lineHeight: 1.45,
              marginBottom: '1rem',
            }}
          >
            “Unexpected details. Playful presentations. Experiences your guests will talk about long after the last glass is cleared.”
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '0.98rem',
              lineHeight: 1.6,
            }}
          >
            We transform traditional bartending into an interactive journey through culinary techniques, aromatic infusions, and customized cocktail novelties.
          </p>
        </div>

        {/* 2-Column Experiential Grid with True 4:3 Image Proportions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
          }}
          className="experiences-grid"
        >
          {experiencesList.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card img-container"
              style={{
                borderRadius: '3px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Box matching the natural 4:3 landscape format (100% VISIBLE) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  backgroundColor: '#0c0c12',
                }}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
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
                    top: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(7, 7, 10, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '2px',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    fontWeight: '600',
                  }}
                >
                  {exp.tag}
                </div>
              </div>

              {/* Text content */}
              <div style={{ padding: '2rem 1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }} className="exp-card-body">
                <span
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    display: 'block',
                    marginBottom: '0.35rem',
                    fontWeight: '700',
                  }}
                >
                  {exp.tagline}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.3rem, 3.2vw, 1.55rem)',
                    color: '#ffffff',
                    fontWeight: '600',
                    marginBottom: '0.65rem',
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    marginTop: 'auto',
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .experiences-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .exp-card-body {
            padding: 1.5rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
