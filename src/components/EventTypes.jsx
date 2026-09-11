import React from 'react';
import { EVENT_TYPES } from '../data/siteData';

export default function EventTypes() {
  return (
    <section
      id="event-types"
      style={{
        backgroundColor: '#07070a',
        padding: '7.5rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="gold-accent-dot" />
            <span>CELEBRATIONS &amp; OCCASIONS</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              lineHeight: 1.1,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.02em',
              marginBottom: '1rem',
            }}
          >
            OCCASIONS WE{' '}
            <span className="text-gold-gradient">ELEVATE.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            Every gathering has its own tempo and character. We curate bar programs uniquely suited to the intimacy or grandeur of your milestone.
          </p>
        </div>

        {/* Editorial Event Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
          className="event-types-grid"
        >
          {EVENT_TYPES.map((event, idx) => (
            <div
              key={idx}
              className="glass-card event-type-card"
              style={{
                padding: '2rem 1.8rem',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.9rem',
                  color: 'rgba(212, 175, 55, 0.4)',
                  fontWeight: '600',
                }}
              >
                0{idx + 1}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    color: '#ffffff',
                    fontWeight: '600',
                    letterSpacing: '0.02em',
                    marginBottom: '0.65rem',
                  }}
                >
                  {event.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    lineHeight: '1.6',
                    color: 'var(--text-muted)',
                  }}
                >
                  {event.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--gold-primary)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                }}
              >
                <span>Bespoke Concept</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .event-types-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .event-type-card {
            padding: 1.5rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
