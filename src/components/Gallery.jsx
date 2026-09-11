import React, { useState } from 'react';
import { ASSETS } from '../data/siteData';
import LightboxModal from './LightboxModal';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = ASSETS.gallery;

  return (
    <section
      id="gallery"
      style={{
        backgroundColor: '#07070a',
        padding: '8rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="gold-accent-dot" />
            <span>VISUAL CHRONICLES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 5vw, 4.2rem)',
              lineHeight: 1.08,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.02em',
              marginBottom: '1rem',
            }}
          >
            THE CURATED{' '}
            <span className="text-gold-gradient">GALLERY.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            A visual retrospective of bespoke barcraft, theatrical pours, and celebrations brought to life with precision.
          </p>
        </div>

        {/* Responsive Grid with Clean Proportions (100% VISIBLE IMAGES) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="editorial-gallery-grid"
        >
          {galleryItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="img-container glass-panel gallery-item-card"
                style={{
                  aspectRatio: item.aspectRatio || '4 / 3',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#0a0a0f',
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="img-cinematic"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  loading="lazy"
                />

                {/* Subtle Hover & Mobile Reveal Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(7, 7, 10, 0.9) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      gap: '0.5rem',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-primary)',
                          display: 'block',
                          marginBottom: '0.2rem',
                          fontWeight: '700',
                        }}
                      >
                        {item.category}
                      </span>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                          color: '#ffffff',
                          fontWeight: '600',
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        border: '1px solid var(--gold-primary)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Maximize2 size={13} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={galleryItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      <style>{`
        @media (max-width: 900px) {
          .editorial-gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 540px) {
          .editorial-gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
