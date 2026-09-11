import React, { useRef, useState, useEffect } from 'react';
import { ASSETS } from '../data/siteData';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';

export default function LiveMixology() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-play when entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="live-mixology"
      ref={containerRef}
      style={{
        backgroundColor: '#060608',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Ambient Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '450px',
          background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="gold-accent-dot" />
            <span>LIVE THEATRICAL SHOWREEL</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              lineHeight: 1.06,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.02em',
              marginBottom: '1.2rem',
            }}
          >
            IT'S NOT JUST A DRINK.{' '}
            <span className="text-gold-gradient" style={{ display: 'block' }}>
              IT'S A SHOW.
            </span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Witness the energy, rhythm, and precision of live theatrical mixology. Tap the audio button below to experience the authentic sound of our barcraft.
          </p>
        </div>

        {/* Video Theater Showcase Box */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.12)',
            backgroundColor: '#000000',
          }}
        >
          {/* Active Video Element */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '580px',
              background: '#040406',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="video-player-container"
          >
            <video
              ref={videoRef}
              src={ASSETS.videoFeatured}
              poster={ASSETS.barSetup}
              muted={isMuted}
              loop
              playsInline
              autoPlay
              preload="metadata"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                background: '#040406',
              }}
            />

            {/* Video Overlay Vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.85) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* Top Live Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(7, 7, 10, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '0.35rem 0.85rem',
                borderRadius: '2px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                maxWidth: 'calc(100% - 2rem)',
              }}
            >
              <Radio size={13} style={{ color: isMuted ? 'var(--text-muted)' : '#22c55e', flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {isMuted ? 'Audio Muted' : 'Live Audio Active'}
              </span>
            </div>

            {/* Bottom Controls Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '1rem',
                zIndex: 4,
              }}
              className="live-video-controls-bar"
            >
              <div className="live-video-title-wrap">
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)',
                    color: '#ffffff',
                    fontWeight: '600',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                    lineHeight: 1.2,
                    marginBottom: '0.2rem',
                  }}
                >
                  Theatrical Pours &amp; Dynamic Flair
                </h4>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(230, 230, 245, 0.85)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                  }}
                  className="live-video-subtitle"
                >
                  Live event capture — Mixologist Barz signature
                </p>
              </div>

              {/* Play/Pause & Sound Controls */}
              <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }} className="live-video-buttons">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(14, 14, 20, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)')}
                >
                  {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0 1rem',
                    height: '44px',
                    borderRadius: '22px',
                    background: isMuted ? 'rgba(14, 14, 20, 0.9)' : 'linear-gradient(135deg, #d4af37, #aa8420)',
                    backdropFilter: 'blur(12px)',
                    border: isMuted ? '1px solid rgba(212, 175, 55, 0.4)' : '1px solid var(--gold-light)',
                    color: isMuted ? 'var(--gold-light)' : '#08080a',
                    fontWeight: '700',
                    fontSize: '0.74rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  <span>{isMuted ? 'UNMUTE' : 'AUDIO ON'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .video-player-container {
            height: 400px !important;
          }
        }
        @media (max-width: 540px) {
          .video-player-container {
            height: 320px !important;
          }
          .live-video-controls-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
            bottom: 1rem !important;
            left: 1rem !important;
            right: 1rem !important;
          }
          .live-video-subtitle {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
