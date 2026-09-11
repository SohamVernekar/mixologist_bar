import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Mixologist Barz, I would like to inquire about booking an event bar experience.");
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'calc(1.25rem + var(--safe-bottom, 0px))',
        right: 'max(1rem, var(--safe-right, 0px))',
        zIndex: 45,
      }}
    >
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat with Mixologist Barz on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: 'rgba(10, 14, 12, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(34, 197, 94, 0.45)',
          borderRadius: '30px',
          padding: '0.65rem 1.15rem',
          minHeight: '44px',
          color: '#ffffff',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(34, 197, 94, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          touchAction: 'manipulation',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#22c55e';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.7), 0 0 22px rgba(34, 197, 94, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.45)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(34, 197, 94, 0.2)';
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
            flexShrink: 0,
          }}
        >
          <MessageCircle size={14} strokeWidth={2.5} />
        </div>

        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            whiteSpace: 'nowrap',
          }}
        >
          CHAT WITH US
        </span>
      </button>
    </div>
  );
}

