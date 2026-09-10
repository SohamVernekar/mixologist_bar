import React from 'react';
import { ASSETS } from '../data/siteData';
import { ArrowRight, Compass, MapPin } from 'lucide-react';

export default function DestinationEvents() {
  return (
    <section
      id="destination"
      style={{
        position: 'relative',
        padding: '8.5rem 0',
        overflow: 'hidden',
        backgroundColor: '#0a0a0f',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div className="eyebrow">
            <span className="gold-accent-dot" />
            <span>GLOBAL &amp; OUTDOOR EXPERIENCES</span>
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
            WHEREVER THE CELEBRATION{' '}
            <span className="text-gold-gradient">TAKES YOU.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.35rem',
              color: 'var(--gold-light)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontStyle: 'italic',
            }}
          >
            “From elegant indoor celebrations to unforgettable outdoor and destination events, we bring the bar experience wherever the occasion calls.”
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '0.98rem',
              lineHeight: 1.65,
              maxWidth: '660px',
            }}
          >
            Whether it’s a sun-drenched beach wedding in Goa, a heritage palace soiree in Rajasthan, an exotic island retreat, or an open-air private estate, our mobile bar infrastructure travels anywhere.
          </p>
        </div>

        {/* Dual Outdoor Photography Feature in Natural Aspect Ratios (100% VISIBLE) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
          className="destination-grid"
        >
          {/* Panoramic Beach Setup (16:9 Landscape) */}
          <div
            style={{
              gridColumn: 'span 7',
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              backgroundColor: '#0c0c12',
            }}
            className="img-container destination-banner"
          >
            <img
              src={ASSETS.destination.outdoor}
              alt="Destination beachside mixology event"
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
                background: 'linear-gradient(180deg, transparent 0%, rgba(7, 7, 9, 0.9) 100%)',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  fontWeight: '700',
                }}
              >
                Beach &amp; Resort Setups
              </span>
            </div>
          </div>

          {/* Outdoor Mixology in Action (3:4 Portrait) */}
          <div
            style={{
              gridColumn: 'span 5',
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '3 / 4',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              backgroundColor: '#0c0c12',
            }}
            className="img-container destination-action"
          >
            <img
              src={ASSETS.destination.create}
              alt="Outdoor live mixologist in action"
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
                background: 'linear-gradient(180deg, transparent 0%, rgba(7, 7, 9, 0.9) 100%)',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  fontWeight: '700',
                }}
              >
                Mobile Bar Logistics &amp; Execution
              </span>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
            backgroundColor: 'rgba(18, 18, 26, 0.65)',
            backdropFilter: 'blur(12px)',
            borderRadius: '4px',
            border: '1px solid rgba(212, 175, 55, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <MapPin size={20} style={{ color: 'var(--gold-primary)' }} />
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#ffffff', fontWeight: '600' }}>
                Planning a Destination Event or Outdoor Wedding?
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                We handle complete mobile bar logistics, equipment transport, and on-site setup.
              </p>
            </div>
          </div>

          <a href="#enquiry" className="btn-primary">
            <span>PLAN YOUR EVENT</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .destination-grid {
            grid-template-columns: 1fr !important;
          }
          .destination-banner, .destination-action {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
