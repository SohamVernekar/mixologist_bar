import React, { useRef, useEffect } from 'react';
import { ASSETS } from '../data/siteData';
import { GlassWater, Flame, Layers } from 'lucide-react';

export default function VideoBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '480px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
        backgroundColor: '#050508',
      }}
    >
      {/* Muted Looping Video Background (Reel 1) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          src={ASSETS.videoBackground}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.35) contrast(1.15) saturate(1.1)',
          }}
        />

        {/* Multi-layered Vignette Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(7, 7, 10, 0.4) 0%, rgba(7, 7, 10, 0.85) 75%, rgba(7, 7, 10, 0.98) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(7, 7, 10, 0.8) 0%, transparent 40%, transparent 60%, rgba(7, 7, 10, 0.8) 100%)',
          }}
        />
      </div>

      {/* Foreground Editorial Narrative */}
      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '5rem 2rem',
          maxWidth: '960px',
        }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="gold-accent-dot" />
          <span>FLUID BAR ARTISTRY</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)',
            lineHeight: 1.1,
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '0.03em',
            marginBottom: '1.4rem',
            textTransform: 'uppercase',
          }}
        >
          WHERE PRECISION{' '}
          <span className="text-gold-gradient">MEETS SPECTACLE.</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
            color: 'var(--gold-light)',
            lineHeight: 1.45,
            marginBottom: '2rem',
            fontStyle: 'italic',
            maxWidth: '780px',
            margin: '0 auto 2.5rem',
          }}
        >
          “Every bottle toss, flame accent, and liquid pour is executed with absolute control, transforming the bar into the heartbeat of the night.”
        </p>

        {/* Feature Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '2px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Flame size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Acrobatic Bottle Flair</span>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '2px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <GlassWater size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Aerated Liquid Mixology</span>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '2px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Layers size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Theatrical Pour Geometry</span>
          </div>
        </div>
      </div>
    </section>
  );
}
