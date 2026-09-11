import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export default function Process() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: '#08080c',
        padding: '7.5rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="gold-accent-dot" />
            <span>HOW WE WORK</span>
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
            THE JOURNEY TO{' '}
            <span className="text-gold-gradient">YOUR BAR.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            A seamless three-step curation designed to ensure every detail of your bar setup is executed with surgical precision.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
          className="process-steps-grid"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="glass-card process-step-card"
              style={{
                padding: '2.2rem 1.8rem',
                borderRadius: '2px',
                position: 'relative',
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 6vw, 3.2rem)',
                  fontWeight: '800',
                  color: 'rgba(212, 175, 55, 0.25)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 3vw, 1.3rem)',
                  color: '#ffffff',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.04em',
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                }}
              >
                {step.description}
              </p>

              {/* Bottom Subtle Accent Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '1.5rem',
                  right: '1.5rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--gold-primary), transparent)',
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .process-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .process-step-card {
            padding: 1.6rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
