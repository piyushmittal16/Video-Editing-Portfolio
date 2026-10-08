import React from 'react';
import { Scissors, Briefcase, GraduationCap, Clock, CheckCircle2, Headphones } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-graph-paper paper-overlay"
      style={{
        position: 'relative',
        padding: '5.5rem 1.5rem',
        borderTop: '2px solid #0c0d10'
      }}
    >
      <div style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <span className="badge-tag badge-outline-black" style={{ marginBottom: '0.6rem', letterSpacing: '0.04em' }}>
              [01] THE EDITOR
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: '#0c0d10', lineHeight: 1.1, letterSpacing: '0.03em' }}>
              HELLO.
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span className="font-mono" style={{ fontSize: '0.88rem', color: '#555', letterSpacing: '0.04em' }}>
              GWALIOR, MP, INDIA ✦
            </span>
            <span className="badge-tag badge-red" style={{ letterSpacing: '0.04em' }}>
              OPEN FOR FREELANCE & PART-TIME
            </span>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Bio & Experience */}
          <div 
            style={{ 
              background: '#ffffff', 
              border: '2px solid #0c0d10', 
              padding: '2.5rem', 
              boxShadow: 'var(--shadow-brutal)',
              borderRadius: '6px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.4rem' }}>
              <span className="pulse-dot"></span>
              <span className="font-mono" style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ff2a4b' }}>
                CREATIVE PROFILE
              </span>
            </div>

            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0c0d10', marginBottom: '1.4rem', lineHeight: 1.6, letterSpacing: '0.01em' }}>
              Hi, I'm <span style={{ background: '#ff2a4b', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '2px' }}>Piyush Mittal</span>. 
              I am a short-form video & reel editor based in Gwalior.
            </p>

            <p style={{ fontSize: '1.02rem', color: '#333', lineHeight: 1.75, letterSpacing: '0.01em', marginBottom: '1.8rem' }}>
              In today's social landscape, viewers decide within <strong>1.5 seconds</strong> whether to swipe or stay. I specialize in turning raw footage into high-retention content through <strong>surgical cuts, relentless pacing, animated captions, smooth transitions, and crisp sound edits</strong> tailored for Instagram Reels, YouTube Shorts, and TikTok.
            </p>

            {/* Professional Experience Callout */}
            <div 
              style={{ 
                background: '#f4f6f2', 
                borderLeft: '4px solid #0c0d10', 
                padding: '1.5rem', 
                marginBottom: '1.8rem' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <Briefcase size={17} style={{ color: '#ff2a4b' }} />
                <span className="font-display" style={{ fontSize: '1.05rem', color: '#0c0d10', letterSpacing: '0.03em' }}>
                  PROFESSIONAL EXPERIENCE: REEL EDITOR
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#555', fontFamily: 'var(--font-mono)', marginBottom: '0.8rem', letterSpacing: '0.03em' }}>
                Production Studio, Gwalior
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <li style={{ fontSize: '0.92rem', color: '#222', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#ff2a4b', flexShrink: 0, marginTop: '4px' }} />
                  <span>Editing short-form Reels for social media and promotional content.</span>
                </li>
                <li style={{ fontSize: '0.92rem', color: '#222', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#ff2a4b', flexShrink: 0, marginTop: '4px' }} />
                  <span>Creating engaging cuts, dynamic captions, transitions, sound effects, and music sync.</span>
                </li>
                <li style={{ fontSize: '0.92rem', color: '#222', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#ff2a4b', flexShrink: 0, marginTop: '4px' }} />
                  <span>Adapting edits according to content style, brand voice, and intended audience.</span>
                </li>
              </ul>
            </div>

            {/* Education & Availability */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
              <div style={{ background: '#0c0d10', color: '#fff', padding: '1.2rem', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <GraduationCap size={16} style={{ color: '#00f0ff' }} />
                  <span className="font-mono" style={{ fontSize: '0.76rem', color: '#aaa', letterSpacing: '0.04em' }}>EDUCATION</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', lineHeight: 1.4, letterSpacing: '0.01em' }}>
                  IPS College of Tech & Management
                </div>
                <div style={{ fontSize: '0.8rem', color: '#ffdf00', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                  Gwalior — 4th Year
                </div>
              </div>

              <div style={{ background: '#0c0d10', color: '#fff', padding: '1.2rem', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Clock size={16} style={{ color: '#ff2a4b' }} />
                  <span className="font-mono" style={{ fontSize: '0.76rem', color: '#aaa', letterSpacing: '0.04em' }}>AVAILABILITY</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff', letterSpacing: '0.01em' }}>
                  Part Time / Remote
                </div>
                <div style={{ fontSize: '0.8rem', color: '#38ef7d', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                  ● Ready for projects
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean CapCut Overview & Sound Edits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            {/* The CapCut Overview Card (Stated cleanly in one place!) */}
            <div 
              style={{ 
                background: '#0c0d10', 
                color: '#ffffff', 
                border: '2px solid #0c0d10', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-brutal)',
                borderRadius: '6px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span className="badge-tag badge-red" style={{ letterSpacing: '0.04em' }}>
                  PRIMARY EDITING TOOL
                </span>
                <span className="font-mono" style={{ fontSize: '0.8rem', color: '#00f0ff', letterSpacing: '0.04em' }}>
                  DEDICATED WORKFLOW
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)',
                    flexShrink: 0,
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <img 
                    src="/capcut-logo.png" 
                    alt="CapCut Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.85rem', color: '#ffffff', lineHeight: 1.1, letterSpacing: '0.03em' }}>
                    CAPCUT
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: '#aaa', marginTop: '0.25rem', letterSpacing: '0.02em' }}>
                    Chosen for Maximum Short-Form Velocity
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.7, letterSpacing: '0.01em', marginBottom: '1.8rem' }}>
                I exclusively use <strong>CapCut</strong> for all my editing projects. It allows rapid turnaround times, flawless optical-flow speed curves, native keyframe tracking, animated text effects, and precise multi-track sound edits perfectly calibrated for social feeds.
              </p>

              {/* Feature Breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#00f0ff', letterSpacing: '0.02em' }}>Speed Curves</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>Optical flow smooth slow-mo</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#ff2a4b', letterSpacing: '0.02em' }}>Sound Edits</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>Layered whooshes & risers</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#ffdf00', letterSpacing: '0.02em' }}>Dynamic Captions</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>Pop-in words & glowing text</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#38ef7d', letterSpacing: '0.02em' }}>Keyframe Tracking</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>Smooth face & punch zooms</div>
                </div>
              </div>
            </div>

            {/* Sound Edits Feature Box */}
            <div 
              style={{ 
                background: '#ffffff', 
                border: '2px solid #0c0d10', 
                padding: '1.75rem', 
                boxShadow: 'var(--shadow-brutal)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.4rem'
              }}
            >
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#0c0d10', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Headphones size={24} color="#00f0ff" />
              </div>
              <div>
                <h4 className="font-display" style={{ fontSize: '1.15rem', color: '#0c0d10', marginBottom: '0.3rem', letterSpacing: '0.02em' }}>
                  PRECISION SOUND EDITS
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, letterSpacing: '0.01em' }}>
                  Audio rhythm drives short-form retention. Every cut is paired with precision whooshes, risers, sub-drops, and beat synchronization.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
