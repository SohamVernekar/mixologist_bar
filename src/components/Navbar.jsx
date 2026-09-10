import React, { useState, useEffect } from 'react';
import { Menu, X, GlassWater, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#intro' },
    { name: 'Services', href: '#services' },
    { name: 'Cocktails', href: '#cocktails' },
    { name: 'Live Mixology', href: '#live-mixology' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#enquiry' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href === '#enquiry' && onOpenEnquiry) {
      // scroll to enquiry
      const el = document.getElementById('enquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        style={{
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '0.9rem 1.5rem' : '1.5rem 1.5rem',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          backgroundColor: scrolled ? 'rgba(8, 8, 11, 0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              color: '#ffffff',
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
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  letterSpacing: '0.18em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                MIXOLOGIST BARZ
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.24em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                Bespoke Barcraft
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: 'rgba(240, 240, 245, 0.75)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '500',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '0.4rem 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240, 240, 245, 0.75)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#enquiry"
              className="btn-primary"
              style={{
                display: 'none',
                padding: '0.7rem 1.4rem',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
              }}
              id="nav-cta-btn"
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                padding: '0.55rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(7, 7, 10, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 49,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem 2.5rem',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
      >
        <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Navigation
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.65rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.6rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <span>{link.name}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--text-muted)',
                  }}
                >
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-cta-btn {
            display: inline-flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
