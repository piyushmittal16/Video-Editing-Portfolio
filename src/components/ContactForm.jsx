import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reelType: 'Promotional',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/mbgdgnbr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', reelType: 'Promotional', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message. Please try again or WhatsApp directly.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Error submitting message. Please call or WhatsApp directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-graph-paper paper-overlay"
      style={{
        position: 'relative',
        padding: '5.5rem 1.5rem',
        borderTop: '2px solid #0c0d10'
      }}
    >
      <div style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="badge-tag badge-outline-black" style={{ letterSpacing: '0.04em' }}>[05] CONNECT</span>
            <span className="badge-tag badge-red" style={{ letterSpacing: '0.04em' }}>FAST RESPONSE GUARANTEE</span>
          </div>

          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', color: '#0c0d10', lineHeight: 1.1, letterSpacing: '0.03em' }}>
            LET'S MAKE IT VIRAL.
          </h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: '#444', fontSize: '1.05rem', lineHeight: 1.7, letterSpacing: '0.01em' }}>
            Ready to upgrade your short-form retention? Drop a message through Formspree or reach out directly via call or WhatsApp.
          </p>
        </div>

        {/* 2-Column Brutalist Contact Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Contact Info & Speed Dial */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Phone & WhatsApp Card */}
            <div 
              style={{ 
                background: '#ffffff', 
                border: '2px solid #0c0d10', 
                borderRadius: '8px', 
                padding: '1.75rem', 
                boxShadow: 'var(--shadow-brutal)' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#666' }}>DIRECT CALL / WHATSAPP</span>
                    <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0c0d10' }}>+91 8120945337</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a 
                  href="tel:8120945337" 
                  className="btn-brutal"
                  style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.8rem', background: '#0c0d10', color: '#fff' }}
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/918120945337?text=Hi%20Piyush,%20I%20saw%20your%20Reel%20Editor%20portfolio%20and%20want%20to%20discuss%20a%20video%20project!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-brutal"
                  style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.8rem', background: '#25D366', color: '#fff', borderColor: '#25D366' }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div 
              style={{ 
                background: '#ffffff', 
                border: '2px solid #0c0d10', 
                borderRadius: '8px', 
                padding: '1.75rem', 
                boxShadow: 'var(--shadow-brutal)' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ff2a4b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: '#666' }}>OFFICIAL EMAIL</span>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0c0d10', wordBreak: 'break-all' }}>
                    mittalp238@gmail.com
                  </div>
                </div>
              </div>

              <a 
                href="mailto:mittalp238@gmail.com?subject=Video%20Editing%20Inquiry%20for%20Piyush%20Mittal" 
                className="btn-brutal btn-brutal-outline"
                style={{ width: '100%', padding: '0.6rem 0.8rem', fontSize: '0.8rem' }}
              >
                <Mail size={14} />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* Location & Studio Badge */}
            <div 
              style={{ 
                background: '#0c0d10', 
                color: '#ffffff', 
                border: '2px solid #0c0d10', 
                borderRadius: '8px', 
                padding: '1.5rem', 
                boxShadow: 'var(--shadow-brutal)' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <MapPin size={18} style={{ color: '#00f0ff' }} />
                <span className="font-display" style={{ fontSize: '1rem' }}>GWALIOR, MADHYA PRADESH</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#aaa', lineHeight: 1.45 }}>
                Operating remotely across India & worldwide. Fast turnaround via cloud file sharing.
              </p>
            </div>

          </div>

          {/* Right Column: Formspree Contact Form */}
          <div 
            style={{ 
              background: '#ffffff', 
              border: '2px solid #0c0d10', 
              borderRadius: '8px', 
              padding: '2.25rem', 
              boxShadow: 'var(--shadow-brutal-lg)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div className="font-display" style={{ fontSize: '1.35rem', color: '#0c0d10' }}>
                SEND PROJECT BRIEF
              </div>
              <span className="badge-tag badge-red" style={{ fontSize: '0.68rem' }}>
                FORMSPREE SECURED
              </span>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(56,239,125,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#38ef7d' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display" style={{ fontSize: '1.6rem', color: '#0c0d10', marginBottom: '0.5rem' }}>
                  MESSAGE RECEIVED!
                </h3>
                <p style={{ color: '#555', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Thank you! Your message was delivered directly to Piyush's inbox (<span style={{ fontWeight: 700 }}>mittalp238@gmail.com</span>). He will respond promptly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-brutal btn-brutal-red"
                  style={{ padding: '0.7rem 1.5rem', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0c0d10', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                    YOUR NAME / BRAND *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma / Apex Media"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: '#f8fafc',
                      border: '2px solid #0c0d10',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0c0d10', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: '#f8fafc',
                        border: '2px solid #0c0d10',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0c0d10', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                      PHONE / WHATSAPP
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: '#f8fafc',
                        border: '2px solid #0c0d10',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Reel Format Required */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0c0d10', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                    WHAT EDITS DO YOU NEED?
                  </label>
                  <select
                    name="reelType"
                    value={formData.reelType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: '#f8fafc',
                      border: '2px solid #0c0d10',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Promotional">Promotional Reels (Sales / Ad)</option>
                    <option value="Branding">Branding Reels (Aesthetic / Identity)</option>
                    <option value="Podcast">Podcast Reels (Hooks + Captions)</option>
                    <option value="Event">Event Glimpses (High Energy Sync)</option>
                    <option value="Showcase">Showcase Reels (Portfolio / Product)</option>
                    <option value="Multiple">Multiple Formats / Retainer</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0c0d10', marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                    PROJECT DETAILS & DEADLINE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your raw footage, timeline, and goals..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: '#f8fafc',
                      border: '2px solid #0c0d10',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Error Banner if any */}
                {errorMsg && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,42,75,0.1)', border: '1px solid #ff2a4b', color: '#ff2a4b', padding: '0.7rem', borderRadius: '4px', fontSize: '0.82rem' }}>
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-brutal btn-brutal-red"
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>{submitting ? 'Sending to Piyush...' : 'Send Message to Piyush'}</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
