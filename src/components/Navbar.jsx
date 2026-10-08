import React, { useState, useEffect } from 'react';
import { Upload, MessageSquare, Play, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenUpload }) {
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [scrolled, setScrolled] = useState(false);

  // Live video editor timecode simulation (SMPTE style)
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame = (frame + 1) % 60;
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const f = String(frame).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 1000 / 30); // 30 fps
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(236, 239, 232, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '2px solid #0c0d10' : '1px solid transparent',
        padding: '0.9rem 1.5rem'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand & Live Indicator */}
        <a href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="pulse-dot"></span>
            <span className="font-display" style={{ fontSize: '1.3rem', letterSpacing: '0.03em', color: '#0c0d10' }}>
              PIYUSH MITTAL
            </span>
          </div>
        </a>

        {/* Live SMPTE Timecode Counter */}
        <div 
          className="font-mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: '#0c0d10',
            color: '#00f0ff',
            padding: '0.4rem 0.9rem',
            borderRadius: '4px',
            fontSize: '0.82rem',
            letterSpacing: '0.05em',
            border: '1px solid rgba(255, 42, 75, 0.4)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          <span style={{ color: '#ff2a4b', fontSize: '0.72rem', fontWeight: 700 }}>REC</span>
          <span>{timecode}</span>
        </div>

        {/* Nav Links & Contact CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <nav style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
            <a href="#about" style={{ textDecoration: 'none', color: '#0c0d10', fontWeight: 600, fontSize: '0.92rem', letterSpacing: '0.02em' }}>About</a>
            <a href="#what-i-edit" style={{ textDecoration: 'none', color: '#0c0d10', fontWeight: 600, fontSize: '0.92rem', letterSpacing: '0.02em' }}>What I Edit</a>
            <a href="#reels" style={{ textDecoration: 'none', color: '#0c0d10', fontWeight: 600, fontSize: '0.92rem', letterSpacing: '0.02em' }}>Showcase</a>
            <a href="#skills" style={{ textDecoration: 'none', color: '#0c0d10', fontWeight: 600, fontSize: '0.92rem', letterSpacing: '0.02em' }}>Skills</a>
          </nav>

          {/* Contact CTA */}
          <a 
            href="#contact" 
            className="btn-brutal btn-brutal-red"
            style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem', letterSpacing: '0.04em' }}
          >
            <MessageSquare size={15} />
            <span>Let's Talk</span>
          </a>
        </div>

      </div>

      <style>{`
        @media (min-width: 840px) {
          .desktop-nav { display: flex !important; }
        }
        @media (min-width: 600px) {
          .badge-capcut { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
