import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = SERVICES_LIST[activeServiceIndex];

  return (
    <section
      id="services"
      style={{
        backgroundColor: '#09090d',
        padding: '8rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
          <div className="eyebrow">
            <span className="gold-accent-dot" />
            <span>SERVICES &amp; CAPABILITIES</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              lineHeight: 1.1,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.03em',
              marginBottom: '1rem',
            }}
          >
            THE ART OF{' '}
            <span className="text-gold-gradient">THE BAR.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            From regal wedding receptions to intimate private soirees, every service is executed with bespoke bar architecture, master mixologists, and unmatched showmanship.
          </p>
        </div>

        {/* Interactive Luxury Service Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="services-grid"
        >
          {/* Left Column: Service Selector Tabs */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
            className="services-tab-col"
          >
            {SERVICES_LIST.map((service, index) => {
              const isActive = index === activeServiceIndex;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceIndex(index)}
                  style={{
                    padding: '1.4rem 1.6rem',
                    borderRadius: '2px',
                    border: isActive
                      ? '1px solid rgba(212, 175, 55, 0.55)'
                      : '1px solid rgba(255, 255, 255, 0.06)',
                    backgroundColor: isActive
                      ? 'rgba(212, 175, 55, 0.08)'
                      : 'rgba(15, 15, 20, 0.45)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(15, 15, 20, 0.45)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: isActive ? 'var(--gold-primary)' : 'var(--text-muted)',
                      }}
                    >
                      {service.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontWeight: isActive ? '700' : '500',
                        color: isActive ? '#ffffff' : 'rgba(220, 220, 230, 0.75)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    style={{
                      color: isActive ? 'var(--gold-primary)' : 'transparent',
                      transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Visual Card */}
          <div
            style={{
              gridColumn: 'span 7',
              position: 'relative',
              borderRadius: '3px',
              overflow: 'hidden',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              backgroundColor: '#0c0c12',
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
            className="services-display-card"
          >
            {/* Background Active Image */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#07070a',
              }}
            >
              <img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  animation: 'fadeIn 0.5s ease-out',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(7, 7, 10, 0.1) 0%, rgba(7, 7, 10, 0.85) 60%, rgba(7, 7, 10, 0.98) 100%)',
                }}
              />
            </div>

            {/* Content Over Active Service */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                padding: '2.5rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                }}
              >
                Service #{activeService.number}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.9rem',
                  color: '#ffffff',
                  fontWeight: '700',
                  letterSpacing: '0.03em',
                  marginBottom: '1rem',
                }}
              >
                {activeService.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
                  lineHeight: '1.6',
                  color: 'rgba(230, 230, 240, 0.85)',
                  marginBottom: '1.5rem',
                  maxWidth: '560px',
                }}
              >
                {activeService.description}
              </p>

              {/* Highlights tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                {activeService.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: '0.78rem',
                      color: 'var(--gold-light)',
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--gold-primary)' }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <a href="#enquiry" className="btn-primary" style={{ padding: '0.75rem 1.6rem' }}>
                <span>BOOK THIS EXPERIENCE</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-tab-col, .services-display-card {
            grid-column: span 12 !important;
          }
          .services-display-card {
            min-height: 480px !important;
          }
        }
      `}</style>
    </section>
  );
}
