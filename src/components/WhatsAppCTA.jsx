import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const handleWhatsAppClick = () => {
    // Elegant WhatsApp link handling
    const text = encodeURIComponent("Hello Mixologist Barz, I would like to inquire about booking an event bar experience.");
    // In production, when client phone is provided, replace with `https://wa.me/<number>?text=${text}`
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 40,
      }}
    >
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat with Mixologist Barz on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          backgroundColor: 'rgba(14, 18, 16, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(34, 197, 94, 0.4)',
          borderRadius: '30px',
          padding: '0.75rem 1.35rem',
          color: '#ffffff',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(34, 197, 94, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.borderColor = '#22c55e';
          e.currentTarget.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(34, 197, 94, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.4)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(34, 197, 94, 0.15)';
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#050505',
          }}
        >
          <MessageCircle size={15} />
        </div>

        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#ffffff',
          }}
        >
          CHAT WITH US
        </span>
      </button>
    </div>
  );
}
