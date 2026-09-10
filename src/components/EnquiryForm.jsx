import React, { useState } from 'react';
import { FORM_OPTIONS, SITE_INFO } from '../data/siteData';
import { Send, CheckCircle2, AlertCircle, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    date: '',
    city: '',
    guestCount: '',
    occasion: '',
    venue: '',
    countryCode: '+91',
    phone: '',
    name: '',
    remark: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [dispatchedData, setDispatchedData] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Please select your event date';
    }

    if (!formData.city) {
      newErrors.city = 'Please select or specify the event city';
    }

    if (!formData.guestCount) {
      newErrors.guestCount = 'Please select expected guest count';
    }

    if (!formData.occasion) {
      newErrors.occasion = 'Please select the occasion';
    }

    if (!formData.venue) {
      newErrors.venue = 'Please select the venue type';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact number';
    } else {
      // Validate Indian phone number (10 digits) if +91
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      if (formData.countryCode === '+91') {
        if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
          newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
        }
      } else if (cleanPhone.length < 7) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.remark.trim()) {
      newErrors.remark = 'Please provide a brief remark or note about your celebration';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const enquiryPayload = {
      name: formData.name,
      contactNumber: `${formData.countryCode} ${formData.phone}`,
      eventDate: formData.date,
      city: formData.city,
      guestCount: formData.guestCount,
      occasion: formData.occasion,
      venueType: formData.venue,
      remarks: formData.remark,
      recipient: SITE_INFO.contactEmail,
      timestamp: new Date().toISOString(),
    };

    try {
      // Check for production endpoint in env variables (e.g. Formspree, Web3Forms, or custom serverless API)
      const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(enquiryPayload),
        });
        if (!res.ok) throw new Error('Endpoint error');
      } else if (web3FormsKey) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Event Enquiry from ${formData.name} (${formData.occasion}) - Mixologist Barz`,
            from_name: 'Mixologist Barz Website',
            "Client Name": formData.name,
            "Contact Number": `${formData.countryCode} ${formData.phone}`,
            "Event Date": formData.date,
            "City / Destination": formData.city,
            "Guest Count": formData.guestCount,
            "Occasion": formData.occasion,
            "Venue Type": formData.venue,
            "Special Remarks": formData.remark,
          }),
        });
        const data = await res.json();
        if (!data.success) {
          console.warn('Web3Forms message:', data.message);
        }
      } else {
        console.log('NEW EVENT ENQUIRY RECEIVED (Ready for production dispatch):', enquiryPayload);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#fae29c', '#ffffff', '#e59844'],
        });
      } catch (err) {
        // ignore if not supported
      }

      setDispatchedData(enquiryPayload);
      setSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setSubmitError('Something went wrong submitting your enquiry. Please try again or reach out to Mixologistbarz@gmail.com directly.');
    }
  };

  const resetForm = () => {
    setFormData({
      date: '',
      city: '',
      guestCount: '',
      occasion: '',
      venue: '',
      countryCode: '+91',
      phone: '',
      name: '',
      remark: '',
    });
    setErrors({});
    setSubmitted(false);
    setDispatchedData(null);
  };

  // Pre-formatted mailto link for direct client email fallback
  const getMailtoHref = () => {
    if (!dispatchedData) return `mailto:${SITE_INFO.contactEmail}`;
    const subject = encodeURIComponent(`New Event Enquiry - ${dispatchedData.name}`);
    const body = encodeURIComponent(
      `NEW EVENT ENQUIRY FOR MIXOLOGIST BARZ\n\n` +
      `Name: ${dispatchedData.name}\n` +
      `Contact Number: ${dispatchedData.contactNumber}\n` +
      `Event Date: ${dispatchedData.eventDate}\n` +
      `City: ${dispatchedData.city}\n` +
      `Guest Count: ${dispatchedData.guestCount}\n` +
      `Occasion: ${dispatchedData.occasion}\n` +
      `Venue Type: ${dispatchedData.venueType}\n` +
      `Remarks: ${dispatchedData.remarks}\n\n` +
      `Submitted via Mixologist Barz Website`
    );
    return `mailto:${SITE_INFO.contactEmail}?subject=${subject}&body=${body}`;
  };

  // Pre-formatted WhatsApp link for direct instant message
  const getWhatsAppHref = () => {
    if (!dispatchedData) return 'https://wa.me/';
    const text = encodeURIComponent(
      `Hello Mixologist Barz, I have submitted an event enquiry:\n\n` +
      `*Name:* ${dispatchedData.name}\n` +
      `*Contact:* ${dispatchedData.contactNumber}\n` +
      `*Date:* ${dispatchedData.eventDate}\n` +
      `*City:* ${dispatchedData.city}\n` +
      `*Guests:* ${dispatchedData.guestCount}\n` +
      `*Occasion:* ${dispatchedData.occasion}\n` +
      `*Venue:* ${dispatchedData.venueType}\n` +
      `*Notes:* ${dispatchedData.remarks}`
    );
    return `https://wa.me/?text=${text}`;
  };

  return (
    <section
      id="enquiry"
      style={{
        backgroundColor: '#060609',
        padding: '8.5rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="section-container" style={{ padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="gold-accent-dot" />
            <span>RESERVATIONS &amp; CONSULTATION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              lineHeight: 1.08,
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.02em',
              marginBottom: '1rem',
            }}
          >
            LET'S PLAN{' '}
            <span className="text-gold-gradient">YOUR BAR.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            Tell us about your event and we'll get back to you with the next steps.
          </p>
        </div>

        {/* Form Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: '#0d0d14',
            borderRadius: '4px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.08)',
            padding: '3.5rem',
            position: 'relative',
          }}
          className="enquiry-card-wrapper"
        >
          {submitted ? (
            /* Success State */
            <div
              style={{
                textAlign: 'center',
                padding: '2.5rem 1rem',
                animation: 'fadeIn 0.5s ease-out',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  margin: '0 auto 1.8rem',
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                }}
              >
                Booking Request Received
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  color: '#ffffff',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  letterSpacing: '0.04em',
                }}
              >
                ENQUIRY RECEIVED
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  color: 'rgba(230, 230, 240, 0.85)',
                  maxWidth: '540px',
                  margin: '0 auto 2.5rem',
                  lineHeight: 1.6,
                }}
              >
                Thank you, <strong>{formData.name}</strong>. We've received your event details and our lead mixologist will get back to you shortly at <strong>{formData.countryCode} {formData.phone}</strong>.
              </p>

              {/* Direct Dispatch Options */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  justifyContent: 'center',
                  marginBottom: '2.5rem',
                }}
              >
                <a
                  href={getMailtoHref()}
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.6rem',
                    fontSize: '0.75rem',
                  }}
                >
                  <Mail size={15} style={{ color: 'var(--gold-primary)' }} />
                  <span>Open Email Summary</span>
                </a>

                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.6rem',
                    fontSize: '0.75rem',
                  }}
                >
                  <MessageSquare size={15} style={{ color: '#22c55e' }} />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              <button
                onClick={resetForm}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            /* Compulsory 8-Field Form */
            <form onSubmit={handleSubmit} noValidate>
              {submitError && (
                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid #ef4444',
                    color: '#fca5a5',
                    padding: '1rem',
                    borderRadius: '2px',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <AlertCircle size={18} />
                  <span>{submitError}</span>
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '2rem',
                  marginBottom: '2rem',
                }}
                className="form-grid"
              >
                {/* 1. Date of Event */}
                <div>
                  <label
                    htmlFor="field-date"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    1. What's the Date of event? <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <input
                    id="field-date"
                    type="date"
                    name="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    className="luxury-input"
                    aria-required="true"
                    aria-invalid={!!errors.date}
                  />
                  {errors.date && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.date}
                    </span>
                  )}
                </div>

                {/* 2. City */}
                <div>
                  <label
                    htmlFor="field-city"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    2. Where is the event? <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <select
                    id="field-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="luxury-input"
                    aria-required="true"
                    aria-invalid={!!errors.city}
                  >
                    <option value="">Select City / Destination</option>
                    {FORM_OPTIONS.cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.city}
                    </span>
                  )}
                </div>

                {/* 3. Guest Count */}
                <div>
                  <label
                    htmlFor="field-guests"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    3. How many people are there for the event? <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <select
                    id="field-guests"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="luxury-input"
                    aria-required="true"
                    aria-invalid={!!errors.guestCount}
                  >
                    <option value="">Select Guest Count</option>
                    {FORM_OPTIONS.guestCounts.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  {errors.guestCount && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.guestCount}
                    </span>
                  )}
                </div>

                {/* 4. Occasion */}
                <div>
                  <label
                    htmlFor="field-occasion"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    4. What's the Occasion? <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <select
                    id="field-occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="luxury-input"
                    aria-required="true"
                    aria-invalid={!!errors.occasion}
                  >
                    <option value="">Select Occasion</option>
                    {FORM_OPTIONS.occasions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.occasion && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.occasion}
                    </span>
                  )}
                </div>

                {/* 5. Venue Type */}
                <div>
                  <label
                    htmlFor="field-venue"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    5. Where are you planning? <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <select
                    id="field-venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="luxury-input"
                    aria-required="true"
                    aria-invalid={!!errors.venue}
                  >
                    <option value="">Select Venue Type</option>
                    {FORM_OPTIONS.venues.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  {errors.venue && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.venue}
                    </span>
                  )}
                </div>

                {/* 6. Contact Number */}
                <div>
                  <label
                    htmlFor="field-phone"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    6. Contact Number <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      style={{
                        width: '100px',
                        flexShrink: 0,
                      }}
                      className="luxury-input"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>
                    <input
                      id="field-phone"
                      type="tel"
                      name="phone"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="luxury-input"
                      style={{ flex: 1 }}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* 7. What's your name? */}
                <div style={{ gridColumn: 'span 2' }} className="full-col">
                  <label
                    htmlFor="field-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    7. What's your name? <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <input
                    id="field-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Sameer Kapoor"
                    value={formData.name}
                    onChange={handleChange}
                    className="luxury-input"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* 8. Remark */}
                <div style={{ gridColumn: 'span 2' }} className="full-col">
                  <label
                    htmlFor="field-remark"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f0f0f5',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    8. Remark <span style={{ color: 'var(--gold-primary)' }}>*</span>
                  </label>
                  <textarea
                    id="field-remark"
                    name="remark"
                    rows={4}
                    placeholder="Tell us anything you'd like us to know about your event (e.g. cocktail preferences, theme, special timings)..."
                    value={formData.remark}
                    onChange={handleChange}
                    className="luxury-input"
                    style={{ resize: 'vertical' }}
                    aria-required="true"
                    aria-invalid={!!errors.remark}
                  />
                  {errors.remark && (
                    <span style={{ color: '#f87171', fontSize: '0.78rem', marginTop: '0.35rem', display: 'block' }}>
                      {errors.remark}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    minWidth: '240px',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING ENQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                    marginTop: '1rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  Submissions are securely routed to our event planning desk ({SITE_INFO.contactEmail}).
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .enquiry-card-wrapper {
            padding: 2rem 1.5rem !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .full-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
