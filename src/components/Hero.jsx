import React from 'react';
import { Play, Volume2, ArrowDown, Film, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="bg-graph-paper paper-overlay"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '4.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Editorial Watermark & Vector Glyphs */}
      <div 
        style={{
          position: 'absolute',
          top: '12%',
          left: '5%',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.04em',
          color: 'rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem',
          pointerEvents: 'none'
        }}
      >
        <span>EDITS // SHORT_FORM_2026</span>
        <span>LOCATION // GWALIOR, INDIA</span>
      </div>

      <div 
        style={{
          position: 'absolute',
          top: '14%',
          right: '6%',
          fontSize: '1.4rem',
          letterSpacing: '0.6rem',
          color: '#0c0d10',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        ✦ ❖ ✤
      </div>

      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '1.5rem' }}>
          <div className="badge-tag badge-outline-black" style={{ padding: '0.45rem 0.85rem', letterSpacing: '0.04em' }}>
            <Film size={13} style={{ color: '#ff2a4b' }} />
            <span>SHORT-FORM VIDEO EDITOR</span>
          </div>
          <div className="badge-tag badge-red" style={{ padding: '0.45rem 0.85rem', letterSpacing: '0.04em' }}>
            <span className="pulse-dot"></span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Spacious Brutalist Headline */}
        <h1 
          className="font-display" 
          style={{ 
            fontSize: 'clamp(3rem, 9.5vw, 6.8rem)', 
            lineHeight: 1.05,
            letterSpacing: '0.03em',
            color: '#0c0d10',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 0px rgba(0,0,0,0.06)'
          }}
        >
          PIYUSH MITTAL
        </h1>

        {/* Transform Selection Bounding Box Container */}
        <div 
          className="transform-bounding-box"
          style={{
            display: 'inline-block',
            maxWidth: '820px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            padding: '1.75rem 2.25rem',
            borderRadius: '6px',
            marginBottom: '2.25rem',
            position: 'relative'
          }}
        >
          {/* 8 Bounding Box Handle Anchors */}
          <span className="handle-dot handle-tl"></span>
          <span className="handle-dot handle-tc"></span>
          <span className="handle-dot handle-tr"></span>
          <span className="handle-dot handle-ml"></span>
          <span className="handle-dot handle-mr"></span>
          <span className="handle-dot handle-bl"></span>
          <span className="handle-dot handle-bc"></span>
          <span className="handle-dot handle-br"></span>

          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)', 
              fontWeight: 500, 
              color: '#1a1c22',
              lineHeight: 1.65,
              letterSpacing: '0.01em',
              marginBottom: '1rem'
            }}
          >
            Crafting <strong style={{ color: '#ff2a4b', fontWeight: 800 }}>high-retention short-form reels</strong> with aggressive pacing, clean visual cuts, rhythmic transitions, and crisp <strong style={{ color: '#0c0d10', fontWeight: 800 }}>sound edits</strong>.
          </p>

          {/* Sound Edits Waveform Bar Visualizer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.03em', color: '#444' }}>
              <Volume2 size={15} style={{ color: '#ff2a4b' }} />
              <span>SOUND EDITS SYNC:</span>
            </div>
            <div className="waveform-bars">
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
              <span className="waveform-bar"></span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.03em', color: '#ff2a4b' }}>
              +6dB PEAK
            </span>
          </div>
        </div>

        {/* Public Action Buttons (Removed 'Upload Your Video' for public visitors) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
          <a href="#reels" className="btn-brutal btn-brutal-red" style={{ padding: '1rem 2.2rem', fontSize: '1rem', letterSpacing: '0.04em' }}>
            <Play size={18} fill="#ffffff" />
            <span>Watch Edits & Reels</span>
          </a>

          <a 
            href="#contact"
            className="btn-brutal" 
            style={{ padding: '1rem 2rem', fontSize: '1rem', background: '#ffffff', color: '#0c0d10', letterSpacing: '0.04em' }}
          >
            <MessageSquare size={18} style={{ color: '#ff2a4b' }} />
            <span>Let's Talk Projects</span>
          </a>
        </div>

        {/* Video Editor Timeline Scrubber Element */}
        <div 
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: '#0c0d10',
            border: '2px solid #0c0d10',
            borderRadius: '10px',
            padding: '1rem 1.4rem',
            boxShadow: 'var(--shadow-brutal)',
            color: '#fff',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.04em' }}>
              <span style={{ color: '#00f0ff' }}>TIMELINE</span>
              <span style={{ color: '#666' }}>|</span>
              <span style={{ color: '#ffdf00' }}>FPS: 60</span>
              <span style={{ color: '#666' }}>|</span>
              <span style={{ color: '#ff2a4b' }}>ASPECT: 9:16 VERTICAL</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#aaa', letterSpacing: '0.04em' }}>
              SHORT-FORM SEQUENCE
            </div>
          </div>

          {/* Timeline Tracks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {/* Video Track 1 */}
            <div style={{ height: '14px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '0', width: '28%', height: '100%', background: '#ff2a4b', borderRadius: '2px' }}></div>
              <div style={{ position: 'absolute', left: '30%', width: '35%', height: '100%', background: '#00f0ff', borderRadius: '2px' }}></div>
              <div style={{ position: 'absolute', left: '67%', width: '33%', height: '100%', background: '#ffdf00', borderRadius: '2px' }}></div>
            </div>
            {/* Audio Track (Sound Edits) */}
            <div style={{ height: '14px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '0', width: '100%', height: '100%', background: 'repeating-linear-gradient(90deg, #38ef7d 0px, #38ef7d 6px, transparent 6px, transparent 10px)' }}></div>
            </div>
          </div>
        </div>

        {/* Down Scroll Indicator */}
        <div style={{ marginTop: '2.75rem' }}>
          <a href="#about" style={{ color: '#0c0d10', textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} style={{ animation: 'bounce 1.5s infinite' }} />
          </a>
        </div>

      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
