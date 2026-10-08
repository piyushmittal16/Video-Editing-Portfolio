import React from 'react';
import { Volume2, Sparkles, Sliders, Type, FastForward, Film, Check, Zap } from 'lucide-react';

export default function SkillsToolkit() {
  const skills = [
    {
      title: "Short-Form Retention Editing",
      category: "CORE CRAFT",
      desc: "Optimized for Instagram Reels, YouTube Shorts, and TikTok. Cutting out dead air, micro-pauses, and keeping energy continuous.",
      icon: Film,
      metric: "90%+ Retention Focus"
    },
    {
      title: "Hook & Pacing Architecture",
      category: "PSYCHOLOGY",
      desc: "Structuring the first 1.5–3 seconds to stop the thumb swipe, then orchestrating rhythm swings to hold audience engagement.",
      icon: Zap,
      metric: "3-Second Stop Rate"
    },
    {
      title: "Sound Edits & SFX Syncing",
      category: "AUDIO MASTERY",
      desc: "Layered whooshes, risers, impact sub-drops, and beat synchronization that give every visual motion visceral weight.",
      icon: Volume2,
      metric: "Multi-Track SFX"
    },
    {
      title: "Dynamic Captions & Subtitles",
      category: "ENGAGEMENT",
      desc: "Karaoke-style word highlighting, custom color-accented text, emoji popups, and smooth text entrances.",
      icon: Type,
      metric: "Auto-Captions + Custom FX"
    },
    {
      title: "Beat Transitions & Speed Curves",
      category: "MOTION",
      desc: "Precision speed ramping synced with snare hits, optical flow smoothing, whip pans, and seamless match cuts.",
      icon: FastForward,
      metric: "Smooth Speed Curves"
    },
    {
      title: "Music Selection & Audio Levels",
      category: "CURATION",
      desc: "Curating viral and brand-appropriate audio tracks with mastered voice ducking for crystal-clear vocals.",
      icon: Sliders,
      metric: "Vocal Clarity"
    },
    {
      title: "Basic Color Correction",
      category: "COLOR",
      desc: "Contrast boosting, skin tone balance, saturation pop, and cinematic LUT application in CapCut.",
      icon: Sparkles,
      metric: "Crisp Social Grade"
    },
    {
      title: "Social-Media Optimized Exports",
      category: "DELIVERY",
      desc: "Crisp 1080x1920 60FPS vertical exports with optimal bitrate compression to eliminate social media compression blur.",
      icon: Check,
      metric: "1080p / 4K 60FPS"
    }
  ];

  return (
    <section 
      id="skills" 
      className="bg-dark-grid"
      style={{
        position: 'relative',
        padding: '5.5rem 1.5rem',
        borderTop: '2px solid #0c0d10'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <span className="badge-tag badge-red" style={{ marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
              [04] CORE CAPABILITIES
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: '#ffffff', lineHeight: 1.1, letterSpacing: '0.03em' }}>
              EDITING SKILLS.
            </h2>
          </div>

          <p style={{ maxWidth: '440px', color: '#b0b8c8', fontSize: '1rem', lineHeight: 1.65, letterSpacing: '0.01em' }}>
            A surgical toolkit developed through hands-on editing to ensure viewer retention and clean delivery.
          </p>
        </div>

        {/* 8 Skills Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                style={{
                  background: '#141720',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
                className="skill-card-hover"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{ 
                        width: '42px', 
                        height: '42px', 
                        borderRadius: '10px', 
                        background: 'rgba(255,42,75,0.12)', 
                        color: '#ff2a4b',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#ffdf00', letterSpacing: '0.05em' }}>
                      {skill.category}
                    </span>
                  </div>

                  <h4 className="font-display" style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.65rem', lineHeight: 1.3, letterSpacing: '0.02em' }}>
                    {skill.title}
                  </h4>

                  <p style={{ fontSize: '0.9rem', color: '#a0a6b5', lineHeight: 1.65, letterSpacing: '0.01em', marginBottom: '1.4rem' }}>
                    {skill.desc}
                  </p>
                </div>

                <div 
                  style={{ 
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
                    paddingTop: '0.85rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.03em',
                    color: '#38ef7d'
                  }}
                >
                  <span>{skill.metric}</span>
                  <span>✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .skill-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 42, 75, 0.45);
          box-shadow: 0 12px 28px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
