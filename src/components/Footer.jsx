import React from 'react';
import { SITE_INFO } from '../data/siteData';
import { GlassWater, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#intro' },
    { name: 'Services', href: '#services' },
    { name: 'Cocktails', href: '#cocktails' },
    { name: 'Live Mixology', href: '#live-mixology' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#enquiry' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#040406',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '5rem 0 3rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Top Footer Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            marginBottom: '4rem',
            alignItems: 'start',
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 5' }} className="footer-col-main">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  background: 'rgba(212, 175, 55, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d4af37',
                }}
              >
                <GlassWater size={17} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  color: '#ffffff',
                }}
              >
                MIXOLOGIST BARZ
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.3rem',
                color: 'var(--gold-light)',
                fontStyle: 'italic',
                marginBottom: '1.25rem',
              }}
            >
              “{SITE_INFO.tagline}”
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                maxWidth: '400px',
              }}
            >
              Elevating celebrations worldwide through bespoke cocktail craftsmanship, theatrical presentation, and unforgettable hospitality.
            </p>
          </div>

          {/* Quick Navigation */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col-nav">
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                marginBottom: '1.5rem',
                fontWeight: '700',
              }}
            >
              Navigation
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'rgba(230, 230, 240, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(230, 230, 240, 0.7)')}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Booking Desk */}
          <div style={{ gridColumn: 'span 3' }} className="footer-col-contact">
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                marginBottom: '1.5rem',
                fontWeight: '700',
              }}
            >
              Event Booking Desk
            </h4>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#ffffff',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}
            >
              <Mail size={16} style={{ color: 'var(--gold-primary)' }} />
              <a
                href={`mailto:${SITE_INFO.contactEmail}`}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                {SITE_INFO.contactEmail}
              </a>
            </div>

            <a
              href="#enquiry"
              className="btn-secondary"
              style={{
                display: 'inline-flex',
                padding: '0.65rem 1.25rem',
                fontSize: '0.75rem',
              }}
            >
              REQUEST CONSULTATION
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.04em',
            }}
          >
            © {SITE_INFO.year} Mixologist Barz. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--text-muted)',
              padding: '0.5rem 1rem',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
              e.currentTarget.style.color = 'var(--gold-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-col-main, .footer-col-nav, .footer-col-contact {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
