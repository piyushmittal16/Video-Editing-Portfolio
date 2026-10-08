import React from 'react';
import { ShoppingBag, Sparkles, Mic, Zap, Layers } from 'lucide-react';

export default function WhatIEdit() {
  const categories = [
    {
      id: "promotional",
      name: "Promotional Reels",
      subtitle: "Conversion & Offer Driven",
      icon: ShoppingBag,
      color: "#ff2a4b",
      description: "Product launches, service offers, flash sales, and marketing ads designed with 0.5s attention hooks to drive direct customer action.",
      specs: ["Urgency Hooks", "Offer Badges", "Sound Edits / Risers", "CTA Sync"]
    },
    {
      id: "branding",
      name: "Branding Reels",
      subtitle: "Visual Identity & Aesthetic",
      icon: Sparkles,
      color: "#00f0ff",
      description: "Brand-focused visual stories maintaining strict color harmony, typography consistency, and sophisticated mood pacing.",
      specs: ["Brand Palette Sync", "Minimal Graphics", "Cinematic Motion", "Curated Music"]
    },
    {
      id: "podcast",
      name: "Podcast Reels",
      subtitle: "Viral Talk Clips & Subtitles",
      icon: Mic,
      color: "#ffdf00",
      description: "Extracting the highest-value conversational moments with punchy punch-zooms, word-by-word highlighted captions, and micro SFX.",
      specs: ["Hook Curation", "Dynamic Subtitles", "Multi-cam Pacing", "Voice Clarity Boost"]
    },
    {
      id: "event",
      name: "Event Glimpses",
      subtitle: "High-Octane Energy Cuts",
      icon: Zap,
      color: "#38ef7d",
      description: "Concerts, college fests, corporate summits, and nightlife recaps cut directly on the beat with strobe speed ramps.",
      specs: ["Beat Drop Sync", "Speed Curve Ramps", "Flash & Glow FX", "Crowd Hype Audio"]
    },
    {
      id: "showcase",
      name: "Showcase Reels",
      subtitle: "Portfolios & Feature Spotlights",
      icon: Layers,
      color: "#ff8400",
      description: "Client portfolios, creative work, fashion lookbooks, and tech demos presented with modern editorial framing.",
      specs: ["Split Screen Edits", "Macro Zooms", "Sound Edits / Swishes", "Smooth Transitions"]
    }
  ];

  return (
    <section 
      id="what-i-edit" 
      className="bg-dark-grid"
      style={{
        position: 'relative',
        padding: '5.5rem 1.5rem',
        borderTop: '2px solid #0c0d10',
        borderBottom: '2px solid #0c0d10'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <span className="badge-tag badge-red" style={{ marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
              [02] CONTENT SPECIALIZATIONS
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', color: '#ffffff', lineHeight: 1.1, letterSpacing: '0.03em' }}>
              WHAT I EDIT.
            </h2>
          </div>

          <p style={{ maxWidth: '460px', color: '#b0b8c8', fontSize: '1rem', lineHeight: 1.65, letterSpacing: '0.01em' }}>
            Each format requires a distinct psychological edit flow. Here are the 5 core content pillars I produce regularly:
          </p>
        </div>

        {/* 5 Content Pillars Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '1.75rem' 
          }}
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                style={{
                  background: '#151821',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '2.2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="what-i-edit-card"
              >
                {/* Accent top border strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: cat.color }}></div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.4rem' }}>
                    <div 
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '10px', 
                        background: 'rgba(255,255,255,0.06)', 
                        border: `1px solid ${cat.color}`,
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: cat.color
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    
                    <span className="font-mono" style={{ fontSize: '0.82rem', color: '#777', letterSpacing: '0.04em' }}>
                      0{index + 1} // 05
                    </span>
                  </div>

                  <h3 className="font-display" style={{ fontSize: '1.55rem', color: '#ffffff', marginBottom: '0.35rem', letterSpacing: '0.02em' }}>
                    {cat.name}
                  </h3>
                  
                  <div className="font-mono" style={{ fontSize: '0.82rem', color: cat.color, marginBottom: '1rem', letterSpacing: '0.03em' }}>
                    {cat.subtitle}
                  </div>

                  <p style={{ fontSize: '0.94rem', color: '#b0b5c0', lineHeight: 1.7, letterSpacing: '0.01em', marginBottom: '1.5rem' }}>
                    {cat.description}
                  </p>
                </div>

                <div>
                  {/* Feature Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cat.specs.map((spec, sIdx) => (
                      <span 
                        key={sIdx} 
                        style={{ 
                          fontSize: '0.74rem', 
                          fontFamily: 'var(--font-mono)', 
                          background: 'rgba(255, 255, 255, 0.05)', 
                          color: '#e2e8f0', 
                          padding: '0.3rem 0.65rem', 
                          borderRadius: '4px',
                          border: '1px solid rgba(255,255,255,0.08)',
                          letterSpacing: '0.03em'
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .what-i-edit-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 16px 32px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
