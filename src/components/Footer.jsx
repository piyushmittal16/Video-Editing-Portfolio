import React from 'react';
import { ArrowUp, Lock, Upload } from 'lucide-react';

export default function Footer({ onOpenUpload }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#0c0d10',
        color: '#ffffff',
        borderTop: '2px solid #0c0d10',
        padding: '4rem 1.5rem 2.5rem',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span className="pulse-dot"></span>
              <span className="font-display" style={{ fontSize: '1.7rem', color: '#ffffff', letterSpacing: '0.03em' }}>
                PIYUSH MITTAL
              </span>
            </div>

            <p style={{ color: '#94a3b8', maxWidth: '420px', fontSize: '0.94rem', lineHeight: 1.7, letterSpacing: '0.01em' }}>
              Short-form Reel Editor engineered for retention, aggressive pacing, dynamic captions, and precision sound edits.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <span className="badge-tag badge-red" style={{ letterSpacing: '0.04em' }}>GWALIOR, INDIA</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <div className="font-mono" style={{ fontSize: '0.8rem', color: '#777', marginBottom: '1rem', letterSpacing: '0.05em' }}>NAVIGATION</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
                <li><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>About</a></li>
                <li><a href="#what-i-edit" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>What I Edit</a></li>
                <li><a href="#reels" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>Reel Showcase</a></li>
                <li><a href="#skills" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>Skills & Toolkit</a></li>
                <li><a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono" style={{ fontSize: '0.8rem', color: '#777', marginBottom: '1rem', letterSpacing: '0.05em' }}>CONNECT</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
                <li><a href="tel:8120945337" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>+91 8120945337</a></li>
                <li><a href="https://wa.me/918120945337" target="_blank" rel="noreferrer" style={{ color: '#25D366', textDecoration: 'none', letterSpacing: '0.02em' }}>WhatsApp Direct</a></li>
                <li><a href="mailto:mittalp238@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none', letterSpacing: '0.02em' }}>mittalp238@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <button 
              onClick={scrollToTop}
              className="btn-brutal btn-brutal-red"
              style={{ padding: '0.85rem 1.4rem', fontSize: '0.88rem', letterSpacing: '0.04em' }}
            >
              <ArrowUp size={16} />
              <span>Back To Top</span>
            </button>

            {/* Subtle discreet Owner Uploader link for Piyush */}
            <button
              onClick={onOpenUpload}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '4px',
                color: '#888',
                padding: '0.45rem 0.8rem',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                letterSpacing: '0.03em',
                transition: 'all 0.2s ease'
              }}
              title="Admin: Upload videos to showcase"
            >
              <Lock size={12} style={{ color: '#ff2a4b' }} />
              <span>Owner: Upload Reel</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            paddingTop: '1.75rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: '#777',
            letterSpacing: '0.03em'
          }}
        >
          <div>
            © 2026 PIYUSH MITTAL ✦ ALL RIGHTS RESERVED
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span>BUILT FOR REEL CREATORS</span>
            <span>•</span>
            <span style={{ color: '#ff2a4b' }}>SOUND EDITS MASTERED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
