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
          {/* Left Column: Service Selector Tabs (Desktop Vertical / Mobile Horizontal Pills) */}
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
                  className={`service-tab-item ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: '2px',
                    border: isActive
                      ? '1px solid rgba(212, 175, 55, 0.65)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: isActive
                      ? 'rgba(212, 175, 55, 0.12)'
                      : 'rgba(15, 15, 20, 0.55)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '52px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: isActive ? 'var(--gold-primary)' : 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      {service.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
                        fontWeight: isActive ? '700' : '500',
                        color: isActive ? '#ffffff' : 'rgba(220, 220, 230, 0.75)',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    className="service-arrow"
                    style={{
                      color: isActive ? 'var(--gold-primary)' : 'transparent',
                      transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
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
              border: '1px solid rgba(212, 175, 55, 0.3)',
              backgroundColor: '#0c0c12',
              minHeight: '460px',
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
                    'linear-gradient(180deg, rgba(7, 7, 10, 0.1) 0%, rgba(7, 7, 10, 0.85) 55%, rgba(7, 7, 10, 0.98) 100%)',
                }}
              />
            </div>

            {/* Content Over Active Service */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                padding: '2.2rem',
              }}
              className="service-card-body"
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  marginBottom: '0.4rem',
                  fontWeight: '700',
                }}
              >
                Service #{activeService.number}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 4vw, 1.9rem)',
                  color: '#ffffff',
                  fontWeight: '700',
                  letterSpacing: '0.03em',
                  marginBottom: '0.75rem',
                }}
              >
                {activeService.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  color: 'rgba(230, 230, 240, 0.85)',
                  marginBottom: '1.25rem',
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
                  gap: '0.6rem',
                  marginBottom: '1.75rem',
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
                      padding: '0.35rem 0.75rem',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '0.75rem',
                      color: 'var(--gold-light)',
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
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
            gap: 1.5rem !important;
          }
          .services-tab-col, .services-display-card {
            grid-column: span 12 !important;
          }
          .services-tab-col {
            flex-direction: row !important;
            overflow-x: auto !important;
            padding-bottom: 0.5rem !important;
            gap: 0.5rem !important;
            scrollbar-width: thin;
          }
          .service-tab-item {
            flex-shrink: 0 !important;
            padding: 0.75rem 1.1rem !important;
            min-height: 44px !important;
          }
          .service-arrow {
            display: none !important;
          }
          .services-display-card {
            min-height: 420px !important;
          }
          .service-card-body {
            padding: 1.5rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
